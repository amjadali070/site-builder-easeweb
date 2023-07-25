import { useState } from 'react'
import { Link } from 'react-router-dom'
import { ReactComponent as HumburgerIcon } from './assets/icons/humburger.svg'
import { ButtonLinkTypes } from './constants'

export type STYLE_MENU = 'MENU_BAR1' | 'MENU_BAR2' | 'MENU_BAR3'

export default function MenuBar(props: any) {
  const { pages, style, website, isPreviewMode = false } = props

  const visiblePages = pages.filter((x: any) => x.visible)

  const [expanded, setExpanded] = useState(false)

  const getPageTitle = () => {
    return website?.name ?? 'Site Name'
  }

  const getMenuItemLink = (item: any) => {
    if (isPreviewMode && item.type && item.type === ButtonLinkTypes.INTERNAL) {
      return `/websites/${website.id}${item.url}`
    }
    return item.url
  }

  return (
    <>
      {style === 'MENU_BAR1' && (
        <div>
          <div className="p-4 flex justify-between bg-white">
            <span>{getPageTitle()}</span>
            <button onClick={() => setExpanded(!expanded)} className="cursor-pointer">
              <HumburgerIcon />
            </button>
          </div>
          {expanded && (
            <div>
              {visiblePages.map((page: any, idx: number) => (
                <Link
                  key={idx}
                  to={getMenuItemLink(page)}
                  onClick={() => setExpanded(false)}
                  className="p-5 border-b border-black block text-left"
                >
                  {page.title}
                </Link>
              ))}
            </div>
          )}
        </div>
      )}

      {style === 'MENU_BAR2' && (
        <div>
          <div className="p-4 flex justify-between border-b border-black">
            <div />
            <span>{getPageTitle()}</span>
            <button onClick={() => setExpanded(!expanded)} className="cursor-pointer">
              <HumburgerIcon />
            </button>
          </div>
          {expanded && (
            <div>
              {visiblePages.map((page: any, idx: number) => (
                <Link
                  key={idx}
                  to={getMenuItemLink(page)}
                  onClick={() => setExpanded(false)}
                  className="p-5 border-b border-black block text-left"
                >
                  {page.title}
                </Link>
              ))}
            </div>
          )}
        </div>
      )}

      {style === 'MENU_BAR3' && (
        <div>
          <div className="p-4 border-b border-black">
            <div className="flex justify-end">
              <button onClick={() => setExpanded(!expanded)} className="cursor-pointer">
                <HumburgerIcon />
              </button>
            </div>
            <div className="h-[2px] my-6 bg-black" />
            <span>{getPageTitle()}</span>
          </div>
          {expanded && (
            <div>
              {visiblePages.map((page: any, idx: number) => (
                <Link
                  key={idx}
                  to={getMenuItemLink(page)}
                  onClick={() => setExpanded(false)}
                  className="p-5 border-b border-black block text-left"
                >
                  {page.title}
                </Link>
              ))}
            </div>
          )}
        </div>
      )}
    </>
  )
}
