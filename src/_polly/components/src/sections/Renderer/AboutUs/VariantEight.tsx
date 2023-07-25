import { AnimatePresence, motion } from 'framer-motion'
import { useState } from 'react'
import { AiFillCaretDown, AiFillCaretUp } from 'react-icons/ai'
import { SectionSlate } from '../../../../../../components/editor'
import { AboutUsSection as AboutUsSectionType } from '../../types'
export default function VariantEight({ section }: { section: AboutUsSectionType }) {
  const title = section.variables.find(variable => variable.name === 'TITLE')?.data
  const pargraph = section.variables.find(variable => variable.name === 'PARAGRAPH')?.data
  const [active1, setActive1] = useState(false)
  const [active2, setActive2] = useState(false)
  const [active3, setActive3] = useState(false)

  const toggle1 = () => {
    setActive1(prevState => !prevState)
  }
    const toggle2 = () => {
      setActive2(prevState => !prevState)
  }
    const toggle3 = () => {
      setActive3(prevState => !prevState)
  }

  return (
    <div className=" bg-[#000000dc] w-[100%] text-[#ffffffda]  ">
      <div className="grid xl:grid-cols-3 lg:grid-cols-3 grid-cols-2 py-12 px-6 justify-between">
        <div className=" flex flex-col justify-center xl:gap-y-7 lg:gap-y-7 gap-y-5 px-5 col-span-1 h-[300px]">
          <h1>
            <SectionSlate initialValue={title} previewMode />
          </h1>
          <h1 className='text-lg text-gray-300'>
            <SectionSlate initialValue={pargraph} previewMode />
          </h1>
          <button className=' rounded-3xl  xl:w-[35%] lg:w-[35%] bg-gray-300 capitalize font-semibold text-black xl:text-2xl lg:text-2xl py-2 '> for more </button>
        </div>

        <div className="col-span-2 xl:w-[90%]  border xl:h-[500px] xl:py-2 py-7 "  style={{boxShadow:"2px 3px  2px grey"}}> 
          <div className="flex flex-col m-auto  xl:px-16 lg:px-16 mt-3 p-4 ">
            <h2 className="flex items-center  border-b-[1px]  border-gray-700  justify-between">
              <h1 className=" text-center  xl:text-3xl  text-xl lg:text-3xl capitalize py-2 font-semibold">
                <SectionSlate initialValue={title} previewMode />
              </h1>
              <button
                className="py-6 xl:text-3xl  text-sm  lg:text-3xl box-border appearance-none cursor-pointer focus:outline-none flex items-center justify-between"
                onClick={toggle1}
              >
                {active1 ? <AiFillCaretUp /> : <AiFillCaretDown />}
              </button>
            </h2>
            <AnimatePresence>
              {active1 && (
                <motion.div
                  initial="collapsed"
                  animate="open"
                  whileTap="open"
                  variants={{
                    open: { opacity: 1, height: 'auto' },
                    collapsed: { opacity: 0, height: 0 },
                  }}
                  className=" xl:text-2xl lg:text-2xl  text-sm px-2 overflow-auto text-black bg-gray-100 border-2 border-gray-50 py-12  transition-max-height duration-700 ease-in-out"
                >
                  <SectionSlate initialValue={pargraph} previewMode />
                </motion.div>
              )}
            </AnimatePresence>
          </div>
          <div className="flex flex-col m-auto  xl:px-16 lg:px-16 mt-3 p-4 ">
            <h2 className="flex items-center  border-b-[1px]  border-gray-700  justify-between">
              <h1 className=" text-center  xl:text-3xl  text-sm lg:text-3xl capitalize py-2 font-semibold">
                <SectionSlate initialValue={title} previewMode />
              </h1>
              <button
                className="py-6 xl:text-3xl  text-sm lg:text-3xl box-border appearance-none cursor-pointer focus:outline-none flex items-center justify-between"
                onClick={toggle2}
              >
                {active2 ? <AiFillCaretUp /> : <AiFillCaretDown />}
              </button>
            </h2>
            <AnimatePresence>
              {active2 && (
                <motion.div
                  initial="collapsed"
                  animate="open"
                  whileTap="open"
                  variants={{
                    open: { opacity: 1, height: 'auto' },
                    collapsed: { opacity: 0, height: 0 },
                  }}
                  className=" xl:text-2xl lg:text-2xl text-sm px-2 overflow-auto text-black bg-gray-100 border-2 border-gray-50 py-12  transition-max-height duration-700 ease-in-out"
                >
                  <SectionSlate initialValue={pargraph} previewMode />
                </motion.div>
              )}
            </AnimatePresence>
          </div>
          <div className="flex flex-col m-auto  xl:px-16 lg:px-16 mt-3 p-4 ">
            <h2 className="flex items-center  border-b-[1px]  border-gray-700  justify-between">
              <h1 className=" text-center  xl:text-3xl  text-sm lg:text-3xl capitalize py-2 font-semibold">
                <SectionSlate initialValue={title} previewMode />
              </h1>
              <button
                className="py-6 xl:text-3xl  text-sm lg:text-3xl box-border appearance-none cursor-pointer focus:outline-none flex items-center justify-between"
                onClick={toggle3}
              >
                {active3 ? <AiFillCaretUp /> : <AiFillCaretDown />}
              </button>
            </h2>
            <AnimatePresence>
              {active3 && (
                <motion.div
                  initial="collapsed"
                  animate="open"
                  whileTap="open"
                  variants={{
                    open: { opacity: 1, height: 'auto' },
                    collapsed: { opacity: 0, height: 0 },
                  }}
                  className=" xl:text-2xl lg:text-2xl text-sm px-2 overflow-auto text-black bg-gray-100 border-2 border-gray-50 py-12  transition-max-height duration-700 ease-in-out"
                >
                  <SectionSlate initialValue={pargraph} previewMode />
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  )
}
