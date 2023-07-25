import { Descendant } from 'slate'
import {
  PortfolioItemsGroup,
  PortfolioVariables,
  PortfolioVariants,
  Section,
  SectionTags,
} from 'src/_polly/components/src/sections'
import { v4 as uuid } from 'uuid'
import { getSectionVariants } from './get-variants'

const tags: Record<PortfolioVariants, SectionTags[]> = {
  VARIANT_1: ['IMAGE', 'ANIMATION', 'SLIDESHOW'],
}

export function getPortfolioVariants() {
  const title: Descendant[] = [{ type: 'h1', children: [{ text: 'Title' }] }]
  const SubTitle: Descendant[] = [{ type: 'h3', children: [{ text: 'Sub Title' }] }]
  const paragraph: Descendant[] = [{ type: 'paragraph', children: [{ text: 'Pargraph' }] }]
  const media =
    'https://images.unsplash.com/photo-1660236822651-4263beb35fa8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80'

  const variants = getSectionVariants('PORTFOLIO')
  const sections: Section<PortfolioVariants, PortfolioVariables>[] = []
  variants.forEach(variant => {
    const data: Section<PortfolioVariants, PortfolioVariables> = {
      id: variant.id,
      createdAt: '',
      isSection: true,
      type: 'PORTFOLIO',
      updatedAt: '',
      variables: [
        { id: uuid(), category: 'TEXT', data: title, name: 'TITLE' },
        { id: uuid(), category: 'TEXT', data: SubTitle, name: 'SUBTITLE' },
        { id: uuid(), category: 'TEXT', data: paragraph, name: 'PARAGRAPH' },
        { id: uuid(), category: 'IMAGE', data: media, name: 'MEDIA' },
        {
          id: uuid(),
          category: 'IMAGE',
          name: 'ITEMS',
          data: [
            {
              id: uuid(),
              image: media,
              name: 'item 1',
              description: ' Lorem ipsum dolor sit amet consectetur  ',
            },
            {
              id: uuid(),
              image: media,
              name: 'item 2',
              desription: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia',
            },
            {
              id: uuid(),
              image: media,
              name: ' item 3',
              desription: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia',
            },
            {
              id: uuid(),
              image: media,
              name: 'item 4',
              desription: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia',
            },
            {
              id: uuid(),
              image: media,
              name: 'item 5',
              desription: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia',
            },
          ] as PortfolioItemsGroup[],
        },
      ],
      variant: variant.id as PortfolioVariants,
      tags: tags[variant.id as PortfolioVariants],
      styleName: variant.name,
      designedBy: 'Plly Staff',
    }
    sections.push(data)
  })
  return sections
}
