import { ModalProps } from '../new/ModalDialog'
import SectionFooter from './section/SectionFooter'
import SectionBlog from './section/SectionBlog'
import SectionQuote from './section/SectionQuote'
import SectionTitle from './section/SectionTitle'
import SectionMenuBar from './section/SectionMenuBar'
import EditImageUploader from './section/EditImageUploader'

export interface EditSectionProps extends ModalProps {
  value: any
  websiteID?: string
  pageID?: string
  onUpdate?: (value: any) => void
}

export default function EditSection(props: EditSectionProps) {
  const { value, ...rest } = props
  switch (value?.type) {
    case 'TITLE':
      return <SectionTitle defaultValue={value} {...rest} />
    case 'QUOTE':
      return <SectionQuote defaultValue={value} {...rest} />
    case 'BLOG':
      return <SectionBlog defaultValue={value} {...rest} />
    case 'FOOTER':
      return <SectionFooter defaultValue={value} {...rest} />
    case 'MENU_BAR':
      return <SectionMenuBar defaultValue={value} {...rest} />
    case 'IMAGE':
      return <EditImageUploader {...{ value, ...rest }} />
    default:
      return null
  }
}
