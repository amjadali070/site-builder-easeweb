import React, { useCallback, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { omit } from 'lodash'
import 'react-multi-carousel/lib/styles.css'
import { deleteWebsite, duplicateWebsite, IBlock, updateComponents, upsertBlock } from 'src/services/website.service'
import EditSection from '../modal/EditSection'
import ConfirmModal from '../new/ConfirmModal'
import WebsiteGridItem from './WebsiteGridItem'
import ComponentGridItem from './ComponentGridItem'

type TypeComponent = 'website' | 'component'

interface IProps {
  data: any[]
  title: string
  type: TypeComponent
}

function WalletGridList(props: IProps) {
  const { data, type, title } = props
  const navigate = useNavigate()

  const [editSiteId, setEditSiteId] = useState<any>(null)
  const [editComp, setEditComp] = useState<any>(null)
  const [confirmDeleteId, setConfirmDeleteId] = useState<string | null>(null)
  const [showConfirmDeleteModal, setShowConfirmDeleteModal] = useState(false)
  const [websites, setWebsites] = useState<any[]>([])

  useEffect(() => {
    setWebsites(data)
  }, [data])

  const goToPage = () => {
    switch (type) {
      case 'website':
        navigate('/wallet/websites')
        break
      case 'component':
        navigate('/wallet/components')
        break
      default:
        break
    }
  }

  // website actions
  const handleDuplicateSite = async (id: any) => {
    const site = await duplicateWebsite(id)
    if (site) setWebsites(sites => [site, ...sites])
  }

  // component actions
  const handleEditComp = useCallback(
    (comp: any) => {
      const site = websites.find((s: any) => s.components.find((c: any) => c.id === comp.id))
      if (!site) return
      setEditSiteId(site.id)
      setEditComp(comp)
    },
    [websites],
  )

  const handleDuplicateComp = useCallback(
    (comp: IBlock) => {
      const site = websites.find((s: any) => s.components.find((c: any) => c.id === comp.id))
      if (!site) return
      upsertBlock(site.id, omit(comp, 'id'))
    },
    [websites],
  )

  // common actions
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

    if (type === 'website') {
      await deleteWebsite(confirmDeleteId)
      setWebsites(sites => sites?.filter(s => s.id !== confirmDeleteId))
    }

    if (type === 'component') {
      const site = websites.find((s: any) => s.components.find((c: any) => c.id === confirmDeleteId))
      if (site) {
        const comps = site.components.filter((c: any) => c.id !== confirmDeleteId)
        await updateComponents(site.id, comps)
      }
    }

    return resetDeleteModal()
  }

  const renderWalletGridList = () => {
    switch (type) {
      case 'website':
        return websites
          ?.slice(0, 2)
          .map(website => (
            <WebsiteGridItem
              key={website.id}
              name={website.name}
              onThumbnailClick={() => navigate(`/wallet/${website.id}`)}
              onEdit={() => navigate(`/websites/${website.id}`)}
              onDuplicate={() => handleDuplicateSite(website.id)}
              onDelete={() => handleDelete(website.id)}
            />
          ))
      case 'component': {
        const components = websites?.map((site: any) => site.components).flat()
        return components
          ?.slice(0, 2)
          .map(component => (
            <ComponentGridItem
              key={component.id}
              component={component}
              onThumbnailClick={() => handleEditComp(component)}
              onEdit={() => handleEditComp(component)}
              onDuplicate={() => handleDuplicateComp(component)}
              onDelete={() => handleDelete(component.id)}
            />
          ))
      }
      default:
        return null
    }
  }

  return (
    <div className="components p-4">
      <div className="header p-2">
        <div className="flex justify-between items-center">
          <h1 className="text-4xl">{title}</h1>
          <button
            type="button"
            className="text-xl border px-4 py-[1px] border-black cursor-pointer"
            onClick={() => goToPage()}
          >
            all
          </button>
        </div>
        <div className="h-[1px] mt-2 w-full bg-[#C4C4C4]" />
      </div>

      <div className="grid grid-cols-2 gap-4 m-2">{renderWalletGridList()}</div>

      {/* modals */}
      <EditSection
        open={editComp && editSiteId}
        value={editComp}
        websiteID={editSiteId}
        onClose={() => {
          setEditComp(null)
          setEditSiteId(null)
        }}
      />
      <ConfirmModal
        open={showConfirmDeleteModal}
        onConfirm={deleteOnConfirm}
        title={`Are you sure you would like to delete this ${type}?`}
      />
    </div>
  )
}

export default WalletGridList
