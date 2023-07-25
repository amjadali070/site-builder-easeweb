import React, { useState } from 'react'
import ImageUploader from '../ImageUploader'
import ModalDialog from '../ModalDialog'

const Document = (props: any) => {
  const { onSubmit } = props
  const [showImageUploader, setShowImageUploader] = useState(false)
  const [image, setImage] = useState('')

  const uploadImage = (value: any) => {
    setImage(value)
    setShowImageUploader(false)
  }

  return (
    <div className="p-5">
      <h1 className="text-4xl">Document</h1>
      <div className="h-[2px] mt-2 w-[50%] bg-[#C4C4C4]" />
      <h1 className="text-4xl mt-10">Upload</h1>
      <button
        type="button"
        className="w-full aspect-w-4 aspect-h-3 bg-black font-extralight text-white text-7xl"
        onClick={() => setShowImageUploader(true)}
      >
        {image ? (
          <img className="object-cover" src={image} alt="user" />
        ) : (
          <div className="flex text-center justify-center items-center">Image</div>
        )}
      </button>
      <div className="mt-4">
        <button className="px-4 py-3 border border-black w-full" type="submit" onClick={() => onSubmit(image)}>
          Save
        </button>
      </div>
      <ModalDialog title="Upload image" open={showImageUploader} onClose={() => setShowImageUploader(false)}>
        <ImageUploader
          onClose={() => {
            setShowImageUploader(false)
          }}
          onSubmit={uploadImage}
        />
      </ModalDialog>
    </div>
  )
}

export default Document
