import clsx from 'clsx'
import React, { Suspense, useCallback, useContext, useEffect, useState } from 'react'
import ReactCardFlip from 'react-card-flip'
import { getPagesByWebsite, getWebsiteByID } from 'src/lib/services/website.service'
import {
  getComponents,
  updateComponents,
  updateComponentsByPageID,
  upsertBlockByPageID,
} from 'src/services/website.service'
import { GoPlus } from 'react-icons/go'
import { swapObject } from 'src/util'
import MenuBar from 'src/_polly/components/src/MenuBar'
import { SectionPreviewRenderer, Section, RenderSection } from 'src/_polly/components/src/sections'
// import { ReactComponent as DeleteIcon } from '../../assets/icons/new/action/delete.svg'
// import { ReactComponent as DownIcon } from '../../assets/icons/new/action/down.svg'
// import { ReactComponent as DuplicateIcon } from '../../assets/icons/new/action/duplicate.svg'
// import { ReactComponent as UpIcon } from '../../assets/icons/new/action/up.svg'
import useWebsite from '../../store/website'
import Footer1 from '../../_polly/components/src/Footer1'
import Footer2 from '../../_polly/components/src/Footer2'
import Footer3 from '../../_polly/components/src/Footer3'
import Footer4 from '../../_polly/components/src/Footer4'
import { WebsiteContext } from '../context/WebsiteContext'
import { Loader } from '../loader'
import EditSection from '../modal/EditSection'
import MintModal from '../modal/MintModal'
import NewSection from '../modal/NewSection'
import WebsiteSettings from '../modal/WebsiteSettings'
import Component from './Component'
import ConfirmModal from './ConfirmModal'
import EditSectionModal from './EditSectionModal'
import { getBlockWidth } from '../../util/grid'
import { VariantIframe } from '../modal/NewSectionVariantSelection'

const GoogleFonts = React.lazy(() => import('react-google-font-loader'))

function ColumnButton({
  columns,
  currentColumn,
  lastElement = false,
  onClick,
}: {
  columns: number
  currentColumn: number
  lastElement?: boolean
  onClick?: (column: number) => void
}) {
  const className = clsx(
    'h-12 w-full flex justify-center items-center text-xl',
    columns >= currentColumn && 'bg-gray-200',
    (columns === currentColumn || currentColumn > columns) && !lastElement && 'border-r border-black',
    columns === currentColumn && 'font-bold text-gray-600',
    currentColumn < columns && 'text-gray-400',
    currentColumn > columns && 'text-gray-400',
  )

  return (
    <button
      type="button"
      className={className}
      onClick={() => onClick?.(currentColumn)}
      disabled={currentColumn === columns}
    >
      {currentColumn}
    </button>
  )
}

function ColumnPreviewBox({ active, lastElement }: { active: boolean; lastElement?: boolean }) {
  return <div className={`h-5 w-5 ${active && 'bg-gray-200'} ${!lastElement && 'border-black border-r'}`} />
}

