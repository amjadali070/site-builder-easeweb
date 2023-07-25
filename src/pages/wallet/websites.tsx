import { useNavigate } from 'react-router-dom'
import React, { useEffect, useState } from 'react'
import AuthenticatedPage from 'src/components/AuthenticatedPage'
import HeaderNav from 'src/components/HeaderNav'
import EditSection from 'src/components/modal/EditSection'
import ConfirmModal from 'src/components/new/ConfirmModal'
import WebsiteGridItem from 'src/components/wallet/WebsiteGridItem'
import { getWebsitesByUserID } from 'src/lib/services/website.service'
import { deleteWebsite, duplicateWebsite, getComponents } from 'src/services/website.service'

function Websites() {
  const navigate = useNavigate()

  const [loading, setLoading] = useState(false)
  const [websites, setWebsites] = useState([] as any[])
  const [editSiteId, setEditSiteId] = useState<any>(null)
  const [editComp, setEditComp] = useState<any>(null)
  const [confirmDeleteId, setConfirmDeleteId] = useState<string | null>(null)
  const [showConfirmDeleteModal, setShowConfirmDeleteModal] = useState(false)

  useEffect(() => {
    setLoading(true)
    getWebsitesByUserID().then(async res => {
      const sites = await Promise.all(
        (res?.items || [])
          .filter(x => x !== null)
          .map(async x => ({
            ...x,
            components: await getComponents(x?.id as string),
          })),
      ).finally(() => setLoading(false))

      setWebsites(sites)
    })
  }, [])

  // website actions
  const handleDuplicateSite = async (id: any) => {
    const site = await duplicateWebsite(id)
    if (site) setWebsites(sites => [site, ...sites])
  }

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

    await deleteWebsite(confirmDeleteId)
    setWebsites(sites => sites?.filter(s => s.id !== confirmDeleteId))

    return resetDeleteModal()
  }

  return (
    <AuthenticatedPage>
      <HeaderNav backButton />
      <div className="p-6">
        <div className="header">
          <h1 className="text-4xl">Websites</h1>
          <div className="h-[2px] mt-2 mb-6 w-full bg-[#C4C4C4]" />
        </div>

        {loading ? (
          'Loading...'
        ) : (
          <div className="grid grid-cols-2 gap-4">
            {websites.map(website => (
              <WebsiteGridItem
                key={website.id}
                name={website.name}
                onThumbnailClick={() => navigate(`/wallet/${website.id}`)}
                onEdit={() => navigate(`/websites/${website.id}`)}
                onDuplicate={() => handleDuplicateSite(website.id)}
                onDelete={() => handleDelete(website.id)}
              />
            ))}
          </div>
        )}

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
          title="Are you sure you would like to delete this website?"
        />
      </div>
    </AuthenticatedPage>
  )
}

export default Websites
