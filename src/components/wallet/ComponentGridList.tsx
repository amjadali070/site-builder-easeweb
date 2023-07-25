import React, { useCallback, useEffect, useState } from 'react'
import { omit } from 'lodash'

import { getComponents, IBlock, updateComponents, upsertBlock } from 'src/services/website.service'
import { Website } from 'src/API'

import AuthenticatedPage from 'src/components/AuthenticatedPage'
import ConfirmModal from 'src/components/new/ConfirmModal'
import ComponentGridItem from 'src/components/wallet/ComponentGridItem'
import EditSection from 'src/components/modal/EditSection'
import HeaderNav from 'src/components/HeaderNav'

export type TWebsite = Website & { components: IBlock[] }

interface IComponentGridListProps {
  websites: Website[]
  components: IBlock[]
}

export default function ComponentGridList({ websites: sites, components: comps }: IComponentGridListProps) {
  const [websites, setWebsites] = useState<TWebsite[]>([])
  const [components, setComponents] = useState<IBlock[]>([])
  const [editSiteId, setEditSiteId] = useState<string>()
  const [editComp, setEditComp] = useState<IBlock>()
  const [confirmDeleteId, setConfirmDeleteId] = useState<string | null>(null)
  const [showConfirmDeleteModal, setShowConfirmDeleteModal] = useState(false)

  useEffect(() => {
    setComponents(comps)

    const fetchWebsiteComponents = async () => {
      sites.forEach(async (site: Website) => {
        const siteComps = await getComponents(site?.id)
        setWebsites(prevSites => [...prevSites, { ...site, components: siteComps }])
      })
    }

    fetchWebsiteComponents()
  }, [comps, sites])

  // component actions
  const handleEditComp = useCallback(
    (comp: IBlock) => {
      const site = websites.find(s => s.components.find(c => c.id === comp.id))
      if (!site) return
      setEditSiteId(site.id)
      setEditComp(comp)
    },
    [websites],
  )

  const handleDuplicateComp = useCallback(
    (comp: IBlock) => {
      const site = websites.find(s => s.components.find(c => c.id === comp.id))
      if (!site) return
      setComponents(prevComps => [comp, ...prevComps])
      upsertBlock(site.id, omit(comp, 'id'))
    },
    [websites],
  )

  const handleDelete = async (id: string) => {
    // opens the confirm modal
    setConfirmDeleteId(id)
    setShowConfirmDeleteModal(true)
  }

  const resetDeleteModal = () => {
    // reset delete modal and state
    setShowConfirmDeleteModal(false)
    setConfirmDeleteId(null)
  }

  const deleteOnConfirm = async (confirmed: boolean) => {
    const deleteConfirmed = confirmDeleteId && confirmed
    if (!deleteConfirmed) return resetDeleteModal()

    const site = websites.find(s => s.components.find(c => c.id === confirmDeleteId))
    if (site) {
      const siteComps = site.components.filter(c => c.id !== confirmDeleteId)
      await updateComponents(site.id, siteComps)
      setComponents(prevComps => prevComps.filter(c => c.id !== confirmDeleteId))
    }

    return resetDeleteModal()
  }

  return (
    <AuthenticatedPage>
      <HeaderNav backButton />
      <div className="p-6">
        <div className="header">
          <h1 className="text-4xl">Components</h1>
          <div className="h-[2px] mt-2 mb-6 w-full bg-[#C4C4C4]" />
        </div>

        <div className="grid grid-cols-2 gap-4">
          {components.map(component => (
            <ComponentGridItem
              key={component.id}
              component={component}
              onThumbnailClick={() => handleEditComp(component)}
              onEdit={() => handleEditComp(component)}
              onDuplicate={() => handleDuplicateComp(component)}
              onDelete={() => handleDelete(component.id as string)}
            />
          ))}
        </div>
      </div>

      {/* modals */}
      <EditSection
        open={!!editSiteId && !!editComp}
        websiteID={editSiteId}
        value={editComp}
        onClose={() => {
          setEditComp(undefined)
          setEditSiteId(undefined)
        }}
      />

      <ConfirmModal
        open={showConfirmDeleteModal}
        onConfirm={deleteOnConfirm}
        title="Are you sure you would like to delete this component?"
      />
    </AuthenticatedPage>
  )
}
