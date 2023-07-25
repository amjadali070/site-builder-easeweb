import type { ComponentType } from 'react'
import type { PollyComponentType } from './component.path'
import Text from './Text'
import Image from './Image'
import Footer from './Footer'
import MenuBar from './MenuBar'

const Components: { [key in PollyComponentType]: ComponentType<any> } = {
  IMAGE: (props: any) => (
    <div className="aspect-w-1 aspect-h-1">
      <Image className="object-cover" {...props} />
    </div>
  ),
  FOOTER: Footer,
  MENU_BAR: MenuBar,
  TITLE: Text,
  BLOG: Text,
  QUOTE: Text
}

export const PollyComponents = Components as { [key: string]: ComponentType<any> }
