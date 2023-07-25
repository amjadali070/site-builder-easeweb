import { SectionSlate } from '../../../../../../components/editor'
import { AttentionGrabberSection } from '../../types'

export default function VariantThree({ section }: { section: AttentionGrabberSection }) {
  const title = section.variables.find(variable => variable.name === 'TITLE')?.data
  const subTitle = section.variables.find(variable => variable.name === 'SUBTITLE')?.data
  const paragraph = section.variables.find(variable => variable.name === 'PARAGRAPH')?.data
  const buttonOne = section.variables.find(variable => variable.name === 'BUTTON_1')?.data
  const buttonTwo = section.variables.find(variable => variable.name === 'BUTTON_2')?.data
  const media = section.variables.find(variable => variable.name === 'MEDIA')?.data

  return (
    <div>
      <div className="bg-black py-[70px] lg:py-[100px]">
        <div className="container mx-auto px-6 md:px-0">
          <div className="w-[750px] max-w-full mx-auto">
            <div className="text-[72px] text-white text-center leading-[90px]">
              <SectionSlate initialValue={title} previewMode />
            </div>
          </div>

          {subTitle && (
            <div className="w-[750px] max-w-full mx-auto mt-12">
              <div className="text-[20px] text-white text-center">
                <SectionSlate initialValue={subTitle} previewMode />
              </div>
            </div>
          )}

          {paragraph && (
            <div className="w-[750px] max-w-full mx-auto mt-12">
              <div className="text-white text-center leading-7">
                <SectionSlate initialValue={paragraph} previewMode />
              </div>
            </div>
          )}

          {buttonOne && (
            <div className="flex justify-center gap-5 mt-4 lg:mt-14 flex-wrap">
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

      {media && (
        <div className="h-[565px]">
          <img className="h-full w-full object-cover object-center bg-black" src={media} alt="" />
        </div>
      )}
    </div>
  )
}
