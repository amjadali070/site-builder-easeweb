import { Descendant } from 'slate'
import { QuoteVariables, QuoteVariants, Section, SectionTags } from 'src/_polly/components/src/sections'
import { v4 as uuid } from 'uuid'
import { getSectionVariants } from './get-variants'
const tags: Record<QuoteVariants, SectionTags[]> = {
  VARIANT_1: ['IMAGE'],
  VARIANT_2: ['IMAGE'],
  VARIANT_3: ['IMAGE'],
  VARIANT_4: ['IMAGE'],
  VARIANT_5: ['IMAGE'],
  VARIANT_6: [],
  VARIANT_7: [],
  VARIANT_8: ['ANIMATION'],
  VARIANT_9: [],
  VARIANT_10:[],
}

export function getQuoteVariants() {
  const title: Descendant[] = [{ type: 'h1', children: [{ text: 'Title' }] }]
  const subTitle: Descendant[] = [{ type: 'h3', children: [{ text: 'Sub Title' }] }]
  const paragraph: Descendant[] = [{ type: 'paragraph', children: [{ text: 'Paragraph' }] }]
  const media =
    'https://images.unsplash.com/photo-1660236822651-4263beb35fa8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80'

  const variants = getSectionVariants('QUOTE_SECTION')
  const sections: Section<QuoteVariants, QuoteVariables>[] = []

  variants.forEach(variant => {
    const data: Section<QuoteVariants, QuoteVariables> = {
      id: variant.id,
      createdAt: '',
      isSection: true,
      type: 'QUOTE_SECTION',
      updatedAt: '',
      tags: tags[variant.id as QuoteVariants],
      variables: [
        { id: uuid(), category: 'TEXT', data: title, name: 'TITLE' },
        { id: uuid(), category: 'TEXT', data: subTitle, name: 'SUBTITLE' },
        { id: uuid(), category: 'TEXT', data: paragraph, name: 'DESCRIPTION' },
        { id: uuid(), category: 'IMAGE', data: media, name: 'MEDIA' },
      ],
      variant: variant.id as QuoteVariants,
      styleName: variant.name,
      designedBy: 'Plly Staff',
    }
    sections.push(data)
  })

  return sections
}
