import { BlogSection as BlogSectionType } from '../../types'
import VariantOne from './VariantOne'
import VariantTwo from './VariantTwo'
import VariantThree from './VariantThree'
export default function BlogSection({ section }: { section: BlogSectionType }) {
  switch (section.variant) {
    case 'VARIANT_1':
      return <VariantOne {...{ section }} />

    case 'VARIANT_2':
      return <VariantTwo {...{ section }} />

    case 'VARIANT_3':
      return <VariantThree {...{section}}  />

    default:
      return null
  }
}
