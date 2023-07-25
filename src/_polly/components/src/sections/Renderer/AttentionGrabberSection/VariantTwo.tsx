import { SectionSlate } from '../../../../../../components/editor'
import { AttentionGrabberSection } from '../../types'

export default function VariantTwo({ section }: { section: AttentionGrabberSection }) {
  const title = section.variables.find(variable => variable.name === 'TITLE')?.data
  const subTitle = section.variables.find(variable => variable.name === 'SUBTITLE')?.data
  const paragraph = section.variables.find(variable => variable.name === 'PARAGRAPH')?.data
  const buttonOne = section.variables.find(variable => variable.name === 'BUTTON_1')?.data
  const buttonTwo = section.variables.find(variable => variable.name === 'BUTTON_2')?.data
  const media = section.variables.find(variable => variable.name === 'MEDIA')?.data

  return (
    <div className="bg-black py-[10px] lg:py-[50px]">
      <div
        className="grid grid-cols-1 lg:grid-cols-2 bg-black bg-cover bg-no-repeat bg-center"
        style={{
          backgroundImage: media ? `url(${media})` : '',
        }}
      >
        <div className="flex justify-center py-[150px] bg-black/40 h-full">
          <div className="w-1/2 flex justify-center flex-col items-center">
            <div className="text-[72px] text-white leading-[90px] text-center">
              <SectionSlate initialValue={title} previewMode />
            </div>
            {subTitle && (
              <div className="text-[20px] text-white mt-12 text-center">
                <SectionSlate initialValue={subTitle} previewMode />
              </div>
            )}
            {paragraph && (
              <div className="text-white leading-7 text-center mt-12">
                <SectionSlate initialValue={paragraph} previewMode />
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
        <div className="flex-1" />
      </div>
    </div>
  )
}
