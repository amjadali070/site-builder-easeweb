import { motion } from 'framer-motion'
import { TABLESection, TABLESectionItem } from '../../types'
import TABLETextItem from './TableItem'

export default function VariantOne({ section }: { section: TABLESection }) {
  const title = section.variables.find(variable => variable.name === 'TITLE')?.data
  const subTitle = section.variables.find(variable => variable.name === 'SUBTITLE')?.data
  const paragraph = section.variables.find(variable => variable.name === 'PARAGRAPH')?.data
  const tables = section.variables.find(variable => variable.name === 'ITEMS')?.data as TABLESectionItem[]

  const viewport = { once: true, amount: 0.5 }
  const viewVariants = {
    offscreen: {
      y: 100,
    },
    onscreen: {
      y: 0,
      transition: {
        duration: 0.5,
        delay: 0.2,
        ease: [0, 0.71, 0.2, 1.01],
      },
    },
  }
  return (
    <>
      <div className="container mx-auto px-4 lg:px-0">
        <motion.div initial="offscreen" whileInView="onscreen" viewport={viewport}>
          <motion.div variants={viewVariants}>
            <div className="py-6 space-y-5">
              <div className="">
                <button className={`text-sm border border-black px-[5px] py-px rounded-md`}>{title}</button>
                <h2 className="text-3xl font-medium mt-3">{subTitle}</h2>
              </div>

              <div>
                <p className="text-[20px] md:text-3xl font-medium md:leading-10">{paragraph}</p>
              </div>
            </div>
          </motion.div>
        </motion.div>
        <div className="py-8">
          {tables.map(faq => (
            <TABLETextItem key={faq.id} title={faq.title} subtitle={faq.subtitle} description={faq.description} />
          ))}
        </div>
      </div>
    </>
  )
}
