// import Lottie from 'react-lottie'
// import * as animationData from './loader.json'
import { Circles as LoaderOne } from 'react-loader-spinner'

export default function Loader({ show }: { show: boolean }) {
  if (!show) return null
  return (
    <div className="z-[9999] fixed top-0 right-0 bottom-0 left-0 justify-center items-center">
      <div className="relative w-full h-full bg-black/90 flex justify-center items-center">
        {/* <Lottie
          options={{
            loop: true,
            autoplay: true,
            animationData
          }}
        /> */}
        <div className='flex flex-col'>
          <LoaderOne
          // type="Circles"
          // color="#0DCE2E"
          // height={50}
          // width={200}
          // className="m-5"
          />

          <p className="text-lg text-center mt-3 text-white">Loading...</p>
        </div>
      </div>
    </div>
  )
}
