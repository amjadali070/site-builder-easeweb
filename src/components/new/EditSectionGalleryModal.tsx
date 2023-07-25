import clsx from 'clsx'
import { useContext, useEffect, useState } from 'react'
import { ReactComponent as ImageIcon } from 'src/assets/icons/new/image.svg'
import { GallerySection, GallerySectionVariables, SectionVariable } from 'src/_polly/components/src/sections'
import { v4 as uuid } from 'uuid'
// import { ReactComponent as DeleteIcon } from '../../assets/icons/menuBar/delete.svg'
// import { ReactComponent as EditIcon } from '../../assets/icons/menuBar/edit.svg'
import { upsertBlockByPageID } from '../../services/website.service'
import BottomFloatingButton from '../BottomFloatingButton'
import { WebsiteContext } from '../context/WebsiteContext'
import { EditSection } from './EditSectionModal'
import ImageUploader from './ImageUploader'
import ModalDialogV2 from './ModalDialogV2'

interface EditSectionGalleryModalProps extends EditSection {
  section: GallerySection
}

interface EditImageProps {
  variable?: SectionVariable<GallerySectionVariables>
  onSave: (variable: Partial<SectionVariable<GallerySectionVariables>>) => void
}

function Item({
  variable: {
    data: { url, alt, name },
  },
  onDeleteClick,
  onEditClick,
}: {
  variable: SectionVariable<GallerySectionVariables>
  onEditClick: () => void
  onDeleteClick: () => void
}) {
  return (
    <div className="border  h-[65px] flex justify-between bg-zinc-800 rounded-md text-white hover:bg-zinc-600">
      <div className="flex items-center">
        <div className="grid grid-cols-2 gap-1 ml-2 mr-4">
          <div className="w-2 h-2 bg-gray-300 rounded-full" />
          <div className="w-2 h-2 bg-gray-300 rounded-full" />
          <div className="w-2 h-2 bg-gray-300 rounded-full" />
          <div className="w-2 h-2 bg-gray-300 rounded-full" />
        </div>
        <div className="flex items-center gap-4">
          <div className="aspect-1 h-10">
            <img className="object-cover object-center bg-black w-full h-full" src={url} alt={alt} />
          </div>
          <p>{name}</p>
        </div>
      </div>

      <div className="flex">
        <button
          type="button"
          className="flex justify-center items-center w-16 border-l border-gray-300 "
          onClick={onEditClick}
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-105 duration-300">
            <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
          </svg>
        </button>
        <button
          type="button"
          className=" flex justify-center items-center w-16 border-l border-gray-300 "
          onClick={onDeleteClick}
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-105 duration-300">
            <path strokeLinecap="round" strokeLinejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
          </svg>
        </button>
      </div>
    </div>
  )
}

