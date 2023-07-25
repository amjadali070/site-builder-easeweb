import { useCallback, useContext, useEffect, useRef, useState } from 'react'
import { ReactComponent as ImageIcon } from 'src/assets/icons/new/image.svg'
import { uploadAsset } from 'src/lib/services/storage.service'
import { upsertBlockByPageID } from 'src/services/website.service'
import Compressor from 'compressorjs'
import axios from 'axios'
import ModalDialog from './ModalDialog'
import CropImage from './CropImage'
import { WebsiteContext } from '../context/WebsiteContext'
import BottomFloatingButton from '../BottomFloatingButton'
import { Loader } from '../loader'

const UNSPLASH_ACCESS_KEY = 'yOmP53GQ-rTsnnfw2KMcs-v0qxQ7vQ9VdCeSxTzwllc'

function previewFile(file: File): Promise<string> {
  const reader = new FileReader()

  return new Promise<string>(resolve => {
    reader.addEventListener(
      'load',
      () => {
        // convert image file to base64 string
        resolve(reader.result as string)
      },
      false,
    )

    if (file) {
      reader.readAsDataURL(file)
    }
  })
}

const dataURLtoFile = (dataurl: string, filename: string) => {
  const arr = dataurl.split(',')
  const mime = arr[0]?.match(/:(.*?);/)?.[1]
  const bstr = atob(arr[1])
  let n = bstr.length
  const u8arr = new Uint8Array(n)

  while (n) {
    n -= 1
    u8arr[n] = bstr.charCodeAt(n)
  }

  return new File([u8arr], filename, { type: mime })
}

async function getDefaultPhotos() {
  const res = await axios.get(`https://api.unsplash.com/photos/random?client_id=${UNSPLASH_ACCESS_KEY}&count=10`)
  return res.data ?? []
}

async function getImages(query: string) {
  const res = await axios.get(
    `https://api.unsplash.com/search/photos?client_id=${UNSPLASH_ACCESS_KEY}&query=${query}&per_page=10`,
  )
  return res.data?.results ?? []
}

interface ImageUploaderProps {
  onSubmit?: (imageURL: string) => void
  onClose?: () => void
  buttonLabel?: string
}

export default function ImageUploader(props: ImageUploaderProps) {
  const { onSubmit, onClose, buttonLabel } = props
  const { pageID } = useContext(WebsiteContext)

  const [saving, setSaving] = useState(false)
  const [file, setFile] = useState<File>()
  const [image, setImage] = useState<string>()
  const [croppedImage, setCroppedImage] = useState<string>()
  const [method, setMethod] = useState<undefined | 'upload' | 'unsplash'>(undefined)
  const inputRef = useRef<HTMLInputElement>(null)
  const queryRef = useRef<HTMLInputElement>(null)
  const [unsplashPhotos, setUnsplashPhotos] = useState<any[]>([])

  const saveImage = async () => {
    if (!croppedImage) return
    setSaving(true)

    const imageFileName = file?.name || `image-${Date.now()}`
    const imageFile = dataURLtoFile(croppedImage, imageFileName)

    const compressAndUpload = () =>
      new Compressor(imageFile, {
        quality: 0.6,
        success: async (compressedFile: File) => {
          // compressedResult has the compressed file.
          // Use the compressed file to upload the images to your server.
          const url = await uploadAsset(imageFileName, compressedFile)
          if (onSubmit) {
            onSubmit(url)
            setSaving(false)
            onClose?.()
            return
          }
          await upsertBlockByPageID(pageID, {
            type: 'IMAGE',
            props: { src: url },
            updatedAt: new Date().toISOString(),
          })
          setImage(undefined)
          setSaving(false)
          onClose?.()
        },
      })

    compressAndUpload()
  }

  const clear = useCallback(() => {
    setImage(undefined)
    setCroppedImage(undefined)
  }, [])

  const next = useCallback((img: any) => setCroppedImage(img), [])

  useEffect(() => {
    if (method === 'unsplash') {
      getDefaultPhotos().then(setUnsplashPhotos)
    }
  }, [method])

  return (
    <div className="p-6 font-thin">
      {method === 'upload' && (
        <>
          <button
            type="button"
            className="w-full mb-6 px-2 py-3 text-xl border bg-green-500 text-center hover:bg-green-600 text-white"
            onClick={() => inputRef?.current?.click()}
          >
            {buttonLabel || 'Select Photo'}
          </button>
          <div className="aspect-h-1 aspect-w-1">
            <label className="cursor-pointer bg-black text-white flex flex-col justify-center items-center">
              <div className="mb-4">
                <ImageIcon stroke="white" />
              </div>
              <div className="">Select to Upload Photo</div>
              <input
                type="file"
                className="hidden"
                accept="image/jpeg, image/png"
                ref={inputRef}
                onChange={e => {
                  if (e.target.files?.length) {
                    setFile(e.target.files[0])
                    previewFile(e.target.files[0]).then(setImage)
                  }
                }}
              />
            </label>
          </div>
        </>
      )}

      {method === 'unsplash' && (
        <>
          <div>
            <input
              className="border-b border-black w-full py-2 outline-none mt-1"
              type="text"
              placeholder="Search..."
              ref={queryRef}
            />
            <button
              type="button"
              className="w-full mb-6 px-2 py-2 text-xl border mt-2 border-black text-center bg-black text-white"
              onClick={() => {
                const query = queryRef.current?.value
                if (query) {
                  getImages(query).then(res => setUnsplashPhotos(res))
                }
              }}
            >
              Search
            </button>
          </div>
          <div className="space-y-4">
            {unsplashPhotos.map(photo => (
              <div
                key={photo.id}
                className="aspect-h-1 aspect-w-1"
                role="button"
                onClick={() => {
                  onSubmit?.(photo.urls.regular)
                }}
              >
                <img src={photo.urls.regular} alt={photo.alt_description} className="object-cover" />
              </div>
            ))}
          </div>
        </>
      )}

      {!!image && <CropImage open onClose={clear} onBack={clear} onSubmit={next} image={image} />}

      {method === undefined && (
        <div>
          <button
            type="button"
            className="w-full mb-6 px-2 py-3 text-xl border-2 border-green-500 text-center text-green-500 rounded-lg shadow-md hover:bg-green-500 hover:text-white font-bold"
            onClick={() => setMethod('upload')}
          >
            Upload Photo
          </button>
          <button
            type="button"
            className="w-full mb-6 px-2 py-3 text-xl border-2 border-green-500 text-center text-green-500 rounded-lg shadow-md hover:bg-green-500 hover:text-white font-bold"
            onClick={() => setMethod('unsplash')}
          >
            Unsplash
          </button>
        </div>
      )}

      <ModalDialog title="Preview" open={!!croppedImage} onClose={clear} onBack={() => setCroppedImage(undefined)}>
        <div className="p-6">
          <Loader show={saving} />
          <div>
            <img src={croppedImage} className="object-cover border border-black w-full" alt="" />
          </div>
          <BottomFloatingButton label={`Sav${saving ? 'ing' : 'e'}`} onClick={saveImage} disabled={saving} />
        </div>
      </ModalDialog>
    </div>
  )
}
