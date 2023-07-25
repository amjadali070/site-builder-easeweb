import React, { useState } from 'react'
import ColorPalette from '../ColorPalette'
import ImageUploader from '../ImageUploader'
import ModalDialog from '../ModalDialog'

interface IProps {
  settings: any
  onChange: (updates: any) => void
}

export default function BackgroundToolbar(props: IProps) {
  const { settings, onChange } = props
  const [showBackgroundColorModal, setShowBackgroundColorModal] = useState(false)
  const [showImageUploader, setShowImageUploader] = useState(false)

  const changeColor = (value: any) => {
    onChange({ backgroundColor: value })
    setShowBackgroundColorModal(false)
  }

  const uploadImage = (image: any) => {
    onChange({ backgroundImage: image })
    setShowImageUploader(false)
  }

  return (
    <>
      <ModalDialog title="Upload image" open={showImageUploader} onClose={() => setShowImageUploader(false)}>
        <ImageUploader onSubmit={uploadImage} />
      </ModalDialog>
      <ModalDialog
        title="Color Palette"
        open={showBackgroundColorModal}
        onClose={() => setShowBackgroundColorModal(false)}
      >
        <ColorPalette onChange={(color: string) => changeColor(color)} />
      </ModalDialog>
      <div className="mb-6 px-2 py-3 flex border border-black font-thin items-center">
        <span>Background |</span>
        <div className="flex-grow flex justify-around">
          <div className="flex items-center">
            <span className="mr-2">Color</span>
            <button type="button" onClick={() => setShowBackgroundColorModal(true)}>
              <div
                className="w-8 h-8 border border-black"
                style={{ backgroundColor: settings.backgroundColor || 'black' }}
              />
            </button>
          </div>
          <div className="flex items-center">
            <span className="mr-2">Image</span>
            <button type="button" onClick={() => setShowImageUploader(true)}>
              <div className="w-8 h-8 border border-black bg-white" />
            </button>
          </div>
        </div>
      </div>
    </>
  )
}
