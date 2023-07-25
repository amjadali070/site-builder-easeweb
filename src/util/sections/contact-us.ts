import {
  ContactUsMap,
  ContactUsVariables,
  ContactUsVariants,
  Section,
  SectionTags,
} from 'src/_polly/components/src/sections'
import { v4 as uuid } from 'uuid'
import { getSectionVariants } from './get-variants'

const tags: Record<ContactUsVariants, SectionTags[]> = {
  VARIANT_1: ['IMAGE', 'ANIMATION'],
  VARIANT_2: ['IMAGE', 'ANIMATION'],
  VARIANT_3: ['IMAGE'],
  VARIANT_4: [],
  VARIANT_5: ['IMAGE'],
  VARIANT_6: [],
  VARIANT_7: [],
  VARIANT_8: ['IMAGE', 'ANIMATION'],
  VARIANT_9: [],
  VARIANT_10: [],
  VARIANT_11: [],
  VARIANT_12: [],
  VARIANT_13: [],
}

export function getContactUsVariants() {
  const variants = getSectionVariants('CONTACT_US')
  const sections: Section<ContactUsVariants, ContactUsVariables>[] = []

  variants.forEach(variant => {
    if (variant.id === 'VARIANT_12') {
      const data: Section<ContactUsVariants, ContactUsVariables> = {
        id: variant.id,
        createdAt: '',
        isSection: true,
        type: 'CONTACT_US',
        updatedAt: '',
        variables: [
          {
            id: uuid(),
            category: 'TEXT',
            data: 'Our leasing agents are available for virtual and in-person visits.',
            name: 'TITLE',
          },
        ],
        tags: tags[variant.id as ContactUsVariants],
        variant: variant.id as ContactUsVariants,
        styleName: variant.name,
        designedBy: 'Plly Staff',
      }
      sections.push(data)
    } else if (variant.id === 'VARIANT_13') {
      const data: Section<ContactUsVariants, ContactUsVariables> = {
        id: variant.id,
        createdAt: '',
        isSection: true,
        type: 'CONTACT_US',
        updatedAt: '',
        variables: [
          {
            id: uuid(),
            category: 'TEXT',
            data: 'Cat Ipsum Dolor Sit Amet, Velit, And Eos. Do Pariatur Lorem. Magna Ad Yet.',
            name: 'TITLE',
          },
        ],
        tags: tags[variant.id as ContactUsVariants],
        variant: variant.id as ContactUsVariants,
        styleName: variant.name,
        designedBy: 'Hayatul Islam',
      }
      sections.push(data)
    } else {
      const data: Section<ContactUsVariants, ContactUsVariables> = {
        id: variant.id,
        createdAt: '',
        isSection: true,
        type: 'CONTACT_US',
        updatedAt: '',
        variables: [
          { id: uuid(), category: 'TEXT', data: 'Visit Us', name: 'TITLE' },
          {
            id: uuid(),
            category: 'TEXT',
            data: '1600 Amphitheatre Parkway, Mountain View, CA',
            name: 'ADDRESS',
          },
          { id: uuid(), category: 'TEXT', data: 'Monday - Friday\n10am - 6pm', name: 'HOURS' },
          { id: uuid(), category: 'TEXT', data: '(555) 555-5555', name: 'PHONE' },
          {
            id: uuid(),
            category: 'TEXT',
            data: {
              address: '1600 Amphitheatre Parkway, Mountain View, CA',
              position: { lat: 37.4224764, lng: -122.0842499 },
            } as ContactUsMap,
            name: 'MAP',
          },
        ],
        tags: tags[variant.id as ContactUsVariants],
        variant: variant.id as ContactUsVariants,
        styleName: variant.name,
        designedBy: 'Plly Staff',
      }
      sections.push(data)
    }
  })

  return sections
}
