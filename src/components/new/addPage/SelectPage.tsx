import React, { useContext, useEffect, useState } from 'react'
import { createPageRecord, deletePageRecord, getPagesByWebsite } from 'src/lib/services/website.service'
import { ReactComponent as AddIcon } from '../../../assets/icons/menuBar/add.svg'
import { ReactComponent as DeleteIcon } from '../../../assets/icons/menuBar/delete.svg'
import { ReactComponent as DuplicateIcon } from '../../../assets/icons/menuBar/duplicate.svg'
import { ReactComponent as EditIcon } from '../../../assets/icons/menuBar/edit.svg'
import { ReactComponent as MoreIcon } from '../../../assets/icons/menuBar/more.svg'
import { ReactComponent as HomePageIcon } from '../../../assets/icons/menuBar/home-page.svg'
import { ReactComponent as NormalPageIcon } from '../../../assets/icons/menuBar/normal-page.svg'
import { WebsiteContext } from '../../context/WebsiteContext'
import { Loader } from '../../loader'
import CreatePageModal from './CreatePageModal'
import EditPageModal from './EditPageModal'

interface SelectPageProps {
  onSelect?: (path: string) => void
}

const SelectPage = ({ onSelect }: SelectPageProps) => {
  const { websiteID } = useContext(WebsiteContext)

  const [open, setOpen] = useState(false)
  const [pages, setPages] = useState<any[]>([])
  const [loading, setLoading] = useState(true)
  const [showEditPageModal, setShowEditPageModal] = useState(false)
  const [pageToEdit, setPageToEdit] = useState<any>(null)

  const fetchPages = async () => {
    setLoading(true)
    await getPagesByWebsite(websiteID).then(_pages => {
      setPages(_pages)
      setLoading(false)
    })
  }

  const handleDuplicate = async (page: any) => {
    setLoading(true)
    const random = Math.random().toString(36).substring(2, 5)
    await createPageRecord({
      blocks: page.blocks,
      name: page.name,
      path: `${page.path}-${random}`,
      websiteID: websiteID ?? '',
    })
    fetchPages()
  }

  const handleDelete = async (page: any) => {
    setLoading(true)
    await deletePageRecord(page.id)
    fetchPages()
  }

  useEffect(() => {
    fetchPages()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <div className="p-5">
      <Loader show={loading} />
      <h1 className="text-4xl">Select Page</h1>
      <div className="h-[2px] mt-2 w-[60%] bg-[#C4C4C4]" />
      <div className="mt-10 space-y-6">
        {pages?.map(page => (
          <div key={page.id}>
            <div className="flex gap-x-3 items-center">
              <button
                type="button"
                onClick={() => onSelect && onSelect(`${page.path}`)}
                className="w-full text-left flex items-center"
              >
                {page.path === '/' ? (
                  <div className="mr-7">
                    <HomePageIcon />
                  </div>
                ) : (
                  <div className="ml-2 mr-9">
                    <NormalPageIcon />
                  </div>
                )}
                <div className="title text-2xl py-2 cursor-pointer w-full">{page.name}</div>
              </button>
              <MoreIcon onClick={() => (pageToEdit?.id === page.id ? setPageToEdit(null) : setPageToEdit(page))} />
            </div>

            {pageToEdit?.id === page.id && (
              <div className="flex justify-between items-center">
                <div className="grow h-14 w-20 border border-black flex justify-center items-center">
                  <DuplicateIcon onClick={() => handleDuplicate(page)} />
                </div>
                <div className="grow h-14 w-20 border-t-[1px] border-b-[1px] border-r-[1px] border-black flex justify-center items-center">
                  <EditIcon
                    onClick={() => {
                      setPageToEdit(page)
                      setShowEditPageModal(true)
                    }}
                  />
                </div>
                <div className="grow h-14 w-20 border-r border-t border-b border-black flex justify-center items-center">
                  <DeleteIcon onClick={() => handleDelete(page)} />
                </div>
              </div>
            )}
          </div>
        ))}
      </div>

      <button type="button" onClick={() => setOpen(true)} className="mt-10 flex items-center cursor-pointer">
        <div className="h-14 w-16 border-[1px] border-black flex justify-center items-center">
          <AddIcon />
        </div>
        <span className="text-2xl pl-8">Create Page</span>
      </button>

      <CreatePageModal {...{ open, setOpen }} />

      {pageToEdit && (
        <EditPageModal
          open={showEditPageModal}
          setOpen={setShowEditPageModal}
          page={pageToEdit}
          onClose={() => {
            fetchPages()
            setPageToEdit(null)
          }}
        />
      )}
    </div>
  )
}

export default SelectPage
