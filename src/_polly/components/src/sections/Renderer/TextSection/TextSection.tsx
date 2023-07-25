import { TextSection as TextSectionType } from '../../types'
import VariantEight from './VariantEight'
import VariantEleven from './VariantEleven'
import VariantFive from './VariantFive'
import VariantFour from './VariantFour'
import VariantNine from './VariantNine'
import VariantNineteen from './VariantNineteen'
import VariantOne from './VariantOne'
import VariantSeven from './VariantSeven'
import VariantSevenTeen from './VariantSevenTeen'
import VariantSix from './VariantSix'
import VariantSixteen from './VariantSixteen'
import VariantTen from './VariantTen'
import VariantThirteen from './VariantThirteen'
import VariantThree from './VariantThree'
import VariantTwelve from './VariantTwelve'
import VariantTwo from './VariantTwo'

export default function TextSection({ section }: { section: TextSectionType }) {
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

    case 'VARIANT_10':
      return <VariantTen {...{ section }} />

    case 'VARIANT_11':
      return <VariantEleven {...{ section }} />

    case 'VARIANT_12':
      return <VariantTwelve {...{ section }} />

    case 'VARIANT_13':
      return <VariantThirteen {...{ section }} />

    case 'VARIANT_16':
      return <VariantSixteen {...{ section }} />

    case 'VARIANT_17':
      return <VariantSevenTeen {...{ section }} />

    case 'VARIANT_19':
      return <VariantNineteen {...{ section }} />

    default:
      return null
  }
}
