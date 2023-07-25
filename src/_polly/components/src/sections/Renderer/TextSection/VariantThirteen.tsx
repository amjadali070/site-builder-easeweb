import { TextSectionMediaGroup, TextSection } from '../../types'
import { Swiper, SwiperSlide } from 'swiper/react'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/free-mode'
import 'swiper/css/pagination'

// import required modules
import { FreeMode, Pagination } from 'swiper'
import { SectionSlate } from '../../../../../../components/editor'
export default function VariantThirteen({ section }: { section: TextSection }) {
  const data = section.variables.find(variable => variable.name === 'MEDIAGROUP')?.data as TextSectionMediaGroup[]
  const title = section.variables.find(variable => variable.name === 'TITLE')?.data
  const paragraph = section.variables.find(variable => variable.name === 'PARAGRAPH')?.data
  return (
    <div className=" flex flex-col xl:p-4 my-[90px] xl:h-screen  w-[100%]">
      <div className="flex flex-col gap-y-6 text-center my-6">
        <h1>
          <SectionSlate initialValue={title} previewMode />
        </h1>
        <p>
          <SectionSlate initialValue={paragraph} previewMode />
        </p>
      </div>
      <Swiper
        slidesPerView={3}
        spaceBetween={20}
        freeMode={true}
        modules={[FreeMode, Pagination]}
        pagination={{ clickable: true }}
        className="mySwiper w-[100%]"
      >
        {data.map(item => {
          return (
            <SwiperSlide
              key={item.id}
              className=" w-[100%] h-[100%] shadow-lg overflow-hidden cursor-pointer border-2 border-gray-200 xl:p-4 p-1 "
            >
              <img
                className="   xl:h-[400px] hover:scale-[1.1] transition-all duration-700  object-cover w-[100%]"
                src={item.image}
                alt={item.name}
              />
            </SwiperSlide>
          )
        })}
      </Swiper>
    </div>
  )
}
