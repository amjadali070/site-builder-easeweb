import clsx from 'clsx'
import { TeamMembersSectionMember } from '../../../types'

export default function Team51({ member, isRound }: { member: TeamMembersSectionMember; isRound?: boolean }) {
    return (
        <div className='ml-[40px] lg:ml-[200px]'>
            <div className="w-[150px] lg:w-[500px] mx-auto">
                <img
                    className={clsx('h-[150px] lg:h-[500px] object-cover object-center lg:object-cover lg:object-center', isRound && 'rounded-full')}
                    src={member.image}
                    alt=""
                />
            </div>
            <div className="space-y-2 mt-5">
                <p className="text-black text-sm lg:text-2xl font-bold text-center">{member.name}</p>
                {member.subtitle && <p className="text-black text-center">{member.subtitle}</p>}
                {member.description && <p className="text-black text-center">{member.description}</p>}
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
