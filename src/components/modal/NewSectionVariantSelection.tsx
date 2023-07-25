import clsx from 'clsx'
import { useContext, useState } from 'react'
import { Triangle } from 'react-loader-spinner'

import { SectionPreviewRenderer, SectionTags, SectionTypes } from 'src/_polly/components/src/sections'

import { ReactComponent as AnimationTagIcon } from 'src/assets/icons/section/variant-animation-tag.svg'
import { ReactComponent as ImageTagIcon } from 'src/assets/icons/section/variant-image-tag.svg'
import { ReactComponent as SlideShowTagIcon } from 'src/assets/icons/section/variant-slide-tag.svg'
import { ReactComponent as VideoTagIcon } from 'src/assets/icons/section/variant-video-tag.svg'
// import { Swiper} from 'swiper/react'

// import { Navigation } from 'swiper'
import 'swiper/css'
import 'swiper/css/effect-fade'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
// import { ReactComponent as LogoIcon } from 'src/assets/icons/section/O.logo.svg'
import { ReactComponent as BackgroundIcon } from 'src/assets/icons/section/variant-background-tag.svg'
import { ReactComponent as ButtonIcon } from 'src/assets/icons/section/variant-button-tag.svg'
import { Loader } from '../loader'
import { WebsiteContext } from '../context/WebsiteContext'
import { getSectionVariantsWithPreview } from '../../util/sections/get-variants'
import { upsertBlockByPageID } from '../../services/website.service'

const tagIcons: Record<SectionTags, typeof BackgroundIcon> = {
  IMAGE: ImageTagIcon,
  VIDEO: VideoTagIcon,
  ANIMATION: AnimationTagIcon,
  SLIDESHOW: SlideShowTagIcon,
  BACKGROUND: BackgroundIcon,
  BUTTON: ButtonIcon,
}

interface NewSectionVariantSelectionProps {
  onClose: () => void
  sectionType?: SectionTypes
}

export function VariantIframe({ section }: { section: ReturnType<typeof getSectionVariantsWithPreview>[number] }) {
  const [loaded, setLoaded] = useState(false)
  return (
    <div className="w-full max-h-[500px] h-[500px] relative">
      {!loaded && (
        <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center">
          <Triangle height="80" width="80" color="#000" ariaLabel="triangle-loading" wrapperStyle={{}} visible />
        </div>
      )}
      <iframe
        key={section.id}
        src={`/variant-preview/?section=${window.btoa(JSON.stringify(section))}`}
        frameBorder="0"
        title="Plly Preview"
        className="w-full max-h-[500px] h-[500px]"
        onLoad={() => setLoaded(true)}
      />
    </div>
  )
}

export default function NewSectionVariantSelection({ onClose, sectionType }: NewSectionVariantSelectionProps) {
  const websiteContext = useContext(WebsiteContext)
  const variants = getSectionVariantsWithPreview(sectionType)

  const [adding, setAdding] = useState(false)
  const [mode, setMode] = useState<'desktop' | 'mobile'>('desktop')
  const [previewItem, setPreviewItem] = useState<ReturnType<typeof getSectionVariantsWithPreview>[number] | null>(null)

  const handleAddTextSection = async (variant: string) => {
    setAdding(true)
    const variables = (variants as any[]).find(v => v.id === variant)?.variables
    await upsertBlockByPageID(websiteContext.pageID, {
      type: sectionType,
      isSection: true,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
      variables,
      variant,
    } as any)
    setAdding(false)
    onClose()
  }

  return (
    <div className="px-4">
      <Loader show={adding} />
      <div className="flex w-full  justify-between items-center">
        {/* <div className=" cursor-pointer absolute top-[42px] left-[87px] ">
          <LogoIcon />
        </div> */}
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

      {previewItem ? (
        <>
          <div className="border border-black mt-[100px]">
            {mode === 'desktop' ? (
              <SectionPreviewRenderer section={previewItem} noShadow disableHover />
            ) : (
              <VariantIframe section={previewItem} />
            )}
          </div>
          <div className="flex justify-center">
            <button
              type="button"
              onClick={() => handleAddTextSection(previewItem.variant)}
              className="mt-20 w-72  bg-green-500 text-2xl border shadow-md rounded-md hover:bg-green-600 text-white py-3"
            >
              Select
            </button>
          </div>
        </>
      ) : (
        <>
          <div className="mt-[40px] mb-12">
            <h1 className="uppercase text-center  text-4xl font-bold">
              {sectionType?.split('_').join(' ').toLowerCase()}
            </h1>
            <p className="text-center  text-xl mt-2">Click on your desired section</p>
          </div>

          <div className="space-y-10">
              {variants.map(section => (
                <div key={section.id}>
                  <button
                        type="button"
                        className='w-full'
                        onClick={() => setPreviewItem(section)}
                      >
                      
                  <div className="relative w-full h-full border border-gray-300 shadow-md bg-gray-300 hover:bg-gray-400">
                    {section.tags && (
                      <div className="hidden flex gap-x-9 justify-center my-3 mt-6">
                        {section.tags.map((tag, idx) => {
                          const Icon = tagIcons[tag]
                          return (
                            <div
                              key={idx}
                              className="w-[58px] h-[45px] p-2 flex justify-center items-center border border-black"
                            >
                              <Icon />
                            </div>
                          )
                        })}
                      </div>
                    )}

                    <div className={clsx('border bg-white', !section.tags && 'mt-6')}>
                      {mode === 'desktop' ? (
                        <SectionPreviewRenderer {...{ section }} noShadow disableHover />
                      ) : (
                        <VariantIframe section={section} />
                      )}
                    </div>

                    {(section.designedBy || section.styleName) && (
                      <div className="px-4 py-2 text-center">
                        <p className="text-1xl font-light ">{section.styleName}</p>
                        {/* <p className="text-1xl font-light">Designed by: {section.designedBy}</p> */}
                      </div>
                    )}

                    <div className="hidden my-3 border border-black flex">
                      <button
                        type="button"
                        className="flex-1 py-4 text-3xl font-extralight border-r border-black"
                        onClick={() => handleAddTextSection(section.variant)}
                      >
                        select
                      </button>
                      <button
                        type="button"
                        className="flex-1 py-4 text-3xl font-extralight"
                        onClick={() => setPreviewItem(section)}
                      >
                        preview
                      </button>
                    </div>
                  </div>
                  </button>
                </div>
              ))}
          </div>
        </>
      )}
      <div className="mb-5" />
    </div>
  )
}
