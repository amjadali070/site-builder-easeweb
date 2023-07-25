import clsx from 'clsx'
import { TeamMembersSectionMember } from '../../../types'

export default function Team3({ member, isRound }: { member: TeamMembersSectionMember; isRound?: boolean }) {
  return (
    <div className='py-3'>
      <div className=" w-[300px] md:w-[300px] lg:w-[450px] mx-auto">
        <img
          className={clsx('h-full w-full object-cover object-center', isRound && 'rounded-full')}
          src={member.image}
          alt=""
        />
      </div>
      <div className="space-y-2 mt-5">
        <p className="text-black text-lg lg:text-2xl font-medium text-center">{member.name}</p>
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
