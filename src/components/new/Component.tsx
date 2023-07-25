import { PollyComponents } from 'src/_polly/components/src/component.map'

export default function Component({ data, websiteID }: any) {
  const PollyComponent = PollyComponents[data.type] as any
  return PollyComponent ? <PollyComponent {...data.props} websiteID={websiteID} /> : null
}
