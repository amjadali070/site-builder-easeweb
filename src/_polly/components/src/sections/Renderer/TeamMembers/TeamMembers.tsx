import { TeamMembersSection as TeamMembersSectionType } from '../../types'
import VariantFive from './VariantFive'
import VariantFour from './VariantFour'
import VariantOne from './VariantOne'
import VariantSeven from './VariantSeven'
import VariantSix from './VariantSix'
import VariantThree from './VariantThree'
import VariantTwo from './VariantTwo'

export default function TeamMembersSection({ section }: { section: TeamMembersSectionType }) {
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

    default:
      return null
  }
}
