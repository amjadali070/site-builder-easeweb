import { ReactComponent as FacebookIcon } from './assets/icons/facebook.svg'
import { ReactComponent as InstagramIcon } from './assets/icons/instagram.svg'
import { ReactComponent as TwitterIcon } from './assets/icons/twitter.svg'

export default function Footer1(props: any) {
  const { info } = props

  return (
    <div className="text-black text-base font-extralight border border-black flex flex-col p-9 bg-white overflow-hidden">
      <h2 className="text-3xl font-semibold mb-6">{info.name}</h2>
      <div className="flex flex-wrap mb-6 justify-between">
        <span>Email Us: {info.email}</span>
        <span className="text-xl">|</span>
        <span>Ph: {info.phoneNumber}</span>
      </div>
      <span className="mb-5">{info.address}</span>
      <span className="mb-12">{info.copyRight}</span>
      <div className="flex justify-between mx-5">
        <a href={info.facebook ?? '#'} target="_blank">
          <FacebookIcon width={36} height={36} />
        </a>
        <a href={info.instagram ?? '#'} target="_blank">
          <InstagramIcon width={36} height={36} />
        </a>
        <a href={info.twitter ?? '#'} target="_blank">
          <TwitterIcon width={36} height={36} />
        </a>
      </div>
    </div>
  )
}
