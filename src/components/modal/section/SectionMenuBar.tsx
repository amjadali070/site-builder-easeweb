import React, { useCallback, useContext, useState } from 'react'
import { v4 as uuid } from 'uuid'
import produce from 'immer'
import { WebsiteContext } from 'src/components/context/WebsiteContext'
import ModalDialogV2 from 'src/components/new/ModalDialogV2'
import { ReactComponent as MoreIcon } from '../../../assets/icons/menuBar/more.svg'
import { ReactComponent as AddIcon } from '../../../assets/icons/menuBar/add.svg'
// import { ReactComponent as DeleteIcon } from '../../../assets/icons/menuBar/delete.svg'
// import { ReactComponent as DownIcon } from '../../../assets/icons/menuBar/down.svg'
// import { ReactComponent as DuplicateIcon } from '../../../assets/icons/menuBar/duplicate.svg'
// import { ReactComponent as EditIcon } from '../../../assets/icons/menuBar/edit.svg'
// import { ReactComponent as UpIcon } from '../../../assets/icons/menuBar/up.svg'
import ModalDialog, { ModalProps } from '../../new/ModalDialog'
import SectionMenuPreview from './SectionMenuPreview'
import EditMenubarItem from './EditMenubarItem'

interface IProps extends ModalProps {
  defaultValue: any
  websiteID?: string
  pageID?: string
}

const MenuBar = (props: IProps) => {
  const websiteContext = useContext(WebsiteContext)
  const { defaultValue, ...rest } = props

  const [activeKey, setActiveKey] = useState('')
  const [pages, setPages] = useState((defaultValue?.pages || []) as any[])
  const [editItem, setEditItem] = useState<any>()
  const [showMenuPreview, setShowMenuPreview] = useState(false)
  const showModalAddPage = !!editItem

  const set = useCallback((func: (state: any[]) => any) => {
    setPages(
      produce(state => {
        func(state)
      }),
    )
  }, [])

  return (
    <ModalDialogV2 onBack={rest.onClose} open={rest.open}>
      <div className="p-5">
        <h1 className="text-4xl">Menu</h1>
        <div className="h-[2px] mt-2 w-[60%] bg-[#C4C4C4]" />
        <div>
          {pages.map((item: any, index) => (
            <div key={item.id}>
              <div className="flex items-center justify-between my-4">
                <div className="flex items-center gap-x-3">
                  <div className="title text-2xl">{item.title}</div>
                  {!item?.visible && <div className="px-2 py-1 bg-gray-200 text-sm">Hidden</div>}
                </div>
                
                <MoreIcon onClick={() => setActiveKey(activeKey === item.id ? '' : item.id)} />
              </div>
              {item.id === activeKey && (
                <div className="flex justify-between items-center border bg-gray-300">
                  <div className="grow h-14 w-20 flex justify-center items-center">
                    <button
                      onClick={() => {
                        if (index === 0) return
                        set(x => {
                          const items = x.splice(index, 1)
                          x.splice(index - 1, 0, ...items)
                        })
                      }}
                    >
                      <div className='w-full h-full flex justify-center items-center transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-110 duration-300 hover:text-slate-800'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l7.5-7.5 7.5 7.5m-15 6l7.5-7.5 7.5 7.5" />
                        </svg>
                      </div>
                      
                    </button>
                  </div>
                  <div className="grow h-14 w-20 flex justify-center items-center">
                    <button
                    onClick={() => {
                      const id = uuid()
                      set(x => x.splice(index + 1, 0, { ...item, id }))
                      setActiveKey(id)
                    }}
                    >
                        <div className='w-full h-full flex justify-center items-center transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-110 duration-300 hover:text-slate-800'>
                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 17.25v3.375c0 .621-.504 1.125-1.125 1.125h-9.75a1.125 1.125 0 01-1.125-1.125V7.875c0-.621.504-1.125 1.125-1.125H6.75a9.06 9.06 0 011.5.124m7.5 10.376h3.375c.621 0 1.125-.504 1.125-1.125V11.25c0-4.46-3.243-8.161-7.5-8.876a9.06 9.06 0 00-1.5-.124H9.375c-.621 0-1.125.504-1.125 1.125v3.5m7.5 10.375H9.375a1.125 1.125 0 01-1.125-1.125v-9.25m12 6.625v-1.875a3.375 3.375 0 00-3.375-3.375h-1.5a1.125 1.125 0 01-1.125-1.125v-1.5a3.375 3.375 0 00-3.375-3.375H9.75" />
                          </svg>
                        </div>
                    </button>
                  </div>
                  <div className="grow h-14 w-20  flex justify-center items-center">
                    <div className='w-full h-full flex justify-center items-center transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-110 duration-300 hover:text-slate-800'>
                      <button
                        onClick={() => setEditItem(item)}
                      >
                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
                          </svg>
                      </button>
                    </div>
                    
                  </div>
                  <div className="grow h-14 w-20 flex justify-center items-center">
                    <button
                    onClick={() => set(x => x.splice(index, 1))}
                    >
                      <div className='w-full h-full flex justify-center items-center transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-110 duration-300 hover:text-slate-800'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
                        </svg>
                      </div>  
                    </button>
                    
                  </div>
                  <div className="grow h-14 w-20 flex justify-center items-center">
                    <button
                      onClick={() => {
                        if (index + 1 === pages.length) return
                        set(x => {
                          const items = x.splice(index, 1)
                          x.splice(index + 1, 0, ...items)
                        })
                      }}
                    >
                      <div className='w-full h-full flex justify-center items-center transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-110 duration-300 hover:text-slate-800'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 5.25l-7.5 7.5-7.5-7.5m15 6l-7.5 7.5-7.5-7.5" />
                        </svg>
                      </div>
                    </button>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
        <button type="button" className="pt-10 flex items-center" onClick={() => setEditItem({})}>
          <div className="h-14 w-16 border-[1px] border-black flex justify-center items-center">
            <AddIcon />
          </div>
          <span className="text-2xl pl-10">Add Link</span>
        </button>
        <div className="mt-4">
          <button
            className="px-4 py-3 border border-black w-full"
            type="submit"
            onClick={() => setShowMenuPreview(true)}
          >
            Preview
          </button>
        </div>

        <ModalDialogV2 open={showModalAddPage} onBack={() => setEditItem(null)}>
          <EditMenubarItem
            defaultValue={editItem}
            onUpdate={item => {
              setEditItem(null)
              set(_pages => {
                if (!item.id) {
                  _pages.push({ ...item, id: uuid() })
                } else {
                  const index = _pages.findIndex(x => x.id === item.id)
                  if (index !== -1) _pages.splice(index, 1, item)
                }
              })
            }}
          />
        </ModalDialogV2>

        <ModalDialog
          title="Menu Preview"
          open={showMenuPreview}
          onBack={() => setShowMenuPreview(false)}
          onClose={() => setShowMenuPreview(false)}
        >
          <SectionMenuPreview
            menu={{ pages, style: defaultValue?.style }}
            website={defaultValue?.website}
            websiteId={websiteContext.websiteID}
            onClose={rest.onClose}
          />
        </ModalDialog>
      </div>
    </ModalDialogV2>
  )
}

export default MenuBar
