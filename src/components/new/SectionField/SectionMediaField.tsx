import { useState } from 'react'
import EditImageOverlay from '../EditImageOverlay'
import ImageUploader from '../ImageUploader'
import ModalDialogV2 from '../ModalDialogV2'
import SectionBaseField from './BaseField'

interface SectionMediaFieldProps {
  defaultValue: string
  onChange: (url: string) => void
}

export default function SectionMediaField({ defaultValue, onChange }: SectionMediaFieldProps) {
  const [showUploadModal, setShowUploadModal] = useState(false)

  return (
    <>
      <SectionBaseField title="Media">
        <button type="button" onClick={() => setShowUploadModal(true)} className="w-full relative mt-3">
          <EditImageOverlay src={defaultValue} />
        </button>
      </SectionBaseField>

      <ModalDialogV2 open={showUploadModal} onBack={() => setShowUploadModal(false)}>
        <ImageUploader
          onSubmit={url => {
            onChange(url)
            setShowUploadModal(false)
          }}
        />
      </ModalDialogV2>
    </>
  )
}
