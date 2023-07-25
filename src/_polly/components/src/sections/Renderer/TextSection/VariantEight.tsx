import { SectionSlate } from '../../../../../../components/editor'
import { TextSection as TextSectionType } from '../../types'
import { motion } from "framer-motion";
export default function VariantEight({ section }: { section: TextSectionType }){
    const title = section.variables.find(variable => variable.name === 'TITLE')?.data
    const subTitle = section.variables.find(variable => variable.name === 'SUBTITLE')?.data
    const paragraph = section.variables.find(variable => variable.name === 'PARAGRAPH')?.data
    const media = section.variables.find(variable => variable.name === 'MEDIA')?.data
  return (
    <div className="lg:py-[100px] mx-auto ">
    <div className="mt-[1px] xl:mt-[10px] md:mt-[-100px] lg:mt-[140px] pb-20 xl:pb-0 p-4">
      <motion.div
        initial={{ y: -5, opacity: 0.6 }}
        whileInView={{ y: 0, opacity: 1 }}
        exit={{ y: 0 }}
        transition={{ duration: 2, type: "spring" }}
        className="flex flex-col justify-center items-center"
      >
        <h1 className=" text-[25px] lg:text-[2rem] xl:text-h1 capitalize font-title  tracking-wider ">
        <SectionSlate initialValue={title} previewMode />
        </h1>
        <div className="w-[60px] mt-2 ml-[10px] bg-purple-900 h-[1px]" />
      </motion.div>

      <div
        className="mt-[10px] rounded-[40px] flex flex-col justfy-center 
      items-center m-auto "
      >
        <motion.div
          initial={{ x: 5, opacity: 0.6 }}
          whileInView={{ x: 0, opacity: 1 }}
          exit={{ x: 0 }}
          transition={{ duration: 3, type: "tween" }}
          className="grid grid-cols-2 bg-work shadow mt-10  rounded-[20px] justify-between  xl:w-[60%] bg-slate-50"
        >
          {/* first */}
          <div className="w grid-cols-1 flex flex-col justify-center items-center">
            <h1 className=" tracking-wider text-[8px] lg:text-h1 xl:text-h1 capitalize font-semibold  font-title">
            <SectionSlate initialValue={subTitle} previewMode />
            </h1>
            <h3 className=" capitalize mt-5"> 
            <SectionSlate initialValue={paragraph} previewMode />
            </h3>
            <button className=" font-semibold rounded-[20px] shadow-secondary 
             bg-gray-900 p-2 xl:p-3 xl:px-10 mt-10 text-white">
              view project
            </button>
          </div>
          <div className="grid-cols-1">
            <img src={media}
            alt="image"
             className=" rounded-[20px]  object-cover " />
          </div>
        </motion.div>
             </div>
    </div>
    </div>
  );
};

