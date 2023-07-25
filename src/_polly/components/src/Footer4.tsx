
import {BsInstagram,BsFacebook,BsTwitter} from "react-icons/bs";

export default function Footer4(props: any) {
  const { info } = props

  return (
    <div className="text-black text-center font-extradivght border border-black flex flex-col py-4 px-9 bg-purple-300">
      <div className="flex justify-center mx-14 mb-6">
            <div className=" text-[18px] xl:text-[24px] mx-4 cursor-pointer shadow-main rounded-[50%] p-4  text-purple-900 bg-[#eee]">
            <a href={info.facebook ?? '#'} target="_blank">
              <BsFacebook />
            </a>
            </div>
            <div className=" text-[18px] xl:text-[24px] mx-4 cursor-pointer shadow-main rounded-[50%] p-4 bg-[#eee]   text-purple-900">
            <a href={info.instagram ?? '#'} target="_blank">
              <BsInstagram />
            </a>
            </div>
            <div className="text-[18px] xl:text-[24px] mx-4 cursor-pointer shadow-main rounded-[50%] p-4 bg-[#eee]   text-purple-900">
            <a href={info.twitter ?? '#'} target="_blank">
              <BsTwitter />
            </a>
            </div>
          
      </div>
      <span className="text-center">{info.copyRight}</span>
    </div>
  )
}


