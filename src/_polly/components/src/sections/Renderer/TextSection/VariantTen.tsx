import { TextSection as textsectionTypes } from '../../types'
import { SectionSlate } from '../../../../../../components/editor'
import { motion } from 'framer-motion'

export default function VariantTen({ section }: { section: textsectionTypes }) {
  const title = section.variables.find(variable => variable.name === 'TITLE')?.data
  const subTitle = section.variables.find(variable => variable.name === 'SUBTITLE')?.data
  const media = section.variables.find(variable => variable.name === 'MEDIA')?.data

  return (
    <div className="m-auto mt-5  xl:w-screen w-[90%] ">
      <div
        className="grid xl:grid-cols-2  gap-x-12 
        shadow-xl border-2  m-auto p-8  justify-between"
      >
        <div
          className="bg-white rounded-[30px] py-3 xl:py-0 flex flex-col items-center justify-center border"
          style={{ boxShadow: 'inset 5.71px 8.71px 14px #A1A2A5, inset -8.71px -5.71px 6px #FFFFFF' }}
        >
          {title && (
            <div>
              <p className="text-center mt-8 flex flex-col items-center  xl:font-semibold  text-gray-600">
                {<SectionSlate initialValue={title} previewMode />}
              </p>
            </div>
          )}
          {subTitle && (
            <div>
              <p className="rounded-[30px] xl:px-12 px-6 text-sm py-2 xl:text-2xl font-semibold xl:mt-5 capitalize outline-none">
                {<SectionSlate initialValue={subTitle} previewMode />}
              </p>
            </div>
          )}
          <button
            className=" rounded-[30px] xl:px-12 px-6 xl:py-2 py-1 xl:text-xl text-sm font-semibold xl:mt-12 mt-2 capitalize outline-none"
            style={{ boxShadow: ' inset 12.12px 11.12px 13px #B8BABD, inset -17.12px -17.12px 19px #FFFFFF' }}
          >
            for more
          </button>
        </div>

        <div>
          {media && (
            <div className="rounded-[30px]  overflow-hidden">
              <motion.img
                whileHover={{
                  scale: 1.1,
                  transition: {
                    duration: 1,
                  },
                }}
                src={media}
                className="flex-1 xl:mt-0 mt-10 w-[100%] transition duration-500
                hover:brightness-90 object-cover rounded-[30px] ml-auto"
              />
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
