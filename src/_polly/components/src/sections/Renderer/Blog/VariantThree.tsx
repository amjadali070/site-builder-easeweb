import { motion } from "framer-motion";
import { SectionSlate } from '../../../../../../components/editor'
import { BlogSection as BlogSectionType } from '../../types'

export default function VariantThree({ section }: { section: BlogSectionType }) {
  const title = section.variables.find(variable => variable.name === 'TITLE')?.data
  const subtitle = section.variables.find(variable => variable.name === 'SUBTITLE')?.data
  const paragraph = section.variables.find(variable => variable.name === 'PARAGRAPH')?.data
  const media = section.variables.find(variable => variable.name === 'MEDIA')?.data
  return (
    <div className="bg-[#E4E1DF] lg:px-[100px] md:px-[50px] px-3 py-3 lg:py-6">
      <h1 className="lg:text-8xl text-5xl lg:text-left text-center font-sub font-bold py-5 lg:py-14">
        <span>
          <SectionSlate initialValue={title} previewMode />
        </span>
      </h1>
      {/* hero1 */}
      <div className="hero lg:py-8">
        <div className="hero-content grid grid-cols-1 lg:grid-cols-3 items-end ">
          <motion.div
            initial={{ x: 200 }}
            whileInView={{ x: 0 }}
            transition={{ type: "spring", stiffness: 80 }}
            viewport={{ once: true }}
            className="mb-2 lg:mb-9 md:mb-5  lg:text-left"
          >
            <h1 className="text-4xl font-sub font-bold uppercase">
              <SectionSlate initialValue={subtitle} previewMode />
            </h1>
            <p className="py-6 lg:pr-4">
              <SectionSlate initialValue={paragraph} previewMode />
            </p>
          </motion.div>

          <motion.img
            initial={{ x: 200 }}
            whileInView={{ x: 0 }}
            transition={{ type: "spring", stiffness: 80 }}
            viewport={{ once: true }}
            src={media}
            className="lg:w-[1470px] lg:h-[814px] md:h-full md:w-full rounded-md pr-0 xl:pr-14 lg:pr-14 md:pr-10 justify-end col-span-2"
          />

        </div>
      </div>
    </div>
  );
};

