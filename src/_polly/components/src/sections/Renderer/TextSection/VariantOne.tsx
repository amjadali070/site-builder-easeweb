import { SectionSlate } from '../../../../../../components/editor'
import { TextSection as TextSectionType } from '../../types'

interface VariantOneProps {
  section: TextSectionType
  hideImageBg?: boolean
}

export default function VariantOne({ section, hideImageBg }: VariantOneProps) {
  const title = section.variables.find(variable => variable.name === 'TITLE')?.data
  const subTitle = section.variables.find(variable => variable.name === 'SUBTITLE')?.data
  const paragraph = section.variables.find(variable => variable.name === 'PARAGRAPH')?.data
  const buttonOne = section.variables.find(variable => variable.name === 'BUTTON_1')?.data
  const buttonTwo = section.variables.find(variable => variable.name === 'BUTTON_2')?.data
  const media = section.variables.find(variable => variable.name === 'MEDIA')?.data

  return (
    <div
      className="bg-black py-[100px] bg-cover bg-no-repeat bg-center"
      style={{
        backgroundImage: media && !hideImageBg ? `url(${media})` : '',
      }}
    >
      <div className="container mx-auto px-6 md:px-0">
        <div className="w-[750px] max-w-full mx-auto">
          <p className="text-[72px] text-white text-center leading-[90px]">{<SectionSlate initialValue={title} previewMode/>}</p>
        </div>

        {subTitle && (
          <div className="w-[750px] max-w-full mx-auto mt-12">
            <p className="text-[20px] text-white text-center">{<SectionSlate initialValue={subTitle} previewMode/>}</p>
          </div>
        )}

        {paragraph && (
          <div className="w-[750px] max-w-full mx-auto mt-12">
            <p className="text-white text-center leading-7">{<SectionSlate initialValue={title} previewMode/>}</p>
          </div>
        )}

        {buttonOne && (
          <div className="flex justify-center gap-5 mt-14 flex-wrap">
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
    </div>
  )
}
