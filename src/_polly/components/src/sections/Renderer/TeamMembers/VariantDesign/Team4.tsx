import clsx from 'clsx'
import { TeamMembersSectionMember } from '../../../types'

export default function Team4({ member, isRound }: { member: TeamMembersSectionMember; isRound?: boolean }) {
    return (
        <div className='sm:mt-[0px] lg:mt-[45px]'>
            <div className=" relative w-[300px] mx-auto">
                <img
                    className={clsx(' h-[400px] w-full object-cover object-center', isRound && 'rounded-full')}
                    src={member.image}
                    alt=""
                />
                <svg className='absolute z-50 bottom-[-10px] left-0 w-full lg:hidden' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#E2E8F0" fill-opacity="1" d="M0,256L30,261.3C60,267,120,277,180,245.3C240,213,300,139,360,128C420,117,480,171,540,176C600,181,660,139,720,117.3C780,96,840,96,900,117.3C960,139,1020,181,1080,202.7C1140,224,1200,224,1260,218.7C1320,213,1380,203,1410,197.3L1440,192L1440,320L1410,320C1380,320,1320,320,1260,320C1200,320,1140,320,1080,320C1020,320,960,320,900,320C840,320,780,320,720,320C660,320,600,320,540,320C480,320,420,320,360,320C300,320,240,320,180,320C120,320,60,320,30,320L0,320Z"></path></svg>

            </div>
            <div className="space-y-2 mt-5">
                <p className="text-black text-xl font-bold text-center">{member.name}</p>
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
