import clsx from 'clsx'
import { SectionSlate } from '../../../../../../components/editor'
import { AttentionGrabberSection } from '../../types'

export default function VariantOne({ section }: { section: AttentionGrabberSection }) {
  const title = section.variables.find(variable => variable.name === 'TITLE')?.data
  const subTitle = section.variables.find(variable => variable.name === 'SUBTITLE')?.data
  const paragraph = section.variables.find(variable => variable.name === 'PARAGRAPH')?.data
  const buttonOne = section.variables.find(variable => variable.name === 'BUTTON_1')?.data
  const buttonTwo = section.variables.find(variable => variable.name === 'BUTTON_2')?.data
  const media = section.variables.find(variable => variable.name === 'MEDIA')?.data

  return (
    <div className="grid grid-cols-2 bg-black py-[100px]">
      {media && (
        <div className=" justify-center lg:justify-end flex">
          <div className="mt-[80px] lg:mt-0 w-[150px] lg:w-[400px]   h-[300px] lg:h-[780px] ">
            <img src={media} alt="" className="h-full w-full object-cover object-center bg-black" />
          </div>
        </div>
      )}

      <div className="pl-0 lg:pl-14 flex items-center">
        <div className={clsx('max-w-full', media && 'w-[460px]', !media && 'w-[930px] mx-auto')}>
          <div className="text-white leading-[30px] lg:leading-[90px] text-[30px] lg:text-[72px] mt-[80px] lg:mt-0">
            <SectionSlate initialValue={title} previewMode />
          </div>

          {subTitle && (
            <div className="text-[14px] lg:text-[20px] text-white mt-2 lg:mt-11">
              <SectionSlate initialValue={subTitle} previewMode />
            </div>
          )}

          {paragraph && (
            <div className="text-white lg:leading-7  mt-2 lg:mt-12">
              <SectionSlate initialValue={paragraph} previewMode />
            </div>
          )}
          {buttonOne && (
            <div className="flex gap-5 mt-4 lg:mt-14 flex-wrap">
              <a className="lg:h-11 px-4 bg-white flex justify-center items-center" href={buttonOne.to}>
                {buttonOne.label}
              </a>
              {buttonTwo && (
                <a
                  className="lg:h-11 px-4 border border-white flex justify-center items-center text-white"
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
  )
}
