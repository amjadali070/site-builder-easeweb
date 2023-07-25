import { ContactUsSection } from '../../types'

export default function VariantEleven({ section }: { section: ContactUsSection }) {
  const title = section.variables.find(variable => variable.name === 'TITLE')?.data
  const subtitle =
    section.variables.find(variable => variable.name === 'SUBTITLE')?.data ??
    'Be the first to find out about sales, styles and everything between'
  const email = section.variables.find(variable => variable.name === 'EMAIL')?.data ?? 'example@gmail.com'
  const phone = section.variables.find(variable => variable.name === 'PHONE')?.data ?? 'example@gmail.com'
  return (
    <div className="bg-[#eee] lg:py-20 py-8 grid xl:grid-cols-2 lg:px-12 ">
      <div className=" flex flex-col xl:w-[80%] border-[#bdbdbd81] border-l-[1px] mx-7  justify-center">
        <div>
          <h1 className=" lg:text-[2.8rem] text-[1.5rem] font-bold ">
            {title}
            <div className=" h-1 bg-black lg:w-7 w-4 " />
          </h1>
          <p className=" lg:text-2xl text-sm mt-6 lg:mt-8">{subtitle}</p>
          <p className=" lg:text-2xl text-sm mt-4 lg:mt-6">{subtitle}</p>
        </div>
        <div className="xl:mt-16 lg:mt-16 xl:text-xl flex flex-col gap-y-3 mt-6">
          <p className="flex lg:gap-x-4  text-sm lg:text-xl gap-x-2 items-center">
            <span className=" lg:text-[24px] text-sm text-gray-900 lg:ml-[-25px] ml-[-15px] font-bold ">E:</span>
            <span>{email}</span>
          </p>
          <p className="flex  lg:gap-x-3 gap-x-2 items-center  text-sm lg:text-xl">
            <span className=" lg:text-[24px] text-sm lg:ml-[-26px] ml-[-15px] text-gray-900 font-bold ">A:</span>
            <span> {phone}</span>
          </p>
        </div>
        <div className="flex text-gray-900 font-semibold items-center xl:mt-12 mt-3 gap-x-2 xl:text-xl capitalize">
          <div className="bg-black xl:w-[40px] lg:ml-[-40px] ml-[-10px] w-[10px] h-[1px]" />
          <p className="lg:text-[24px] text-sm"> what we should work together ?</p>
        </div>
      </div>

      <form className="xl:py-16 lg:w-[80%] w-[90%] m-auto  border-[#bdbdbd56] px-4 py-2 lg:py-12 border-[1px] xl:mt-8 mt-14 flex flex-col justify-center items-center gap-12">
        <div className="flex w-[100%] gap-x-2 xl:gap-x-6">
          <input
            type="text"
            placeholder="first name"
            className="placeholder:text-gray-400 placeholder:font-semibold placeholder:tracking-wide  border-b-2 border-gray-600  placeholder:text-sm xl:placeholder:text-2xl placeholder:capitalize p-3 w-[70%]   bg-transparent border-b-3 "
          />
          <input
            type="text"
            placeholder="first name"
            className=" placeholder:text-gray-400 placeholder:font-semibold placeholder:tracking-wide  border-b-2 border-gray-600 placeholder:text-sm xl:placeholder:text-2xl placeholder:capitalize p-3 w-[70%]   bg-transparent border-b-3 "
          />
        </div>
        <div className="flex w-[100%] gap-x-2 xl:gap-x-6">
          <input
            type="email"
            placeholder="email"
            className="placeholder:text-gray-400 placeholder:font-semibold placeholder:tracking-wide  border-b-2 border-gray-600  placeholder:text-sm xl:placeholder:text-2xl placeholder:capitalize p-3 w-[70%]   bg-transparent border-b-3 "
          />
          <input
            type="company"
            placeholder="company"
            className="placeholder:text-gray-400 placeholder:font-semibold placeholder:tracking-wide  border-b-2 border-gray-600  placeholder:text-sm xl:placeholder:text-2xl placeholder:capitalize p-3 w-[70%]   bg-transparent border-b-3 "
          />
        </div>
        <div className="flex w-[100%] gap-x-2 xl:gap-x-12">
          <textarea
            rows={4}
            placeholder="message"
            className=" outline-none resize-none placeholder:text-gray-400 placeholder:font-semibold placeholder:tracking-wide  border-b-2 border-gray-600  placeholder:text-sm xl:placeholder:text-2xl placeholder:capitalize p-3 w-[100%]   bg-transparent border-b-3 "
          ></textarea>
        </div>
      </form>
    </div>
  )
}
