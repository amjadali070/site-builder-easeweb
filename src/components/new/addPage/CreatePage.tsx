import { useParams } from 'react-router-dom'
import React, { useState } from 'react'
import { v4 as uuid } from 'uuid'

import { createPageRecord } from 'src/lib/services/website.service'

import ChoosePageTemplate from './ChoosePageTemplate'

import { ReactComponent as AddIcon } from '../../../assets/icons/menuBar/add.svg'
import ModalDialogV2 from '../ModalDialogV2'
import { IBlock } from '../../../services/website.service'

interface CreatePageProps {
  defaultOpen?: boolean
  onPageCreate: (options: { websiteID: string; name: string; path: string; blocks: string }) => void
}

const CreatePage = ({ onPageCreate, defaultOpen }: CreatePageProps) => {
  const params = useParams()

  const [loading, setLoading] = useState(false)
  const [open, setOpen] = useState(defaultOpen)
  const [name, setName] = useState('')
  const [selectedTemplate, setSelectedTemplate] = useState<IBlock[]>([])

  const handleCreatePage = async () => {
    setLoading(true)
    const random = Math.random().toString(36).substring(2, 5)
    const path = `/${random}-${name.toLowerCase().replace(/ /g, '-')}`
    const blocks = JSON.stringify(selectedTemplate.map(block => ({ ...block, id: uuid() })));
    const options = {
      websiteID: params.id as string,
      name,
      path,
      blocks,
    }
    await createPageRecord(options)
    setOpen(false)
    onPageCreate(options)
  }

  return (
    <div>
      <button type="button" onClick={() => setOpen(true)} className="mt-10 flex items-center cursor-pointer">
        <div className="h-14 w-16 border-[1px] border-black flex justify-center items-center">
          <AddIcon />
        </div>
        <span className="text-2xl pl-8">Create Page</span>
      </button>

      <ModalDialogV2 open={open} onBack={() => setOpen(false)}>
        <div className="p-5">
          <h1 className="text-4xl">Create Page</h1>
          <div className="h-[2px] mt-2 w-[60%] bg-[#C4C4C4]" />
          <div className="mt-10">
            <div className="flex flex-col gap-6">
              <input
                value={name}
                onChange={e => setName(e.target.value)}
                type="text"
                placeholder="Page Name"
                className="text-lg p-2 bg-white border-b-2 border-[#C4C4C4] focus:outline-none"
              />

              <ChoosePageTemplate {...{ setSelectedTemplate }} />

              <button disabled={loading} onClick={handleCreatePage} type="submit" className="p-4 border border-black">
                Creat{loading ? 'ing' : 'e'} Page
              </button>
            </div>
          </div>
        </div>
      </ModalDialogV2>
    </div>
  )
}

export default CreatePage
