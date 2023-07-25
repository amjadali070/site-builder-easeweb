import { ReactNode } from 'react'
import LivePhonePreview from '../new/LivePhonePreview'

export default function PreviewLayout({ children }: { children: ReactNode }) {
  return (
    <div
      className="lg:grid lg:h-screen lg:overflow-hidden"
      style={{
        gridTemplateColumns: '500px 1fr',
      }}
    >
      <div className="overflow-auto relative">{children}</div>

      <LivePhonePreview />
    </div>
  )
}
