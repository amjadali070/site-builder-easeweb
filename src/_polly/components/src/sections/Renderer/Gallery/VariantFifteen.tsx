
import { GallerySection } from '../../types';
import { EffectFade, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
import { Pagination } from "swiper"; 

export default function VariantFifteen({ section }: { section: GallerySection }){
    return (
        <div id="hood" className="bg-[#E4E1DF] px-5 lg:px-10">
          <div>
            <Swiper
              pagination={{
                el: ".my-custom-pagination-div",
                clickable: true,
              }}
              loop={true}
              effect={"fade"}
              navigation={{
                nextEl: ".custom-swiper-button-next",
                prevEl: ".custom-swiper-button-prev",
              }}
              modules={[Pagination, Navigation, EffectFade]}
              className="mySwiper"
            >
              {section.variables.map(({ data: { url, alt,name } }, idx) => (
              <SwiperSlide>
                <div key={idx} className="bg-[#E4E1DF] hero py-6 lg:py-16">
                  <div className="grid grid-cols-1 lg:grid-cols-2">
                    
                  <div className="col-span-1 lg:col-span-0 lg:row-span-3 py-[50px] lg:py-[0px] ">
                    <div className="">
                      <img
                        src={url}
                        alt={alt}
                        className="w-[300px] h-[300px] lg:w-[976px] lg:h-[976px] object-cover"
                      />
                      </div>
                    </div>
                    <div className="w-4/12 lg:w-4/6  flex flex-col lg:ml-36">
                      <div className="w-full lg:flex hidden justify-end">
                        <div className="flex-none w-8/12">
                          <img src={url} 
                          alt={alt}
                          className="w-[0px] lg:w-[434px] lg:h-[578px] h-[0px] object-cover"
                          />
                        </div>
                      </div>
                      <div className="flex justify-end lg:my-7 w-full gap-4">
                        <div className="border border-[#2E4239] text-[#2E4239] cursor-pointer custom-swiper-button-prev p-[6px] rounded-full">
                          <AiOutlineArrowLeft />
                        </div>
                        <div className="border border-[#2E4239] text-[#2E4239] cursor-pointer custom-swiper-button-next p-[6px] rounded-full">
                          <AiOutlineArrowRight />
                        </div>
                      </div>
                    
                    </div>
                    <div className="text-start mt-2 lg:mt-10 px-2  py-2 lg:py-0 lg:px-36">
                        <h1 className="lg:text-4xl text-2xl text-[#2E4239] font-medium uppercase">
                          {name}
                        </h1>
                        <p>
                          {alt}
                        </p>
                      </div>
                 
                  </div>
                </div>
              </SwiperSlide>
             ))}
            </Swiper>
          </div>
        </div>
      );
};

