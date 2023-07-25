import {
  Section,
  SectionTags,
  TABLESectionItem,
  TABLEVariables,
  TABLEVariants,
} from 'src/_polly/components/src/sections'
import { v4 as uuid } from 'uuid'
import { getSectionVariants } from './get-variants'
const tags: Record<TABLEVariants, SectionTags[]> = {
  VARIANT_1: ['ANIMATION'],
}
export function getTABLEVariants() {
  const variants = getSectionVariants('TABLE')
  const sections: Section<TABLEVariants, TABLEVariables>[] = []

  variants.forEach(variant => {
    const data: Section<TABLEVariants, TABLEVariables> = {
      id: variant.id,
      createdAt: '',
      isSection: true,
      type: 'TABLE',
      updatedAt: '',
      tags: tags[variant.id as TABLEVariants],
      variables: [
        { id: uuid(), category: 'TEXT', data: 'List Title', name: 'TITLE' },
        {
          id: uuid(),
          name: 'ITEMS',
          category: 'TEXT',
          data: [
            {
              id: uuid(),
              title: '83',
              description: 'Describe the item and include any relevant details. Click to edit the text.',
            },
            {
              id: uuid(),
              title: '240',
              description: 'Describe the item and include any relevant details. Click to edit the text.',
            },
            {
              id: uuid(),
              title: '15',
              description: 'Describe the item and include any relevant details. Click to edit the text.',
            },
            {
              id: uuid(),
              title: '7',
              description: 'Describe the item and include any relevant details. Click to edit the text.',
            },
          ] as TABLESectionItem[],
        },
      ],
      variant: variant.id as TABLEVariants,
      styleName: variant.name,
      designedBy: 'Plly Staff',
    }
    sections.push(data)
  })

  return sections
}
