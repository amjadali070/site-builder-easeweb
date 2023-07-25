import { motion } from 'framer-motion'
import { RiDoubleQuotesL, RiDoubleQuotesR } from 'react-icons/ri'
import { SectionSlate } from '../../../../../../components/editor'
import { QuoteSection } from '../../types'

export default function VariantEight({ section }: { section: QuoteSection }) {
  const subtitle = section.variables.find(variable => variable.name === 'SUBTITLE')?.data
  const paragraph = section.variables.find(variable => variable.name === 'DESCRIPTION')?.data

  return (
    <div className="mt-8 overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: 'easeInOut' }}
        className=" border-2 shadow-xl p-4 xl:w-[50%] w-[90%] m-auto"
      >
        <div className="xl:text-[68px] text-[#764848]">
          <RiDoubleQuotesL />
        </div>
        <div className="flex flex-col justify-center items-center">
          <div className="flex items-center">
            {paragraph && (
              <div
                className="font-bold text-xl xl:text-3xl capitalize text-center"
                style={{ textShadow: '1px 3px 2px grey' }}
              >
                <SectionSlate initialValue={paragraph} previewMode />
              </div>
            )}
          </div>
          <div className=" mt-4 border-b-2 text-[33px]">
            {subtitle && (
              <div className="text-[#481f1f66] italic  ">
                <SectionSlate initialValue={subtitle} previewMode />
              </div>
            )}
          </div>
        </div>
        <div className="xl:text-[68px] text-[#764848]  flex justify-end items-end ">
          <RiDoubleQuotesR />
        </div>
      </motion.div>
    </div>
  )
}
