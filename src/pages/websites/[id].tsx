import ComponentList from 'src/components/new/ComponentList'
import { WebsiteContextProvider } from 'src/components/context/WebsiteContext'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import AuthenticatedPage from 'src/components/AuthenticatedPage'
import HeaderNav from 'src/components/HeaderNav'
import BuildModal from 'src/components/modal/BuildModal'
import { getWebsiteByID } from 'src/lib/services/website.service'
import BottomFloatingButton from '../../components/BottomFloatingButton'
import PreviewLayout from '../../components/layout/PreviewLayout'
import useWebsite from '../../store/website'

export default function Website() {
  const navigate = useNavigate()
  const params = useParams()
  const id = params.id as string

  const websiteStore = useWebsite(state => state)

  const [showBuildModal, setShowBuildModal] = useState(false)
  const [logo, setLogo] = useState()
  const [flipped, setFlipped] = useState(false)

  useEffect(() => {
    if (!id) return
    getWebsiteByID(id).then(data => {
      const config = JSON.parse(data?.config || '{}')
      setLogo(config?.logo || undefined)
    })
  }, [id])

  return (
    <AuthenticatedPage>
      <WebsiteContextProvider websiteID={id}>
        <PreviewLayout>
          <HeaderNav
            backButton
            logo={logo}
            onBackClick={() => {
              websiteStore.setComponents([])
              websiteStore.setWebsite(undefined)
              navigate('/')
            }}
          />
          <div className="mb-8">
            <ComponentList flipped={flipped} />
          </div>
          <div className="lg:hidden">
            <BottomFloatingButton
              label={flipped ? 'Go Back' : 'Preview'}
              onClick={() => setFlipped(!flipped)}
              onSecondaryClick={() => setShowBuildModal(true)}
              secondaryLabel="Build Site"
            />
          </div>

          <div className="hidden lg:block">
            <BottomFloatingButton label="Build Site" onClick={() => setShowBuildModal(true)} />
          </div>
          <BuildModal open={showBuildModal} onClose={() => setShowBuildModal(false)} />
        </PreviewLayout>
      </WebsiteContextProvider>
    </AuthenticatedPage>
  )
}
