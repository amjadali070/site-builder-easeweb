import { motion } from "framer-motion";
import { AttentionGrabberSection } from '../../types'
import { SectionSlate } from '../../../../../../components/editor'

export default function VariantFourteen({ section }: { section: AttentionGrabberSection }) {
  const title = section.variables.find(variable => variable.name === 'TITLE')?.data
  const media = section.variables.find(variable => variable.name === 'MEDIA')?.data
  return (
    <motion.div
      className="px-[1rem]  w-max-100 py-6 
      
      "
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      variants={{ 0: { opacity: 0 }, 1: { opacity: 1 } }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      exit={{ opacity: 0 }}
    >

      <section
        className="app__home relative
       flex justify-between items-center 
       
       h-100
       xl:h-full lg:h-full md:h-full "
      >
        <div className="m-auto">
          <img src={media}
            className="bg-cover object-cover bg-no-repeat  m-0 h-[500px] w-full lg:w-full lg:h-screen" />
        </div>
        <motion.h1
          initial={{ x: "1200%" }}
          animate={{ x: "-110%" }}
          transition={{ ease: "linear", duration: 7, repeat: Infinity }}
          className="font-mono uppercase leading-8  w-max-100 tracking-wide absolute 
          top-[55%] 
          text-[16px]
          xl:text-7xl
          lg:text-5xl
          md:text-2xl
          "
        >
          <SectionSlate initialValue={title} previewMode />
        </motion.h1>

      </section>
    </motion.div>
  );
};

