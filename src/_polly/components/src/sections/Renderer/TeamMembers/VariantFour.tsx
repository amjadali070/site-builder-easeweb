import { TeamMembersSection, TeamMembersSectionMember } from '../../types'
import Team4 from './VariantDesign/Team4'
import Team41 from './VariantDesign/Team41'
import Team43 from './VariantDesign/Team43'

export default function VariantFour({ section }: { section: TeamMembersSection }) {
    const title = section.variables.find(variable => variable.name === 'TITLE')?.data
    const subTitle = section.variables.find(variable => variable.name === 'SUBTITLE')?.data
    const paragraph = section.variables.find(variable => variable.name === 'PARAGRAPH')?.data
    const members = section.variables.find(variable => variable.name === 'TEAM_MEMBERS')
        ?.data as TeamMembersSectionMember[]
    return (
        <div className="bg-slate-200">
            <div className="container mx-auto py-[50px]">
                <div className="w-[750px] max-w-full mx-auto space-y-9">
                    <div className="text-[40px]">
                        <h1 className="text-black text-center">{title}</h1>
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

                <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:justify-between lg:justify-between gap-y-14 mt-14">
                    {
                        members.map((member, index) => {
                            console.log("member.id", index % 3);
                            switch (index % 3) {
                                case 0:
                                    return (
                                        <Team4 key={member.id} member={member} />
                                    );
                                case 1:
                                    return (
                                        <Team41 key={member.id} member={member} />
                                    );
                                case 2:
                                    return (
                                        <Team43 key={member.id} member={member} />
                                    );
                            }
                        })
                    }
                </div>
            </div>
        </div>
    )
}
