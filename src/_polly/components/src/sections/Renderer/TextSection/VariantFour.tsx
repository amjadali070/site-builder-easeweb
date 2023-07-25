import { TextSection as TextSectionType } from '../../types'
import VariantOne from './VariantOne'

export default function VariantFour({ section }: { section: TextSectionType }) {
  const media = section.variables.find(variable => variable.name === 'MEDIA')?.data

  return (
    <div>
      {media && (
        <div className="bg-black">
          <div className="container mx-auto">
            <div className="h-[440px] w-full mx-auto">
              <img className="h-full w-full object-cover object-center bg-black" src={media} alt="" />
            </div>
          </div>
        </div>
      )}
      <VariantOne {...{ section }} hideImageBg />
    </div>
  )
}
