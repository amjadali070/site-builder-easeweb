import { motion } from 'framer-motion'
import { SectionSlate } from '../../../../../../components/editor'
import { AboutUsSection } from '../../types'

export default function VariantNine({ section }: { section: AboutUsSection }) {
  const title = section.variables.find(variable => variable.name === 'TITLE')?.data
  const pargraph = section.variables.find(variable => variable.name === 'PARAGRAPH')?.data
  const media = section.variables.find(variable => variable.name === 'MEDIA')?.data

  return (
    <motion.div className="grid lg:grid-cols-3 xl:grid-cols-3 grid-cols-1 h-full overflow-hidden ">
      <motion.div className=" w-[900px] ">
        <motion.img
          initial={{ width: '1700px' }}
          whileInView={{
            width: '550px',
            transition: {
              duration: 2,
              delay: 0.3,
            },
          }}
          src={media}
          className="w-full lg:h-screen xl:h-screen h-[300px] object-cover "
        />
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{
          opacity: 1,
          transition: {
            duration: 1,
            delay: 2,
          },
        }}
        className=" text-center my-12 lg:my-0 lg:w-[500px] xl:w-[500px] gap-y-4 flex flex-col items-center justify-center"
      >
        <h1>
          <SectionSlate initialValue={title} previewMode />
        </h1>
        <h1 className=" tlg:ext-xl xl:ext-xl">
          <SectionSlate initialValue={pargraph} previewMode />
        </h1>
        <button className="rounded-3xl mt-4 lg:w-[50%] xl:w-[50%] w-[40%] bg-black border-2  text-white lg:px-6 xl:px-6 px-3 lg:text-xl xl:text-xl lg:py-3 xl:py-3 py-1 hover:bg-white hover:border-2 border-black hover:text-black font-semibold transition-all duration-300">
          <SectionSlate initialValue={pargraph} previewMode />
        </button>
      </motion.div>
      <motion.div className=" w-[900px]">
        <motion.img
          initial={{ width: '1000px' }}
          whileInView={{
            width: '650px',
            transition: {
              duration: 2,
              delay: 0.2,
            },
          }}
          src={media}
          className="w-[100%] lg:h-screen xl:h-screen h-[300px] absolute lg:right-0 xl:right-0 object-cover"
        />
      </motion.div>
    </motion.div>
  )
}
