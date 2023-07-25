import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

import ComponentGridList, { TWebsite } from 'src/components/wallet/ComponentGridList'
import { getWebsiteByID } from 'src/lib/services/website.service'
import { IBlock, getComponents } from 'src/services/website.service'

export default function WebsiteComponents() {
  const { websiteId } = useParams()

  const [websites, setWebsites] = useState<TWebsite[]>([])
  const [components, setComponents] = useState<IBlock[]>([])

  useEffect(() => {
    if (!websiteId) return

    const fetchWebsiteComponents = async () => {
      const site = await getWebsiteByID(websiteId as string)
      const siteComps = await getComponents(websiteId as string)

      if (siteComps) setComponents([...siteComps])
      if (site) setWebsites([{ ...site, components: siteComps }])
    }
    fetchWebsiteComponents()
  }, [websiteId])

  return <ComponentGridList {...{ websites, components }} />
}
