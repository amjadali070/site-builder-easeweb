import { Descendant } from 'slate'
import { SectionSlate } from 'src/components/editor'
import SectionBaseField from './BaseField'

interface SectionTextFieldProps {
  initialValue: Descendant[]
  isParagraph?: boolean
  title?: string
  onChange: (value: Descendant[]) => void
}

export default function SectionTextField({
  initialValue,
  onChange,
  isParagraph,
  title = 'Title',
}: SectionTextFieldProps) {
  return (
    <SectionBaseField
      title={title}
      preview={<SectionSlate initialValue={initialValue} previewMode onChange={onChange} />}
    >
      <SectionSlate initialValue={initialValue} onChange={onChange} showListSelectors={isParagraph} />
    </SectionBaseField>
  )
}
