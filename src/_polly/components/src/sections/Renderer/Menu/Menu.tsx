import { MENUSection as MENUSectionType } from '../../types'
import VariantOne from './VariantOne'
import VariantTwo from './VariantTwo'

export default function MENUSection({ section }: { section: MENUSectionType }) {
  switch (section.variant) {
    case 'VARIANT_1':
      return <VariantOne {...{ section }} />

    case 'VARIANT_2':
      return <VariantTwo {...{ section }} />
    default:
      return null
  }
}
