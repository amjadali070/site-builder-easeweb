import { TeamMembersSection, TeamMembersSectionMember } from '../../types'
import Member from './TeamMember'

export default function VariantTwo({ section }: { section: TeamMembersSection }) {
  const title = section.variables.find(variable => variable.name === 'TITLE')?.data
  const subTitle = section.variables.find(variable => variable.name === 'SUBTITLE')?.data
  const paragraph = section.variables.find(variable => variable.name === 'PARAGRAPH')?.data
  const members = section.variables.find(variable => variable.name === 'TEAM_MEMBERS')
    ?.data as TeamMembersSectionMember[]

  return (
    <div className="bg-black">
      <div className="container mx-auto py-[50px]">
        <div className="w-[750px] max-w-full mx-auto space-y-9">
          <div className="text-[40px]">
            <p className="text-white text-center">{title}</p>
          </div>
          {subTitle && (
            <div>
              <p className="text-white text-[18px] text-center">{subTitle}</p>
            </div>
          )}
          {paragraph && (
            <div>
              <p className="text-white text-center">{paragraph}</p>
            </div>
          )}
        </div>

        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 text-white text-center md:justify-between lg:justify-between gap-y-14 mt-14">
          {members.map(member => (
            <Member key={member.id} member={member} />
          ))}
        </div>
      </div>
    </div>
  )
}
