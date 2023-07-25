
import { PortfolioSection as PortfolioSectionType } from '../../types'

export default function PortfolioSection({ section }: { section: PortfolioSectionType }) {
  switch (section.variant) {
    case 'VARIANT_1':
      return <div>Variant1</div>

    default:
      return null
  }
}
