import { FAQSection, FAQSectionItem } from '../../types'
import { motion } from 'framer-motion'
export default function VariantFive({ section }: { section: FAQSection }) {
  const faqs = section.variables.find(variable => variable.name === 'ITEMS')?.data as FAQSectionItem[]
  return (
    <div className=" bg-[black] lg:px-12 px-4 py-24 w-full ">
      <div className="container flex lg:flex-row flex-col xl:flex-row gap-6 lg:gap-x-12 justify-center  lg:ml-28 items-center">
        {faqs.map(item => {
          return (
            <div key={item.id}>
              <motion.div className="lg:text-2xl text-white overflow-hidden ease-linear lg:h-12 h-8 border-b-[1px] w-[93%] lg:w-[300px] xl:w-[300px] pb-3 border-white">
                <motion.p
                  initial={{ opacity: 0, y: -10 }}
                  whileInView={{ y: 0, opacity: 1, transition: { duration: 1 } }}
                >
                  {item.title}
                </motion.p>
              </motion.div>
              <div className="overflow-hidden text-[silver] text-sm lg:text-lg">
                <motion.p
                  className=" lg:mt-6 xl:mt-6 mt-3"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ y: 0, opacity: 1, transition: { duration: 1 } }}
                >
                  {item.description}
                </motion.p>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
