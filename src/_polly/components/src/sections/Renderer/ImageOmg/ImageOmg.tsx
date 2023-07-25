import { ImageOmgSection as ImageOmgType } from '../../types'
import VariantOne from './VariantOne'

export default function ImageOmg({ section }: { section: ImageOmgType }) {
  switch (section.variant) {
    case 'VARIANT_1':
      return <VariantOne {...{ section }}   />

    case 'VARIANT_2':
      return <div>Variant2</div>


    default:
      return null
  }
}