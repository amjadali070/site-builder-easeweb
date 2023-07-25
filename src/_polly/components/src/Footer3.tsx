import { ReactComponent as FacebookIcon } from './assets/icons/facebook.svg'
import { ReactComponent as InstagramIcon } from './assets/icons/instagram.svg'
import { ReactComponent as TwitterIcon } from './assets/icons/twitter.svg'

export default function Footer3(props: any) {
  const { info } = props

  return (
    <div className="text-black text-base font-extralight border border-black bg-white flex flex-col py-4 px-9">
      <span className="mb-6 font-bold">Stay connected:</span>
      <div className="flex justify-between mx-14 mb-6">
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
      <span className="text-center">{info.copyRight}</span>
    </div>
  )
}


