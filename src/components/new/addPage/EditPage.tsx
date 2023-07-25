import React, { useState } from 'react'
import { ReactComponent as AddIcon } from '../../../assets/icons/menuBar/add.svg'
import { ReactComponent as EditIcon } from '../../../assets/icons/menuBar/edit.svg'
import ModalDialog from '../ModalDialog'
import AddPage from './AddPage'

const EditPage = () => {
  const [showModalAddPage, setShowModalAddPage] = useState(false)
  return (
    <div className="p-5">
      <h1 className="text-4xl">Edit Page</h1>
      <div className="h-[2px] mt-2 w-[60%] bg-[#C4C4C4]" />
      <div className="pt-10 flex">
        <div className="h-10 w-7 bg-[#C4C4C4]" />
        <div className="pl-8">
          <div className="h-10 flex flex-col justify-between">
            <h2 className="text-2xl">Name</h2>
            <div className="h-[2px] w-full bg-[#C4C4C4]" />
          </div>
          <div className="pt-6">
            <div className="border-[1px] border-black text-lg py-[2px] px-2 cursor-pointer">Hide Page</div>
            <div className="border-[1px] border-black text-lg py-[2px] px-2 my-3 cursor-pointer">Set as HomePage</div>
            <div className="border-[1px] border-black text-lg py-[2px] px-2 cursor-pointer">Mask Subpage</div>
          </div>
        </div>
      </div>
      <div className="pt-8 flex items-center">
        <div className="h-14 w-16 border-[1px] border-black flex justify-center items-center">
          <EditIcon />
        </div>
        <span className="text-2xl pl-8">Edit Page</span>
      </div>
      <div className="pt-10 flex items-center">
        <div className="h-14 w-16 border-[1px] border-black flex justify-center items-center">
          <AddIcon />
        </div>
        <button type="button" className="text-2xl pl-8" onClick={() => setShowModalAddPage(true)}>
          Add Page
        </button>
      </div>
      <ModalDialog
        title="Add Page"
        open={showModalAddPage}
        onBack={() => setShowModalAddPage(false)}
        onClose={() => setShowModalAddPage(false)}
      >
        <AddPage />
      </ModalDialog>
    </div>
  )
}

export default EditPage
