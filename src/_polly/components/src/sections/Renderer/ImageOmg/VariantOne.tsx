
import { motion } from "framer-motion";
import { SectionSlate } from '../../../../../../components/editor'
import { ImageOmgSection, ImageOmgItemsGroup } from '../../types'

export default function VariantOne({ section }: { section: ImageOmgSection }) {

  const title = section.variables.find(variable => variable.name === 'TITLE')?.data
  const subtitle = section.variables.find(variable => variable.name === 'SUBTITLE')?.data
  const media = section.variables.find(variable => variable.name === 'MEDIA')?.data
  const items = section.variables.find(variable => variable.name === 'ITEMS')?.data as ImageOmgItemsGroup[]

  return (
    <div className="xl:px-[40px] lg:px-[40px] md:px[30px] px-[0px]  bg-black/80">
      <div className="px-[20px] md:px-[32px] py-12 xl:mr-20 lg:mr-20 md:mr-16">
        <div className="grid lg:grid-cols-[auto_400px] xl:grid-cols-[auto_450px] gap-12">
          <div>
            <motion.div
              initial={{ scale: 1.03 }}
              animate={{ scale: 1 }}
              transition={{ duration: 1 }}
              exit={{ opacity: 0 }}
            >
              <img className="w-full rounded " src={media} />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 200 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, type: "spring" }}
            >
              <div className="text-[#bebebe] mt-[-60px] sm:mt-[-70px] md:mt-[-80px] lg:mt-[-110px] z-50 ">
                <motion.div whileHover={{ opacity: 0.5 }}>

                </motion.div>
                <h3 className="text-[60px] sm:text-[88px] lg:text-[145px] font-neue leading-none">
                  <SectionSlate initialValue={title} previewMode />
                  {/* Tattooed */}
                </h3>
              </div>
            </motion.div>
          </div>

          <div className="text-[#bebebe] space-y-16">
            <div>
              <div>
                <h4 className="text-[16px] xl:text-[20px] font-neuton pb-2 opacity-60">
                  <SectionSlate initialValue={subtitle} previewMode />
                  {/* TECH STACK */}
                </h4>
                <hr className="opacity-20" />
              </div>
              {/* <div>
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, type: "spring" }}
              >
                <div className="flex justify-between items-center py-1 xl:py-4 lg:py-4 md:py-2">
                  <h4 className="text-[24px] xl:text-[34px] font-neuton ">
                    React
                  </h4>
                  <h4 className="text-[18px] xl:text-[20px] font-neuton ">
                    Static Site Generator
                  </h4>
                </div>
              </motion.div>
              <hr className="opacity-20" />
            </div> */}

              {items.map(item => {
                return (
                  <div key={item.id}>
                    <motion.div
                      initial={{ opacity: 0, y: 50 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 1, type: "spring" }}
                    >
                      <div className="flex justify-between items-center py-1 xl:py-4 lg:py-4 md:py-2">
                        <h4 className="text-[24px] xl:text-[34px] font-neuton ">
                          {item.title}
                        </h4>
                        <h4 className="text-[18px] xl:text-[20px] font-neuton ">
                          {item.subtitle}
                        </h4>
                      </div>
                    </motion.div>
                    <hr className="opacity-20" />
                  </div>


                  // <li key={item.id} className="w-[90px] h-[50px]">
                  //   <img
                  //     src={item.title}
                  //     alt={item.subtitle}
                  //     className=" w-[100%] h-[100%] object-cover object-center"
                  //   />
                  // </li>
                )
              })}
              {/* <div>
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, type: "spring" }}
              >
                <div className="flex justify-between items-center py-1">
                  <h4 className="text-[24px] xl:text-[34px] font-neuton ">
                    Tailwind
                  </h4>
                  <h4 className="text-[18px] xl:text-[20px] font-neuton ">
                    CSS Framework
                  </h4>
                </div>
              </motion.div>
              <hr className="opacity-20" />
            </div>
            <div>
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, type: "spring" }}
              >
                <div className="flex justify-between items-center py-1">
                  <h4 className="text-[24px] xl:text-[34px] font-neuton ">
                    Framer Motion
                  </h4>
                  <h4 className="text-[18px] xl:text-[20px] font-neuton ">
                    Animation
                  </h4>
                </div>
              </motion.div>
              <hr className="opacity-20" />
            </div>
            <div>
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, type: "spring" }}
              >
                <div className="flex justify-between items-center py-1">
                  <h4 className="text-[24px] xl:text-[34px] font-neuton ">
                    Sanity
                  </h4>
                  <h4 className="text-[18px] xl:text-[20px] font-neuton ">
                    Headless CMS
                  </h4>
                </div>
              </motion.div>
              <hr className="opacity-20" />
            </div>
            <div>
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, type: "spring" }}
              >
                <div className="flex justify-between items-center py-1">
                  <h4 className="text-[24px] xl:text-[34px] font-neuton ">
                    Vercel
                  </h4>
                  <h4 className="text-[18px] xl:text-[20px] font-neuton ">
                    Hosting
                  </h4>
                </div>
              </motion.div>
              <hr className="opacity-20" />
            </div> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}