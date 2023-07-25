import { useContext } from 'react'
import { WebsiteContext } from 'src/components/context/WebsiteContext'
import ImageUploader from 'src/components/new/ImageUploader'
import ModalDialog from 'src/components/new/ModalDialog'
import { upsertBlockByPageID } from 'src/services/website.service'
import { EditSectionProps } from '../EditSection'

export interface EditImageUploaderProps extends EditSectionProps {
  value: {
    id: string
    type: 'IMAGE'
    props: { src: string }
    updatedAt: string
  }
}

export default function EditImageUploader({ value, ...rest }: EditImageUploaderProps) {
  const websiteContext = useContext(WebsiteContext)

  const handleImageUpdate = (imageURL: string) => {
    upsertBlockByPageID(websiteContext.pageID, {
      ...value,
      props: { src: imageURL },
      updatedAt: new Date().toISOString()
    }).then(() => rest.onClose?.())
  }

  return (
    <ModalDialog title="Upload Image" {...rest}>
      <ImageUploader onSubmit={handleImageUpdate} />
    </ModalDialog>
  )
}
