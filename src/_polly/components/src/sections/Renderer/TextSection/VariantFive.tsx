import { SectionSlate } from '../../../../../../components/editor'
import { TextSection as TextSectionType } from '../../types'

interface VariantFiveProps {
  section: TextSectionType
  hideImageBg?: boolean
}

export default function VariantFive({ section, hideImageBg }: VariantFiveProps) {
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
        <div className="w-[900px] max-w-full mx-auto grid grid-cols-2 gap-x-5">
          <div>
            <p className="text-[72px] text-white leading-[90px]">{<SectionSlate initialValue={title} previewMode/>}</p>

            {subTitle && (
              <div className="mt-10">
                <p className="text-[20px] text-white">{<SectionSlate initialValue={subTitle} previewMode/>}</p>
              </div>
            )}

            {buttonOne && (
              <div className="flex gap-5 mt-14 flex-wrap">
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
          <div>
            <p className="text-white leading-7">{<SectionSlate initialValue={paragraph} previewMode/>}</p>
          </div>
        </div>
      </div>
    </div>
  )
}
