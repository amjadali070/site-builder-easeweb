import { AboutUsSection as AboutUsSectionType } from '../../types'
import { SectionSlate } from '../../../../../../components/editor'
import { motion, Variants } from 'framer-motion'

interface VariantFiveProps {
  section: AboutUsSectionType
}

export default function VariantFive({ section }: VariantFiveProps) {
  const title = section.variables.find(variable => variable.name === 'TITLE')?.data
  const subTitle = section.variables.find(variable => variable.name === 'SUBTITLE')?.data
  const paragraph = section.variables.find(variable => variable.name === 'PARAGRAPH')?.data
  const buttonOne = section.variables.find(variable => variable.name === 'BUTTON_1')?.data
  const buttonTwo = section.variables.find(variable => variable.name === 'BUTTON_2')?.data

  const cardVariants = (delay: number = 0): Variants => ({
    offscreen: {
      y: 20,
      opacity: 0,
    },
    onscreen: {
      y: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        bounce: 0.3,
        duration: 0.8,
        delay,
      },
    },
  })

  return (
    <div className="bg-[#f2f2f2] bg-cover bg-no-repeat bg-center">
      <div className="container w-[600px] max-w-full px-8 md:px-2 mx-auto py-[60px] md:py-[100px]">
        <motion.div
          className="grid md:grid-cols-[0.4fr_1fr] gap-5 md:gap-20"
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ amount: 0.5 }}
        >
          <div className="h-[max-content]">
            <motion.p variants={cardVariants(0)} className="text-xl uppercase font-bold tracking-[2px]">
              {<SectionSlate initialValue={title} previewMode/>}
            </motion.p>
          </div>

          <div className="space-y-5">
            {subTitle && (
              <div>
                <motion.p variants={cardVariants(0.1)} className="text-lg font-medium">
                  {<SectionSlate initialValue={subTitle} previewMode/>}
                </motion.p>
              </div>
            )}
            {paragraph && (
              <div>
                <motion.p variants={cardVariants(0.2)} className="leading-7">
                  {<SectionSlate initialValue={paragraph} previewMode/>}
                </motion.p>
              </div>
            )}

            {buttonOne && (
              <motion.div
                initial="offscreen"
                whileInView="onscreen"
                viewport={{ amount: 0.8 }}
                className="flex gap-5 flex-wrap pt-3"
              >
                <motion.a
                  variants={cardVariants(0.2)}
                  className="h-11 px-8 bg-black flex justify-center items-center text-white"
                  href={buttonOne.to}
                >
                  {buttonOne.label}
                </motion.a>
                {buttonTwo && (
                  <motion.a
                    variants={cardVariants(0.3)}
                    className="h-11 px-8 border border-black flex justify-center items-center text-black"
                    href={buttonTwo.to}
                  >
                    {buttonTwo.label}
                  </motion.a>
                )}
              </motion.div>
            )}
          </div>
        </motion.div>
      </div>
    </div>
  )
}
