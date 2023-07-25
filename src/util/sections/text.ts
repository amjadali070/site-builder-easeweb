import { Descendant } from 'slate'
import {
  Section,
  SectionTags,
  TextSectionMediaGroup,
  TextSectionVariables,
  TextSectionVariants,
} from 'src/_polly/components/src/sections'
import { v4 as uuid } from 'uuid'
import { getSectionVariants } from './get-variants'
const tags: Record<TextSectionVariants, SectionTags[]> = {
  VARIANT_1: ['IMAGE'],
  VARIANT_2: ['IMAGE'],
  VARIANT_3: ['IMAGE'],
  VARIANT_4: ['IMAGE'],
  VARIANT_5: ['IMAGE'],
  VARIANT_6: ['IMAGE'],
  VARIANT_7: ['ANIMATION'],
  VARIANT_8: ['IMAGE'],
  VARIANT_9: ['IMAGE'],
  VARIANT_10: ['IMAGE', 'ANIMATION'],
  VARIANT_11: ['IMAGE', 'SLIDESHOW'],
  VARIANT_12: ['IMAGE', 'ANIMATION', 'SLIDESHOW'],
  VARIANT_13: ['IMAGE', 'ANIMATION', 'SLIDESHOW'],
  VARIANT_14: ['IMAGE', 'ANIMATION'],
  VARIANT_15: [],
  VARIANT_16: [],
  VARIANT_17: [],
  VARIANT_19: [],
}

