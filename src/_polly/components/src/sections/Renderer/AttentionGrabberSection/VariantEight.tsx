import { SectionSlate } from '../../../../../../components/editor'
import { AttentionGrabberSection } from '../../types'
import { motion } from "framer-motion";
import { GiKnifeFork } from "react-icons/gi";

export default function VariantEight({ section }: { section: AttentionGrabberSection }) {

  const title = section.variables.find(variable => variable.name === 'TITLE')?.data
  const subTitle = section.variables.find(variable => variable.name === 'SUBTITLE')?.data
  const paragraph = section.variables.find(variable => variable.name === 'PARAGRAPH')?.data
  const media = section.variables.find(variable => variable.name === 'MEDIA')?.data

  return (
    <div className="bg-black relative mx-auto">
      <div
        className="overflow-hidden flex items-center bg-cover object-cover bg-no-repeat bg-black m-0 h-[500px] w-full lg:w-full lg:h-screen text-center"
        style={{
          backgroundImage: media ? `url(${media})` : '',
        }}
      >

        <div className="hero-overlay bg-black/40 h-[500px] w-full lg:w-full lg:h-screen">
          <div className="hero-content text-center text-neutral-conten">
            <motion.div
              initial={{ y: 200 }}
              whileInView={{ y: -40 }}
              transition={{ type: "spring", stiffness: 100 }}
              viewport={{ once: true }}
            >
              <div className="py-[50px] mt-[20px] lg:mt-[200px]">
                <h1 className="text-[32px] lg:text-5xl text-yellow-300 font-bold font-head">
                  {<SectionSlate initialValue={title} previewMode />}
                </h1>
                <h1 className="my-5 text-[24px] lg:text-4xl font-sub uppercase text-white">
                  {<SectionSlate initialValue={subTitle} previewMode />}
                </h1>
                <div className="text-primary flex w-8/12 mx-auto items-center">
                  <div className="w-full text-yellow-300">
                    <div className="ml-1 bg-white h-[2px] mb-1"></div>
                    <div className="bg-white h-[2px]"></div>
                  </div>
                  <span className="text-3xl lg:text-5xl text-yellow-300">
                    <GiKnifeFork></GiKnifeFork>
                  </span>
                  <div className="w-full text-yellow-300">
                    <div className="mr-1 bg-white h-[2px] mb-1"></div>
                    <div className="bg-white h-[2px]"></div>
                  </div>
                </div>
                <div className="text-white leading-7 text-center mt-12">
                  <SectionSlate initialValue={paragraph} previewMode />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};
