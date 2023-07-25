import { SectionSlate } from '../../../../../../components/editor'
import { AttentionGrabberSection } from '../../types'

export default function VariantFive({ section }: { section: AttentionGrabberSection }) {
  const title = section.variables.find(variable => variable.name === 'TITLE')?.data
  const subTitle = section.variables.find(variable => variable.name === 'SUBTITLE')?.data
  const paragraph = section.variables.find(variable => variable.name === 'PARAGRAPH')?.data
  const buttonOne = section.variables.find(variable => variable.name === 'BUTTON_1')?.data
  const buttonTwo = section.variables.find(variable => variable.name === 'BUTTON_2')?.data
  const media = section.variables.find(variable => variable.name === 'MEDIA')?.data

  return (
    <div>
      <div className="bg-black py-[50px] lg:py-[100px] bg-cover bg-no-repeat bg-center">
        {media && (
          <div className="bg-black pb-14">
            <div className="h-[445px] w-[940px] max-w-full mx-auto">
              <img className="h-full w-full object-cover object-center bg-black" src={media} alt="" />
            </div>
          </div>
        )}
        <div></div>

        <div className="container mx-auto px-6 md:px-0">
          <div className="w-[940px] max-w-full mx-auto">
            <div className="text-[72px] text-white leading-[90px]">
              <SectionSlate initialValue={title} previewMode />
            </div>
            {subTitle && (
              <div className="text-[20px] text-white mt-12">
                <SectionSlate initialValue={subTitle} previewMode />
              </div>
            )}
            {paragraph && (
              <div className="text-white leading-7  mt-12">
                <SectionSlate initialValue={paragraph} previewMode />
              </div>
            )}
            {buttonOne && (
              <div className="flex justify-center gap-5 mt-6 lg:mt-14 flex-wrap">
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
      </div>
    </div>
  )
}
