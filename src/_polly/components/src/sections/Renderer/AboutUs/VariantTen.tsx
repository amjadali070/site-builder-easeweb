
import { AboutUsSection as AboutUsSectionType } from '../../types'
import { SectionSlate } from '../../../../../../components/editor'
import { motion } from "framer-motion";
import { useContext } from 'react';
import { WebsiteContext } from '../../../../../../components/context/WebsiteContext';


interface VariantFourProps {
  section: AboutUsSectionType
}


export default function VariantTen({ section }: VariantFourProps) {

  const websiteContext = useContext(WebsiteContext)

  // const title = section.variables.find(variable => variable.name === 'TITLE')?.data
  const subTitle = section.variables.find(variable => variable.name === 'SUBTITLE')?.data
  const subTitle2 = section.variables.find(variable => variable.name === 'SUBTITLE2')?.data
  const paragraph = section.variables.find(variable => variable.name === 'PARAGRAPH')?.data
  const paragraph2 = section.variables.find(variable => variable.name === 'PARAGRAPH_2')?.data
  const media = section.variables.find(variable => variable.name === 'MEDIA')?.data
  return (
    <header className="h-[65vh] md:h-[120vh]  xl:h-[140vh] lg:h-section">
      <div className='flex justify-center  py-[20px] lg:py-[100px]'>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          variants={{ 0: { opacity: 0 }, 1: { opacity: 1 } }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className=" mt-5  lg:mr-24 grid  grid-cols-1 xl:grid-cols-1 lg:grid-cols-1 md:grid-cols-1  -gap-[60px] p-[2rem] "
        >

          <motion.div
            className=""
            initial={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ x: 100 }}
          >
            <div className="grid grid-cols-2 gap-6">
              <div className="flex flex-col xl:leading-7 uppercase tracking-wider items-start">
                <h1 className="font-semibold mb-2">{<SectionSlate initialValue={subTitle} previewMode />}</h1>
                <p className="text-[12px] font-black">{<SectionSlate initialValue={paragraph} previewMode />}</p>
              </div>
              <div className="flex flex-col xl:leading-7 uppercase  items-start">
                <h1 className="font-semibold mb-2">{<SectionSlate initialValue={subTitle2} previewMode />}</h1>
                <p className="text-[12px] font-black">{<SectionSlate initialValue={paragraph2} previewMode />}</p>
              </div>
            </div>
          </motion.div>
          <div className="relative mt-5 w-[300px] h-[200px] lg:w-[1100px] lg:h-[600px]">
            <img src={media} className="h-full  w-full object-cover object-center bg-black" />

            {websiteContext.dropValue.length<6 ?
             <p className="absolute text-[black] uppercase font-bold -right-[6.2rem]  xl:-right-[22rem] lg:-right-[22rem] tracking-wide z-10  scale-[-1] text-[5rem]  xl:text-[16rem] lg:text-[16rem]  md:text-[12rem] top-12  xl:top-28 lg:top-28  md:top-[130px] rotate-[90deg]">info</p> 
             :
             <p className="absolute text-[black] uppercase font-bold -right-[10.7rem]  xl:-right-[30rem] lg:-right-[30rem] tracking-wide z-10  scale-[-1] text-[3.5rem]  xl:text-[10rem] lg:text-[10rem]  md:text-[6rem] top-3  xl:top-20 lg:top-20  md:top-[130px] rotate-[90deg]">about us</p>
            }
            
          </div>
        </motion.div>

        <motion.div
          className=" border-l-4 xl:border-l-8 border-black lg:border-l-4 mb-7 xl:mb-7 mt-12 xl:mt-11  xl:pl-32 ml:auto"
          initial={{ opacity: 0, x: 100 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ x: 100 }}
        >
        </motion.div>
      </div>
    </header>
  );
};