export default function ComponentList({ flipped }: { flipped?: boolean }) {
  const { websiteID, addGoogleFont, googleFonts, pagePath, pageID, setPageID } = useContext(WebsiteContext)
  const websiteStore = useWebsite(state => state)

  const [loading, setLoading] = useState(true)
  const [editItem, setEditItem] = useState<any>(null)
  const [website, setWebsite] = useState<any>(null)
  const [components, setComponents] = useState<any[]>([])
  const [showNewSection, setShowNewSection] = useState(false)
  const [showSettingsModal, setShowSettingsModal] = useState(false)
  const [confirmDeleteComponentId, setConfirmDeleteComponentId] = useState(null)
  const [showConfirmDeleteModal, setShowConfirmDeleteModal] = useState(false)
  const [mintComponent, setMintComponent] = useState<null | any>(null)
  const [editSection, setEditSection] = useState<Section<any, any> | null>(null)
  const [mode, setMode] = useState<'desktop' | 'mobile'>('desktop')

  const menubar = website?.menu ? JSON.parse(website.menu) : null
  const footer = website?.footer ? JSON.parse(website.footer) : null

  const invalidate = useCallback(async () => {
    const pages = await getPagesByWebsite(websiteID)
    // TODO: implement page not found
    if (!pages.length) return

    if (pagePath) {
      const page = pages.find(_page => _page?.path === `/${pagePath}`)
      if (!page) {
        // TODO: implement page not found
        return
      }
      setPageID(page.id)

      const { blocks } = page
      setComponents(JSON.parse(blocks ?? '[]'))

      getComponents(websiteID).then(_components => {
        const menuBar = _components.find(comp => comp.type === 'MENU_BAR')
        if (menuBar) {
          setComponents(comp => [...comp, menuBar])
        }
      })
    } else {
      const page = pages.find(_page => _page?.path === '/')
      if (!page) {
        // TODO: implement page not found
        return
      }
      setPageID(page.id)
      getComponents(websiteID).then(_components => setComponents(_components))
    }
    getWebsiteByID(websiteID).then(site => {
      setWebsite(site)
      websiteStore.setWebsite({
        ...site,
        config: site?.config ? JSON.parse(site?.config) : null,
        footer: site?.footer ? JSON.parse(site?.footer) : null,
        menu: site?.menu ? JSON.parse(site?.menu) : null,
      })
      websiteStore.setMobilePreviewComponents({
        ...site,
        config: site?.config ? JSON.parse(site?.config) : null,
        footer: site?.footer ? JSON.parse(site?.footer) : null,
        menu: site?.menu ? JSON.parse(site?.menu) : null,
      })
    })
  }, [websiteID, pagePath])

  useEffect(() => {
    setLoading(true)
    invalidate().finally(() => setLoading(false))
  }, [invalidate])

  useEffect(() => {
    websiteStore.setComponents(components)
    components.forEach(component => {
      const { type } = component
      if (type !== 'QUOTE' && type !== 'TITLE') return

      const {
        title: {
          settings: { font },
        },
      } = component.props
      if (font) addGoogleFont(font)

      if (type === 'TITLE') {
        if (component.props.subHeadline?.settings?.font) {
          addGoogleFont(component.props.subHeadline.settings.font)
        }
      }

      if (type === 'BLOG') {
        const {
          content: {
            settings: { font: _font },
          },
        } = component.props
        if (_font) addGoogleFont(_font)
      }
    })
  }, [components])

  const goToEdit = (value: any) => {
    setEditItem(value)
  }

  const onMoveUp = (id: string) => {
    const items = swapObject(components, 'id', id, 'ahead')
    updateComponents(websiteID, items)
    setComponents(items)
  }

  const onUpdateColumn = async (component: any, columns: number) => {
    setComponents([...components.map(item => (item.id === component.id ? { ...item, columns } : item))])
    await upsertBlockByPageID(pageID, {
      ...component,
      columns,
    })
  }

  const handleDuplicate = (comp: any) => {
    const currentCompIndex = components.findIndex(c => c.id === comp.id)
    const duplicateComp = { ...comp, id: `${comp.id}_${Date.now()}` }
    const items = [
      ...components.slice(0, currentCompIndex + 1),
      duplicateComp,
      ...components.slice(currentCompIndex + 1),
    ]
    updateComponents(websiteID, items)
    setComponents(items)
  }

  const handleDelete = (id: string) => {
    if (!pageID) return
    const index = components.findIndex(item => item.id === id)
    const newComponents = [...components]
    newComponents.splice(index, 1)
    updateComponentsByPageID(pageID, newComponents)
    setComponents(newComponents)
  }

  const handleConfirmDelete = (confirmed: boolean) => {
    if (confirmDeleteComponentId && confirmed) handleDelete(confirmDeleteComponentId)
    setShowConfirmDeleteModal(false)
    setConfirmDeleteComponentId(null)
  }

  const onMoveDown = (id: string) => {
    const items = swapObject(components, 'id', id, 'behind')
    updateComponents(websiteID, items)
    setComponents(items)
  }

  const handleEditSection = (section: Section<any, any>) => {
    setEditSection(section)
  }

  return (
    <>
      <Loader show={loading} />
      <div className="flex w-full justify-end">
        <div className="absolute top-[20px] right-[100px] flex">
          <button
            type="button"
            className={clsx(
              `rounded-[4px] h-[50px] py-[4px] px-[2px] hover:shadow-md hover:shadow-slate-500
              ${mode === 'mobile' ? 'bg-gray-600' : 'bg-slate-100 border border-slate-400'}`,
            )}
            onClick={() => setMode('mobile')}
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={clsx(
                `w-7 h-7 ${
                  mode === 'mobile' ? 'text-white' : ''
                }`,
              )}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" />
            </svg>
            {/* <div
              className={clsx('border-2 border-black rounded-sm w-[27px] h-full', mode === 'mobile' && 'bg-gray-200')}
            /> */}
          </button>

          <button
            type="button"
            className={clsx(
              `rounded-[4px] h-[50px] py-[4px] px-[2px] ml-2 hover:shadow-md hover:shadow-slate-500
              ${mode === 'desktop' ? 'bg-gray-600' : 'bg-slate-100 border border-slate-400'}`,
            )}
            onClick={() => setMode('desktop')}
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={clsx(
                `w-16 h-7 ${
                  mode === 'desktop' ? 'text-white' : ''
                }`,
              )}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0V12a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 12V5.25" />
            </svg>
            {/* <div
              className={clsx('border-2 border-black rounded-sm w-[55px] h-full', mode === 'desktop' && 'bg-gray-300')}
            /> */}
          </button>
        </div>
      </div>

      {/* <div className="absolute top-[20px] right-[70px]">
        <button className="border border-black rounded-sm h-[40px] p-[2px]" onClick={() => setMode('mobile')}>
          <div
            className={clsx('border border-black rounded-sm w-[23px] h-full', mode === 'mobile' && 'bg-gray-200')}
          ></div>
        </button>

        <button className="border border-black rounded-sm h-[40px] p-[2px] ml-3" onClick={() => setMode('desktop')}>
          <div
            className={clsx('border border-black rounded-sm w-[46px] h-full', mode === 'desktop' && 'bg-gray-200')}
          ></div>
        </button>
      </div> */}

      <ReactCardFlip isFlipped={flipped} flipDirection="horizontal">
        <div className="p-6">
          {!loading && !menubar && (
            <div className="mb-6 w-full aspect-w-4 aspect-h-3 bg-black">
              <button
                type="button"
                className="font-extralight flex text-center justify-center items-center text-white text-7xl"
                onClick={() => goToEdit({ type: 'MENU_BAR' })}
              >
                Menu Bar
              </button>
            </div>
          )}

          {/* menubar */}
          {menubar && (
            <div className="flex flex-col font-extralight text-xl text-black border mb-6 relative shadow-md transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-105 duration-300">
              <button
                  type="button"
                  className="wfull h-full"
                  onClick={() => goToEdit({ type: 'MENU_BAR', ...menubar, website })}
                >
                  <MenuBar {...{ ...menubar, website }} isPreviewMode />
                </button>
              

              {/* edit/mint buttons */}
              {/* <div className="z-10 bottom-12 h-12 font-extralight text-xl text-black w-full">
                
                <button
                  type="button"
                  className="w-[50%] h-full border-black p-1 bg-white font-extralight"
                  onClick={() =>
                    setMintComponent({
                      type: 'MENU_BAR',
                      props: menubar,
                    })
                  }
                >
                  mint
                </button>
              </div> */}
            </div>
          )}

          {/* components */}
          {components
            .filter(comp => comp.type !== 'FOOTER' && comp.type !== 'MENU_BAR')
            .map(comp => (
              <div key={comp.id} className="mb-6 border w-full max-h-full border-slate-300 shadow-md transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-105 duration-300">
                <button
                    type="button"
                    className="h-full w-full hover:border-green-500"
                    onClick={() => {
                      if (comp?.isSection) {
                        handleEditSection(comp)
                      } else {
                        goToEdit(comp)
                      }
                    }}
                  >
                  
                {comp?.isSection && mode === 'desktop' && (
                  <SectionPreviewRenderer section={comp} disableHover noShadow />
                )}
                {comp?.isSection && mode === 'mobile' && <VariantIframe section={comp} />}
                {!comp?.isSection && <Component data={comp} />}

                <div className="">
                  {!comp?.isSection && (
                    <div className="w-full border-black border-r flex justify-center items-center">
                      <div className="flex border border-black">
                        <ColumnPreviewBox active={comp.columns >= 1} />
                        <ColumnPreviewBox active={comp.columns >= 2} />
                        <ColumnPreviewBox active={comp.columns >= 3} />
                        <ColumnPreviewBox active={comp.columns >= 4} lastElement />
                      </div>
                    </div>
                  )}
                  {/* <button
                    type="button"
                    className="h-full border-black p-1 bg-white w-full"
                    onClick={() => {
                      setMintComponent(comp)
                    }}
                  >
                    Mint
                  </button> */}
                </div>
                </button>
                <div className="flex justify-between border-t items-center">
                  <button
                    type="button"
                    className={clsx(
                      comp.type === 'MENU_BAR' || comp.type === 'FOOTER'
                        ? 'cursor-not-allowed disabled:opacity-50'
                        : 'cursor-pointer',
                      'h-12 w-full flex justify-center items-center text-slate-500   transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-110 duration-300 hover:text-slate-800',
                    )}
                    disabled={comp.type === 'MENU_BAR' || comp.type === 'FOOTER'}
                    onClick={() => {
                      onMoveUp(comp.id)
                    }}
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l7.5-7.5 7.5 7.5m-15 6l7.5-7.5 7.5 7.5" />
                    </svg>

                    {/* <UpIcon /> */}
                  </button>
                  <button
                    type="button"
                    onClick={() => handleDuplicate(comp)}
                    className="h-12 w-full cursor-pointer border-l-[1px] border-r-[1px]  flex justify-center items-center text-slate-500 "
                  >
                    <div className='w-full h-full flex justify-center items-center transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-110 duration-300 hover:text-slate-800'>
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 17.25v3.375c0 .621-.504 1.125-1.125 1.125h-9.75a1.125 1.125 0 01-1.125-1.125V7.875c0-.621.504-1.125 1.125-1.125H6.75a9.06 9.06 0 011.5.124m7.5 10.376h3.375c.621 0 1.125-.504 1.125-1.125V11.25c0-4.46-3.243-8.161-7.5-8.876a9.06 9.06 0 00-1.5-.124H9.375c-.621 0-1.125.504-1.125 1.125v3.5m7.5 10.375H9.375a1.125 1.125 0 01-1.125-1.125v-9.25m12 6.625v-1.875a3.375 3.375 0 00-3.375-3.375h-1.5a1.125 1.125 0 01-1.125-1.125v-1.5a3.375 3.375 0 00-3.375-3.375H9.75" />
                      </svg>
                    </div>

                    {/* <DuplicateIcon /> */}
                  </button>
                  <button
                    type="button"
                    className="h-12 w-full cursor-pointer flex border-r-[1px] border-slate-300 justify-center items-center text-slate-500 hover:text-slate-800"
                    onClick={() => {
                      setShowConfirmDeleteModal(true)
                      setConfirmDeleteComponentId(comp.id)
                    }}
                  >
                    <div className='w-full h-full flex justify-center items-center transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-110 duration-300 hover:text-slate-800'>
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
                      </svg>
                    </div>
                    
                    {/* <DeleteIcon /> */}
                  </button>
                  <button
                    type="button"
                    className={clsx(
                      comp.type === 'MENU_BAR' || comp.type === 'FOOTER'
                        ? 'cursor-not-allowed disabled:opacity-50'
                        : 'cursor-pointer',
                      'h-12 w-full flex justify-center items-center text-slate-500 transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-110 duration-300 hover:text-slate-800',
                    )}
                    disabled={comp.type === 'MENU_BAR' || comp.type === 'FOOTER'}
                    onClick={() => onMoveDown(comp.id)}
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 5.25l-7.5 7.5-7.5-7.5m15 6l-7.5 7.5-7.5-7.5" />
                    </svg>

                    {/* <DownIcon /> */}
                  </button>
                </div>

                {!comp?.isSection && (
                  <div className="flex justify-between border-t border-black border-slate-300 items-center">
                    <ColumnButton currentColumn={1} columns={comp.columns} onClick={() => onUpdateColumn(comp, 1)} />
                    <ColumnButton currentColumn={2} columns={comp.columns} onClick={() => onUpdateColumn(comp, 2)} />
                    <ColumnButton currentColumn={3} columns={comp.columns} onClick={() => onUpdateColumn(comp, 3)} />
                    <ColumnButton
                      currentColumn={4}
                      columns={comp.columns}
                      onClick={() => onUpdateColumn(comp, 4)}
                      lastElement
                    />
                  </div>
                )}
              </div>
            ))}

          {/* footer */}
          {footer ? (
            <div className="mb-6  shadow-md transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-105 duration-300">
              <button
                  type="button"
                  onClick={() => goToEdit({ type: 'FOOTER', ...footer })}
                  className="w-full h-full"
                >
              
                {footer.style === 'FOOTER1' && <Footer1 {...{ ...footer }} />}
                {footer.style === 'FOOTER2' && <Footer2 {...{ ...footer }} />}
                {footer.style === 'FOOTER3' && <Footer3 {...{ ...footer }} />}
                {footer.style === 'FOOTER4' && <Footer4 {...{ ...footer }} />}
              </button>
            </div>
          ) : (
            <div className="mb-6 w-full aspect-w-4 aspect-h-3 bg-black">
              <button
                type="button"
                onClick={() =>
                  goToEdit({
                    type: 'FOOTER',
                    props: {
                      info: {
                        name: website.name,
                      },
                    },
                  })
                }
                className="font-extralight flex text-center justify-center items-center text-white text-7xl"
              >
                Footer
              </button>
            </div>
          )}

          {/* settings */}
          <div className="mb-6 w-full aspect-w-4 aspect-h-3 bg-zinc-800 border border-slate-300 shadow-md transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-105 duration-300">
            <button
              type="button"
              className="font-extralight flex text-center justify-center items-center text-white text-7xl"
              onClick={() => setShowSettingsModal(true)}
            >
              Settings  
            </button>
          </div>

          {/* add new component button */}
          <div className="mb-6 w-full aspect-w-4 aspect-h-3 bg-[#F2F2F2] cut-border ">
            <button
              type="button"
              className="z-1 p-5 font-extralight flex text-center justify-center items-center text-[#37322C] text-7xl"
              onClick={() => setShowNewSection(true)}
            >
              <GoPlus style={{ fontSize: '5rem' }} />
            </button>
          </div>
        </div>

        <div>
          {menubar && <MenuBar {...{ ...menubar, website }} isPreviewMode />}
          {flipped &&
            components.map(comp => (
              <div key={comp.id}>
                {comp.isSection ? (
                  <RenderSection section={comp} />
                ) : (
                  <>
                    <div className="hidden md:block" style={{ width: getBlockWidth(comp.columns ?? 4) }}>
                      <Component data={comp} />
                    </div>
                    <div className="block md:hidden px-4">
                      <Component data={comp} />
                    </div>
                  </>
                )}
              </div>
            ))}
          {footer && (
            <>
              {footer.style === 'FOOTER1' && <Footer1 {...{ ...footer }} />}
              {footer.style === 'FOOTER2' && <Footer2 {...{ ...footer }} />}
              {footer.style === 'FOOTER3' && <Footer3 {...{ ...footer }} />}
              {footer.style === 'FOOTER4' && <Footer4 {...{ ...footer }} />}
            </>
          )}
        </div>
      </ReactCardFlip>

      <ConfirmModal open={showConfirmDeleteModal} onConfirm={handleConfirmDelete} />

      <Suspense>
        {googleFonts.length ? (
          <GoogleFonts fonts={[...googleFonts.map(font => ({ font, weights: [400, 500, 600, 700] }))]} />
        ) : null}
      </Suspense>

      <NewSection
        open={showNewSection}
        onClose={() => {
          setShowNewSection(false)
          invalidate()
        }}
      />

      <EditSection
        value={editItem}
        open={!!editItem}
        onClose={() => {
          setEditItem(null)
          invalidate()
        }}
        onUpdate={({ id, ...rest }) => {
          websiteStore.updateComponent(id, rest)
        }}
      />
      <WebsiteSettings
        websiteLogo={JSON.parse(website?.config ?? '{}')?.logo}
        open={showSettingsModal}
        onClose={() => setShowSettingsModal(false)}
        id={websiteID}
      />

      <MintModal open={mintComponent} onClose={() => setMintComponent(null)} component={mintComponent} />

      <EditSectionModal
        open={!!editSection}
        section={editSection}
        onClose={() => {
          setEditSection(null)
          invalidate()
        }}
        onUpdate={({ id, ...rest }) => {
          websiteStore.updateComponent(id, rest)
        }}
      />
    </>
  )
}
