import { TABLESection as TABLESectionType } from '../../types'
import VariantOne from './VariantOne'

export default function TABLESection({ section }: { section: TABLESectionType }) {
  switch (section.variant) {
    case 'VARIANT_1':
      return <VariantOne {...{ section }} />

    default:
      return null
  }
}
