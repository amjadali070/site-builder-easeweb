import { motion } from 'framer-motion'
import { SectionSlate } from '../../../../../../components/editor'
import { TextSection as TextSectionType } from '../../types'

function VariantNineteen({ section }: { section: TextSectionType }) {
  const paragraph = section.variables.find(variable => variable.name === 'PARAGRAPH')?.data
  const media = section.variables.find(variable => variable.name === 'MEDIA')?.data
  return (
    <>
      <div className="py-6 px-[20px] md:px-[32px]">
        <motion.div
          initial={{ opacity: 0, y: 200 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, type: 'spring' }}
        >
          <h2 className="text-[45px] sm:text-[60px] md:text-[75px] lg:text-[98px] font-neuton leading-none font-bold max-w-6xl">
            <SectionSlate initialValue={paragraph} previewMode />
          </h2>
        </motion.div>
        <motion.div initial={{ scale: 1.03 }} animate={{ scale: 1 }} transition={{ duration: 1 }} exit={{ opacity: 0 }}>
          <div className="flex justify-end mt-[-100px] sm:mt[-160px] md:mt-[-250px] z-0">
            <img
              className="w-[90%] sm:w-[70%] md:w-[60%] lg:w-[50%] sm:h-[300px] md:h-[400px] lg:h-[500px] z-0 opacity-20 rounded"
              src={media}
              alt=""
            />
          </div>
        </motion.div>
      </div>
    </>
  )
}

export default VariantNineteen
