import { SectionSlate } from '../../../../../../components/editor'
import { TextSection, TextSectionMediaGroup } from '../../types'
import { Swiper, SwiperSlide } from 'swiper/react'

import 'swiper/css'
import 'swiper/css/navigation'
import { Autoplay, Pagination } from 'swiper'

function VariantTwelve({ section }: { section: TextSection }) {
  const title = section.variables.find(variable => variable.name === 'TITLE')?.data
  const subtitle = section.variables.find(variable => variable.name === 'SUBTITLE')?.data
  const data = section.variables.find(variable => variable.name === 'MEDIAGROUP')?.data as TextSectionMediaGroup[]
  return (
    <div className="h-full flex flex-col justify-center items-center gap-y-4 py-12 w-full">
      <div>
        <SectionSlate initialValue={subtitle} previewMode />
      </div>
      <div>
        <SectionSlate initialValue={title} previewMode />
      </div>
      <div className="w-[70%] mt-6 flex items-center justify-center">
        <Swiper
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          modules={[Autoplay, Pagination]}
          className="mySwiper"
        >
          {data.map(item => {
            return (
              <SwiperSlide key={item.id}>
                <img
                  src={item.image}
                  className=" hover:opacity-95 transition-all duration-300 object-cover object-center m-auto"
                />
              </SwiperSlide>
            )
          })}
        </Swiper>
      </div>
    </div>
  )
}

export default VariantTwelve
