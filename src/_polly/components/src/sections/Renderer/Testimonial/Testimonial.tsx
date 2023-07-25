import { TESTIMONIALSection as TESTIMONIALSectionType } from '../../types'
import VariantOne from './VariantOne'

export default function TESTIMONIALSection({ section }: { section: TESTIMONIALSectionType }) {
  switch (section.variant) {
    case 'VARIANT_1':
      return <VariantOne {...{ section }} />

    default:
      return null
  }
}
