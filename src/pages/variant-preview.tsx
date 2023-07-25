import { useSearchParams } from 'react-router-dom'
import { RenderSection } from 'src/_polly/components/src/sections'

export default function VariantPreview() {
  const [searchParams] = useSearchParams()
  const section = searchParams.get('section')

  if (!section) return <p>none</p>

  return <RenderSection section={JSON.parse(window.atob(section))} />
}
