import { SectionSlate } from '../../../../../../components/editor'
import { QuoteSection as QuoteSectionType } from '../../types'

interface VariantOneProps {
  section: QuoteSectionType
}

export default function VariantThree({ section }: VariantOneProps) {
  const title = section.variables.find(variable => variable.name === 'TITLE')?.data
  const subTitle = section.variables.find(variable => variable.name === 'SUBTITLE')?.data
  // const image = section.variables.find(variable => variable.name === 'MEDIA')?.data

  return (
    <div className="bg-gradient-to-t from-black via-transparent to-gray-900">
      <div className="bg-[url('https://images.unsplash.com/photo-1517350650693-235bf7b574df?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bGFrZSUyMGFuJTIwbW91bnRhaW58ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60')] bg-local flex flex-col justify-center items-center bg-no-repeat bg-cover banner h-[100vh] brightness-90">
        <div className="lg:w-3/5 w-80">
          <p className="text-black text-center p-5 lg:text-2xl leading-relaxed font-normal tracking-tight">
            <SectionSlate initialValue={title} previewMode />
          </p>
          <p className="text-zinc-900 text-base font-medium pb-4 text-center">
            <SectionSlate initialValue={subTitle} previewMode />
          </p>
        </div>
      </div>
    </div>
  )
}
