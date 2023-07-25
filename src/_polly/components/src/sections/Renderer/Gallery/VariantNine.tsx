import { GallerySection } from '../../types'

export default function VariantNine({ section }: { section: GallerySection }) {
  return (
    <div
      className="app__home mt-[50px] pb-[80px] pt-[20px] 
       border-t-2 border-black flex flex-col items-center justify-center">

      <div className="app__home-header">
        <p className=" uppercase text-center  font-semibold lg:text-[40px]">
          Our Clients. here are some on the vip list .
        </p>
      </div>

      <div
        className=" grid grid-rows-3 gap-7 xl:gap-4 lg:gap-4 md:gap:5
         grid-cols-2 xl:grid-cols-5  mt-10
         justify-center m-auto">

        {section.variables.map(({ data: { url, alt } }, idx) => {
          return (
            <div key={idx} className="flex items-center justify-center">
              <img
                src={url}
                className=" w-[80px]  xl:w-[40%] lg:w-[40%] md:w-[40%]"
                alt={alt}
              />
            </div>
          );
        })}

      </div>

    </div>
  );
};

