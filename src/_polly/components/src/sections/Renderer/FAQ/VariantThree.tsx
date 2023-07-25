// import { data } from "../../contstants";

import { FcPicture } from "react-icons/fc";
import { FAQSection, FAQSectionItem } from '../../types'
import { motion } from "framer-motion";

export default function VariantThree({ section }: { section: FAQSection }) {
  const title = section.variables.find(variable => variable.name === 'TITLE')?.data
  const faqs = section.variables.find(variable => variable.name === 'ITEMS')?.data as FAQSectionItem[]
  
  return (
    <div className="">
    <div className="container mx-auto lg:py-[100px]">
    <div className=" h-[95vh] md:h-[70vh] xl:h-section lg:h-section">
      <div className="flex  items-center justify-center ">
        <h1 className=" text-[25px] lg:text-[3rem]  xl:text-h1 font-title  tracking-wider">
          {title}
          <div className="w-[60px] mt-2 ml-[30%]  lg:ml-[40%] xl:ml-[40%] bg-lightpurple h-[1px] md:ml-[40px] ">
          </div>

        </h1>
      </div>
      <div className="flex  justify-center items-center ">
        <div className="grid grid-cols-2 xl:grid-cols-3  lg:grid-cols-3  gap-3 xl:gap-10 mt-10 text-center">
          {faqs.map((items) => {
            return (
              <motion.div
                initial={{ x: -40, opacity: 0.6 }}
                whileInView={{ x: 0, opacity: 1 }}
                exit={{ x: 0 }}
                transition={{ duration: 3, type: "spring" }}
                key={items.id}
                className=" xl:w-[250px] lg:w-[250px]  flex flex-col justify-between items-center mt-10 "
              >
                <div className="w-[80px] flex shadow-main items-center justify-center  rounded-[50%] p-4 bg-[#eee]">
                  {/* <img
                    src={<FcPicture />}
                    className="bg-white  border-2 rounded-[50%] p-1"
                  /> */}
                  <FcPicture className="text-[40px] text-[#333]"/>
                </div>
                <h2 className=" font-semibold text-lg py-1">{items.title} </h2>
                <p className="text-sm text-[gray] h-[50px]">{items.description} </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
    </div>
    </div>
  );
};

