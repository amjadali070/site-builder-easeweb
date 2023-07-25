import { useParams } from 'react-router-dom'
import { v4 as uuid } from 'uuid'
import React, { useEffect, useRef, useState } from 'react'

import { createPageRecord } from 'src/lib/services/website.service'

import ChoosePageTemplate from './ChoosePageTemplate'

import ModalDialogV2 from '../ModalDialogV2'
import { IBlock } from '../../../services/website.service'

interface CreatePageModalProps {
  name?: string
  open: boolean
  setOpen: React.Dispatch<React.SetStateAction<boolean>>
  onCreate?: (path: string) => void
}

const CreatePageModal = ({ open, setOpen, name: defaultName, onCreate }: CreatePageModalProps) => {
  const params = useParams()

  const [name, setName] = useState(defaultName ?? '')
  const [selectedTemplate, setSelectedTemplate] = useState<IBlock[]>([])
  const [nameError, setNameError] = useState('')
  const inputRef = useRef<HTMLInputElement | null>(null)

  const handleCreatePage = async () => {
    if (!name) {
      setNameError('Name is required')
      inputRef?.current?.focus()
      return
    }
    const path = `/${name.toLowerCase().replace(/ /g, '-')}-${Math.random().toString(36).substring(2, 15)}`
    const id = params.id as string
    let websiteID = ''
    if (Array.isArray(id)) {
      const siteId = id[0]
      websiteID = siteId
    } else {
      websiteID = id
    }
    const blocks = JSON.stringify(selectedTemplate.map(block => ({ ...block, id: uuid() })))
    await createPageRecord({
      websiteID,
      name,
      path,
      blocks,
    })
    if (onCreate) onCreate(path)
    setOpen(false)
  }

  useEffect(() => {
    if (defaultName) setName(defaultName)
  }, [defaultName])

  return (
    <ModalDialogV2 open={open} onBack={() => setOpen(false)}>
      <div className="p-5">
        <h1 className="text-4xl">Create Page</h1>
        <div className="h-[2px] mt-2 w-[60%] bg-[#C4C4C4]" />
        <div className="mt-10 pb-16">
          <div className="flex flex-col gap-6">
            <div>
              <input
                value={name}
                ref={inputRef}
                onChange={e => {
                  setName(e.target.value)
                  setNameError('')
                }}
                type="text"
                placeholder="Page Name"
                className="w-full text-lg p-2 bg-white border-b-2 border-[#C4C4C4] focus:outline-none"
              />
              {nameError && <p className="text-red-500 text-sm mt-1">{nameError}</p>}
            </div>

            <ChoosePageTemplate {...{ setSelectedTemplate }} />

            <button onClick={handleCreatePage} type="submit" className="p-4 border border-black">
              Create Page
            </button>
          </div>
        </div>
      </div>
    </ModalDialogV2>
  )
}

export default CreatePageModal
