import { ContactUsSection as ContactUsSectionType } from '../../types'
import VariantEight from './VariantEight'
import VariantEleven from './VariantEleven'
import VariantFive from './VariantFive'
import VariantFour from './VariantFour'
import VariantNine from './VariantNine'
import VariantOne from './VariantOne'
import VariantSeven from './VariantSeven'
import VariantSix from './VariantSix'
import VariantThirteen from './VariantThirteen'
import VariantThree from './VariantThree'
import VariantTwelve from './VariantTwelve'
import VariantTwo from './VariantTwo'

export default function ContactUsSection({ section }: { section: ContactUsSectionType }) {
  switch (section.variant) {
    case 'VARIANT_1':
      return <VariantOne {...{ section }} />

    case 'VARIANT_2':
      return <VariantTwo {...{ section }} />

    case 'VARIANT_3':
      return <VariantThree {...{ section }} />

    case 'VARIANT_4':
      return <VariantFour {...{ section }} />

    case 'VARIANT_5':
      return <VariantFive {...{ section }} />

    case 'VARIANT_6':
      return <VariantSix {...{ section }} />

    case 'VARIANT_7':
      return <VariantSeven {...{ section }} />

    case 'VARIANT_8':
      return <VariantEight {...{ section }} />

    case 'VARIANT_9':
      return <VariantNine {...{ section }} />

    case 'VARIANT_12':
      return <VariantTwelve {...{ section }} />

    case 'VARIANT_11':
      return <VariantEleven {...{ section }} />

    case 'VARIANT_13':
      return <VariantThirteen {...{ section }} />

    default:
      return null
  }
}
