import { SectionSlate } from '../../../../../../components/editor'
import { AttentionGrabberSection } from '../../types'
import { motion } from "framer-motion";

export default function VariantNine({ section }: { section: AttentionGrabberSection }){
    const title = section.variables.find(variable => variable.name === 'TITLE')?.data
    const subTitle = section.variables.find(variable => variable.name === 'SUBTITLE')?.data
    const paragraph = section.variables.find(variable => variable.name === 'PARAGRAPH')?.data
    const media = section.variables.find(variable => variable.name === 'MEDIA')?.data
  return (
    <div className="bg-white py-[10px] mx-auto w-full">
    <motion.div
      className="px-[1rem]  w-max-100  
      
      "
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      variants={{ exit: { opacity: 0 } }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      exit={{ opacity: 0 }}
    >
        <div className="logo text-3xl lg:text-5xl text-bold text-center  uppercase tracking-wider  2xl:visible xl:visible 
       md:visible ">
        {<SectionSlate initialValue={title} previewMode />}
      </div>
      <section
        className="app__home relative
       flex justify-between items-center
       "
      >
          
        <div className="m-auto">
          <img src={media} alt=""
          className="h-full w-full object-cover object-center" />
        </div>

      </section>

      {/* moving text */}
      <motion.div>
        <motion.h1
          initial={{ x: "110%" }}
          animate={{ x: "0%" }}
          transition={{ ease: "linear", duration: 7, repeat: Infinity }}
          className="font-mono uppercase leading-8  w-max-100 tracking-wide absolute 
          top-[40%]
          lg:top-[55%] 
          text-[28px]
          xl:text-7xl
          lg:text-5xl
          md:text-3xl
          "
        >
          {<SectionSlate initialValue={subTitle} previewMode />}
          
        </motion.h1>
        <div className='text-center'>
          {<SectionSlate initialValue={paragraph} previewMode />}
          </div>
      </motion.div>   
    </motion.div>
    </div>
  );
};

// https://strong-clafoutis-392a2e.netlify.app/static/media/girl.a19baa9162e2bc4b9e16.png