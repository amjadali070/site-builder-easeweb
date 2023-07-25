import ComponentList from 'src/components/new/ComponentList'
import { WebsiteContextProvider } from 'src/components/context/WebsiteContext'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import AuthenticatedPage from 'src/components/AuthenticatedPage'
import HeaderNav from 'src/components/HeaderNav'
import BuildModal from 'src/components/modal/BuildModal'
import { getWebsiteByID } from 'src/lib/services/website.service'
import BottomFloatingButton from '../../components/BottomFloatingButton'
import PreviewLayout from '../../components/layout/PreviewLayout'

export default function Websites() {
  const params = useParams()
  const websiteID = params.id as string
  const pagePath = params['*'] as string

  const [showBuildModal, setShowBuildModal] = useState(false)
  const [logo, setLogo] = useState()

  useEffect(() => {
    getWebsiteByID(websiteID).then(data => {
      const config = JSON.parse(data?.config || '{}')
      setLogo(config?.logo || undefined)
    })
  }, [websiteID])

  return (
    <AuthenticatedPage>
      <WebsiteContextProvider websiteID={websiteID} pagePath={pagePath}>
        <PreviewLayout>
          <HeaderNav backButton logo={logo} />
          <div className="px-6 pt-6 pb-8">
            <ComponentList />
          </div>
          <BottomFloatingButton label="Build Site" onClick={() => setShowBuildModal(true)} />
          <BuildModal open={showBuildModal} onClose={() => setShowBuildModal(false)} />
        </PreviewLayout>
      </WebsiteContextProvider>
    </AuthenticatedPage>
  )
}