function EditImage({ variable, onSave }: EditImageProps) {
  const [url, setUrl] = useState(variable?.data?.url || '')
  const [name, setName] = useState(variable?.data?.name || '')
  const [alt, setAlt] = useState(variable?.data?.alt || '')
  const [title, setTitle] = useState(variable?.data?.title || '')
  const [description, setDescription] = useState(variable?.data?.description || '')
  const [showImageModal, setShowImageModal] = useState(false)

  const handleSave = () => {
    setShowImageModal(false)
    onSave({
      ...variable,
      data: {
        url,
        alt,
        name,
        title,
        description,
      },
    })
  }

  return (
    <>
      <div className="px-4 space-y-6 pb-20">
        <div>
          <button type="button" className="w-full" onClick={() => setShowImageModal(true)}>
            <div
              className={clsx(
                'w-full bg-white',
                !url && 'aspect-1 flex justify-center items-center border border-black',
                url && 'aspect-1',
              )}
            >
              {url && <img src={url} className="object-cover object-center bg-black w-full h-full" alt={alt} />}
              {!url && <ImageIcon />}
            </div>
          </button>
        </div>
        <div>
          <h2 className="uppercase font-medium text-sm">Name</h2>
          <input
            className="border-b border-black w-full py-2 outline-none mt-1"
            type="text"
            value={name}
            onChange={e => setName(e.target.value)}
          />
        </div>
        <div>
          <h2 className="uppercase font-medium text-sm">Title</h2>
          <input
            className="border-b border-black w-full py-2 outline-none mt-1"
            type="text"
            value={title}
            onChange={e => setTitle(e.target.value)}
          />
        </div>
        <div>
          <h2 className="uppercase font-medium text-sm">Sub title</h2>
          <input
            className="border-b border-black w-full py-2 outline-none mt-1"
            type="text"
            value={alt}
            onChange={e => setAlt(e.target.value)}
          />
        </div>
        <div>
          <h2 className="uppercase font-medium text-sm">Description</h2>
          <textarea
            className="border-b border-black w-full py-2 outline-none mt-1"
            rows={4}
            value={description}
            onChange={e => setDescription(e.target.value)}
          />
        </div>
        <BottomFloatingButton
          label={variable?.id ? 'Update' : 'Add'}
          onClick={handleSave}
          disabled={!url || !name || !alt}
        />
      </div>

      <ModalDialogV2 open={showImageModal} onBack={() => setShowImageModal(false)}>
        <ImageUploader
          onSubmit={_url => {
            setUrl(_url)
            setShowImageModal(false)
          }}
          buttonLabel="Select Image"
          onClose={() => setShowImageModal(false)}
        />
      </ModalDialogV2>
    </>
  )
}

export default function EditSectionGalleryModal({
  open,
  section: defaultValue,
  onClose: onBack,
  onUpdate,
}: EditSectionGalleryModalProps) {
  const websiteContext = useContext(WebsiteContext)

  const [section, setSection] = useState(defaultValue)
  const [editImage, setEditImage] = useState<SectionVariable<GallerySectionVariables> | undefined>(undefined)
  const [showAddImageModal, setShowAddImageModal] = useState(false)
  const [updating, setUpdating] = useState(false)

  const handleImageOperation = (variable: Partial<SectionVariable<GallerySectionVariables>>) => {
    if (variable.id) {
      setSection({
        ...section,
        variables: section.variables.map(v =>
          v.id === variable.id ? (variable as SectionVariable<GallerySectionVariables>) : v,
        ),
      })
    } else {
      const data: SectionVariable<GallerySectionVariables> = {
        id: uuid(),
        category: 'IMAGE',
        name: 'MEDIA',
        data: variable.data,
      }
      setSection({
        ...section,
        variables: [...section.variables, data],
      })
    }
    setEditImage(undefined)
    setShowAddImageModal(false)
  }

  const handleDelete = (id: string) => {
    setSection({
      ...section,
      variables: section.variables.filter(v => v.id !== id),
    })
  }

  const handleSave = async () => {
    setUpdating(true)
    await upsertBlockByPageID(websiteContext.pageID, section as any)
    onBack()
  }

  useEffect(() => {
    onUpdate?.(section)
  }, [section])

  return (
    <>
      <ModalDialogV2 {...{ open, onBack }}>
        <div className="px-4">
          <h1 className="text-2xl mb-4">Gallery</h1>
          <div className="space-y-5">
            {section?.variables.map((variable, idx) => (
              <Item
                key={idx}
                variable={variable}
                onDeleteClick={() => handleDelete(variable.id)}
                onEditClick={() => setEditImage(variable)}
              />
            ))}
            <button
              className="border shadow-md bg-green-500 hover:bg-green-600 rounded-lg h-[65px] flex justify-center items-center text-lg px-6 w-full text-white"
              type="button"
              onClick={() => setShowAddImageModal(true)}
            >
              Add Image
            </button>
          </div>

          <BottomFloatingButton label={updating ? 'Updating...' : 'Update'} onClick={handleSave} disabled={updating} />
        </div>
      </ModalDialogV2>

      <ModalDialogV2
        open={editImage !== undefined || showAddImageModal}
        onBack={() => (editImage ? setEditImage(undefined) : setShowAddImageModal(false))}
      >
        <EditImage variable={editImage} onSave={handleImageOperation} />
      </ModalDialogV2>
    </>
  )
}
