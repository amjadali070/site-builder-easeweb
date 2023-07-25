import { useContext, useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'

import Menu from './layout/NavBar2'
import ModalDialog from './new/ModalDialog'

// import { ReactComponent as MenuIcon } from '../assets/icons/navbar/ellipse.svg'
// import { ReactComponent as BackIcon } from '../assets/icons/navbar/back.svg'
import { WebsiteContext } from './context/WebsiteContext'
import { getWebsiteByID } from '../lib/services/website.service'
import easaelogo from '../assets/images/logo.png'

interface HeaderNavProps {
  backButton?: boolean
  onBackClick?: () => void
  logo?: string | null
}

const HeaderNav = ({ backButton = false, onBackClick, logo }: HeaderNavProps) => {
  const navigate = useNavigate()
  const { websiteID } = useContext(WebsiteContext)

  const [showMenu, setShowMenu] = useState(false)
  const [websiteLogo, setWebsiteLogo] = useState()

  if (websiteID) {
    getWebsiteByID(websiteID).then(data => {
      const config = JSON.parse(data?.config || '{}')
      setWebsiteLogo(config?.logo || undefined)
    })
  }

  const handleBackClick = () => {
    if (onBackClick) {
      onBackClick()
    } else {
      navigate(-1)
    }
  }

  return (
    <>
      {/* header nav */}
      <div className="flex px-4 py-5 w-full justify-between items-center">
        
        <div className="flex items-center ml-2">
          {(backButton || onBackClick) && 
          (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" 
                className="w-10 h-10 mr-[35px] text-slate-500 hover:text-slate-800 cursor-pointer " 
                onClick={handleBackClick}
                >
                <path strokeLinecap="round" strokeLinejoin="round" d="M18.75 19.5l-7.5-7.5 7.5-7.5m-6 15L5.25 12l7.5-7.5" />
            </svg>
        
          
          )
          
          // <BackIcon className="cursor-pointer mr-[35px]  hover:-ml-[5px] hover:mr-[40px]" onClick={handleBackClick} />
          
          
          }
          <Link to="/" className="font-bold text-2xl">
            <img src={easaelogo} width="100px" alt='logo' className=''/>
          </Link>
        </div>
        {logo || websiteLogo ? (
          // eslint-disable-next-line
          <button className=" rounded-[4px] h-[50px] mr-[14px] border  hover:shadow-md">
            <div className="rounded-sm w-[45  px] h-full">
              <img
                src={logo || websiteLogo}
                alt=""
                className="border-4 border-slate-600 rounded-sm w-full h-full object-cover"
                onClick={() => setShowMenu(true)}
              />
            </div>
          </button>
        ) : (
          // <MenuIcon className="cursor-pointer w-10 h-10" onClick={() => setShowMenu(true)} />
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" 
            className="w-10 h-10 mr-3 cursor-pointer text-gray-600 hover:text-black"
            onClick={() => setShowMenu(true)}
            >
            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
          </svg>

        )}
      </div>

      {/* menu modal */}
      <ModalDialog title="Menu" open={showMenu} onClose={() => setShowMenu(false)}>
        <Menu />
      </ModalDialog>
    </>
  )
}

export default HeaderNav
