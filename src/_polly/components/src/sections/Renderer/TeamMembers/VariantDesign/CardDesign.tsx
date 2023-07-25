import clsx from 'clsx'
import { TeamMembersSectionMember } from './../../../types'

export default function CardDesign({ member, isRound }: { member: TeamMembersSectionMember; isRound?: boolean }) {
  return (
    <div>
      <div className=" w-[300px] lg:w-[400px] mx-auto lg:mx-0 lg:max-w-lg rounded overflow-hidden shadow-lg bg-neutral-200 py-[0px] ">
        <img
          className={clsx('h-[400px] w-[400px] object-cover object-center', isRound && 'rounded-full')}
          src={member.image}
          alt=""
        />
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">{member.name}</div>
          {member.subtitle && <p className="text-gray-700 text-base">{member.subtitle}</p>}
        </div>
        <div className="px-6 pt-4 pb-2">
          <p className="bg-slate-300 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2 text-center">
            {member.description}
          </p>
        </div>
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
