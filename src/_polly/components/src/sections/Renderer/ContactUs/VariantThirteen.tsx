import { motion } from 'framer-motion'
import { ContactUsSection } from '../../types'

function VariantThirteen({ section }: { section: ContactUsSection }) {
  const title = section.variables.find(variable => variable.name === 'TITLE')?.data
  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          transition: {
            duration: 1,
          },
        }}
        className="my-[50px] xl:w-[50%] lg:w-[60%] px-6 md:px-12"
      >
        <motion.p
          initial={{ opacity: 0, x: -20 }}
          whileInView={{
            opacity: 1,
            x: 0,
            transition: {
              duration: 1,
            },
          }}
          className=" xl:text-[2rem] lg:text-[1.5rem] text-[1.3rem] capitalize tracking-wider"
        >
          {title}
        </motion.p>
        <form className="mt-[50px] flex  flex-col">
          {/* name */}
          <div className=" mt-[20px]">
            <p className="text-[18px]">
              Name <span className="text-[red]"> * </span>
            </p>
            <div className="flex gap-3 w-[100%] ">
              <div className="flex flex-col w-[100%]">
                <input
                  className=" outline-none w-[100%] bg-[#f5f3f3]  border-[1px] border-[#c1c0c0]  p-2 px-5"
                  type="text"
                  id="fname"
                />
                <label htmlFor="fname">First Name</label>
              </div>
              <div className="flex flex-col w-[100%]">
                <input
                  className=" outline-none w-[100%] bg-[#f5f3f3]  border-[1px] border-[#c1c0c0]  p-2 px-5"
                  type="text"
                  id="lname"
                />
                <label htmlFor="lname">Last Name</label>
              </div>
            </div>
          </div>
          {/* email */}
          <div className=" mt-[20px]">
            <p className="text-[18px]">
              Email <span className=" text-[red]"> * </span>
            </p>
            <input
              className=" outline-none w-[100%] bg-[#f5f3f3]  border-[1px] border-[#c1c0c0]  p-2 px-5"
              type="email"
            />
          </div>
          {/* business name */}
          <div className=" mt-[20px]">
            <p className="text-[18px]">
              Business Name <span className=" text-[red]"> * </span>
            </p>
            <input
              type="text "
              className="outline-none w-[100%] bg-[#f5f3f3]  border-[1px] border-[#c1c0c0]  p-2 px-5"
            />
          </div>
          {/*  describe business  */}
          <div className=" mt-[20px]">
            <p className="text-[18px]">
              please describe ypur business.
              <span className=" text-[red]"> * </span>
            </p>
            <textarea
              className="bg-[#f5f3f3] w-[100%] outline-none p-2 mt-3 border-[1px] border-[#c1c0c0]"
              rows={4}
            ></textarea>
          </div>
          {/*  describe projects  */}
          <div className=" mt-[20px]">
            <p className="text-[18px]">
              please describe ypur projects.
              <span className=" text-[red]"> * </span>
            </p>
            <textarea
              className="bg-[#f5f3f3] w-[100%] outline-none p-2 mt-3 border-[1px] border-[#c1c0c0]"
              rows={4}
            ></textarea>
          </div>
          {/* addtional comments  */}
          <div className=" mt-[20px]">
            <p className="text-[18px]">
              addtional comments <span className=" text-[red]"> * </span>
            </p>
            <textarea
              className="bg-[#f5f3f3] w-[100%] outline-none p-2 mt-3 border-[1px] border-[#c1c0c0]"
              rows={4}
            ></textarea>
          </div>

          <button className=" outline-none border-2 border-black p-5  xl:w-[18%] lg:w-[22%] w-[40%] capitalize mt-[30px] text-xl">
            submit
          </button>
        </form>
      </motion.div>
    </>
  )
}

export default VariantThirteen