export function getTextVariants() {
  const title: Descendant[] = [{ type: 'h1', children: [{ text: 'Title' }] }]
  const subTitle: Descendant[] = [{ type: 'h3', children: [{ text: 'Sub Title' }] }]
  const paragraph: Descendant[] = [{ type: 'paragraph', children: [{ text: 'Paragraph' }] }]
  const media =
    'https://images.unsplash.com/photo-1660236822651-4263beb35fa8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80'

  const variants = getSectionVariants('TEXT')
  const sections: Section<TextSectionVariants, TextSectionVariables>[] = []

  variants.forEach(variant => {
    if (variant.id === 'VARIANT_7') {
      const title: Descendant[] = [{ type: 'h1', children: [{ text: 'Lorem ipsum' }] }]
      const paragraph: Descendant[] = [
        {
          type: 'paragraph',
          children: [
            {
              text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, eaque rerum! Provident similique accusantium nemo autem. Veritatis obcaecati tenetur iure eius earum ut molestias architecto voluptate aliquam nihil, eveniet aliquid culpa officia aut! Impedit sit sunt quaerat, odit, tenetur error, harum nesciunt ipsum debitis quas aliquid. Reprehenderit, quia.',
            },
          ],
        },
      ]
      const data: Section<TextSectionVariants, TextSectionVariables> = {
        id: variant.id,
        createdAt: '',
        isSection: true,
        type: 'TEXT',
        updatedAt: '',
        variables: [
          { id: uuid(), category: 'TEXT', data: title, name: 'TITLE' },
          { id: uuid(), category: 'TEXT', data: subTitle, name: 'SUBTITLE' },
          { id: uuid(), category: 'TEXT', data: paragraph, name: 'PARAGRAPH' },
          { id: uuid(), category: 'IMAGE', data: media, name: 'MEDIA' },
        ],
        variant: variant.id as TextSectionVariants,
        styleName: variant.name,
        designedBy: 'Plly Staff',
      }
      sections.push(data)
    } else if (variant.id === 'VARIANT_13') {
      const data: Section<TextSectionVariants, TextSectionVariables> = {
        id: variant.id,
        createdAt: '',
        isSection: true,
        type: 'TEXT',
        updatedAt: '',
        tags: tags[variant.id as TextSectionVariants],

        variables: [
          { id: uuid(), category: 'TEXT', data: title, name: 'TITLE' },
          { id: uuid(), category: 'TEXT', data: subTitle, name: 'SUBTITLE' },
          { id: uuid(), category: 'TEXT', data: paragraph, name: 'PARAGRAPH' },
          { id: uuid(), category: 'IMAGE', data: media, name: 'MEDIA' },
          {
            id: uuid(),
            category: 'IMAGE',
            name: 'MEDIAGROUP',
            data: [
              {
                id: '1',
                image:
                  'https://images.unsplash.com/photo-1660236822651-4263beb35fa8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
                name: 'fisrt item',
                description:
                  'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, eaque rerum! Provident similique accusantium nemo autem.Lorem ipsum dolor sit amet consectetur adipisicing elit.',
              },
              {
                id: '2',
                image:
                  'https://images.unsplash.com/photo-1660236822651-4263beb35fa8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
                name: 'second item',
                description:
                  'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, eaque rerum! Provident similique accusantium nemo autem.Lorem ipsum dolor sit amet consectetur adipisicing elit.',
              },
              {
                id: '222',
                image:
                  'https://images.unsplash.com/photo-1660236822651-4263beb35fa8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
                name: 'second item',
                description:
                  'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, eaque rerum! Provident similique accusantium nemo autem.Lorem ipsum dolor sit amet consectetur adipisicing elit.',
              },
              {
                id: '3',
                image:
                  'https://images.unsplash.com/photo-1660236822651-4263beb35fa8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
                name: 'third item',
                description:
                  'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, eaque rerum! Provident similique accusantium nemo autem.Lorem ipsum dolor sit amet consectetur adipisicing elit.',
              },
            ] as TextSectionMediaGroup[],
          },
        ],

        variant: variant.id as TextSectionVariants,
        styleName: variant.name,
        designedBy: 'Plly Staff',
      }
      sections.push(data)
    } else if (variant.id === 'VARIANT_12') {
      const title: Descendant[] = [{ type: 'h1', children: [{ text: 'Title' }] }]
      const paragraph: Descendant[] = [
        {
          type: 'paragraph',
          children: [
            {
              text: 'Liquorice croissant topping lemon drops fruitcake tootsie roll. Pudding muffin dessert jelly beans sugar plum wafer wafer. SoufflÃ© cake sweet jelly beans tiramisu caramels cake sesame snaps. Marshmallow jujubes brownie gummies topping tiramisu. Sweet shortbread croissant caramels lemon drops jelly. Sweet candy powder dessert tart marshmallow powder chocolate bar cake soufflÃ©.',
            },
          ],
        },
      ]
      const data: Section<TextSectionVariants, TextSectionVariables> = {
        id: variant.id,
        createdAt: '',
        isSection: true,
        type: 'TEXT',
        updatedAt: '',
        tags: tags[variant.id as TextSectionVariants],

        variables: [
          { id: uuid(), category: 'TEXT', data: title, name: 'TITLE' },
          { id: uuid(), category: 'TEXT', data: subTitle, name: 'SUBTITLE' },
          { id: uuid(), category: 'TEXT', data: paragraph, name: 'PARAGRAPH' },
          { id: uuid(), category: 'IMAGE', data: media, name: 'MEDIA' },
          {
            id: uuid(),
            category: 'IMAGE',
            name: 'MEDIAGROUP',
            data: [
              {
                id: '1',
                image:
                  'https://images.unsplash.com/photo-1660236822651-4263beb35fa8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
                name: 'fisrt item',
                description:
                  'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, eaque rerum! Provident similique accusantium nemo autem.Lorem ipsum dolor sit amet consectetur adipisicing elit.',
              },
              {
                id: '2',
                image:
                  'https://images.unsplash.com/photo-1660236822651-4263beb35fa8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
                name: 'second item',
                description:
                  'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, eaque rerum! Provident similique accusantium nemo autem.Lorem ipsum dolor sit amet consectetur adipisicing elit.',
              },
              {
                id: '3',
                image:
                  'https://images.unsplash.com/photo-1660236822651-4263beb35fa8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
                name: 'third item',
                description:
                  'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, eaque rerum! Provident similique accusantium nemo autem.Lorem ipsum dolor sit amet consectetur adipisicing elit.',
              },
            ] as TextSectionMediaGroup[],
          },
        ],

        variant: variant.id as TextSectionVariants,
        styleName: variant.name,
        designedBy: 'Plly Staff',
      }
      sections.push(data)
    } else if (variant.id === 'VARIANT_17') {
      const title: Descendant[] = [{ type: 'paragraph', children: [{ text: 'DOWNTOWN' }] }]
      const subTitle: Descendant[] = [{ type: 'paragraph', children: [{ text: 'NEIGHBOURHOOD HOOD BLOCK' }] }]
      const paragraph: Descendant[] = [
        {
          type: 'paragraph',
          children: [
            {
              text: 'Known as one of the safest North American hubs, Downtown Montreal is vibrant with shoppers, office workers and students from McGill and Concordia Universities.',
            },
          ],
        },
      ]
      const data: Section<TextSectionVariants, TextSectionVariables> = {
        id: variant.id,
        createdAt: '',
        isSection: true,
        type: 'TEXT',
        updatedAt: '',
        tags: tags[variant.id as TextSectionVariants],
        variables: [
          { id: uuid(), category: 'TEXT', data: title, name: 'TITLE' },
          { id: uuid(), category: 'TEXT', data: subTitle, name: 'SUBTITLE' },
          { id: uuid(), category: 'TEXT', data: paragraph, name: 'PARAGRAPH' },
          { id: uuid(), category: 'IMAGE', data: media, name: 'MEDIA' },
        ],
        variant: variant.id as TextSectionVariants,
        styleName: variant.name,
        designedBy: 'Plly Staff',
      }
      sections.push(data)
    } else if (variant.id === 'VARIANT_16') {
      const title: Descendant[] = [
        {
          type: 'h1',
          children: [
            { text: 'DOWNTOWN -', className: 'lg:text-8xl w-full text-5xl text-[#2E4239] font-semibold pb-6' },
          ],
        },
      ]

      const subTitle: Descendant[] = [
        {
          type: 'h2',
          children: [
            { text: 'NEIGHBOURHOOD • HOOD • BLOCK', className: 'lg:text-2xl text-lg text-[#2E4239] font-bold' },
          ],
        },
      ]

      const paragraph: Descendant[] = [
        {
          type: 'paragraph',
          children: [
            {
              text: 'Known as one of the safest North American hubs, Downtown Montreal is vibrant with shoppers, office workers and students from McGill and Concordia Universities',
              className: 'lg:text-2xl text-lg text-[#2E4239] font-medium',
            },
          ],
        },
      ]
      const data: Section<TextSectionVariants, TextSectionVariables> = {
        id: variant.id,
        createdAt: '',
        isSection: true,
        type: 'TEXT',
        updatedAt: '',
        variables: [
          { id: uuid(), category: 'TEXT', data: title, name: 'TITLE' },
          { id: uuid(), category: 'TEXT', data: subTitle, name: 'SUBTITLE' },
          { id: uuid(), category: 'TEXT', data: paragraph, name: 'PARAGRAPH' },
        ],
        variant: variant.id as TextSectionVariants,
        styleName: variant.name,
        designedBy: 'Plly Staff',
      }
      sections.push(data)
    } else if (variant.id === 'VARIANT_19') {
      const media = 'https://www.datocms-assets.com/38619/1607792250-reform.jpg?auto=format&dpr=1&fit=crop&h=730&w=900'
      const paragraph: Descendant[] = [
        {
          type: 'paragraph',
          children: [
            {
              text: ' I’m a creative developer & co-founder ofShiftwalk Studio. With a focus on methodical code, I enjoy making websites that are innovative, user-focussed, accessible & performant.',
            },
          ],
        },
      ]
      const data: Section<TextSectionVariants, TextSectionVariables> = {
        id: variant.id,
        createdAt: '',
        isSection: true,
        type: 'TEXT',
        updatedAt: '',
        tags: tags[variant.id as TextSectionVariants],
        variables: [
          { id: uuid(), category: 'TEXT', data: title, name: 'TITLE' },
          { id: uuid(), category: 'TEXT', data: subTitle, name: 'SUBTITLE' },
          { id: uuid(), category: 'TEXT', data: paragraph, name: 'PARAGRAPH' },
          { id: uuid(), category: 'IMAGE', data: media, name: 'MEDIA' },
        ],
        variant: variant.id as TextSectionVariants,
        styleName: variant.name,
        designedBy: 'Hayatul Islam',
      }
      sections.push(data)
    } else {
      const data: Section<TextSectionVariants, TextSectionVariables> = {
        id: variant.id,
        createdAt: '',
        isSection: true,
        type: 'TEXT',
        updatedAt: '',
        tags: tags[variant.id as TextSectionVariants],

        variables: [
          { id: uuid(), category: 'TEXT', data: title, name: 'TITLE' },
          { id: uuid(), category: 'TEXT', data: subTitle, name: 'SUBTITLE' },
          { id: uuid(), category: 'TEXT', data: paragraph, name: 'PARAGRAPH' },
          { id: uuid(), category: 'IMAGE', data: media, name: 'MEDIA' },
          {
            id: uuid(),
            category: 'IMAGE',
            name: 'MEDIAGROUP',
            data: [
              {
                id: '1',
                image:
                  'https://images.unsplash.com/photo-1660236822651-4263beb35fa8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
                name: 'fisrt item',
                description:
                  ' Maxime mollitia, eaque rerum! Provident similique accusantium nemo autem.Lorem ipsum dolor sit amet consectetur adipisicing elit.',
              },
              {
                id: '2',
                image:
                  'https://images.unsplash.com/photo-1660236822651-4263beb35fa8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
                name: 'second item',
                description:
                  ' Maxime mollitia, eaque rerum! Provident similique accusantium nemo autem.Lorem ipsum dolor sit amet consectetur adipisicing elit.',
              },
              {
                id: '3',
                image:
                  'https://images.unsplash.com/photo-1660236822651-4263beb35fa8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
                name: 'third item',
                description:
                  ' Maxime mollitia, eaque rerum! Provident similique accusantium nemo autem.Lorem ipsum dolor sit amet consectetur adipisicing elit.',
              },
            ] as TextSectionMediaGroup[],
          },
        ],
        variant: variant.id as TextSectionVariants,
        styleName: variant.name,
        designedBy: 'Plly Staff',
      }
      sections.push(data)
    }
  })

  return sections
}
