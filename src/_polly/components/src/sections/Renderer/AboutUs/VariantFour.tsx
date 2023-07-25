import { AboutUsSection as AboutUsSectionType } from '../../types'
import { SectionSlate } from '../../../../../../components/editor'

interface VariantFourProps {
  section: AboutUsSectionType
}

export default function VariantFour({ section }: VariantFourProps) {
  const title = section.variables.find(variable => variable.name === 'TITLE')?.data
  const subTitle = section.variables.find(variable => variable.name === 'SUBTITLE')?.data
  const paragraph = section.variables.find(variable => variable.name === 'PARAGRAPH')?.data
  const buttonOne = section.variables.find(variable => variable.name === 'BUTTON_1')?.data
  const buttonTwo = section.variables.find(variable => variable.name === 'BUTTON_2')?.data

  return (
    <div className="bg-[#EFEFEF]">
      <div className="container mx-auto py-12 px-6 md:px-20 md:py-[100px] text-left font-light space-y-10">
        {title && (
          <div>
            <p className="text-[40px] md:text-[60px]">{<SectionSlate initialValue={title} previewMode/>}</p>
          </div>
        )}

        {subTitle && (
          <div>
            <p className="text-[24px] ">{<SectionSlate initialValue={subTitle} previewMode/>}</p>
          </div>
        )}

        {paragraph && (
          <div>
            <p className=" leading-7">{<SectionSlate initialValue={paragraph} previewMode/>}</p>
          </div>
        )}

        {buttonOne && (
          <div className="flex justify-start gap-5 flex-wrap pt-3">
            <a className="h-11 px-8 bg-[#4A4C51] text-white flex justify-center items-center" href={buttonOne.to}>
              {buttonOne.label}
            </a>
            {buttonTwo && (
              <a className="h-11 px-8 border border-[#4A4C51] flex justify-center items-center " href={buttonTwo.to}>
                {buttonTwo.label}
              </a>
            )}
          </div>
        )}
      </div>
    </div>
  )
}
