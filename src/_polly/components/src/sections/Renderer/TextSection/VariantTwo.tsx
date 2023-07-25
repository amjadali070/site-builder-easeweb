import { TextSection as TextSectionType } from '../../types'
import VariantOne from './VariantOne'

export default function VariantTwo({ section }: { section: TextSectionType }) {
  const media = section.variables.find(variable => variable.name === 'MEDIA')?.data

  return (
    <div>
      <VariantOne {...{ section }} hideImageBg />
      {media && (
        <div className="h-[565px]">
          <img className="h-full w-full object-cover object-center bg-black" src={media} alt="" />
        </div>
      )}
    </div>
  )
}
