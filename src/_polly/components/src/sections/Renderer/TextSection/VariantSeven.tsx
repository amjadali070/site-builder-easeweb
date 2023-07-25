import { SectionSlate } from '../../../../../../components/editor'
import { TextSection as TextSectionType } from '../../types'
const Fade = require('react-reveal/Fade')

export default function VariantSeven({ section }: { section: TextSectionType }) {
  const title = section.variables.find(variable => variable.name === 'TITLE')?.data
  const paragraph = section.variables.find(variable => variable.name === 'PARAGRAPH')?.data
  return (
    <Fade left>
      <div className="bg-red-400 text-white p-12">
        <div className="container mx-auto">
          <Fade left delay={10}>
            <h1 className="text-[2.5em] lg:text-[5em]">
              <SectionSlate initialValue={title} previewMode />
            </h1>
          </Fade>
          <Fade left delay={1500}>
            <p className="text-[1.2em] lg:text-[2.5em] pl-[1rem] lg:pl-[4rem] text-justify mt-3">
              <SectionSlate initialValue={paragraph} previewMode />
            </p>
          </Fade>
        </div>
      </div>
    </Fade>
  )
}
