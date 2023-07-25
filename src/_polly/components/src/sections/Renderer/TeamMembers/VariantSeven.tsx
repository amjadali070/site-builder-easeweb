import { TeamMembersSection, TeamMembersSectionMember } from '../../types'
import TeamSevenCard from './VariantDesign/TeamSevenCard'

export default function VariantSeven({ section }: { section: TeamMembersSection }) {
  const title = section.variables.find(variable => variable.name === 'TITLE')?.data
  const subTitle = section.variables.find(variable => variable.name === 'SUBTITLE')?.data
  const paragraph = section.variables.find(variable => variable.name === 'PARAGRAPH')?.data
  const members = section.variables.find(variable => variable.name === 'TEAM_MEMBERS')
    ?.data as TeamMembersSectionMember[]
  return (
    <div className="bg-[#d2d8d8] text-[#28282E]">
      <div className="container mx-auto py-[80px]">
        <div className="text-[40px] ml-8 lg:ml-0 font-black uppercase">
          <p className="text-black text-left">{title}</p>
        </div>
        <div className="w-[850px] max-w-full mx-auto space-y-9">
          <div>
            <p className="text-black text-[18px] text-center">{subTitle}</p>
          </div>

          <div>
            <p className="text-black text-center">{paragraph}</p>
          </div>
        </div>

        <div className="grid sm:grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-4 text-center md:justify-between lg:justify-between gap-y-14 mt-14">
          {members.map(member => (
            <TeamSevenCard key={member.id} member={member} />
          ))}
        </div>
      </div>
    </div>
  )
}
