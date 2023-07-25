import { SectionSlate } from '../../../../../../components/editor'
import { QuoteSection as QuoteSectionType } from '../../types'
import clsx from 'clsx'

interface VariantOneProps {
  section: QuoteSectionType
}

export default function VariantFive({ section }: VariantOneProps) {
  const title = section.variables.find(variable => variable.name === 'TITLE')?.data
  const subTitle = section.variables.find(variable => variable.name === 'SUBTITLE')?.data
  const media = section.variables.find(variable => variable.name === 'MEDIA')?.data

  return (
    <div className="bg-white">
      <div className="mx-auto py-20">
        <div className="flex flex-col sm:flex-row items-center justify-center gap-2 mt-10 overflow-hidden">
          <div className="lg:w-1/4 lg:h-96 w-80 flex flex-col pr-16">
            <p className="text-gray-700 pb-3 text-sm lg:hidden block">
              - <SectionSlate initialValue={title} previewMode />
            </p>
            <img
              className={clsx('object-cover lg:w-full lg:h-full mb-5 bg-center overflow-hidden')}
              src={media}
              alt="image"
            />
            <p className="text-gray-700 text-base lg:block hidden">
              - <SectionSlate initialValue={subTitle} previewMode />
            </p>
          </div>
          <div className="lg:p-8 p-5 pr-10 -mt-28 -mr-32 rounded text-start lg:w-1/2 w-80 lg:-ml-48">
            <p className="text-zinc-800 pb-4 lg:text-3xl text-lg  font-normal">
              <SectionSlate initialValue={title} previewMode />
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
