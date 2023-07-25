import React, { useEffect, useState } from 'react'

import { Website } from 'src/API'
import { getComponents, IBlock } from 'src/services/website.service'
import { getWebsitesByUserID } from 'src/lib/services/website.service'
import ComponentGridList, { TWebsite } from 'src/components/wallet/ComponentGridList'

export default function Components() {
  const [websites, setWebsites] = useState<TWebsite[]>([])
  const [components, setComponents] = useState<IBlock[]>([])

  useEffect(() => {
    const fetchWebsiteComponents = async () => {
      const result = await getWebsitesByUserID()
      const sites = result?.items as Website[]
      sites.forEach(async site => {
        const siteComps = await getComponents(site.id)
        setComponents(prev => [...prev, ...siteComps])
        setWebsites(prev => [...prev, { ...site, components: siteComps }])
      })
    }
    fetchWebsiteComponents()
  }, [])

  return <ComponentGridList {...{ websites, components }} />
}
