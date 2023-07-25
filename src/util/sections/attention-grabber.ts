import { Descendant } from 'slate'
import {
  AttentionGrabberVariables,
  AttentionGrabberVariants,
  Section,
  SectionTags,
  SectionVariable,
} from 'src/_polly/components/src/sections'
import { v4 as uuid } from 'uuid'
import { getSectionVariants } from './get-variants'

const tags: Record<AttentionGrabberVariants, SectionTags[]> = {
  VARIANT_1: ['IMAGE', 'ANIMATION'],
  VARIANT_2: ['IMAGE', 'ANIMATION'],
  VARIANT_3: ['IMAGE', 'ANIMATION'],
  VARIANT_4: ['IMAGE', 'ANIMATION'],
  VARIANT_5: ['IMAGE', 'ANIMATION'],
  VARIANT_6: ['IMAGE'],
  VARIANT_7: ['IMAGE'],
  VARIANT_8: ['IMAGE'],
  VARIANT_9: ['IMAGE'],
  VARIANT_10: ['IMAGE'],
  VARIANT_11: ['IMAGE'],
  VARIANT_12: ['IMAGE', 'ANIMATION'],
  VARIANT_13: ['IMAGE'],
  VARIANT_14: ['IMAGE'],
}

export function getAttentionGrabberVariants() {
  const title: Descendant[] = [{ type: 'h1', children: [{ text: 'Title' }] }]
  const subTitle: Descendant[] = [{ type: 'h3', children: [{ text: 'Sub Title' }] }]
  const paragraph: Descendant[] = [{ type: 'paragraph', children: [{ text: 'Paragraph' }] }]
  const media =
    'https://images.unsplash.com/photo-1660236822651-4263beb35fa8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80'

  const variants = getSectionVariants('ATTENTION_GRABBER')
  const sections: Section<AttentionGrabberVariants, AttentionGrabberVariables>[] = []

  for (const variant of variants) {
    let variables: SectionVariable<AttentionGrabberVariables>[] = []

    if (variant.id === 'VARIANT_2') {
      const title2: Descendant[] = [
        {
          type: 'h1',
          children: [{ text: 'Title', className: 'jumbotron-heading1' }],
        },
      ]
      const subTitle2: Descendant[] = [
        { type: 'h3', children: [{ text: 'Sub Title', className: 'text-[20px] lg:text-[40px]' }] },
      ]

      variables = [
        { id: uuid(), category: 'TEXT', data: title2, name: 'TITLE' },
        { id: uuid(), category: 'TEXT', data: subTitle2, name: 'SUBTITLE' },
        { id: uuid(), category: 'TEXT', data: paragraph, name: 'PARAGRAPH' },
        { id: uuid(), category: 'IMAGE', data: media, name: 'MEDIA' },
      ]
    }
    if(variant.id === 'VARIANT_14') {
      const title2: Descendant[] = [
        {
          type: 'h1',
          children: [{ text: 'Arslan Ahmed Bhutto', className: 'jumbotron-heading1' }],
        },
      ]

      variables = [
        { id: uuid(), category: 'TEXT', data: title2, name: 'TITLE' },
        { id: uuid(), category: 'IMAGE', data: "https://strong-clafoutis-392a2e.netlify.app/static/media/girl.a19baa9162e2bc4b9e16.png", name: 'MEDIA' },
      ]
    }

    if (!variables.length) {
      variables = [
        { id: uuid(), category: 'TEXT', data: title, name: 'TITLE' },
        { id: uuid(), category: 'TEXT', data: subTitle, name: 'SUBTITLE' },
        { id: uuid(), category: 'TEXT', data: paragraph, name: 'PARAGRAPH' },
        { id: uuid(), category: 'IMAGE', data: media, name: 'MEDIA' },
      ]
    }

    sections.push({
      id: variant.id,
      createdAt: '',
      isSection: true,
      type: 'ATTENTION_GRABBER',
      updatedAt: '',
      variables,
      variant: variant.id as AttentionGrabberVariants,
      tags: tags[variant.id as AttentionGrabberVariants],
      styleName: variant.name,
      designedBy: 'Plly Staff',
    })
  }

  return sections
}
