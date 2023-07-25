import Lottie from 'react-lottie'
import * as websiteBuilding from './website-building.json'
import * as server from './server.json'
import * as server2 from './server-2.json'
import * as success from './success.json'

type AnimationProps = {
  name: 'website-building' | 'server' | 'server-2' | 'success'
  loop?: boolean
  autoplay?: boolean
  size?: number
}

export default function Animation({ name, loop = true, autoplay = true, size = 300 }: AnimationProps) {
  const animationData = () => {
    switch (name) {
      case 'website-building':
        return websiteBuilding
      case 'server':
        return server
      case 'server-2':
        return server2
      case 'success':
        return success
      default:
        return websiteBuilding
    }
  }

  return (
    <Lottie
      options={{
        loop,
        autoplay,
        animationData: animationData(),
      }}
      style={{
        height: 'auto',
        width: size,
      }}
    />
  )
}
