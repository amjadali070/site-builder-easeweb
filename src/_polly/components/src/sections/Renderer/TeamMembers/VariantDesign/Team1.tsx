import clsx from 'clsx'
import { TeamMembersSectionMember } from './../../../types'

export default function Team1({ member, isRound }: { member: TeamMembersSectionMember; isRound?: boolean }) {
  return (
    <div  className='px-[10px] lg:px-[50px] sm:mr-4 md:mr-2 lg:mr-4'>
      <div className='border-2 lg:border-4 lg:outline-8 mr-6 md:mr-6 lg:mr-6 rounded-full lg:rounded-full bg-slate-900 '>
        <div className='flex flex-row mr-4'>
          <div className="basis-1/5 lg:w-[200px] mx-auto text-right mr-2 ml-2 md:ml-4 py-[10px] lg:py-[20px]">
            <img
              className={clsx('h-full w-full object-cover object-center', isRound && 'rounded-full')}
              src={member.image}
              alt=""
            />
          </div>
          <div className="basis-1/2 lg:ml-8 w-[40px] lg:w-[200px]">
            <div className='mt-2 lg:mt-14 '>
              <p className="text-white text-[10px] lg:text-4xl lg:font-medium ">{member.name}</p>
              {member.subtitle && <p className="text-white text-[8px]  lg:mt-2 lg:text-[20px] ">{member.subtitle}</p>}
              {member.description && <p className="text-white text-[6px] lg:text-sm mt-1 lg:mt-6 mb-2 ">{member.description}</p>}
            </div>
          </div>
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
