import { AttentionGrabberSection as AttentionGrabberSectionType } from '../../types'
import VariantEight from './VariantEight'
import VariantEleven from './VariantEleven'
import VariantFive from './VariantFive'
import VariantFour from './VariantFour'
import VariantNine from './VariantNine'
import VariantOne from './VariantOne'
import VariantSeven from './VariantSeven'
import Variantsix from './Variantsix'
import VariantTen from './VariantTen'
import VariantThirteen from './VariantThirteen'
import VariantThree from './VariantThree'
import VarianTwelve from './VariantTwelve'
import VariantTwo from './VariantTwo'
import VariantFourteen from './VariantFourteen'

export default function AttentionGrabberSection({ section }: { section: AttentionGrabberSectionType }) {
  switch (section.variant) {
    case 'VARIANT_1':
      return <Variantsix {...{ section }} />

    case 'VARIANT_2':
      return <VariantSeven {...{ section }} />

    case 'VARIANT_3':
      return <VariantEight {...{ section }} />

    case 'VARIANT_4':
      return <VariantNine {...{ section }} />

    case 'VARIANT_5':
      return <VariantTen {...{ section }} />

    case 'VARIANT_6':
      return <VariantEleven {...{ section }} />

    case 'VARIANT_7':
      return <VariantFour {...{ section }} />

    case 'VARIANT_8':
      return <VariantFive {...{ section }} />

    case 'VARIANT_9':
      return <VariantOne {...{ section }} />

    case 'VARIANT_10':
      return <VariantTwo {...{ section }} />

    case 'VARIANT_11':
      return <VariantThree {...{ section }} />

    case 'VARIANT_12':
      return <VarianTwelve {...{ section }} />

    case 'VARIANT_13':
      return <VariantThirteen {...{ section }} />

    case 'VARIANT_14':
      return <VariantFourteen {...{section}}  />
    

    default:
      return null
  }
}
