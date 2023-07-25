import { GiKnifeFork } from 'react-icons/gi'
import { SectionSlate } from '../../../../../../components/editor'
import '../../../css/custom.css'
import { AttentionGrabberSection } from '../../types'

export default function VariantThirteen({ section }: { section: AttentionGrabberSection }) {
  const title = section.variables.find(variable => variable.name === 'TITLE')?.data
  const subTitle = section.variables.find(variable => variable.name === 'SUBTITLE')?.data
  const paragraph = section.variables.find(variable => variable.name === 'PARAGRAPH')?.data
  const media = section.variables.find(variable => variable.name === 'MEDIA')?.data
  return (
    <>
      <div
        className="h-[90vh] bg-center bg-no-repeat bg-cover"
        style={{
          backgroundImage: media ? `url(${media})` : '',
        }}
      >
        <div className="h-full w-full bg-black bg-opacity-30 fixed"></div>
        <div className="h-[90vh] flex flex-row items-center gap-10 py-24 justify-between text-center text-neutral-content">
          <div className="w-7/12 self-end hidden z-10 lg:block">
            <img
              src="https://techboom-second-task.vercel.app/static/media/sllide1.754eca3d40f4c66fb7cb.png"
              className="w-96"
              alt=""
            />
          </div>
          <div className="w-full">
            <div className="text-[14px] lg:text-[200px] text-white mt-2 lg:mt-11 mb-14">
              <SectionSlate initialValue={subTitle} previewMode />
            </div>
            <SectionSlate initialValue={title} previewMode />
            <div className="text-[#BCA981] w-6/12 mx-auto flex items-center">
              <div className="w-full">
                <div className="ml-7 bg-[#BCA981] h-[1px] mb-1"></div>
                <div className="bg-[#BCA981] h-[1px]"></div>
              </div>
              <span className="text-5xl">
                <GiKnifeFork></GiKnifeFork>
              </span>
              <div className="w-full">
                <div className="mr-7 bg-[#BCA981] h-[1px] mb-1"></div>
                <div className="bg-[#BCA981] h-[1px]"></div>
              </div>
            </div>
            <div className="mt-4 text-white max-w-sm mx-auto">
              <SectionSlate initialValue={paragraph} previewMode />
            </div>
          </div>
          <div className="w-7/12 self-end hidden z-10 lg:block">
            <img
              src="https://techboom-second-task.vercel.app/static/media/slide2.9d7e6853d87630872736.png"
              className="w-96"
              alt=""
            />
          </div>
        </div>
      </div>
    </>
  )
}
