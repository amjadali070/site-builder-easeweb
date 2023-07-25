import React, { useState } from 'react'
import clsx from 'clsx'
import { ButtonLinkTypes } from '../../../_polly/components/src/constants'
import SelectPage from './SelectPage'
import ModalDialogV2 from '../ModalDialogV2'
import CreatePageModal from './CreatePageModal'
import InlineDocUpload from '../InlineDocUpload'
import { uploadAsset } from '../../../lib/services/storage.service'
import { Loader } from '../../loader'

const Item = ({
  label,
  active,
  setActive,
  type,
  onClick,
}: {
  label: string
  active?: boolean
  setActive: React.Dispatch<React.SetStateAction<ButtonLinkTypes | null>>
  type: ButtonLinkTypes | null
  onClick?: () => void
}) => (
  <button
    type="button"
    className={clsx('w-full border-[1px] border-black text-lg py-3 px-2 cursor-pointer', active && 'bg-gray-200')}
    onClick={() => {
      onClick?.()
      setActive(type)
    }}
  >
    {label}
  </button>
)

const AddPage = (props: any) => {
  const { onSubmit, defaultValue } = props
  const [showCreatePageModal, setShowCreatePageModal] = useState(false)
  const [visible, setVisible] = useState({
    selectPage: false,
    externalWebpage: false,
    document: false,
    email: false,
  })
  const [value, setValue] = useState({
    title: '',
    url: '',
    ...defaultValue,
  })
  const [selectedDoc, setSelectedDoc] = useState<File | null>(null)
  const [uploading, setUploading] = useState(false)
  const [active, setActive] = useState<ButtonLinkTypes | null>(defaultValue?.type || null)

  const onClose = () => {
    setVisible({ selectPage: false, externalWebpage: false, document: false, email: false })
  }

  const handleSubmit = async () => {
    if (selectedDoc) {
      setUploading(true)
      const key = `doc-${Date.now()}`
      const url = await uploadAsset(key, selectedDoc)
      setValue({ ...value, url, type: ButtonLinkTypes.DOCUMENT })
    }

    onSubmit(value)
  }

  return (
    <>
      <Loader show={uploading} />
      <div className="p-5">
        <div className="mb-10">
          <h1 className="mb-2 text-4xl">Link</h1>
          <div className="mb-4 h-[2px] w-[60%] bg-[#C4C4C4]" />
          <div className="pt-6 flex flex-col">
            <button
              type="button"
              className="border-[1px] border-black text-lg py-3 px-2 my-3 cursor-pointer"
              onClick={() => setShowCreatePageModal(true)}
            >
              Create New Page
            </button>

            <div className="my-3">
              <Item
                onClick={() => setVisible({ ...visible, selectPage: true })}
                label="Select Page"
                active={active === ButtonLinkTypes.INTERNAL}
                setActive={setActive}
                type={ButtonLinkTypes.INTERNAL}
              />
            </div>

            <div className="my-3">
              <Item
                label="External Webpage"
                active={active === ButtonLinkTypes.EXTERNAL}
                setActive={setActive}
                type={ButtonLinkTypes.EXTERNAL}
                onClick={() =>
                  setVisible({
                    externalWebpage: !visible.externalWebpage,
                    document: false,
                    email: false,
                    selectPage: false,
                  })
                }
              />

              {visible.externalWebpage && (
                <input
                  type="text"
                  value={value?.type === ButtonLinkTypes.EXTERNAL ? value.url : ''}
                  placeholder="Link"
                  onChange={e => {
                    setValue((prevValue: any) => ({
                      ...prevValue,
                      url: e.target.value,
                      type: ButtonLinkTypes.EXTERNAL,
                    }))
                  }}
                  className="w-full border-b border-black outline-none px-4 py-4"
                />
              )}
            </div>

            <div className="my-3">
              <Item
                onClick={() =>
                  setVisible({
                    document: !visible.document,
                    externalWebpage: false,
                    email: false,
                    selectPage: false,
                  })
                }
                label="Document"
                active={active === ButtonLinkTypes.DOCUMENT}
                setActive={setActive}
                type={ButtonLinkTypes.DOCUMENT}
              />

              {visible.document && (
                <InlineDocUpload
                  onSelect={file => {
                    setSelectedDoc(file)
                  }}
                />
              )}
            </div>

            <div className="my-3">
              <Item
                onClick={() =>
                  setVisible({
                    email: !visible.email,
                    document: false,
                    selectPage: false,
                    externalWebpage: false,
                  })
                }
                label="Email"
                active={active === ButtonLinkTypes.EMAIL}
                setActive={setActive}
                type={ButtonLinkTypes.EMAIL}
              />

              {visible.email && (
                <input
                  type="text"
                  value={value?.type === ButtonLinkTypes.EMAIL ? value.url : ''}
                  placeholder="Email"
                  onChange={e => {
                    setValue((prevValue: any) => ({
                      ...prevValue,
                      url: e.target.value,
                      type: ButtonLinkTypes.EMAIL,
                    }))
                  }}
                  className="w-full border-b border-black outline-none px-4 py-4"
                />
              )}
            </div>

            <button
              type="button"
              className="border-[1px] border-black text-lg py-3 px-2 my-3 cursor-pointer"
              onClick={() => setValue((prevValue: any) => ({ ...prevValue, url: '' }))}
            >
              None
            </button>
          </div>
        </div>
        <div className="">
          <button className="px-4 py-3 border border-black w-full" type="submit" onClick={handleSubmit}>
            {defaultValue?.url ? 'Update' : 'Add'}
          </button>
        </div>

        {/* modals */}
        <CreatePageModal
          onCreate={path => {
            setValue((prevValue: any) => ({ ...prevValue, url: path, type: ButtonLinkTypes.INTERNAL }))
          }}
          name={value.title}
          open={showCreatePageModal}
          setOpen={setShowCreatePageModal}
        />

        <ModalDialogV2 open={visible.selectPage} onBack={onClose}>
          <SelectPage
            onSelect={path => {
              setValue((prevValue: any) => ({ ...prevValue, url: path, type: ButtonLinkTypes.INTERNAL }))
              setVisible({ ...visible, selectPage: false })
            }}
          />
        </ModalDialogV2>
      </div>
    </>
  )
}

export default AddPage
