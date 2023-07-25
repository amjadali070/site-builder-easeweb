import { Descendant } from 'slate'
import { BlogItemsGroup, BlogVariables, BlogVariants, Section, SectionTags } from 'src/_polly/components/src/sections'
import { v4 as uuid } from 'uuid'
import { getSectionVariants } from './get-variants'

const tags: Record<BlogVariants, SectionTags[]> = {
  VARIANT_1: ['IMAGE', 'ANIMATION', 'SLIDESHOW'],
  VARIANT_2: ['IMAGE', 'ANIMATION', 'SLIDESHOW'],
  VARIANT_3: ['IMAGE', 'ANIMATION', 'SLIDESHOW'],
}

export function getBlogVariants() {
  const title: Descendant[] = [{ type: 'h1', children: [{ text: 'Title' }] }]
  const SubTitle: Descendant[] = [{ type: 'h3', children: [{ text: 'SubTitle' }] }]
  const paragraph: Descendant[] = [{ type: 'paragraph', children: [{ text: 'Paragraph' }] }]
  const media =
    'https://images.unsplash.com/photo-1660236822651-4263beb35fa8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80'

  const variants = getSectionVariants('BLOG')
  const sections: Section<BlogVariants, BlogVariables>[] = []
  variants.forEach(variant => {
    if (variant.id === 'VARIANT_1') {
      const paragraph: Descendant[] = [
        {
          type: 'paragraph',
          children: [
            {
              text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, eaque rerum! Provident similique.',
            },
          ],
        },
      ]
      const data: Section<BlogVariants, BlogVariables> = {
        id: variant.id,
        createdAt: '',
        isSection: true,
        type: 'BLOG',
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
                image:
                  'https://images.unsplash.com/photo-1660236822651-4263beb35fa8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
                name: 'item 1',
                description: ' Lorem ipsum dolor sit amat consectetur  ',
              },
              {
                id: uuid(),
                image:
                  'https://images.unsplash.com/photo-1660236822651-4263beb35fa8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
                name: 'item 2',
                description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia',
              },
              {
                id: uuid(),
                image:
                  'https://images.unsplash.com/photo-1660236822651-4263beb35fa8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
                name: ' item 3',
                description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia',
              },
              {
                id: uuid(),
                image:
                  'https://images.unsplash.com/photo-1660236822651-4263beb35fa8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
                name: 'item 4',
                description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia',
              },
              {
                id: uuid(),
                image:
                  'https://images.unsplash.com/photo-1660236822651-4263beb35fa8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
                name: 'item 5',
                description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia',
              },
            ] as BlogItemsGroup[],
          },
        ],
        variant: variant.id as BlogVariants,
        tags: tags[variant.id as BlogVariants],
        styleName: variant.name,
        designedBy: 'Plly Staff',
      }
      sections.push(data)
    } else if (variant.id === 'VARIANT_2') {
      const paragraph: Descendant[] = [
        {
          type: 'paragraph',
          children: [
            {
              text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, eaque rerum! Provident similique.',
            },
          ],
        },
      ]
      const data: Section<BlogVariants, BlogVariables> = {
        id: variant.id,
        createdAt: '',
        isSection: true,
        type: 'BLOG',
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
                image:
                  'https://images.unsplash.com/photo-1660236822651-4263beb35fa8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
                name: 'item 1',
                description: ' Lorem ipsum dolor sit amet consectetur  ',
              },
              {
                id: uuid(),
                image:
                  'https://images.unsplash.com/photo-1660236822651-4263beb35fa8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
                name: 'item 2',
                description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia',
              },
              {
                id: uuid(),
                image:
                  'https://images.unsplash.com/photo-1660236822651-4263beb35fa8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
                name: ' item 3',
                description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia',
              },
              {
                id: uuid(),
                image:
                  'https://images.unsplash.com/photo-1660236822651-4263beb35fa8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
                name: 'item 4',
                description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia',
              },
              {
                id: uuid(),
                image:
                  'https://images.unsplash.com/photo-1660236822651-4263beb35fa8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
                name: 'item 5',
                description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia',
              },
            ] as BlogItemsGroup[],
          },
        ],
        variant: variant.id as BlogVariants,
        tags: tags[variant.id as BlogVariants],
        styleName: variant.name,
        designedBy: 'Plly Staff',
      }
      sections.push(data)
    } 
   else if (variant.id === 'VARIANT_3') {
    const title: Descendant[] = [{ type: 'paragraph', children: [{ text: 'THE BUILDING' }] }]
    const subTitle: Descendant[] = [{ type: 'paragraph', children: [{ text: 'Lorem ipsum dolor sit.' }] }]
    const paragraph: Descendant[] = [
      {
        type: 'paragraph',
        children: [
          {
            text: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repudiandae obcaecati expedita nobis nesciunt voluptatibus quasi fuga quod vitae nulla esse..',
          },
        ],
      },
    ]
    const data: Section<BlogVariants, BlogVariables> = {
      id: variant.id,
      createdAt: '',
      isSection: true,
      type: 'BLOG',
      updatedAt: '',
      variables: [
        { id: uuid(), category: 'TEXT', data: title, name: 'TITLE' },
        { id: uuid(), category: 'TEXT', data: subTitle, name: 'SUBTITLE' },
        { id: uuid(), category: 'TEXT', data: paragraph, name: 'PARAGRAPH' },
        { id: uuid(), category: 'IMAGE', data: "https://images.unsplash.com/photo-1498503182468-3b51cbb6cb24?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80", name: 'MEDIA' },
      ],
      variant: variant.id as BlogVariants,
      tags: tags[variant.id as BlogVariants],
      styleName: variant.name,
      designedBy: 'Plly Staff',
    }
    sections.push(data)
  } 
    
    else {
      const data: Section<BlogVariants, BlogVariables> = {
        id: variant.id,
        createdAt: '',
        isSection: true,
        type: 'BLOG',
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
            data: [] as BlogItemsGroup[],
          },
        ],
        variant: variant.id as BlogVariants,
        styleName: variant.name,
        tags: tags[variant.id as BlogVariants],
        designedBy: 'Plly Staff',
      }
      sections.push(data)
    }
  })
  return sections
}
