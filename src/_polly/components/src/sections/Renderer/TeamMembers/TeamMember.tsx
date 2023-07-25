import clsx from 'clsx'
import { TeamMembersSectionMember } from '../../types'

export default function TeamMember({ member, isRound }: { member: TeamMembersSectionMember; isRound?: boolean }) {
  return (
    <div>
      <div className=" w-[300px] mx-auto">
        <img
          className={clsx('h-full w-full object-cover object-center', isRound && 'rounded-full')}
          src={member.image}
          alt=""
        />
      </div>
      <div className="space-y-2 mt-5">
        <p className="text-white text-lg font-medium text-center">{member.name}</p>
        {member.subtitle && <p className="text-white text-center">{member.subtitle}</p>}
        {member.description && <p className="text-white text-center">{member.description}</p>}
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
