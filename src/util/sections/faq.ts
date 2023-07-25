import { FAQSectionItem, FAQVariables, FAQVariants, Section, SectionTags } from 'src/_polly/components/src/sections'
import { v4 as uuid } from 'uuid'
import { getSectionVariants } from './get-variants'
const tags: Record<FAQVariants, SectionTags[]> = {
  VARIANT_1: [],
  VARIANT_2: [],
  VARIANT_3: ['IMAGE', 'ANIMATION'],
  VARIANT_4: ['ANIMATION'],
  VARIANT_5: ['ANIMATION'],
  VARIANT_7: [],
}
export function getFAQVariants() {
  const variants = getSectionVariants('FAQ')
  const sections: Section<FAQVariants, FAQVariables>[] = []

  variants.forEach(variant => {
    if (variant.id === 'VARIANT_7') {
      const data: Section<FAQVariants, FAQVariables> = {
        id: variant.id,
        createdAt: '',
        isSection: true,
        type: 'FAQ',
        updatedAt: '',
        tags: tags[variant.id as FAQVariants],
        variables: [
          { id: uuid(), category: 'TEXT', data: 'FEATURES & AWARDS', name: 'TITLE' },
          {
            id: uuid(),
            name: 'ITEMS',
            category: 'TEXT',
            data: [
              {
                id: uuid(),
                title: 'Cssda',
                description: 'Developer Of The Year (Special Kudos)',
                items: '',
                year: 2021,
              },
              {
                id: uuid(),
                title: 'Cssda',
                description: 'Site Of The Day',
                items: 3,
                year: 2021,
              },
              {
                id: uuid(),
                title: 'Cssda',
                description: 'Public UI Award',
                items: 4,
                year: '2019 — 21',
              },
              {
                id: uuid(),
                title: 'Cssda',
                description: 'Public Innovation Award',
                items: 4,
                year: '2019 — 21',
              },
              {
                id: uuid(),
                title: 'Cssda',
                description: ' Public UX Award',
                items: 4,
                year: '2019 — 21',
              },
              {
                id: uuid(),
                title: 'Awwwards',
                description: 'Site Of The Day',
                items: '',
                year: '2021',
              },
              {
                id: uuid(),
                title: 'Awwwards',
                description: 'Ecommerce Of The Year (Nominee)',
                items: '',
                year: '2021',
              },
              {
                id: uuid(),
                title: 'Awwwards',
                description: 'Developer Award',
                items: 2,
                year: '2021',
              },
              {
                id: uuid(),
                title: 'Awwwards',
                description: 'Honors',
                items: 2,
                year: '2020 — 21',
              },
              {
                id: uuid(),
                title: 'Awwwards',
                description: 'Mobile Excellence',
                items: 2,
                year: '2020 — 21',
              },
              {
                id: uuid(),
                title: 'Awwwards',
                description: 'Mobile Of The Week',
                items: '',
                year: '2020 — 21',
              },
            ] as FAQSectionItem[],
          },
        ],
        variant: variant.id as FAQVariants,
        styleName: variant.name,
        designedBy: 'Hayatul Islam',
      }
      sections.push(data)
    } else {
      const data: Section<FAQVariants, FAQVariables> = {
        id: variant.id,
        createdAt: '',
        isSection: true,
        type: 'FAQ',
        updatedAt: '',
        tags: tags[variant.id as FAQVariants],
        variables: [
          { id: uuid(), category: 'TEXT', data: 'List Title', name: 'TITLE' },
          {
            id: '123',
            name: 'ITEMS',
            category: 'TEXT',
            data: [
              {
                id: '1',
                title: '83',
                description: 'Describe the item and include any relevant details. Click to edit the text.',
              },
              {
                id: '2',
                title: '240',
                description: 'Describe the item and include any relevant details. Click to edit the text.',
              },
              {
                id: '3',
                title: '15',
                description: 'Describe the item and include any relevant details. Click to edit the text.',
              },
              {
                id: '4',
                title: '7',
                description: 'Describe the item and include any relevant details. Click to edit the text.',
              },
            ] as FAQSectionItem[],
          },
        ],
        variant: variant.id as FAQVariants,
        styleName: variant.name,
        designedBy: 'Plly Staff',
      }
      sections.push(data)
    }
  })

  return sections
}
