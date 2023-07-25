import { TeamMembersSection, TeamMembersSectionMember } from '../../types'
import Team1 from './VariantDesign/Team1'

export default function VariantOne({ section }: { section: TeamMembersSection }) {
  const title = section.variables.find(variable => variable.name === 'TITLE')?.data
  const subTitle = section.variables.find(variable => variable.name === 'SUBTITLE')?.data
  const paragraph = section.variables.find(variable => variable.name === 'PARAGRAPH')?.data
  const members = section.variables.find(variable => variable.name === 'TEAM_MEMBERS')
    ?.data as TeamMembersSectionMember[]

  return (
    <div className="bg-black flex justify-center items-center">
      <div className="container  lg:px-[100px] md:px-[50px] px-[40px] py-[50px]">
        <div className="w-[750px] max-w-full mx-auto space-y-0  lg:space-y-9 md:space-y-9">
          <div className=" text-[30px] lg:text-[50px]">
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

        <div className="grid sm:grid-col-1 md:grid-col-1 lg:grid-cols-1 md:justify-between lg:justify-between gap-y-4 lg:md:gap-y-14 md:gap-y-14 mt-4 md:mt-14 lg:mt-14">
          {members.map(member => (
            <Team1 key={member.id} member={member} isRound />
          ))}
        </div>
      </div>
    </div>
  )
}
