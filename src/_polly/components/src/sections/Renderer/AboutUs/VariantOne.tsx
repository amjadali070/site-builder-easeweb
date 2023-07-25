import { AboutUsSection as AboutUsSectionType } from '../../types'
import { SectionSlate } from '../../../../../../components/editor'

interface VariantOneProps {
  section: AboutUsSectionType
}

export default function VariantOne({ section }: VariantOneProps) {
  const title = section.variables.find(variable => variable.name === 'TITLE')?.data
  const subTitle = section.variables.find(variable => variable.name === 'SUBTITLE')?.data
  const paragraph = section.variables.find(variable => variable.name === 'PARAGRAPH')?.data
  const buttonOne = section.variables.find(variable => variable.name === 'BUTTON_1')?.data
  const buttonTwo = section.variables.find(variable => variable.name === 'BUTTON_2')?.data

  const columnClassNames = `w-full text-left flex flex-col gap-6 py-12 px-6 md:px-20 md:py-[100px]`

  return (
    <div className="bg-cover bg-no-repeat bg-center">
      <div className="grid md:grid-cols-2 font-light">
        <div className={`bg-black ${columnClassNames}`}>
          <div>
            <p className="text-[40px] text-white">{<SectionSlate initialValue={title} previewMode/>}</p>
          </div>
          <div className="bg-white h-[2px] w-1/12 mb-[15px]" />

          {buttonOne && (
            <div className="flex gap-5 flex-wrap">
              <a className="h-11 px-4 bg-white flex justify-center items-center" href={buttonOne.to}>
                {buttonOne.label}
              </a>
              {buttonTwo && (
                <a
                  className="h-11 px-4 border border-white flex justify-center items-center text-white"
                  href={buttonTwo.to}
                >
                  {buttonTwo.label}
                </a>
              )}
            </div>
          )}
        </div>

        <div className={columnClassNames}>
          {subTitle && (
            <div>
              <p className="text-[24px]">{<SectionSlate initialValue={subTitle} previewMode/>}</p>
            </div>
          )}
          {paragraph && (
            <div>
              <p className="leading-7">{<SectionSlate initialValue={paragraph} previewMode/>}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
