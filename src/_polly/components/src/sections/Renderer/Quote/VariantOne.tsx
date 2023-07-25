import { SectionSlate } from '../../../../../../components/editor'
import { QuoteSection as QuoteSectionType } from '../../types'
import clsx from 'clsx'

interface VariantOneProps {
  section: QuoteSectionType
}

export default function VariantOne({ section }: VariantOneProps) {
  const title = section.variables.find(variable => variable.name === 'TITLE')?.data
  const subTitle = section.variables.find(variable => variable.name === 'SUBTITLE')?.data
  const media = section.variables.find(variable => variable.name === 'MEDIA')?.data

  return (
    <div className="bg-white w-full">
      <div className="container mx-auto lg:py-[100px] py-10">
        <div className="grid grid-cols-1">
          <div className="flex flex-col sm:flex-row items-center justify-around gap-x-20">
            <div className="h-7/12 w-7/12">
              <img className={clsx('object-cover w-full h-full mb-5 bg-center overflow-hidden')} src={media} alt="" />
            </div>
            <div className="text-start w-6/12 px-10">
              <p className="text-gray-700 pb-4 text-4xl leading-relaxed font-normal tracking-tight">
                <SectionSlate initialValue={title} previewMode />
              </p>
              <p className="text-gray-700 text-base pb-4">
                <SectionSlate initialValue={subTitle} previewMode />
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
