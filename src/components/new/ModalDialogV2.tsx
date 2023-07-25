import { useLocation } from 'react-router-dom'
import React, { useContext, useEffect, useState } from 'react'
// import { ReactComponent as BackIcon } from 'src/assets/icons/navbar/back.svg'
// import { ReactComponent as MenuIcon } from 'src/assets/icons/navbar/ellipse.svg'
import Modal from '../common/Modal'
import { WebsiteContext } from '../context/WebsiteContext'
import { getWebsiteByID } from '../../lib/services/website.service'
import ModalDialog from './ModalDialog'
import Menu from '../layout/NavBar2'

export interface ModalProps {
  open: any
  onBack?: () => void
}

interface ModalDialogProps extends ModalProps {
  children: any
  title?: React.ReactNode
}

const ModalDialogV2 = ({ title, open, onBack, children }: ModalDialogProps) => {
  const currentLocation = useLocation()
  const { websiteID } = useContext(WebsiteContext)

  const [location] = useState(currentLocation)
  const [logo, setLogo] = useState()
  const [showMenu, setShowMenu] = useState(false)

  if (websiteID) {
    getWebsiteByID(websiteID).then(data => {
      const config = JSON.parse(data?.config || '{}')
      setLogo(config?.logo || undefined)
    })
  }

  useEffect(() => {
    if (currentLocation !== location) onBack?.()
  }, [onBack, currentLocation, location])

  return (
    <>
      <Modal open={open}>
        <div className="fixed lg:max-w-[500px] inset-0 bg-white overflow-auto">
          <div className="flex p-5 items-center justify-between">
            {onBack && (
              <button type="button" className="flex-shrink-0" onClick={onBack}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" 
                className="w-10 h-10 mr-[35px] text-slate-500 hover:text-slate-800 cursor-pointer ">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M18.75 19.5l-7.5-7.5 7.5-7.5m-6 15L5.25 12l7.5-7.5" />
                </svg>

              </button>
            )}
            <h1 className="text-xl mr-4">{title}</h1>
            {logo ? (
              // eslint-disable-next-line
            <button className=" rounded-[4px] h-[50px] border  hover:shadow-md">
              <div className="rounded-sm w-[45  px] h-full">
                <img
                  src={logo}
                  alt=""
                  className="border-4 border-slate-600 rounded-sm w-full h-full object-cover"
                  onClick={() => setShowMenu(true)}
                />
              </div>
            </button>
            ) : (
              // <MenuIcon className="cursor-pointer" onClick={() => setShowMenu(true)} />
              <button
                type="button"
                className="border border-black rounded-md h-[60px] p-[4px] ml-2"
                onClick={() => setShowMenu(true)}
              >
                <div className="border  rounded-sm w-[50px] h-full">
                  <img
                    src={logo}
                    alt=""
                    className="border-2 border-black rounded-md w-[20px] h-[20px] object-cover p-[2px]"
                  />
                </div>
              </button>
            )}
          </div>
          {children}
        </div>
      </Modal>

      {/* menu modal */}
      <ModalDialog title="Menu" open={showMenu} onClose={() => setShowMenu(false)}>
        <Menu />
      </ModalDialog>
    </>
  )
}

export default ModalDialogV2
