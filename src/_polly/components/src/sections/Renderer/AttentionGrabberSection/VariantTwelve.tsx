import { motion } from 'framer-motion'
import { BsFillTelephonePlusFill, BsTwitter } from 'react-icons/bs'
import { MdOutlineEmail } from 'react-icons/md'
import { SectionSlate } from '../../../../../../components/editor'
import { AttentionGrabberSection } from '../../types'

export default function VarianTwelve({ section }: { section: AttentionGrabberSection }) {
  const title = section.variables.find(variable => variable.name === 'TITLE')?.data
  const subtitle = section.variables.find(variable => variable.name === 'SUBTITLE')?.data
  const media = section.variables.find(variable => variable.name === 'MEDIA')?.data

  return (
    <>
      <div
        className="bg-cover bg-no-repeat bg-center h-[400px] xl:h-screen"
        style={{ background: media ? `url(${media}) no-repeat ` : '', backgroundSize: '100% 100%' }}
      >
        <div className=" bg-[#0000005c]  flex flex-col justify-center items-center h-[100%] w-[100%]">
          <motion.div
            initial={{ y: -1000 }}
            animate={{
              y: 0,
              transition: {
                duration: 1.2,
              },
            }}
            className="border-2 rounded-[10px] py-4 xl:w-[600px] w-[300px] xl:h-[280px]  justify-center items-center  border-[#eee] flex flex-col"
          >
            {title && (
              <motion.div className="text-[white] ">
                <SectionSlate initialValue={title} previewMode />
              </motion.div>
            )}

            {subtitle && (
              <motion.div className="text-[white] xl:mt-6 mt-2 ">
                <SectionSlate initialValue={subtitle} previewMode />
              </motion.div>
            )}
            <div className="mr-7 xl:mt-4 ">
              <ul className=" flex text-[#211e1e] xl:text-[28px]  justify-center items-center list-none gap-x-5 mt-3">
                <motion.li
                  initial={{ scale: 1 }}
                  whileHover={{ scale: 1.2, transition: { duration: 1 } }}
                  className=" bg-[white] rounded-full p-2 cursor-pointer  transition duration-300   "
                  style={{ boxShadow: 'inset 17.12px 17.12px 19px white, inset -17.12px -17.12px 19px gray' }}
                >
                  <BsTwitter />
                </motion.li>
                <motion.li
                  initial={{ scale: 1 }}
                  whileHover={{ scale: 1.2, transition: { duration: 1 } }}
                  className=" bg-[white] rounded-full p-2 cursor-pointer  transition duration-300  "
                  style={{ boxShadow: 'inset 17.12px 17.12px 19px white, inset -17.12px -17.12px 19px gray' }}
                >
                  <MdOutlineEmail />
                </motion.li>
                <motion.li
                  initial={{ scale: 1 }}
                  whileHover={{ scale: 1.2, transition: { duration: 1 } }}
                  className=" bg-[white] rounded-full p-2 cursor-pointer  transition duration-300  "
                  style={{ boxShadow: 'inset 17.12px 17.12px 19px white, inset -17.12px -17.12px 19px gray' }}
                >
                  <BsFillTelephonePlusFill />
                </motion.li>
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </>
  )
}
