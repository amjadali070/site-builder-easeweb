import { SectionSlate } from '../../../../../../components/editor'
import { QuoteSection as QuoteSectionType } from '../../types'
import clsx from 'clsx'

interface VariantOneProps {
  section: QuoteSectionType
}

export default function VariantFour({ section }: VariantOneProps) {
  const title = section.variables.find(variable => variable.name === 'TITLE')?.data
  const subTitle = section.variables.find(variable => variable.name === 'SUBTITLE')?.data
  const media = section.variables.find(variable => variable.name === 'MEDIA')?.data

  return (
    <div className="bg-white">
      <div className="container mx-auto ">
        <div className="flex flex-col sm:flex-row items-center justify-center gap-2 mt-10 overflow-hidden">
          <div className="lg:w-3/4 w-80">
            <img
              className={clsx('object-cover lg:w-full lg:h-full mb-5 bg-center overflow-hidden')}
              src={media}
              alt=""
            />
          </div>
          <div className="bg-[#EEEEEE] lg:p-8 p-5 -mt-16 rounded text-start lg:w-2/5 w-64 lg:-ml-28">
            <p className="text-gray-700 pb-4 lg:text-xl font-medium">
              <SectionSlate initialValue={title} previewMode />
            </p>
            <p className="text-gray-700">
              - <SectionSlate initialValue={subTitle} previewMode />
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
