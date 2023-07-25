import { SectionSlate } from '../../../../../../components/editor'
import { AboutUsSection } from '../../types'

function VariantTwelve({ section }: { section: AboutUsSection }) {
  const title = section.variables.find(variable => variable.name === 'TITLE')?.data
  const subtitle = section.variables.find(variable => variable.name === 'SUBTITLE')?.data
  const paragraph = section.variables.find(variable => variable.name === 'PARAGRAPH')?.data
  return (
    <>
      <div className="px-[20px] md:px-[32px] py-12 grid md:grid-cols-3 pb-20 space-y-3 md:space-y-0">
        <div>
          <h2 className="text-[18px] text-[#262525] uppercase opacity-70 font-neuton">
            <SectionSlate initialValue={title} previewMode />
          </h2>
        </div>
        <div className="space-y-6">
          <p className="text-[33px] md:text-[40px] lg:text-[50px] text-[#262525] font-neuton leading-none first-letter:ml-12">
            <SectionSlate initialValue={subtitle} previewMode />
          </p>
          <p className="text-[33px] md:text-[40px] lg:text-[50px] text-[#262525] font-neuton leading-none ">
            <SectionSlate initialValue={paragraph} previewMode />
          </p>
        </div>
      </div>
    </>
  )
}

export default VariantTwelve
