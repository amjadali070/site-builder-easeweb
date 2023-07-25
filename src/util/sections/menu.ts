import {
  MENUImageItem,
  MENUSectionItem,
  MENUVariables,
  MENUVariants,
  Section,
  SectionTags,
} from 'src/_polly/components/src/sections'
import { v4 as uuid } from 'uuid'
import { getSectionVariants } from './get-variants'
const tags: Record<MENUVariants, SectionTags[]> = {
  VARIANT_1: ['IMAGE', 'ANIMATION'],
  VARIANT_2: ['IMAGE'],
}
export function getMENUVariants() {
  const variants = getSectionVariants('MENU')
  const sections: Section<MENUVariants, MENUVariables>[] = []

  variants.forEach(variant => {
    const data: Section<MENUVariants, MENUVariables> = {
      id: variant.id,
      createdAt: '',
      isSection: true,
      type: 'MENU',
      updatedAt: '',
      tags: tags[variant.id as MENUVariants],
      variables: [
        { id: uuid(), category: 'TEXT', data: 'List Title', name: 'TITLE' },
        { id: uuid(), category: 'TEXT', data: 'Sub Title', name: 'SUBTITLE' },
        {
          id: uuid(),
          name: 'ITEMS',
          category: 'TEXT',
          data: [
            {
              id: uuid(),
              title: '83',
              subtitle: '83',
              image:
                'https://images.unsplash.com/photo-1607923722386-1c7b1d86f70a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=879&q=80',
              description: 'Describe the item and include any relevant details. Click to edit the text.',
            },
            {
              id: uuid(),
              title: '240',
              subtitle: '240',
              image:
                '2https://images.unsplash.com/photo-1607923722386-1c7b1d86f70a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=879&q=80',
              description: 'Describe the item and include any relevant details. Click to edit the text.',
            },
            {
              id: uuid(),
              title: '15',
              subtitle: '15',
              image:
                'https://images.unsplash.com/photo-1607923722386-1c7b1d86f70a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=879&q=80',
              description: 'Describe the item and include any relevant details. Click to edit the text.',
            },
            {
              id: uuid(),
              title: '7',
              subtitle: '7',
              image:
                'https://images.unsplash.com/photo-1607923722386-1c7b1d86f70a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=879&q=80',
              description: 'Describe the item and include any relevant details. Click to edit the text.',
            },
          ] as MENUSectionItem[],
        },
        {
          id: uuid(),
          name: 'IMAGE',
          category: 'TEXT',
          data: [
            {
              id: uuid(),
              title: '83',
              image:
                'https://images.unsplash.com/photo-1607923722386-1c7b1d86f70a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=879&q=80',
            },
            {
              id: uuid(),
              title: '240',
              image:
                '2https://images.unsplash.com/photo-1607923722386-1c7b1d86f70a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=879&q=80',
            },
            {
              id: uuid(),
              title: '15',
              image:
                'https://images.unsplash.com/photo-1607923722386-1c7b1d86f70a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=879&q=80',
            },
            {
              id: uuid(),
              title: '7',
              image:
                'https://images.unsplash.com/photo-1607923722386-1c7b1d86f70a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=879&q=80',
            },
          ] as MENUImageItem[],
        },
      ],
      variant: variant.id as MENUVariants,
      styleName: variant.name,
    }
    sections.push(data)
  })

  return sections
}
