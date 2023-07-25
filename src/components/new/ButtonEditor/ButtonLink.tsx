import React, { useState } from 'react'
import { useDropzone } from 'react-dropzone'
import { ButtonLinkTypes } from 'src/_polly/components/src/constants'
import { uploadAsset } from '../../../lib/services/storage.service'
import SelectPage from '../addPage/SelectPage'
import ModalDialogV2 from '../ModalDialogV2'

const MAX_FILE_SIZE = 52428800

interface ButtonLinkProps {
  link?: {
    to: string
    type: ButtonLinkTypes
  } | null
  onSave: ({ to, type }: { to: string; type: ButtonLinkTypes }) => void
}

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
    onClick={() => {
      onClick?.()
      setActive(type)
    }}
    className={`w-full text-left p-3 border border-black ${active && 'bg-gray-300'}`}
  >
    {label}
  </button>
)

const ButtonLink = ({ onSave, link }: ButtonLinkProps) => {
  const { acceptedFiles, getRootProps, getInputProps } = useDropzone({
    accept: 'image/jpeg, image/png, image/jpg, application/pdf',
    maxFiles: 1,
    maxSize: MAX_FILE_SIZE,
  })

  const [active, setActive] = useState<ButtonLinkTypes | null>(link?.type || null)
  const [to, setTo] = useState(link?.to || '')
  const [saving, setSaving] = useState(false)
  const [showPageModal, setShowPageModal] = useState(false)

  const handleSave = async () => {
    setSaving(true)
    if (!active) return

    if (active === ButtonLinkTypes.EMAIL || active === ButtonLinkTypes.EXTERNAL) {
      let realTo = to
      if (!to.startsWith('http')) {
        realTo = `http://${to}`
      }
      onSave({ to: realTo, type: active })
    }

    if (active === ButtonLinkTypes.DOCUMENT && acceptedFiles.length > 0) {
      const key = `doc-${Date.now()}`
      const url = await uploadAsset(key, acceptedFiles[0])
      onSave({ to: url, type: active })
    }

    setSaving(false)
  }

  return (
    <div className="px-6">
      <p className="text-xl">Add a link</p>
      <div className="border-b mt-2 border-black" />

      <div className="mt-6 space-y-6">
        <div>
          <Item
            label="External Webpage"
            type={ButtonLinkTypes.EXTERNAL}
            setActive={setActive}
            active={active === ButtonLinkTypes.EXTERNAL}
          />
          {active === ButtonLinkTypes.EXTERNAL && (
            <div>
              <input
                type="text"
                value={to}
                placeholder="Link"
                onChange={e => setTo(e.target.value)}
                className="w-full border-b border-black outline-none px-4 py-4"
              />
            </div>
          )}
        </div>
        <Item
          label="Page"
          type={ButtonLinkTypes.INTERNAL}
          {...{ setActive }}
          active={active === ButtonLinkTypes.INTERNAL}
          onClick={() => setShowPageModal(true)}
        />
        <div>
          <Item
            label="Email"
            type={ButtonLinkTypes.EMAIL}
            setActive={setActive}
            active={active === ButtonLinkTypes.EMAIL}
          />
          {active === ButtonLinkTypes.EMAIL && (
            <div>
              <input
                type="email"
                value={to}
                placeholder="Email"
                onChange={e => setTo(e.target.value)}
                className="w-full border-b border-black outline-none px-4 py-4"
              />
            </div>
          )}
        </div>
        <div>
          <Item
            label="Document"
            type={ButtonLinkTypes.DOCUMENT}
            setActive={setActive}
            active={active === ButtonLinkTypes.DOCUMENT}
          />
          {active === ButtonLinkTypes.DOCUMENT && (
            <div className="mt-6">
              <p className="text-lg mb-2">Upload</p>
              <div {...getRootProps({ className: 'dropzone' })}>
                <input {...getInputProps()} />
                <div className="flex justify-center flex-col items-center">
                  <p className="mt-2">Drag your document here, or click to select</p>
                  <p className="text-sm" style={{ color: 'gray' }}>
                    Maximum 1 file (50MB) can be uploaded
                  </p>
                </div>
              </div>
              {acceptedFiles.length > 0 && (
                <div className="mt-3">
                  <p>Selected file:</p>
                  <div className="dropzone--selected-file">
                    <p style={{ textAlign: 'center' }}>{acceptedFiles[0].name}</p>
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      </div>

      <div className="mt-6">
        <button type="button" className="px-4 py-3 border border-black w-full" disabled={saving} onClick={handleSave}>
          Sav{saving ? 'ing' : 'e'}
        </button>
      </div>

      <ModalDialogV2
        open={showPageModal}
        onBack={() => {
          setShowPageModal(false)
          setActive(null)
        }}
      >
        <SelectPage
          onSelect={path => {
            onSave({ to: path, type: ButtonLinkTypes.INTERNAL })
          }}
        />
      </ModalDialogV2>
    </div>
  )
}

export default ButtonLink
