import { TextSection as TextSectionType } from '../../types'
import VariantOne from './VariantOne'

export default function VariantThree({ section }: { section: TextSectionType }) {
  const media = section.variables.find(variable => variable.name === 'MEDIA')?.data

  return (
    <div>
      <VariantOne {...{ section }} hideImageBg />
      {media && (
        <div className="bg-black pb-14">
          <div className="h-[445px] w-[940px] max-w-full mx-auto">
            <img className="h-full w-full object-cover object-center bg-black" src={media} alt="" />
          </div>
        </div>
      )}
    </div>
  )
}
