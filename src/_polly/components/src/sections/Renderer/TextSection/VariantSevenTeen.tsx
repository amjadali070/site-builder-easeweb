import { SectionSlate } from '../../../../../../components/editor'
import { TextSection as TextSectionType } from '../../types'

function VariantSevenTeen({ section }: { section: TextSectionType }) {
  const title = section.variables.find(variable => variable.name === 'TITLE')?.data
  const subTitle = section.variables.find(variable => variable.name === 'SUBTITLE')?.data
  const paragraph = section.variables.find(variable => variable.name === 'PARAGRAPH')?.data
  const subText = subTitle[0]?.children[0]?.text
  const text = subText?.split(' ')
  return (
    <>
      <div id="hood" className="bg-[#E4E1DF] px-5 lg:px-10">
        <div className="hero">
          <div className="hero-content flex-col w-full justify-start py-16">
            <div className="flex flex-row mb-6 w-full gap-1 lg:gap-8 text-lg text-[#2E4239] font-medium">
              {text?.map((data: string, i: number) => (
                <div className="flex gap-1 lg:gap-8 uppercase" key={i}>
                  {i > 0 && <p>•</p>}
                  <p>{data}</p>
                </div>
              ))}
            </div>
            <h1 className="lg:text-8xl w-full text-5xl text-[#2E4239] font-semibold flex items-center uppercase pb-6">
              <span>
                <SectionSlate initialValue={title} previewMode />
              </span>
              <span className="hidden lg:inline">—</span>
            </h1>
            <div className="w-full">
              <p className="max-w-sm">
                <SectionSlate initialValue={paragraph} previewMode />
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default VariantSevenTeen
