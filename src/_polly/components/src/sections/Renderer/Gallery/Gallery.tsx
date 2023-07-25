import { GallerySection as GallerySectionType } from '../../types'
import VariantEight from './VariantEight'
import VariantEleven from './VariantEleven'
import VariantFive from './VariantFive'
import VariantFour from './VariantFour'
import VariantFourteen from './VariantFourteen'
import VariantNine from './VariantNine'
import VariantOne from './VariantOne'
import VariantSeven from './VariantSeven'
import VariantSix from './VariantSix'
import VariantTen from './VariantTen'
import VariantThree from './VariantThree'
import VarianTwelve from './VariantTwelve'
import VariantFifteen from './VariantFifteen'
import VariantTwo from './VariantTwo'

export default function GallerySection({ section }: { section: GallerySectionType }) {
  switch (section.variant) {
    case 'VARIANT_1':
      return <VariantEight {...{ section }} />
    case 'VARIANT_2':
      return <VariantSix {...{ section }} />
    case 'VARIANT_3':
      return <VariantSeven {...{ section }} />
    case 'VARIANT_4':
      return <VariantFour {...{ section }} />
    case 'VARIANT_5':
      return <VariantFive {...{ section }} />
    case 'VARIANT_6':
      return <VariantTwo {...{ section }} />
    case 'VARIANT_7':
      return <VariantThree {...{ section }} />
    case 'VARIANT_8':
      return <VariantOne {...{ section }} />
    case 'VARIANT_9':
      return <VariantNine {...{ section }} />
    case 'VARIANT_10':
      return <VariantTen {...{ section }} />
    case 'VARIANT_11':
      return <VariantEleven {...{ section }} />
    case 'VARIANT_12':
      return <VarianTwelve {...{ section }} />
    case 'VARIANT_14':
      return <VariantFourteen {...{ section }} />
    case 'VARIANT_15':
      return <VariantFifteen {...{ section }} />
    default:
      return null
  }
}
