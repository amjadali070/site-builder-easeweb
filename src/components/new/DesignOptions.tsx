import React, { useState } from 'react'
import { HexColorPicker } from 'react-colorful'
import { TextProps } from '../modal/section/SectionTitle'
import { Button } from './ButtonEditor'
import ImageUploader from './ImageUploader'
import ModalDialogV2 from './ModalDialogV2'

export const enum DesignOptionTypes {
  'SUB_HEADING' = 'SUB_HEADING',
  'BG_COLOR' = 'BG_COLOR',
  'IMAGE' = 'IMAGE',
  'PADDING' = 'PADDING',
  'ANIMATION' = 'ANIMATION',
  'BUTTON' = 'BUTTON',
}

interface DesignOptionsProps {
  title?: string
  options: DesignOptionTypes[]
  textSettings?: TextProps['settings']
  imageButtonLabel?: string
  isButtonEnabled?: boolean
  isSubHeadingEnabled?: boolean
  onClick?: (option: DesignOptionTypes) => void
  onChange?: (updates: any) => void
  onButtonChange?: (styles: Record<string, string>) => void
  onButtonHide?: () => void
}

const Item = ({ onClick, label, backgroundColor }: { onClick: () => void; label: string; backgroundColor: string }) => (
  <button
    type="button"
    onClick={onClick}
    className="w-full p-3 border shadow-md flex justify-between items-center flex-grow bg-gray-200"
  >
    <span>{label}</span>
    <div className="h-8 w-8 border ml-2" style={{ backgroundColor }} />
  </button>
)

export default function DesignOptions({
  options,
  textSettings,
  onChange,
  onClick,
  onButtonChange,
  title,
  imageButtonLabel = 'Background Image',
  isButtonEnabled,
  isSubHeadingEnabled,
  onButtonHide,
}: DesignOptionsProps) {
  const [showBackgroundColorModal, setShowBackgroundColorModal] = useState(false)
  const [showImageUploader, setShowImageUploader] = useState(false)
  const [showButtonModal, setShowButtonModal] = useState(false)
  const [showModal, setShowModal] = useState(false)

  const handleColorChange = (color: string) => {
    if (onChange) onChange({ backgroundColor: color })
  }

  const handleImageChange = (image: any) => {
    if (onChange) onChange({ backgroundImage: image })
    setShowImageUploader(false)
    setShowModal(false)
  }

  const handleButtonSelect = (styles: Record<string, string>) => {
    if (onButtonChange) onButtonChange(styles)
    setShowButtonModal(false)
    setShowModal(false)
  }

  return (
    <div className="mb-6">
      <div className="flex justify-between items-center my-3">
        {title && <div className="text-3xl font-light">{title}</div>}
        <button type="button" onClick={() => setShowModal(true)} className="px-4 py-3 border bg-green-500 text-white shadow-md hover:bg-green-600 rounded-md">
          <span>Design Options</span>
        </button>
      </div>
      <ModalDialogV2 title="Upload image" open={showImageUploader} onBack={() => setShowImageUploader(false)}>
        <ImageUploader onSubmit={handleImageChange} buttonLabel="Select Image" />
      </ModalDialogV2>

      <ModalDialogV2 title="Button" open={showButtonModal} onBack={() => setShowButtonModal(false)}>
        <Button onSelect={handleButtonSelect} />
      </ModalDialogV2>

      <ModalDialogV2 title="Design Options" open={showModal} onBack={() => setShowModal(false)}>
        <div className="mt-3 space-y-6 px-5">
          {options.includes(DesignOptionTypes.SUB_HEADING) && (
            <Item
              label="Sub-Headline"
              backgroundColor={isSubHeadingEnabled ? '#000' : '#fff'}
              onClick={() => {
                if (onClick) onClick(DesignOptionTypes.SUB_HEADING)
                setShowModal(false)
              }}
            />
          )}
          {options.includes(DesignOptionTypes.IMAGE) && (
            <Item label={imageButtonLabel} backgroundColor="white" onClick={() => setShowImageUploader(true)} />
          )}
          {options.includes(DesignOptionTypes.BG_COLOR) && (
            <>
              <Item
                label="Background Color"
                backgroundColor={textSettings?.backgroundColor || 'black'}
                onClick={() => setShowBackgroundColorModal(!showBackgroundColorModal)}
              />
              {showBackgroundColorModal && (
                <div className="mb-6 mt-3">
                  <HexColorPicker
                    color={textSettings?.backgroundColor ?? '#000'}
                    onChange={handleColorChange}
                    style={{
                      width: '100%',
                    }}
                  />
                </div>
              )}
            </>
          )}
          {options.includes(DesignOptionTypes.BUTTON) && (
            <Item
              label="Button"
              backgroundColor={isButtonEnabled ? 'black' : 'white'}
              onClick={() => {
                if (isButtonEnabled) {
                  onButtonHide?.()
                  setShowModal(false)
                } else {
                  setShowButtonModal(true)
                }
              }}
            />
          )}
          {options.includes(DesignOptionTypes.ANIMATION) && (
            <Item label="Animation" backgroundColor="white" onClick={() => null} />
          )}
          {options.includes(DesignOptionTypes.PADDING) && (
            <Item label="Padding" backgroundColor="white" onClick={() => null} />
          )}
        </div>
      </ModalDialogV2>
    </div>
  )
}
