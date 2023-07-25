import { GoPrimitiveDot } from 'react-icons/go'
import { SectionSlate } from '../../../../../../components/editor'
import { QuoteSection as QuoteSectionType } from '../../types'

interface VariantOneProps {
  section: QuoteSectionType
}

export default function VariantNine({ section }: VariantOneProps) {
  const title = section.variables.find(variable => variable.name === 'TITLE')?.data
  const subTitle = section.variables.find(variable => variable.name === 'SUBTITLE')?.data
  const paragraph = section.variables.find(variable => variable.name === 'DESCRIPTION')?.data
  const media = section.variables.find(variable => variable.name === 'MEDIA')?.data
  const buttonOne = section.variables.find(variable => variable.name === 'BUTTON_1')?.data
  const buttonTwo = section.variables.find(variable => variable.name === 'BUTTON_2')?.data

  return (
    <div className="mx-8 my-16 bg-base-100">
      <div className="flex items-center justify-center gap-6 flex-col lg:flex-row">
        <div className="hidden md:block lg:block w-full">
          <img src={media} className="w-full lg:shadow-2xl" />
        </div>
        <div className="w-full text-center">
          <h1 className="text-5xl font-head text-[#B48B7E]">
            <SectionSlate initialValue={subTitle} previewMode />
          </h1>
          <h1 className="text-4xl font-sub uppercase">
            <SectionSlate initialValue={title} previewMode />
          </h1>
          <div className="text-[#B48B7E] my-2 w-28 mx-auto flex items-center">
            <div className="w-full">
              <div className="bg-[#B48B7E] h-[1px]"></div>
            </div>
            <span className="mx-2">
              <GoPrimitiveDot></GoPrimitiveDot>
            </span>
            <div className="w-full">
              <div className="bg-[#B48B7E] h-[1px]"></div>
            </div>
          </div>
          <p className="py-6 text-sm">
            <SectionSlate initialValue={paragraph} previewMode />
          </p>
          {buttonOne && (
            <div className="flex justify-center gap-5 flex-wrap pt-4">
              <a className="uppercase font-sub border-b border-[#B48B7E] text-2xl" href={buttonOne.to}>
                {buttonOne.label}➧
              </a>
              {buttonTwo && (
                <a className="uppercase font-sub border-b border-[#B48B7E] text-2xl" href={buttonTwo.to}>
                  {buttonTwo.label}➧
                </a>
              )}
            </div>
          )}
          <div className="my-custom-pagination-div text-center mt-10" />
        </div>
      </div>
    </div>
  )
}
