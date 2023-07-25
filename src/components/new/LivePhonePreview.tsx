import { useEffect, useState } from 'react'
import clsx from 'clsx'
import { SectionPreviewRenderer } from 'src/_polly/components/src/sections'
import useWebsite from '../../store/website'
import Footer1 from '../../_polly/components/src/Footer1'
import Footer2 from '../../_polly/components/src/Footer2'
import Footer3 from '../../_polly/components/src/Footer3'
import Footer4 from '../../_polly/components/src/Footer4'
import MenuBar from '../../_polly/components/src/MenuBar'
import Component from './Component'

function getWidth(columns: number, isSection: boolean) {
  const gap = '8px'

  if (columns === 4 || isSection) {
    return '100%'
  }

  if (columns === 3) {
    return `calc(75% - ${gap})`
  }

  if (columns === 2) {
    return `calc(50% - ${gap})`
  }

  return `calc(25% - ${gap})`
}

export default function LivePhonePreview() {
  const store = useWebsite(state => state)
  const [previewMode, setPreviewMode] = useState<'desktop' | 'mobile'>('desktop')
  const [showWarningModal, setShowWarningModal] = useState(false)
  const [iframeKey, setIframeKey] = useState(0)

  const handleModeChange = (mode: 'desktop' | 'mobile') => {
    if (mode === 'mobile') {
      if (localStorage.getItem('mobilePreviewWarning') !== 'true') {
        setShowWarningModal(true)
      }
    }
    setPreviewMode(mode)
  }

  const handleMobileWarning = () => {
    localStorage.setItem('mobilePreviewWarning', 'true')
    setShowWarningModal(false)
  }

  useEffect(() => {
    setIframeKey(iframeKey + 1)
  }, [store.mobilePreviewComponents])

  return (
    <div className="relative hidden lg:block">
      <div
        className={clsx(
          'z-50 fixed top-0 right-0 bottom-0 left-0 justify-center items-center',
          !showWarningModal && 'hidden',
        )}
      >
        <div className="relative w-full h-full bg-white/90 flex justify-center items-center">
          <div className="w-[340px] bg-white border-[3px] border-black border-solid">
            <div className="p-6 flex justify-center items-center">
              <p className="w-56 text-base font-light leading-relaxed text-black">
                Mobile preview does not support live editing.
              </p>
            </div>
            <div className="flex items-center pb-4 px-9 space-x-8">
              <button
                onClick={handleMobileWarning}
                type="button"
                className="w-full h-9 text-base font-light text-black text-center border-[1px] border-black"
              >
                OKAY
              </button>
            </div>
          </div>
        </div>
      </div>

      
      <div className="absolute top-5 left-0 w-full flex justify-end items-center pr-24">
        <div className="border flex">
          <button
            type="submit"
            title='Mobile Preview'
            className={clsx(
              `border  rounded-[4px] h-[50px] py-[4px] px-[2px] hover:shadow-md hover:shadow-slate-500
              ${previewMode === 'mobile' ? 'bg-gray-600 border-white' : 'bg-white border-slate-400'}`,
            )}
            onClick={() => handleModeChange('mobile')}
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" 
              className={clsx(
                `w-7 h-7 ${
                  previewMode === 'mobile' ? 'text-white' : ''
                }`,
              )}
              >
              <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" />
            </svg>

            {/* <div
              className={clsx(
                `border-2 border-black rounded-sm w-[27px] h-full ${
                  previewMode === 'mobile' ? 'bg-white' : 'bg-gray-600'
                }`,
              )}
            /> */}
          </button>
          <button
            type="submit"
            title='Desktop Preview'
            className={clsx(
              `border  rounded-[4px] h-[50px] py-[4px] px-[2px] ml-2 hover:shadow-md hover:shadow-slate-500
              ${previewMode === 'desktop' ? 'bg-gray-600 border-white' : 'bg-white border-slate-400'}`,
            )}
            onClick={() => handleModeChange('desktop')}
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={clsx(
                `w-16 h-7 ${
                  previewMode === 'desktop' ? 'text-white' : ''
                }`,
              )}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0V12a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 12V5.25" />
            </svg>

            {/* <div
              className={clsx(
                `border-2 border-black rounded-sm w-[55px] h-full ${
                  previewMode === 'desktop' ? 'bg-white' : 'bg-gray-600'
                }`,
              )}
            /> */}
          </button>
        </div>
      </div>
      {previewMode === 'mobile' ? (
        <div className="hidden h-full w-full lg:flex justify-center items-center bg-slate-100">
          <div className="no-scrollbar overflow-auto w-[384px] h-[680px] max-h-full  rounded-md bg-white border border-slate-400 shadow-xl">
            {store.components.length && store.website ? (
              <iframe
                src={`/preview/${store.website.id}`}
                frameBorder="0"
                width="384px"
                height="750px"
                title="Plly Preview"
                key={iframeKey}
              />
            ) : (
              <div className="flex justify-center items-center h-full">
                <p className="text-lg">Select a website to preview</p>
              </div>
            )}
          </div>
        </div>
      ) : (
        <div className="h-screen container flex justify-center items-center bg-slate-200">
          <div
            className="overflow-auto w-[1000px] max-w-[90%] rounded-md bg-white border border-slate-400 shadow-xl"
            style={{ aspectRatio: '16/9' }}
          >
            {store.components.length && store.website ? (
              <>
                <MenuBar {...{ ...store.website.menu, website: store.website }} isPreviewMode />

                <div className="flex flex-wrap">
                  {store.components.map((block: any) => (
                    <div
                      key={block.id}
                      style={{
                        width: getWidth(block.columns ?? 4, block?.isSection ?? false),
                        padding: block?.isSection ? '0' : '0 16px',
                      }}
                    >
                      {block?.isSection ? (
                        <SectionPreviewRenderer disableHover noShadow section={block} scale={2} />
                      ) : (
                        <Component data={block} />
                      )}
                    </div>
                  ))}
                </div>

                {store.website.footer.style === 'FOOTER1' && <Footer1 {...{ ...store.website.footer }} />}
                {store.website.footer.style === 'FOOTER2' && <Footer2 {...{ ...store.website.footer }} />}
                {store.website.footer.style === 'FOOTER3' && <Footer3 {...{ ...store.website.footer }} />}
                {store.website.footer.style === 'FOOTER4' && <Footer4 {...{ ...store.website.footer }} />}
              </>
            ) : (
              <div className="flex justify-center items-center h-full">
                <p className="text-lg">Select a website to preview</p>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  )
}
