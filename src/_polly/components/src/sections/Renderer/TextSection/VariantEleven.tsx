import { TextSection, TextSectionMediaGroup } from '../../types'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import { Pagination } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'

export default function VariantEleven({ section }: { section: TextSection }) {
  const data = section.variables.find(variable => variable.name === 'MEDIAGROUP')?.data as TextSectionMediaGroup[]
  return (
    <div className=" xl:h-[105vh] text-[silver]  w-[100%] bg-[#000000dc] ">
      <Swiper
        pagination={{
          el: '.my-custom-pagination-div',
          clickable: true,
        }}
        loop={true}
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <div className="container xl:w-[1200px] max-w-full gap-2">
          {data.map((item, idx) => (
            <SwiperSlide>
              <div key={idx} style={{ aspectRatio: '4 / 3' }}>
                <div className=" relative xl:h-[800px] h-[400px]">
                  <img className="object-cover object-center bg-black w-full h-full opacity-70" src={item.image} />
                </div>
                <div
                  className=" absolute  border border-white xl:left-[10%] left-[5%]
                     xl:w-[700px] xl:h-[300px] h-[170px] w-[280px] p-4  xl:p-12 z-1 xl:top-[17%] top-[32%] bg-[#0000006e] "
                >
                  <h1 className=" xl:text-3xl text-white">{item.name}</h1>
                  <p className=" xl:mt-10 mt-3 xl:text-2xl text-[#dedddd]">{item.description}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </div>
      </Swiper>
    </div>
  )
}
