import { ContactUsSection } from '../../types'
import { AiOutlineMail } from 'react-icons/ai'
import { BsFillTelephoneFill } from 'react-icons/bs'

export default function VariantNine({ section }: { section: ContactUsSection }) {
  const title = section.variables.find(variable => variable.name === 'TITLE')?.data ?? 'contact us'
  const subtitle =
    section.variables.find(variable => variable.name === 'SUBTITLE')?.data ??
    'Be the first to find out about sales, styles and everything between'
  const email = section.variables.find(variable => variable.name === 'EMAIL')?.data ?? 'example@gmail.com'
  const phone = section.variables.find(variable => variable.name === 'PHONE')?.data ?? 'example@gmail.com'

  return (
    <div className=" bg-[#000000dc] py-[4rem] text-[silver]">
      <div className=" py-5 grid xl:grid-cols-2  px-10 text-[#eee]">
        <div className=" flex flex-col xl:w-[80%]   justify-center">
          <div>
            <h1 className=" xl:text-[2rem] text-white">{title}</h1>
            <p className=" xl:text-2xl mt-4">{subtitle}</p>
          </div>
          <div className="xl:mt-12 xl:text-xl flex flex-col gap-y-5 ">
            <p className="flex gap-x-4 items-center">
              <span className=" xl:text-[24px] text-gray-500">
                <AiOutlineMail />
              </span>
              <span>{email}</span>
            </p>
            <p className="flex gap-x-4 items-center">
              <span className=" xl:text-[24px] text-gray-500">
                <BsFillTelephoneFill />
              </span>
              <span> {phone}</span>
            </p>
          </div>
          <div className="flex items-center xl:mt-12 mt-5 gap-x-2 xl:text-xl capitalize text-gray-300">
            <div className="bg-gray-300 xl:w-[40px] w-[10px] h-[1px]" />
            <p> what we should work together ?</p>
          </div>
        </div>

        <>
          <form
            style={{ boxShadow: '1px 3px 7px 2px gray' }}
            className=" xl:px-8 px-2 py-4 xl:py-12 xl:w-[90%] xl:mt-0 mt-12 flex flex-col justify-center items-center gap-12"
          >
            <div className=" flex w-[100%] gap-x-2 xl:gap-x-12">
              <input
                type="text"
                placeholder="first name"
                className="placeholder:text-gray-300  placeholder:text-sm xl:placeholder:text-2xl placeholder:capitalize p-3 border-b-[1px] w-[100%] border-[#eee]  bg-transparent border-b-3 "
              />
              <input
                type="text"
                placeholder="first name"
                className=" placeholder:text-gray-300 placeholder:text-sm xl:placeholder:text-2xl placeholder:capitalize p-3 border-b-[1px] w-[100%] border-[#eee]  bg-transparent border-b-3 "
              />
            </div>
            <div className=" flex w-[100%] gap-x-2 xl:gap-x-12">
              <input
                type="email"
                placeholder="email"
                className=" placeholder:text-gray-300 placeholder:text-sm xl:placeholder:text-2xl placeholder:capitalize p-3 border-b-[1px] w-[100%] border-[#eee]  bg-transparent border-b-3 "
              />
              <input
                type="company"
                placeholder="company"
                className=" placeholder:text-gray-300 placeholder:text-sm xl:placeholder:text-2xl placeholder:capitalize p-3 border-b-[1px] w-[100%] border-[#eee]  bg-transparent border-b-3 "
              />
            </div>
            <div className=" flex w-[100%] gap-x-2 xl:gap-x-12">
              <textarea
                rows={4}
                placeholder="message"
                className=" placeholder:text-gray-300 placeholder:text-sm xl:placeholder:text-2xl placeholder:capitalize p-3 border-[1px] w-[100%] border-[#eee]  bg-transparent border-b-3  resize-none"
              ></textarea>
            </div>
          </form>
        </>
      </div>
    </div>
  )
}
