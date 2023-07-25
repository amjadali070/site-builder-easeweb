import { GallerySection } from '../../types'

import SwiperCore, { Autoplay } from "swiper";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";


// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper";

export default function VariantEight({ section }: { section: GallerySection }) {
  return (
    <div className="bg-white py-[20px]">
      <Swiper
        pagination={{
          el: ".my-custom-pagination-div",
          clickable: true,
        }}
        loop={true}
        autoplay={{
          delay: 1500,
          disableOnInteraction: false,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
          <div className="container w-[1200px] max-w-full gap-2">
            {section.variables.map(({ data: { url, alt } }, idx) => (
              <SwiperSlide>
              <div key={idx} style={{ aspectRatio: '4 / 3' }}>
                <img className="object-cover object-center bg-black w-full h-full" src={url} alt={alt} />
              </div>
              </SwiperSlide>
            ))}
          </div>
        

      </Swiper>
    </div>
  )
}; SwiperCore.use([Autoplay]);

