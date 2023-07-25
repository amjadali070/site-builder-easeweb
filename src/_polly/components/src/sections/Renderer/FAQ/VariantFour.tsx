import { useState } from 'react'
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai'
import { FAQSection } from '../../types'
import { motion, AnimatePresence } from 'framer-motion'

export default function VariantFour({ section }: { section: FAQSection }) {
  const title = section.variables.find(variable => variable.name === 'TITLE')?.data ?? 'question here '
  const subtitle = section.variables.find(variable => variable.name === 'SUBTITLE')?.data ?? 'question here '
  const [active, setActive] = useState(false)
  const [show, setShow] = useState(false)
  const [accordion, setAccordion] = useState(false)
  const pargraph =
    section.variables.find(variable => variable.name === 'PARAGRAPH')?.data ??
    'ure rem, for pariatur and excepteur velit. Deserunt reprehenderit. Non sunt. Ut natus so veritatis so magnam yet ea. Ut aut for aliquip.'

  const toggle1 = () => {
    setActive(prevState => !prevState)
  }
  const toggle2 = () => {
    setShow(prevState => !prevState)
  }
  const toggle3 = () => {
    setAccordion(prevState => !prevState)
  }
  return (
    <>
      <div className="mt-12 py-[2rem]  gap-y-12   h-screen  p-5 xl:w-[60%] lg:w-[60%]  m-auto ">
        <h1 className=" text-center xl:text-4xl lg:text-4xl text-2xl text-black font-semibold">{title} </h1>
        <div className="flex flex-col m-auto shadow-xl mt-3 p-4 ">
          <h2 className="flex items-center  justify-between">
            <h1 className=" text-center xl:text-3xl lg:text-3xl capitalize py-2 font-semibold">{subtitle}</h1>
            <button
              className="py-6 xl:text-3xl lg:text-3xl text-gray-600 box-border appearance-none cursor-pointer focus:outline-none flex items-center justify-between"
              onClick={toggle1}
            >
              {active ? <AiOutlineMinus /> : <AiOutlinePlus />}
            </button>
          </h2>
          <AnimatePresence>
            {active && (
              <motion.div
                initial="collapsed"
                animate="open"
                whileTap="open"
                variants={{
                  open: { opacity: 1, height: 'auto' },
                  collapsed: { opacity: 0, height: 0 },
                }}
                className=" xl:text-2xl lg:text-2xl text-sm px-2 overflow-auto bg-gray-100 border-2 border-gray-50 py-12  transition-max-height duration-700 ease-in-out"
              >
                <div>{pargraph} </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
        <div className="flex flex-col m-auto shadow-xl mt-3 p-4 ">
          <h2 className="flex items-center  justify-between">
            <h1 className=" text-center xl:text-3xl lg:text-3xl capitalize py-2 font-semibold">{subtitle}</h1>
            <button
              className="py-6 xl:text-3xl lg:text-3xl text-gray-600 box-border appearance-none cursor-pointer focus:outline-none flex items-center justify-between"
              onClick={toggle2}
            >
              {show ? <AiOutlineMinus /> : <AiOutlinePlus />}
            </button>
          </h2>
          <AnimatePresence>
            {show && (
              <motion.div
                initial="collapsed"
                animate="open"
                whileTap="open"
                variants={{
                  open: { opacity: 1, height: 'auto' },
                  collapsed: { opacity: 0, height: 0 },
                }}
                className=" xl:text-2xl lg:text-2xl text-sm px-2 overflow-auto bg-gray-100 border-2 border-gray-50 py-12  transition-max-height duration-700 ease-in-out"
              >
                <div>{pargraph} </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
        <div className="flex flex-col m-auto shadow-xl mt-3 p-4 ">
          <h2 className="flex items-center  justify-between">
            <h1 className=" text-center xl:text-3xl lg:text-3xl capitalize py-2 font-semibold">{subtitle}</h1>
            <button
              className="py-6 xl:text-3xl lg:text-3xl text-gray-600 box-border appearance-none cursor-pointer focus:outline-none flex items-center justify-between"
              onClick={toggle3}
            >
              {accordion ? <AiOutlineMinus /> : <AiOutlinePlus />}
            </button>
          </h2>
          <motion.div>
            {accordion && (
              <motion.div
                initial="collapsed"
                animate="open"
                whileTap="open"
                variants={{
                  open: { opacity: 1, height: 'auto' },
                  collapsed: { opacity: 0, height: 0 },
                }}
                className=" xl:text-2xl lg:text-2xl text-sm px-2 overflow-auto bg-gray-100 border-2 border-gray-50 py-12  transition-max-height duration-700 ease-in-out"
              >
                <div>{pargraph} </div>
              </motion.div>
            )}
          </motion.div>
        </div>
      </div>
    </>
  )
}
