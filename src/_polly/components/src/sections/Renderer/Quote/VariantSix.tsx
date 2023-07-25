import { SectionSlate } from '../../../../../../components/editor'
import { QuoteSection as QuoteSectionType } from '../../types'

interface VariantOneProps {
  section: QuoteSectionType
}

export default function VariantSix({ section }: VariantOneProps) {
  const title = section.variables.find(variable => variable.name === 'TITLE')?.data
  const subTitle = section.variables.find(variable => variable.name === 'SUBTITLE')?.data

  return (
    <div className="container mx-auto">
      <div className=" bg-white py-[32vh] mx-auto lg:px-20 items-center lg:w-3/4 justify-center lg:mx-auto ">
        <p className="text-zinc-800 text-4xl lg:w-3/5 w-full font-normal mx-auto px-3 antialiased leading-relaxed text-center ">
          <SectionSlate initialValue={title} previewMode />
        </p>
        <p className="text-gray-700 text-base text-center py-5">
          - <SectionSlate initialValue={subTitle} previewMode />
        </p>
      </div>
    </div>
  )
}
