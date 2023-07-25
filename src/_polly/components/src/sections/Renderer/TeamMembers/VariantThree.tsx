import { useEffect, useRef, useState } from "react";
import { ArrowLeftIcon, ArrowRightIcon } from '@heroicons/react/24/solid'
import { TeamMembersSection, TeamMembersSectionMember } from '../../types'
import Member from './VariantDesign/Team3'

export default function VariantThree({ section }: { section: TeamMembersSection }) {
  const title = section.variables.find(variable => variable.name === 'TITLE')?.data
  const members = section.variables.find(variable => variable.name === 'TEAM_MEMBERS')
    ?.data as TeamMembersSectionMember[]

  const [_, setContainerWidth] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const cardContainerRef = useRef<HTMLDivElement>(null);

  const scrollHorizontalRightHandler = () => {
    if (cardContainerRef.current) {
      cardContainerRef.current.scrollLeft += 70;
    }
  }

  const scrollHorizontalLeftHandler = () => {
    if (cardContainerRef.current) {
      cardContainerRef.current.scrollLeft -= 70;
    }
  }

  useEffect(() => {

    if (containerRef.current) {
      setContainerWidth(containerRef.current.offsetWidth);
    }
  }, [])

  return (

    <div ref={containerRef} className="relative bg-white py-[10px] lg:py-[50px]">
      <div className="">
        <div className="container mx-auto py-[20px]">
          <div className="text-[40px]">
            <p className="text-black text-center">{title}</p>
          </div>
          <div className=" w-full lg:mt-4">
            <div className="absolute right-1 top-1/2 lg:mr-[200px]  lg:right-3 lg:top-1/2 h-12 w-12 lg:h-28 lg:w-28 rounded-full bg-black text-center flex justify-center  items-center" >
              <ArrowRightIcon className="h-8 w-11 lg:h-14 lg:w-20 text-white" onClick={scrollHorizontalRightHandler} />
            </div>

            <div className="absolute left-1 top-1/2 lg:left-4 lg:ml-[95px]  lg:top-1/2 h-12 w-12 lg:h-28 lg:w-28 rounded-full bg-black text-center flex justify-center  items-center" >
              <ArrowLeftIcon className="h-8 w-11 lg:h-14 lg:w-20 text-white" onClick={scrollHorizontalLeftHandler} />
            </div>
            <div ref={cardContainerRef} className="grid  grid-rows-1 grid-flow-col overflow-x-auto bg-slate-100 mt-3 lg:mr-24 py-[10px] gap-4 custom-scroll-bar">
              {members.map(member => (
                <Member key={member.id} member={member} />
              ))}
            </div>


          </div>

        </div>
      </div>
    </div>
  )
}