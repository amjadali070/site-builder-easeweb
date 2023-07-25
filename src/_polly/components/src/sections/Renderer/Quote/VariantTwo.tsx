import { SectionSlate } from '../../../../../../components/editor'
import { QuoteSection as QuoteSectionType } from '../../types'
import clsx from 'clsx'

interface VariantOneProps {
  section: QuoteSectionType
}

export default function VariantTwo({ section }: VariantOneProps) {
  const title = section.variables.find(variable => variable.name === 'TITLE')?.data
  const subTitle = section.variables.find(variable => variable.name === 'SUBTITLE')?.data

  return (
    <div className="bg-white w-full">
      <div className="container mx-auto ">
        <div className="grid grid-cols-1 lg:py-[100px]">
          <div className="flex flex-col py-10 sm:flex-row justify-evenly">
            <div className="2/3 w-48 h-48 px-5">
              <img
                className={clsx(' mb-5 bg-auto rounded-full')}
                src="https://www.superteacher.it/wp-content/uploads/2015/06/team_member_03.jpg"
                alt=""
              />
            </div>
            <div className="text-start lg:w-8/12 lg:px-16 px-5 ">
              <p className="text-gray-700 text-base pb-4">
                <SectionSlate initialValue={title} previewMode />
              </p>
              <p className="text-dark pb-4  text-4xl leading-relaxed font-normal tracking-tight">
                <SectionSlate initialValue={subTitle} previewMode />
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
