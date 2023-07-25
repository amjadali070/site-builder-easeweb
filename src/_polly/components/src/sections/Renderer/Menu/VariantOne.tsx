import { motion } from 'framer-motion'
import { GoPrimitiveDot } from 'react-icons/go'
import { MENUSection, MENUSectionItem } from '../../types'
import ImageItem from './ImageItem'
import MENUItem from './MenuItem'

export default function VariantOne({ section }: { section: MENUSection }) {
  const title = section.variables.find(variable => variable.name === 'TITLE')?.data
  const subTitle = section.variables.find(variable => variable.name === 'SUBTITLE')?.data
  const menus = section.variables.find(variable => variable.name === 'ITEMS')?.data as MENUSectionItem[]

  return (
    <div className="container mx-auto my-12">
      <div className="flex items-center w-11/12 flex-col lg:flex-row">
        <div className="w-full">
          <div className="grid lg:grid-cols-2 md:grid-cols-2 mb-8 lg:mb-0 w-8/12 h-screen lg:h-[60vh] lg:w-[40vw] mx-auto">
            {menus.map(MENU => (
              <ImageItem key={MENU.id} image={MENU.image} />
            ))}
          </div>
        </div>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ type: 'spring', stiffness: 100, delay: 0.1 }}
          viewport={{ once: true }}
          className="w-11/12 mx-auto"
        >
          {subTitle && (
            <div>
              <h1 className="text-5xl font-head text-[#B48B7E]">{subTitle}</h1>
            </div>
          )}

          <h1 className="text-4xl font-noto">{title}</h1>
          <div className="text-[#B48B7E] my-2 w-16 flex items-center justify-between">
            <span className="mr-2">
              <GoPrimitiveDot></GoPrimitiveDot>
            </span>
            <div className="w-full">
              <div className="bg-[#B48B7E] h-[1px]"></div>
            </div>
          </div>
          <div className="flex flex-col gap-6 mt-8">
            {menus.slice(0, 3).map(MENU => (
              <MENUItem
                key={MENU.id}
                image={MENU.image}
                title={MENU.title}
                subtitle={MENU.subtitle}
                description={MENU.description}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  )
}
