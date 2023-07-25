import { motion } from 'framer-motion'
import { TeamMembersSectionMember } from './../../../types'

export default function CardDesign({ member }: { member: TeamMembersSectionMember }) {
  return (
    <div>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{
          duration: 1,
          ease: [0, 0.71, 0.2, 1.01],
        }}
        className="w-[300px] mx-auto lg:mx-0 lg:max-w-lg overflow-hidden"
      >
        <img src={member.image} className="h-48 w-full" alt="" />
        {member.subtitle && <p className="uppercase text-left text-sm mt-1">{member.subtitle}</p>}
        <h1 className="text-left text-5xl my-3 uppercase">{member.name}</h1>
        <p className="text-justify text-sm leading-4 uppercase">
          <span className="mx-12"></span> {member.description}
        </p>
      </motion.div>
    </div>
  )
}
