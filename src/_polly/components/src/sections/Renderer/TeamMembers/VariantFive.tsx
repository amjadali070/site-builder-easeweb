import { TeamMembersSection, TeamMembersSectionMember } from '../../types'
import Team51 from './VariantDesign/Team51'
import Team52 from './VariantDesign/Team52'

export default function VariantFive({ section }: { section: TeamMembersSection }) {
  const title = section.variables.find(variable => variable.name === 'TITLE')?.data
  const subTitle = section.variables.find(variable => variable.name === 'SUBTITLE')?.data
  const paragraph = section.variables.find(variable => variable.name === 'PARAGRAPH')?.data
  const members = section.variables.find(variable => variable.name === 'TEAM_MEMBERS')
    ?.data as TeamMembersSectionMember[]

  return (
    <div className="bg-stone-300 h-full">
      <div className="container mx-auto py-[50px]">
        <div className="w-[750px] max-w-full mx-auto space-y-9">
          <div className="text-[40px]">
            <p className="text-black text-center">{title}</p>
          </div>
          {subTitle && (
            <div>
              <p className="text-black text-[18px] text-center">{subTitle}</p>
            </div>
          )}
          {paragraph && (
            <div>
              <p className="text-white text-center">{paragraph}</p>
            </div>
          )}
        </div>
        <div className='grid grid-cols-2 lg:grid-cols-2 text-white text-center gap-y-14 mt-14'>

          {members.map((member, index) => {
            switch (index % 2) {
              case 0:

                return (
                  <Team51 key={member.id} member={member} />
                )
              case 1:

                return (
                  <Team52 key={member.id} member={member} />
                )

            }

          })}

        </div>
      </div>
    </div>
  )
}
