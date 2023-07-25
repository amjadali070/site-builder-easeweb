import { useCallback, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Loader } from 'src/components/loader'
import { RenderSection } from 'src/_polly/components/src/sections'
import Component from '../components/new/Component'
import { getPagesByWebsite } from '../lib/services/website.service'
import { getComponentsByPageID } from '../services/website.service'
import { getBlockWidth } from '../util/grid'

export default function PreviewPage() {
  const params = useParams()
  const id = params.id as string

  const [components, setComponents] = useState<Array<any>>([])
  const [loading, setLoading] = useState(true)

  const getComponents = useCallback(async () => {
    if (!id) return
    const pages = await getPagesByWebsite(id)
    const indexPage = pages.find(page => page?.path === '/')
    if (!indexPage) return
    setComponents(await getComponentsByPageID(indexPage.id))
  }, [])

  useEffect(() => {
    getComponents().then(() => setLoading(false))
  }, [])

  return (
    <div className="container mx-auto">
      <Loader show={loading} />
      <div className="md:flex flex-wrap gap-4">
        {components.map(component => (
          <div key={component.id}>
            {component.isSection ? (
              <RenderSection section={component} />
            ) : (
              <>
                <div className="hidden md:block" style={{ width: getBlockWidth(component.columns ?? 4) }}>
                  <Component data={component} />
                </div>
                <div className="block md:hidden px-4">
                  <Component data={component} />
                </div>
              </>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}
