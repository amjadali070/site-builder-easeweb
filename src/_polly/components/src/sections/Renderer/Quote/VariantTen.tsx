import { motion } from 'framer-motion'
import { GiKnifeFork } from 'react-icons/gi'
import { SectionSlate } from '../../../../../../components/editor'
import { QuoteSection as QuoteSectionType } from '../../types'

interface VariantOneProps {
  section: QuoteSectionType
}

export default function VariantTen({ section }: VariantOneProps) {
  const title = section.variables.find(variable => variable.name === 'TITLE')?.data
  const subTitle = section.variables.find(variable => variable.name === 'SUBTITLE')?.data

  return (
    <div>
      <div className="bg-[url('https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80')] bg-local flex flex-col justify-center items-center bg-no-repeat bg-cover banner h-[100vh] brightness-90 relative">
        <div className="h-full w-full fixed bg-black bg-opacity-60"></div>
        <div className="w-full text-center">
          <motion.div
            initial={{ y: 200 }}
            whileInView={{ y: -20 }}
            transition={{ type: 'spring', stiffness: 100 }}
            viewport={{ once: true }}
          >
            <div className="text-5xl text-[#E2C792] font-head">
              <SectionSlate initialValue={subTitle} previewMode />
            </div>
            <div className="my-5 text-4xl font-sub uppercase text-white">
              <SectionSlate initialValue={title} previewMode />
            </div>
            <div className="text-[#E2C792] flex w-4/12 mx-auto items-center">
              <div className="w-full">
                <div className="ml-7 bg-[#E2C792] h-[1px] mb-1"></div>
                <div className="bg-[#E2C792] h-[1px]"></div>
              </div>
              <span className="text-3xl mx-5">
                <GiKnifeFork></GiKnifeFork>
              </span>
              <div className="w-full">
                <div className="mr-7 bg-[#E2C792] h-[1px] mb-1"></div>
                <div className="bg-[#E2C792] h-[1px]"></div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}
