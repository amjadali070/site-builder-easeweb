import { SectionSlate } from '../../../../../../components/editor'
import { AboutUsSection } from '../../types'
import { GoPrimitiveDot } from 'react-icons/go'
import { motion } from 'framer-motion'

export default function VariantSeven({ section }: { section: AboutUsSection }) {
  const title = section.variables.find(variable => variable.name === 'TITLE')?.data
  const subtitle = section.variables.find(varaible => varaible.name === 'SUBTITLE')?.data
  const pargraph = section.variables.find(variable => variable.name === 'PARAGRAPH')?.data
  const media = section.variables.find(variable => variable.name === 'MEDIA')?.data

  return (
    <div className="bg-[#000000dc] w-[100%] py-[10px]">
      <div className="flex flex-col xl:flex-row justify-between py-5  px-10 text-[#eee]">
        
        <div className="xl:w-[800px]">
          <motion.img
            initial={{ opacity: 0, scale: 0.6 }}
            animate={{
              opacity: 1,
              scale: 1,
              transition: {
                duration: 1,
              },
            }}
            src={media}
            className="xl:h-[700px] object-cover"
          />
        </div>

        {/* column 2 */}
        <div className=" hidden xl:inline mt-12 w-[200px] xl:h-[100px] text-center ml-6 xl:rotate-[270deg] text-[30px] mr-auto">
          <p>
            <SectionSlate initialValue={subtitle} previewMode />
          </p>
          <div className=" h-[2px] w-[120px] m-auto bg-[white] " />
        </div>

        {/* column 3 */}
        <motion.div
          initial={{ x: 600, opacity: 0 }}
          animate={{ x: 0, opacity: 1, transition: { duration: 1.3 } }}
          className=" gap-y-12 mt-10 w-[100%]"
        >
          <div className=" xl:w-[80%]">

            <p className="tracking-wider xl:text-4xl" style={{ textShadow: '3px 3px 3px gray' }}>
              <SectionSlate initialValue={title} previewMode />
            </p>

            <p className=" mt-12 text-sm xl:text-2xl">
              <SectionSlate initialValue={pargraph} previewMode />
            </p>
            <p className=" text-gray-400 xl:text-xl text-md mt-12 uppercase tracking-wider"> recent partners</p>

            <ul className="list-none flex flex-wrap xl:gap-x-12 gap-4 mt-8 ml-[-52px] text-md xl:text-xl">
              <li className=" flex items-center gap-x-2  xl:gap-x-2">
                <GoPrimitiveDot className=' xl:text-xl text-lg ' /> <SectionSlate initialValue={subtitle} previewMode />
              </li>

              <li className=" flex items-center gap-x-2  xl:gap-x-2">
                <GoPrimitiveDot className=' xl:text-xl text-lg ' /> <SectionSlate initialValue={subtitle} previewMode />
              </li>

              <li className=" flex items-center gap-x-2  xl:gap-x-2">
                <GoPrimitiveDot className=' xl:text-xl text-lg ' /> <SectionSlate initialValue={subtitle} previewMode />
              </li>
              <li className=" flex items-center gap-x-2  xl:gap-x-2">
                <GoPrimitiveDot className=' xl:text-xl text-lg ' /> <SectionSlate initialValue={subtitle} previewMode />
              </li>

              <li className=" flex items-center gap-x-2 xl:gap-x-2">
                <GoPrimitiveDot className=' xl:text-xl text-lg ' /> <SectionSlate initialValue={subtitle} previewMode />
              </li>
            </ul>
          
          </div>
          <div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
