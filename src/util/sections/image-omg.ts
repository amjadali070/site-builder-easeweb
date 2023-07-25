import { Descendant } from 'slate'
import {
  ImageOmgItemsGroup,
  ImageOmgVariables,
  ImageOmgVariants,
  Section,
  SectionTags,
} from 'src/_polly/components/src/sections'
import { v4 as uuid } from 'uuid'
import { getSectionVariants } from './get-variants'

const tags: Record<ImageOmgVariants, SectionTags[]> = {

  VARIANT_1: ['IMAGE', 'ANIMATION', 'SLIDESHOW'],
  VARIANT_2: ['IMAGE', 'ANIMATION', 'SLIDESHOW'],
}

export function getImageOmgVariants() {
  const title: Descendant[] = [{ type: 'paragraph', children: [{ text: 'Tattooed' }] }]
  const SubTitle: Descendant[] = [{ type: 'paragraph', children: [{ text: 'TECH STACK' }] }]
  const media =
    'https://images.unsplash.com/photo-1494122353634-c310f45a6d3c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fGRhcmt8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60'

  const variants = getSectionVariants('IMAGE_OMG')
  const sections: Section<ImageOmgVariants, ImageOmgVariables>[] = []

  variants.forEach(variant => {
    const data: Section<ImageOmgVariants, ImageOmgVariables> = {
      id: variant.id,
      createdAt: '',
      isSection: true,
      type: 'IMAGE_OMG',
      updatedAt: '',
      variables: [
        { id: uuid(), category: 'TEXT', data: title, name: 'TITLE' },
        { id: uuid(), category: 'TEXT', data: SubTitle, name: 'SUBTITLE' },
        { id: uuid(), category: 'IMAGE', data: media, name: 'MEDIA' },
        {
          id: uuid(),
          category: 'TEXT',
          name: 'ITEMS',
          data: [
            {
              id: uuid(),
              title: 'React',
              subtitle: 'Static Site Generator',
              description: '',
            },
            {
              id: uuid(),
              title: 'Tailwind',
              subtitle: 'CSS Framework',
              description: '',
            },
            {
              id: uuid(),
              title: 'Framer Motion',
              subtitle: 'Animation',
              description: '',
            },
            {
              id: uuid(),
              title: 'Sanity',
              subtitle: 'Headless CMS',
              description: '',
            },
            {
              id: uuid(),
              title: 'Vercel',
              subtitle: 'Hosting',
              description: '',
            },
          ] as ImageOmgItemsGroup[],
        },
      ],
      variant: variant.id as ImageOmgVariants,
      tags: tags[variant.id as ImageOmgVariants],
      styleName: variant.name,
      designedBy: 'Plly Staff',
    }
    sections.push(data)
  })
  return sections
}
