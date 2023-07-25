import React, { useCallback, useState, ChangeEvent, useRef } from 'react'
import clsx from 'clsx'
import Cropper from 'react-easy-crop'
import { getCroppedImg } from 'src/util'
import { ReactComponent as CropSelect } from '../../assets/icons/editor/crop-select.svg'
import { ReactComponent as CropOriginal } from '../../assets/icons/editor/crop-original.svg'
import { ReactComponent as ZoomIn } from '../../assets/icons/editor/zoom-in.svg'
import { ReactComponent as CropAdd } from '../../assets/icons/editor/crop-add.svg'
import ModalDialog, { ModalProps } from './ModalDialog'

interface IProps extends ModalProps {
  image: any
  onSubmit?: (image: any) => void
}

const CropImage: React.FC<IProps> = ({ image, onSubmit, ...rest }) => {
  const [showOptionAspect, setShowOptionAspect] = useState(false)
  const [showZoom, setShowZoom] = useState(false)
  const [zoom, setZoom] = useState(1)
  const [crop, setCrop] = useState({ x: 0, y: 0 })
  const [aspect, setAspect] = useState({ h: 1, w: 1 })
  const area = useRef({})

  const onCropComplete = useCallback((_: any, croppedAreaPixels: any) => {
    area.current = croppedAreaPixels
  }, [])

  const handleSubmit = useCallback(async () => {
    const url = await getCroppedImg(image, area.current)
    onSubmit?.(url)
  }, [])

  const openOptionAspect = () => {
    setShowOptionAspect(preState => !preState)
    setShowZoom(false)
  }

  const openZoom = () => {
    setShowZoom(preState => !preState)
    setShowOptionAspect(false)
  }

  const onChangeZoom = (e: ChangeEvent<HTMLInputElement>) => {
    setZoom(+e.target.value)
  }

  return (
    <ModalDialog title="Crop" {...rest} onNext={handleSubmit}>
      <div className="p-6">
        <div className="relative aspect-w-1 aspect-h-1">
          <Cropper
            image={image}
            crop={crop}
            zoom={zoom}
            aspect={aspect.w / aspect.h}
            onCropChange={setCrop}
            onCropComplete={onCropComplete}
            onZoomChange={setZoom}
            classes={{ containerClassName: 'z-50' }}
          />
          {showOptionAspect && (
            <div
              className="absolute bottom-[60px] top-auto w-auto h-auto left-[10px] z-50 border-[1px] border-white bg-black rounded-md"
              style={{ width: 140 }}
              onBlur={() => setShowOptionAspect(false)}
            >
              <div className="flex gap-8 items-center justify-between p-[8px] pl-[20px] pr-[20px] text-sm">
                <span className="peer-checked:p-2 text-white font-medium peer-checked:bg-white">Original</span>
                <CropOriginal />
              </div>
              <div className="bg-white h-[1px]" />
              <button
                type="button"
                className="cursor-pointer w-full border-white text-sm"
                onClick={() => setAspect({ w: 1, h: 1 })}
              >
                <input type="radio" className="hidden peer" />
                <div
                  className={clsx(
                    aspect.w === 1 && 'bg-[#D0867E]',
                    'flex gap-8 items-center justify-between p-[8px] pl-[20px] pr-[20px]',
                  )}
                >
                  <span className="peer-checked:p-2 text-white font-medium peer-checked:bg-white">1:1</span>
                  <span className="border-[1px] border-white w-4 h-4 rounded-sm" />
                </div>
              </button>
              <div className="bg-white h-[1px]" />
              <button
                type="button"
                className="cursor-pointer w-full border-white text-sm"
                onClick={() => setAspect({ w: 4, h: 5 })}
              >
                <input type="radio" className="hidden peer" />
                <div
                  className={clsx(
                    aspect.w === 4 && 'bg-[#D0867E]',
                    'flex gap-8 items-center justify-between p-[8px] pl-[20px] pr-[23px]',
                  )}
                >
                  <span className="peer-checked:p-2 text-white font-medium peer-checked:bg-white">4:5</span>
                  <span className="border-[1px] border-white w-3 h-4 rounded-sm" />
                </div>
              </button>
              <div className="bg-white h-[1px]" />
              <button
                type="button"
                className="cursor-pointer w-full border-white text-sm"
                onClick={() => setAspect({ w: 16, h: 9 })}
              >
                <input type="radio" className="hidden peer" />
                <div
                  className={clsx(
                    aspect.w === 16 && 'bg-[#D0867E]',
                    'flex gap-8 items-center justify-between p-[8px] pl-[20px] pr-[18px]',
                  )}
                >
                  <span className="peer-checked:p-2 text-white font-medium peer-checked:bg-white">16:9</span>
                  <span className="border-[1px] border-white w-5 h-3 rounded-sm" />
                </div>
              </button>
            </div>
          )}
          {showZoom && (
            <div className="mx-3.5 z-50 bottom-[60px] top-auto w-auto h-auto" style={{ width: 130 }}>
              <label className="range-input bg-white">
                <input type="range" max="3" min="1" step="0.1" value={zoom} onChange={onChangeZoom} />
              </label>
            </div>
          )}
          <div className="absolute p-[10px] flex items-end justify-between">
            <div className="flex z-50">
              <CropSelect className="cursor-pointer mr-2" onClick={openOptionAspect} />
              <ZoomIn className="cursor-pointer" onClick={openZoom} />
            </div>
            <CropAdd className="cursor-pointer z-50" />
          </div>
        </div>
      </div>
    </ModalDialog>
  )
}

export default CropImage
