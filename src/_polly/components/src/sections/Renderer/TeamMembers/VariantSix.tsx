import { TeamMembersSection, TeamMembersSectionMember } from '../../types'
import CardDesign from './VariantDesign/CardDesign'

export default function VariantSix({ section }: { section: TeamMembersSection }) {
  const title = section.variables.find(variable => variable.name === 'TITLE')?.data
  const subTitle = section.variables.find(variable => variable.name === 'SUBTITLE')?.data
  const paragraph = section.variables.find(variable => variable.name === 'PARAGRAPH')?.data
  const members = section.variables.find(variable => variable.name === 'TEAM_MEMBERS')
    ?.data as TeamMembersSectionMember[]
  return (
    <div className="bg-white">
      <div className="container mx-auto py-[100px]">
        <div className="w-[1250px] max-w-full mx-auto space-y-9">
          <div className="text-[40px]">
            <p className="text-black text-center">{title}</p>
          </div>

          <div>
            <p className="text-black text-[18px] text-center">{subTitle}</p>
          </div>

          <div>
            <p className="text-black text-center">{paragraph}</p>
          </div>
        </div>

        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 text-center md:justify-between lg:justify-between gap-y-14 mt-14">
          {members.map(member => (
            <CardDesign key={member.id} member={member} />
          ))}
        </div>
      </div>
    </div>
  )
}
