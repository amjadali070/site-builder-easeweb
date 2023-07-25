import { GallerySection } from '../../types'
import { motion } from "framer-motion";
import { useEffect, useState } from 'react';

export default function VariantTwelve({ section }: { section: GallerySection }) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slideLength = section.variables.length;

  const nextSlide = () => {
    setCurrentSlide(currentSlide === slideLength - 1 ? 0 : currentSlide + 1);
  };
  const previous = () => {
    setCurrentSlide(currentSlide === 0 ? slideLength - 1 : currentSlide - 1);
  };
  useEffect(() => {
    return setCurrentSlide(0);
  }, []);

  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeIn" }}
        exit={{ opacity: 1 }}
        className="p-[1rem] lg:p-0 lg:py-3"
      >
        <div className="flex flex-col mt-[40px] h-[60vh] xl:h-[110vh] ">
      
      <div className="flex justify-between lg:justify-between text-gray">
        <button className="uppercase m-1 lg:text-2xl lg:ml-6 hover:text-black" onClick={previous}>
          Previous
        </button>

        <button className=" uppercase m-1 lg:text-2xl xl:pr-28 lg:pr-24 hover:text-black" onClick={nextSlide}>
          Next
        </button>
      </div>

      
      <div className=" overflow-hidden relative w-[100%]">
        {section.variables.map(({ data: { url, name, alt } }, idx) => {
          return (
            <>
              
              <motion.div
                key={idx}
                style={{ transition: "all 0.5s ease" }}
                initial={{ x: 100 }}
                animate={{ x: 0 }}
                transition={{ duration: 1, type: "spring" }}
                exit={{ x: -100 }}
                className={
                  idx === currentSlide
                    ? " opacity-1 translate-x-0 "
                    : "absolute top-0 left-0 w-[100%] h-[100%] opacity-0 "
                }
              >
                {idx === currentSlide && (
                  <>
                    <div>
                      <motion.img
                        src={url}
                        alt={alt}
                        className=" h-[40vh] xl:h-[80vh] object-cover object-center bg-black w-full"
                        initial={{ x: 100, opacity: 0.7 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ duration: 1, type: "tween" }}
                        exit={{ x: -100, opacity: 0.8 }}
                      />
                    </div>

                    <div
                      className="flex flex-row xl:flex-row lg:flex-row  justify-between xl:justify-between lg:justify-between"
                      
                    >
                      <div className="xl:ml-4 mt-[15px] lg:mt-[30px]">
                        <h1 className=" uppercase text-3xl lg:text-8xl  font-semibold">{name} </h1>
      
                      </div>
                      <div className="flex xl:mr-28 -mt-[40px] xl:-mt-[90px] lg:-mt-[90px]">
                      <div className='text-[4rem] mt-7 xl:mt-10 lg:mt-10 xl:pl-16 lg:pl-14 xl:text-[10rem] lg:text-[13rem] md:text-[5rem]  flex font-thin'>/</div>
                        <span className="text-[6rem]   xl:text-[13rem] lg:text-[13rem] md:text-[5rem]  flex font-bold ">
                          
                           0 <span className=""> {currentSlide}</span>
                        </span>
                      </div>
                    </div>
                  </>
                )}
              </motion.div>
            </>
          );
        })}
      </div>
    </div>

      
      </motion.div>
    </>
  );
};

