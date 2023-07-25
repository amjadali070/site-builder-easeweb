import { motion } from 'framer-motion'
import { GallerySection } from '../../types'
const viewVariants = {
  offscreen: {
    y: 100,
  },
  onscreen: {
    y: 0,
    transition: {
      duration: 0.5,
      delay: 0.2,
      ease: [0, 0.71, 0.2, 1.01],
    },
  },
}
const viewImgVariants = {
  offscreen: {
    opacity: 0.1,
  },
  onscreen: {
    opacity: 1,
    transition: {
      duration: 1,
      delay: 0.8,
      ease: [0, 0.71, 0.2, 1.01],
    },
  },
}
const viewport = { once: true, amount: 0.5 }

function VariantFourteen({ section }: { section: GallerySection }) {
  return (
    <>
      <div className="py-8 px-6 lg:px-12">
        <div className="pt-12 space-y-6 lg:space-y-12">
          {section?.variables?.map((data, i) => (
            <div key={data?.id} className="lg:grid lg:grid-cols-[58%_42%] py-12 space-y-10 lg:space-y-0">
              <motion.div
                className={`${i % 2 !== 0 && 'lg:order-last'}`}
                initial="offscreen"
                whileInView="onscreen"
                viewport={viewport}
              >
                <motion.div variants={viewVariants}>
                  <div className="md:pt-12 space-y-4 lg:max-w-[600px] m-auto">
                    <button className={`text-sm border border-black px-[5px] py-px rounded-lg`}>
                      {data?.data?.title}
                    </button>
                    <p className="text-[20px] md:text-2xl">{data?.data?.description}</p>
                  </div>
                </motion.div>
              </motion.div>
              <motion.div initial="offscreen" whileInView="onscreen" viewport={viewport}>
                <motion.div variants={viewImgVariants}>
                  <div>
                    <img className="w-full rounded-xl" src={data?.data?.url} alt="" />
                  </div>
                </motion.div>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export default VariantFourteen
