import { GallerySection } from '../../types'
import '../../../css/custom.css'
import { motion } from 'framer-motion'

export default function VariantEleven({ section }: { section: GallerySection }) {
  let indexIdentifier = 0
  return (
    <div
      className=" container mt-5 w-[1300px] mx-auto h-full py-3
     space-y-2 lg:space-y-0 md:grid-col-3 lg:grid lg:gap-3 lg:grid-rows-3 grid-cols-3 "
    >
      {section.variables.map(({ data: { url, alt } }, idx) => {
        if (idx === indexIdentifier) {
          if (indexIdentifier % 1 == 5) {
            indexIdentifier += 1
          } else {
            indexIdentifier += 4
          }
          return (
            <>
              <div key={idx} className="w-full xl:col-span-1 xl:row-span-2 col-span-1 ">
                <img
                  className="object-cover object-center
                   bg-black xl:h-full lg:h-full h-[300px]  lg:w-[100%] xl:w-[100%]
                    transition duration-300 cursor-pointer hover:opacity-75 "
                  src={url}
                  alt={alt}
                />
              </div>
            </>
          )
        } else {
          return (
            <div key={idx} className="xl:col-span-1 xl:row-span-1">
              <motion.img
                className="object-cover object-center bg-black w-full max-h-[100%] 
                   lg:h-full xl:h-full h-[200px] transition duration-300 cursor-pointer  hover:opacity-75"
                src={url}
                alt={alt}
              />
            </div>
          )
        }
      })}
    </div>
  )
}
