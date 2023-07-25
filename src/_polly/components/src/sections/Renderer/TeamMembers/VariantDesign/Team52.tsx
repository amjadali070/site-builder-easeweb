import clsx from 'clsx'
import { TeamMembersSectionMember } from '../../../types'

export default function Team52({ member, isRound }: { member: TeamMembersSectionMember; isRound?: boolean }) {
    return (
        <div className='mt-[120px] -ml-[60px]  lg:mt-[300px] md:mr-64 lg:mr-[300px]'>
            <div className="w-[150px] lg:w-[500px] mx-auto">
                <img
                    className={clsx('h-[150px] lg:h-[500px] object-cover object-center lg:object-cover lg:object-center', isRound && 'rounded-full')}
                    src={member.image}
                    alt=""
                />

            </div>
            <div className="space-y-2 mt-5 lg:ml-[70px]">
                <p className="text-black text-sm lg:text-2xl font-bold text-center lg:text-center">{member.name}</p>
                {member.subtitle && <p className="text-black text-center lg:text-center">{member.subtitle}</p>}
                {member.description && <p className="text-black text-center lg:text-center">{member.description}</p>}
            </div>
            {member.button && (
                <div className="flex justify-center mt-5">
                    <a className="h-11 px-4 bg-black inline-flex justify-center items-center" href={member.button.url}>
                        {member.button.label}
                    </a>
                </div>
            )}
        </div>
    )
}
