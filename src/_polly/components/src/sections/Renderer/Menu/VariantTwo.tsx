import { motion } from 'framer-motion'
import { GoPrimitiveDot } from 'react-icons/go'
import { MENUSection, MENUSectionItem } from '../../types'
import MENUItem from './MenuItem'
// import ImageItem from './ImageItem'

export default function VariantOne({ section }: { section: MENUSection }) {
  const title = section.variables.find(variable => variable.name === 'TITLE')?.data
  //   const subTitle = section.variables.find(variable => variable.name === 'SUBTITLE')?.data
  const menus = section.variables.find(variable => variable.name === 'ITEMS')?.data as MENUSectionItem[]
  // const images = section.variables.find(variable => variable.name === 'IMAGE')?.data as MENUImageItem[]

  return (
    <div className="container mx-auto my-12">
      <div className="flex items-center flex-col lg:my-16">
        <div className="lg:flex gap-8 lg:mx-10">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{
              type: 'spring',
              stiffness: 100,
              delay: 0.1,
              duration: 200,
            }}
            viewport={{ once: true }}
          >
            <h1 className="text-3xl font-main">{title}</h1>
            <div className="text-[#B48B7E] my-2 w-16 flex items-center">
              <span className="mr-2">
                <GoPrimitiveDot></GoPrimitiveDot>
              </span>
              <div className="w-full">
                <div className="bg-[#B48B7E] h-[1px]"></div>
              </div>
            </div>
            <div className="flex flex-col gap-6 mt-8">
              {menus.slice(0, 4).map(MENU => (
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
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{
              type: 'spring',
              stiffness: 100,
              delay: 0.1,
              duration: 200,
            }}
            viewport={{ once: true }}
          >
            <h1 className="text-3xl font-main">{title}</h1>
            <div className="text-[#B48B7E] my-2 w-16 flex items-center">
              <span className="mr-2">
                <GoPrimitiveDot></GoPrimitiveDot>
              </span>
              <div className="w-full">
                <div className="bg-[#B48B7E] h-[1px]"></div>
              </div>
            </div>
            <div className="flex flex-col gap-6 mt-8">
              {menus.slice(4, 8).map(MENU => (
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
    </div>
  )
}
