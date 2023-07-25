import React, { useEffect, useState } from 'react'
import 'react-multi-carousel/lib/styles.css'
import AuthenticatedPage from 'src/components/AuthenticatedPage'
import HeaderNav from 'src/components/HeaderNav'
import WalletGridList from 'src/components/wallet/WalletGridList'
import { getWebsitesByUserID } from 'src/lib/services/website.service'
import { getComponents } from 'src/services/website.service'
import NFTList from 'src/components/new/NFTList'

export default function NewTitle() {
  const [websites, setWebsites] = useState([] as any[])

  useEffect(() => {
    getWebsitesByUserID().then(async res => {
      const sites = await Promise.all(
        (res?.items || [])
          .filter(site => site !== null)
          .map(async site => ({
            ...site,
            components: await getComponents(site?.id as string),
          })),
      )

      setWebsites(sites)
    })
  }, [])

  return (
    <AuthenticatedPage>
      <HeaderNav backButton />
      <WalletGridList data={websites} type="website" title="Websites" />
      <WalletGridList data={websites} type="component" title="Components" />
      <NFTList />
    </AuthenticatedPage>
  )
}
