import { motion } from 'framer-motion'
import { EffectFade } from 'swiper'
import 'swiper/css'
import 'swiper/css/effect-fade'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import { Swiper, SwiperSlide } from 'swiper/react'
import { TESTIMONIALSection, TESTIMONIALSectionItem } from '../../types'

// import required modules
import { Navigation, Pagination } from 'swiper'

export default function VariantOne({ section }: { section: TESTIMONIALSection }) {
  //   const title = section.variables.find(variable => variable.name === 'TITLE')?.data
  //   const subTitle = section.variables.find(variable => variable.name === 'SUBTITLE')?.data
  const menus = section.variables.find(variable => variable.name === 'ITEMS')?.data as TESTIMONIALSectionItem[]
  const viewport = { once: true, amount: 0.5 }
  const viewImgVariants = {
    offscreen: {
      opacity: 0.1,
      // scale: 0.5,
    },
    onscreen: {
      opacity: 1,
      // scale: 1,
      transition: {
        duration: 1,
        delay: 0.8,
        ease: [0, 0.71, 0.2, 1.01],
      },
    },
  }
  return (
    <>
      <div className="bg-[#20231f] py-6 lg:py-8 px-6">
        <motion.div initial="offscreen" whileInView="onscreen" viewport={viewport}>
          <Swiper
            pagination={{
              el: '.my-custom-pagination-div',
              type: 'fraction',
            }}
            loop={true}
            effect={'fade'}
            navigation={{
              nextEl: '.custom-swiper-button-next',
              prevEl: '.custom-swiper-button-prev',
            }}
            modules={[Pagination, Navigation, EffectFade]}
            className="mySwiper container mx-auto"
          >
            {menus.map(MENU => (
              <SwiperSlide>
                <div className="bg-[#20231f]" key={MENU.id}>
                  <div className="grid lg:grid-cols-2 gap-6">
                    <div className="grid items-between order-last lg:order-none">
                      <div className="pt-12 lg:pt-0 lg:h-full h-96">
                        <div className="lg:flex lg:justify-between pb-4 lg:pb-6">
                          <button
                            className={`hidden lg:block text-sm border border-[#484b47] text-[#8f908e] px-[5px] py-px rounded-lg`}
                          >
                            {MENU.title}
                          </button>
                          <p className="text-[16px] text-[#e9e9e9]">{MENU.subtitle}</p>
                        </div>
                        <p className="text-[16px] md:text-[24px] lg:text-3xl text-white lg:leading-10">
                          {MENU.description}
                        </p>
                      </div>
                      <div className="flex justify-between lg:items-end pt-12 lg:pt-0">
                        <button className="text-white text-[16px] hover:underline custom-swiper-button-prev">
                          Previous
                        </button>
                        <button className="text-white text-[16px] hover:underline  lg:hidden custom-swiper-button-next">
                          Next
                        </button>
                        <div className="hidden lg:flex  space-x-48">
                          <h5 className="text-white my-custom-pagination-div"></h5>
                          <button className="text-white text-[16px] hover:underline z-50 custom-swiper-button-next">
                            Next
                          </button>
                        </div>
                      </div>
                    </div>
                    <motion.div initial="offscreen" whileInView="onscreen" viewport={viewport}>
                      <motion.div variants={viewImgVariants}>
                        <div className="w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] lg:pb-6">
                          <div className="flex justify-between pb-6">
                            <button
                              className={`lg:hidden text-sm border border-[#484b47] text-[#8f908e] px-[5px] py-px rounded-lg`}
                            >
                              {MENU.title}
                            </button>
                            <h5 className="text-white lg:hidden">{MENU.subtitle}</h5>
                          </div>

                          {MENU.image && <img className="w-full h-full rounded-xl" src={MENU.image} alt="" />}
                        </div>
                      </motion.div>
                    </motion.div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>
      </div>
    </>
  )
}
