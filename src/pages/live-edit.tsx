import clsx from 'clsx'
import { useEffect, useState, useContext } from 'react'
import { useParams } from 'react-router-dom'
import { Loader } from '../components/loader'
import Component from '../components/new/Component'
import { getPageByID, getWebsiteByID } from '../lib/services/website.service'
import { ReactComponent as DeleteIcon } from '../assets/icons/new/action/delete.svg'
import { ReactComponent as DownIcon } from '../assets/icons/new/action/down.svg'
import { ReactComponent as DuplicateIcon } from '../assets/icons/new/action/duplicate.svg'
import { ReactComponent as UpIcon } from '../assets/icons/new/action/up.svg'
import EditSection from '../components/modal/EditSection'
import MenuBar from '../_polly/components/src/MenuBar'
import Footer1 from '../_polly/components/src/Footer1'
import Footer2 from '../_polly/components/src/Footer2'
import Footer3 from '../_polly/components/src/Footer3'
import Footer4 from '../_polly/components/src/Footer4'
import { WebsiteContext, WebsiteContextProvider } from '../components/context/WebsiteContext'

export default function LiveEdit() {
  const params = useParams()
  const { setPageID } = useContext(WebsiteContext)
  const { websiteId, pageId } = params

  const [website, setWebsite] = useState<Awaited<ReturnType<typeof getWebsiteByID>> | undefined>()
  const [page, setPage] = useState<Awaited<ReturnType<typeof getPageByID>> | undefined>(undefined)
  const [blocks, setBlocks] = useState<any[]>([])
  const [editItem, setEditItem] = useState<any>()

  const menubar = website?.menu ? JSON.parse(website.menu) : null
  const footer = website?.footer ? JSON.parse(website.footer) : null

  const handleBlockUpdate = (value: any) => {
    setBlocks(blocks.map(currentBlock => (currentBlock.id === value.id ? value : currentBlock)))
  }

  useEffect(() => {
    getWebsiteByID(websiteId as string).then(setWebsite)
    getPageByID(pageId as string).then(p => {
      setPage(p)
      if (p?.blocks) {
        setBlocks(JSON.parse(p.blocks))
      }
    })
    setPageID(pageId as string)
  }, [])

  if (!page || !website) {
    return <Loader show />
  }

  return (
    <WebsiteContextProvider websiteID={websiteId as string}>
      <div
        className="min-h-screen grid justify-center gap-x-10 bg-gray-400"
        style={{ gridTemplateColumns: '405px 550px' }}
      >
        <div className="relative bg-contain bg-no-repeat mt-10" style={{ backgroundImage: 'url(/iphone.png)' }}>
          <div className="absolute top-16 px-6 overflow-auto no-scrollbar" style={{ height: '76%' }}>
            <MenuBar {...{ ...menubar, website }} isPreviewMode />

            {blocks.map((block: any) => (
              <Component key={block.id} data={block} />
            ))}

            {footer.style === 'FOOTER1' && <Footer1 {...{ ...footer }} />}
            {footer.style === 'FOOTER2' && <Footer2 {...{ ...footer }} />}
            {footer.style === 'FOOTER3' && <Footer3 {...{ ...footer }} />}
            {footer.style === 'FOOTER4' && <Footer4 {...{ ...footer }} />}
          </div>
        </div>

        <div className="relative">
          <div className="fixed right-20 top-10 bg-white p-4 overflow-auto" style={{ width: '450px', height: '90vh' }}>
            {!editItem &&
              blocks
                .filter(block => block.type !== 'FOOTER' && block.type !== 'MENU_BAR')
                .map(block => (
                  <div key={block.id} className="mb-6 border border-black">
                    <Component data={block} />
                    <div className="z-10 bottom-12 h-12 border-black border-t text-black w-full">
                      <button
                        type="button"
                        className="w-full h-full border-black p-1 bg-white"
                        onClick={() => setEditItem(block)}
                      >
                        Edit
                      </button>
                    </div>
                    <div className="flex justify-between border-t border-black items-center">
                      <button
                        type="button"
                        className={clsx(
                          block.type === 'MENU_BAR' || block.type === 'FOOTER'
                            ? 'cursor-not-allowed disabled:opacity-50'
                            : 'cursor-pointer',
                          'h-12 w-full flex justify-center items-center',
                        )}
                        disabled={block.type === 'MENU_BAR' || block.type === 'FOOTER'}
                        onClick={() => {
                          // onMoveUp(block.id)
                        }}
                      >
                        <UpIcon />
                      </button>
                      <button
                        type="button"
                        onClick={() => null}
                        className="h-12 w-full cursor-pointer border-l-[1px] border-r-[1px] border-black flex justify-center items-center"
                      >
                        <DuplicateIcon />
                      </button>
                      <button
                        type="button"
                        className="h-12 w-full cursor-pointer flex border-r-[1px] border-black justify-center items-center"
                        onClick={() => {
                          // setShowConfirmDeleteModal(true)
                          // setConfirmDeleteComponentId(block.id)
                        }}
                      >
                        <DeleteIcon />
                      </button>
                      <button
                        type="button"
                        className={clsx(
                          block.type === 'MENU_BAR' || block.type === 'FOOTER'
                            ? 'cursor-not-allowed disabled:opacity-50'
                            : 'cursor-pointer',
                          'h-12 w-full flex justify-center items-center',
                        )}
                        disabled={block.type === 'MENU_BAR' || block.type === 'FOOTER'}
                        onClick={() => null}
                      >
                        <DownIcon />
                      </button>
                    </div>
                  </div>
                ))}

            {/* {editItem && <div>{JSON.stringify(editItem)}</div>} */}

            <EditSection
              value={editItem}
              websiteID={websiteId}
              pageID={pageId}
              open={!!editItem}
              onUpdate={handleBlockUpdate}
              onClose={() => {
                setEditItem(null)
              }}
            />
          </div>
        </div>
      </div>
    </WebsiteContextProvider>
  )
}
