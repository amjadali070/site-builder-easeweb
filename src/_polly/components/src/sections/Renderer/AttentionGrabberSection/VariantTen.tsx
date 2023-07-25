import { AnimatePresence, motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import { SectionSlate } from '../../../../../../components/editor'
import { AttentionGrabberSection } from '../../types'

export default function VariantTen({ section }: { section: AttentionGrabberSection }) {
  const title = section.variables.find(variable => variable.name === 'TITLE')?.data
  const subTitle = section.variables.find(variable => variable.name === 'SUBTITLE')?.data
  const paragraph = section.variables.find(variable => variable.name === 'PARAGRAPH')?.data
  const media = section.variables.find(variable => variable.name === 'MEDIA')?.data

  const text = ['brand vision', 'design culture ', 'teaching browss']
  const [activeIndex, setActiveIndex] = useState(0)
  useEffect(() => {
    const interval = setInterval(
      () => setActiveIndex(prevState => (prevState + 1 === text.length ? 0 : prevState + 1)),
      4000,
    )
    return () => {
      clearInterval(interval)
    }
  }, [])
  return (
    <div className="lg:mx-auto lg:py-[50px]">
      <motion.section className="bg-main p-[2rem]  mt-10 ">
        <motion.div>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            variants={{
              visible: { opacity: 1, scale: 1 },
              hidden: { opacity: 0, scale: 0 },
            }}
            className=" uppercase text-center flex flex-col justify-center 
          items-center"
          >
            <motion.p className=" tracking-widest ">
              <SectionSlate initialValue={subTitle} previewMode />
            </motion.p>
            <AnimatePresence exitBeforeEnter>
              {
                text.map(index => (
                  <motion.div
                    className=" text-4xl xl:text-8xl lg:text-8xl uppercase mt-7  font-head drop-shadow-xl shadow-[#eeee] p-4"
                    key={index}
                    initial={{ y: -50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: -40, opacity: 0 }}
                    transition={{ duration: 0.2, type: 'tween' }}
                  >
                    <div>
                      <SectionSlate initialValue={title} previewMode />
                    </div>
                  </motion.div>
                ))[activeIndex]
              }
            </AnimatePresence>
          </motion.div>
        </motion.div>

        <div className="flex items-center justify-center lg:mt-4 lg:mr-10">
          <div>
            <img src={media} alt="" className="h-auto w-screen object-cover object-center" />
          </div>
        </div>

        <div>
          <p
            className=" font-semibold pt-[10px] 
         text-[10px]
          xl:text-sm
          xl:pt-[33px] uppercase leading-15 tracking-wider text-center"
          >
            <SectionSlate initialValue={paragraph} previewMode />
          </p>
        </div>
      </motion.section>
    </div>
  )
}
