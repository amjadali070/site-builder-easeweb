import { AboutUsSection as AboutUsSectionType } from '../../types'
import { SectionSlate } from '../../../../../../components/editor'

interface VariantThreeProps {
  section: AboutUsSectionType
}

export default function VariantThree({ section }: VariantThreeProps) {
  const title = section.variables.find(variable => variable.name === 'TITLE')?.data
  const subTitle = section.variables.find(variable => variable.name === 'SUBTITLE')?.data
  const paragraph = section.variables.find(variable => variable.name === 'PARAGRAPH')?.data
  const buttonOne = section.variables.find(variable => variable.name === 'BUTTON_1')?.data
  const buttonTwo = section.variables.find(variable => variable.name === 'BUTTON_2')?.data
  const media = section.variables.find(variable => variable.name === 'MEDIA')?.data

  return (
    <div
      className="flex bg-black bg-cover bg-no-repeat bg-center"
      style={{
        backgroundImage: media ? `url(${media})` : '',
      }}
    >
      <div className="container mx-auto py-10 px-6 md:px-40 md:py-20 text-center font-light">
        <div className="bg-[#EFEFEF] py-8 px-6 md:px-14 md:py-14 space-y-8">
          {title && (
            <div>
              <p className="text-[40px] md:text-[60px]">{<SectionSlate initialValue={title} previewMode/>}</p>
            </div>
          )}

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

          {buttonOne && (
            <div className="flex justify-center gap-5 flex-wrap pt-4">
              <a className="h-11 px-8 bg-[#4A4C51] flex justify-center items-center text-white" href={buttonOne.to}>
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
    </div>
  )
}
