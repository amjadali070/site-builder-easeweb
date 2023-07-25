import { createContext, PropsWithChildren, useMemo, useState } from 'react'

interface IState {
  websiteID: string
  pagePath?: string
  pageID: string
  googleFonts: string[]
  addGoogleFont: (fonts: string) => void
  setPageID: (pageID: string) => void
  dropValue: string
  setDropValue: (dropValue: string) => void
}

export const WebsiteContext = createContext<IState>({
  websiteID: '',
  pagePath: '',
  pageID: '',
  googleFonts: [],
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  addGoogleFont: () => {},
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  setPageID: () => {},
  dropValue: '',
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  setDropValue: () => {},
})

export function WebsiteContextProvider(props: PropsWithChildren<{ websiteID: string; pagePath?: string }>) {
  const { children, websiteID, pagePath } = props

  const [googleFonts, setGoogleFonts] = useState<string[]>([])
  const [pageID, setPageID] = useState<string>('')

  const [dropValue, setDropValue] = useState<string>('info')

  const addGoogleFont = (newFont: string) => {
    setGoogleFonts(_fonts => (_fonts.includes(newFont) ? _fonts : [...new Set([..._fonts, newFont])]))
  }

  const state = useMemo(
    () => ({ websiteID, googleFonts, addGoogleFont, pagePath, pageID, setPageID, dropValue, setDropValue }),
    [googleFonts, websiteID, pagePath, pageID, setPageID, dropValue, setDropValue],
  )

  return <WebsiteContext.Provider value={state}>{children}</WebsiteContext.Provider>
}
