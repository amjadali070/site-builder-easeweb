import { motion } from 'framer-motion'
import { SectionSlate } from '../../../../../../components/editor'
import { BlogSection, BlogItemsGroup } from '../../types'
import { Pagination, Autoplay } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/pagination'

export default function VariantTwo({ section }: { section: BlogSection }) {
  const title = section.variables.find(variable => variable.name === 'TITLE')?.data
  const subtitle = section.variables.find(variable => variable.name === 'SUBTITLE')?.data
  const paragraph = section.variables.find(variable => variable.name === 'PARAGRAPH')?.data
  const items = section.variables.find(variable => variable.name === 'ITEMS')?.data as BlogItemsGroup[]

  return (
    <div className=" bg-[black] lg:py-12 h-full w-full py-6 relative">
      <div className=" grid grid-cols-1 lg:grid-cols-5 py-5 lg:px-12 text-[#eee]">
        <motion.div className=" lg:gap-y-12 col-span-3 px-4 lg:px-4  mt-10 w-[100%]">
          <div className=" overflow-hidden  lg:w-[90%]">
            <motion.p
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1, transition: { duration: 1 } }}
              className="lg:text-4xl text-2xl"
            >
              <SectionSlate initialValue={title} previewMode />
            </motion.p>
            <div className="mt-10 w-[90%] flex flex-col tracking-wide text-sm lg:text-2xl gap-y-6  lg:gap-y-12 ">
              <motion.p
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1, transition: { duration: 1, delay: 0.5 } }}
              >
                <SectionSlate initialValue={paragraph} previewMode />
              </motion.p>
              <motion.p
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1, transition: { duration: 1, delay: 0.7 } }}
              >
                <SectionSlate initialValue={paragraph} previewMode />
              </motion.p>
              <motion.p
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1, transition: { duration: 1, delay: 0.9 } }}
              >
                <SectionSlate initialValue={paragraph} previewMode />
              </motion.p>
            </div>
            <div className="lg:mt-24 col-span-1">
              <p className=" text-gray-400 lg:text-lg text-sm mt-12 uppercase tracking-wider"> recent partners</p>
              <div className="lg:mt-12 mt-6">
                <motion.ul
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1, transition: { duration: 1, delay: 1.1 } }}
                  className="list-none flex flex-wrap lg:gap-x-14 gap-3 mt-8 ml-[-30px]"
                >
                  {items.map(item => {
                    return (
                      <li key={item.id} className="w-[90px] h-[50px]">
                        <img
                          src={item.image}
                          alt={item.name}
                          className=" w-[100%] h-[100%] object-cover object-center"
                        />
                      </li>
                    )
                  })}
                </motion.ul>
              </div>
            </div>
          </div>
        </motion.div>
        <div className=" absolute lg:top-28 text-left bottom-28 left-[-100px]  z-10 lg:left-[840px] w-[200px] rotate-[270deg] mt-12  lg:h-[100px] ml-12 lg:rotate-[90deg]">
          <div className="flex gap-x-1 items-center ">
            <p>
              <SectionSlate initialValue={subtitle} previewMode />
            </p>
            <p className=" h-[2px] lg:w-[60px] w-[40px] lg:m-auto bg-[white] " />
          </div>
          <div>
            <p className=" text-[12px]">
              <SectionSlate initialValue={subtitle} previewMode />
            </p>
          </div>
        </div>
        <div className="lg:w-[540px] w-[280px] col-span-1 ml-auto  mt-12 lg:mt-0">
          <Swiper
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            pagination={{
              type: 'fraction',
            }}
            modules={[Pagination, Autoplay]}
          >
            {items.map(item => {
              return (
                <SwiperSlide key={item.id}>
                  <img
                    src={item.image}
                    alt={item.name}
                    className="lg:w-[540px] w-[280px] h-[200px] lg:h-[700px]  hover:opacity-[0.9] hover:scale-105 transition-all duration-500 object-cover object-center cursor-grab"
                  />
                </SwiperSlide>
              )
            })}
          </Swiper>
        </div>
      </div>
    </div>
  )
}
