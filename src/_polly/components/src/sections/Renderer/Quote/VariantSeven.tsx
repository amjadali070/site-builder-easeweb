import { SectionSlate } from '../../../../../../components/editor'
import { QuoteSection as QuoteSectionType } from '../../types'

interface VariantOneProps {
  section: QuoteSectionType
}

export default function VariantSeven({ section }: VariantOneProps) {
  const title = section.variables.find(variable => variable.name === 'TITLE')?.data
  const subTitle = section.variables.find(variable => variable.name === 'SUBTITLE')?.data

  return (
    <div className="container mx-auto">
      <div className=" bg-white py-[18vh] mx-auto lg:px-20 items-center justify-center ">
        <p className="text-zinc-800 text-4xl lg:w-5/6 w-full font-normal lg:mx-auto px-5 antialiased leading-relaxed text-center break-all">
          <SectionSlate initialValue={title} previewMode />
        </p>
        <p className="text-gray-700 text-base text-center py-5">
          - <SectionSlate initialValue={subTitle} previewMode />
        </p>
      </div>
    </div>
  )
}
