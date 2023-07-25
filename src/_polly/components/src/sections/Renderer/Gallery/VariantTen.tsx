import { GallerySection } from '../../types';
import { motion } from "framer-motion";

export default function VariantTen({ section }: { section: GallerySection }) {
  return (
    <div className="text-center leading-10  lg:mt-[100px] xl:mt-0 mx-auto lg:py-[50px]">
      <div className="flex flex-col justify-center items-center">
        <h1 className="text-[25px] lg:text-[3rem] xl:text-h1 font-title  tracking-wider ">
          Clients
        </h1>
        <div className="w-[60px] mt-2 ml-[10px] bg-lightpurple h-[1px]" />
      </div>

      <div className="flex justify-center items-center">
        <motion.div
          initial={{ x: -40, opacity: 0.6 }}
          whileInView={{ x: 0, opacity: 1 }}
          exit={{ x: 0 }}
          transition={{ duration: 2, type: "tween" }}
          className="grid grid-rows-4 grid-cols-3  xl:w-[60%] p-4 gap-[25px] mt-10"
        >
          {section.variables.map(({ data: { url, alt } }, idx) => (

            <div key={idx} className=" row-span-4">
              <div className="row-span-2 mt-7  bg-[#eee]  shadow- justify-center g   flex items-center rounded-[20px]  h-[80px]  xl:h-[100px] lg:h-[100px] md:h-[90px]">
                <img src={url}
                  alt={alt} 
                className='w-[100px] h-[100x] lg:w-[120px] lg:h-[120px] md:w-[100px] md:h-[100px] xl:w-[150px] xl:h-[150px] object-cover flex justify-center items-center' />
              </div>
            </div>
          ))}

        </motion.div>
        <div></div>
      </div>
    </div>
  );
};
