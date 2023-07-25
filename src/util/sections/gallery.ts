import {
  GallerySectionVariables,
  GallerySectionVariants,
  Section,
  SectionTags,
} from 'src/_polly/components/src/sections'
import { v4 as uuid } from 'uuid'
import { getSectionVariants } from './get-variants'
const tags: Record<GallerySectionVariants, SectionTags[]> = {
  VARIANT_1: ['SLIDESHOW'],
  VARIANT_2: ['IMAGE', 'ANIMATION'],
  VARIANT_3: ['IMAGE', 'ANIMATION'],
  VARIANT_4: ['IMAGE'],
  VARIANT_5: ['IMAGE'],
  VARIANT_6: ['IMAGE'],
  VARIANT_7: ['ANIMATION'],
  VARIANT_8: ['IMAGE'],
  VARIANT_9: ['IMAGE'],
  VARIANT_10: ['IMAGE', 'ANIMATION'],
  VARIANT_11: ['IMAGE', 'ANIMATION'],
  VARIANT_12: ['SLIDESHOW'],
  VARIANT_13: [],
  VARIANT_14: ['ANIMATION', 'IMAGE'],
  VARIANT_15: ['ANIMATION', 'IMAGE', 'SLIDESHOW'],
}
export function getGalleryVariants() {
  const media =
    'https://images.unsplash.com/photo-1660236822651-4263beb35fa8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80'

  const variants = getSectionVariants('GALLERY')
  const sections: Section<GallerySectionVariants, GallerySectionVariables>[] = []

  variants.forEach(variant => {
    if (variant.id === 'VARIANT_4') {
      const data: Section<GallerySectionVariants, GallerySectionVariables> = {
        id: variant.id,
        createdAt: '',
        isSection: true,
        type: 'GALLERY',
        updatedAt: '',
        tags: tags[variant.id as GallerySectionVariants],
        variables: [
          {
            id: uuid(),
            name: 'MEDIA',
            category: 'IMAGE',
            data: {
              url: 'https://images.unsplash.com/photo-1459231978203-b7d0c47a2cb7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=869&q=80',
              name: 'Image',
              alt: 'Image',
            },
          },
          {
            id: uuid(),
            name: 'MEDIA',
            category: 'IMAGE',
            data: {
              url: 'https://images.unsplash.com/photo-1661480825224-d67b174be4a6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=861&q=80',
              name: 'Image',
              alt: 'Image',
            },
          },
          {
            id: uuid(),
            name: 'MEDIA',
            category: 'IMAGE',
            data: {
              url: 'https://images.unsplash.com/photo-1657214059493-986710bc4788?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
              name: 'Image',
              alt: 'Image',
            },
          },
          {
            id: uuid(),
            name: 'MEDIA',
            category: 'IMAGE',
            data: {
              url: 'https://images.unsplash.com/photo-1657299170937-3c87404f01c8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
              name: 'Image',
              alt: 'Image',
            },
          },
          {
            id: uuid(),
            name: 'MEDIA',
            category: 'IMAGE',
            data: {
              url: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
              name: 'Image',
              alt: 'Image',
            },
          },
          {
            id: uuid(),
            name: 'MEDIA',
            category: 'IMAGE',
            data: {
              url: 'https://images.unsplash.com/photo-1660223842286-595a146f6a0e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
              name: 'Image',
              alt: 'Image',
            },
          },
        ],
        variant: variant.id as GallerySectionVariants,
        styleName: variant.name,
        designedBy: 'Plly Staff',
      }
      sections.push(data)
    } else if (variant.id === 'VARIANT_5') {
      const data: Section<GallerySectionVariants, GallerySectionVariables> = {
        id: variant.id,
        createdAt: '',
        isSection: true,
        type: 'GALLERY',
        updatedAt: '',
        tags: tags[variant.id as GallerySectionVariants],
        variables: [
          { id: uuid(), name: 'MEDIA', category: 'IMAGE', data: { url: media, name: 'Image', alt: 'Image' } },
          { id: uuid(), name: 'MEDIA', category: 'IMAGE', data: { url: media, name: 'Image', alt: 'Image' } },
          { id: uuid(), name: 'MEDIA', category: 'IMAGE', data: { url: media, name: 'Image', alt: 'Image' } },
          { id: uuid(), name: 'MEDIA', category: 'IMAGE', data: { url: media, name: 'Image', alt: 'Image' } },
          { id: uuid(), name: 'MEDIA', category: 'IMAGE', data: { url: media, name: 'Image', alt: 'Image' } },
          { id: uuid(), name: 'MEDIA', category: 'IMAGE', data: { url: media, name: 'Image', alt: 'Image' } },
          { id: uuid(), name: 'MEDIA', category: 'IMAGE', data: { url: media, name: 'Image', alt: 'Image' } },
          { id: uuid(), name: 'MEDIA', category: 'IMAGE', data: { url: media, name: 'Image', alt: 'Image' } },
          { id: uuid(), name: 'MEDIA', category: 'IMAGE', data: { url: media, name: 'Image', alt: 'Image' } },
        ],
        variant: variant.id as GallerySectionVariants,
        styleName: variant.name,
        designedBy: 'Plly Staff',
      }
      sections.push(data)
    } else if (variant.id === 'VARIANT_15') {
      const data: Section<GallerySectionVariants, GallerySectionVariables> = {
        id: variant.id,
        createdAt: '',
        isSection: true,
        type: 'GALLERY',
        updatedAt: '',
        variables: [
          {
            id: uuid(),
            name: 'MEDIA',
            category: 'IMAGE',
            data: {
              url: media,
              name: 'Lorem, ipsum.',
              alt: ' Lorem ipsum dolor sit, amet consectetur adipisicing elit. Enim ab fugit delectus excepturi consectetur dolore laborum quam, qui libero vitae laboriosam assumenda eos, dolorum optio necessitatibus explicabo voluptatum dicta dolorem!',
            },
          },
          {
            id: uuid(),
            name: 'MEDIA',
            category: 'IMAGE',
            data: {
              url: media,
              name: 'Porem, ipsum.',
              alt: ' Lorem ipsum dolor sit, amet consectetur adipisicing elit. Enim ab fugit delectus excepturi consectetur dolore laborum quam, qui libero vitae laboriosam assumenda eos, dolorum optio necessitatibus explicabo voluptatum dicta dolorem!',
            },
          },
          {
            id: uuid(),
            name: 'MEDIA',
            category: 'IMAGE',
            data: {
              url: media,
              name: 'Korem, ipsum.',
              alt: ' Lorem ipsum dolor sit, amet consectetur adipisicing elit. Enim ab fugit delectus excepturi consectetur dolore laborum quam, qui libero vitae laboriosam assumenda eos, dolorum optio necessitatibus explicabo voluptatum dicta dolorem!',
            },
          },
          {
            id: uuid(),
            name: 'MEDIA',
            category: 'IMAGE',
            data: {
              url: media,
              name: 'Trem, ipsum.',
              alt: ' Lorem ipsum dolor sit, amet consectetur adipisicing elit. Enim ab fugit delectus excepturi consectetur dolore laborum quam, qui libero vitae laboriosam assumenda eos, dolorum optio necessitatibus explicabo voluptatum dicta dolorem!',
            },
          },
          {
            id: uuid(),
            name: 'MEDIA',
            category: 'IMAGE',
            data: {
              url: media,
              name: 'Borem, ipsum.',
              alt: ' Lorem ipsum dolor sit, amet consectetur adipisicing elit. Enim ab fugit delectus excepturi consectetur dolore laborum quam, qui libero vitae laboriosam assumenda eos, dolorum optio necessitatibus explicabo voluptatum dicta dolorem!',
            },
          },
        ],
        variant: variant.id as GallerySectionVariants,
        styleName: variant.name,
        designedBy: 'Plly Staff',
      }
      sections.push(data)
    } else if (variant.id === 'VARIANT_6') {
      const data: Section<GallerySectionVariants, GallerySectionVariables> = {
        id: variant.id,
        createdAt: '',
        isSection: true,
        type: 'GALLERY',
        updatedAt: '',
        tags: tags[variant.id as GallerySectionVariants],
        variables: [
          { id: uuid(), name: 'MEDIA', category: 'IMAGE', data: { url: media, name: 'Image', alt: 'Image' } },
          { id: uuid(), name: 'MEDIA', category: 'IMAGE', data: { url: media, name: 'Image', alt: 'Image' } },
          { id: uuid(), name: 'MEDIA', category: 'IMAGE', data: { url: media, name: 'Image', alt: 'Image' } },
          { id: uuid(), name: 'MEDIA', category: 'IMAGE', data: { url: media, name: 'Image', alt: 'Image' } },
          { id: uuid(), name: 'MEDIA', category: 'IMAGE', data: { url: media, name: 'Image', alt: 'Image' } },
          { id: uuid(), name: 'MEDIA', category: 'IMAGE', data: { url: media, name: 'Image', alt: 'Image' } },
          { id: uuid(), name: 'MEDIA', category: 'IMAGE', data: { url: media, name: 'Image', alt: 'Image' } },
          { id: uuid(), name: 'MEDIA', category: 'IMAGE', data: { url: media, name: 'Image', alt: 'Image' } },
        ],

        variant: variant.id as GallerySectionVariants,
        styleName: variant.name,
        designedBy: 'Plly Staff',
      }
      sections.push(data)
    } else if (variant.id === 'VARIANT_7') {
      const data: Section<GallerySectionVariants, GallerySectionVariables> = {
        id: variant.id,
        createdAt: '',
        isSection: true,
        type: 'GALLERY',
        updatedAt: '',
        tags: tags[variant.id as GallerySectionVariants],
        variables: [
          { id: uuid(), name: 'MEDIA', category: 'IMAGE', data: { url: media, name: 'Image', alt: 'Image' } },
          { id: uuid(), name: 'MEDIA', category: 'IMAGE', data: { url: media, name: 'Image', alt: 'Image' } },
          { id: uuid(), name: 'MEDIA', category: 'IMAGE', data: { url: media, name: 'Image', alt: 'Image' } },
          { id: uuid(), name: 'MEDIA', category: 'IMAGE', data: { url: media, name: 'Image', alt: 'Image' } },
          { id: uuid(), name: 'MEDIA', category: 'IMAGE', data: { url: media, name: 'Image', alt: 'Image' } },
          { id: uuid(), name: 'MEDIA', category: 'IMAGE', data: { url: media, name: 'Image', alt: 'Image' } },
          { id: uuid(), name: 'MEDIA', category: 'IMAGE', data: { url: media, name: 'Image', alt: 'Image' } },
          { id: uuid(), name: 'MEDIA', category: 'IMAGE', data: { url: media, name: 'Image', alt: 'Image' } },
          { id: uuid(), name: 'MEDIA', category: 'IMAGE', data: { url: media, name: 'Image', alt: 'Image' } },
        ],

        variant: variant.id as GallerySectionVariants,
        styleName: variant.name,
        designedBy: 'Plly Staff',
      }
      sections.push(data)
    } else if (variant.id === 'VARIANT_14') {
      const data: Section<GallerySectionVariants, GallerySectionVariables> = {
        id: variant.id,
        createdAt: '',
        isSection: true,
        type: 'GALLERY',
        updatedAt: '',
        variables: [
          {
            id: uuid(),
            name: 'MEDIA',
            category: 'IMAGE',
            data: {
              url: 'https://images.unsplash.com/photo-1603673329776-28248af53fc0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDl8fG9mZmljZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
              name: 'Image',
              alt: 'Image',
              title: 'Why korr',
              description:
                "Activated charcoal banh mi banjo master cleanse yr celiac you probably haven't heard of them art party. Locavore tacos XOXO kombucha echo park, tousled chambray pour-over readymade pickled small batch shabby chic bespoke. Stumptown waistcoat austin normcore unicorn, leggings intelligentsia air plant green juice sustainable butcher bodega boys gochujang DIY sus. Migas austin cred cold-pressed. Asymmetrical mumblecore farm-to-table yuccie poke, keytar YOLO artisan DSA flannel.",
            },
          },
          {
            id: uuid(),
            name: 'MEDIA',
            category: 'IMAGE',
            data: {
              url: 'https://images.unsplash.com/photo-1570126618953-d437176e8c79?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDB8fG9mZmljZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
              name: 'Image',
              alt: 'Image',
              title: 'Mission',
              description:
                "Activated charcoal banh mi banjo master cleanse yr celiac you probably haven't heard of them art party. Locavore tacos XOXO kombucha echo park, tousled chambray pour-over readymade pickled small batch shabby chic bespoke. Stumptown waistcoat austin normcore unicorn, leggings intelligentsia air plant green juice sustainable butcher bodega boys gochujang DIY sus. Migas austin cred cold-pressed. Asymmetrical mumblecore farm-to-table yuccie poke, keytar YOLO artisan DSA flannel.",
            },
          },
        ],

        variant: variant.id as GallerySectionVariants,
        styleName: variant.name,
        designedBy: 'Plly Staff',
      }
      sections.push(data)
    } else {
      const data: Section<GallerySectionVariants, GallerySectionVariables> = {
        id: variant.id,
        createdAt: '',
        isSection: true,
        type: 'GALLERY',
        updatedAt: '',
        tags: tags[variant.id as GallerySectionVariants],
        variables: [
          { id: uuid(), name: 'MEDIA', category: 'IMAGE', data: { url: media, name: 'Name', alt: 'Image' } },
          { id: uuid(), name: 'MEDIA', category: 'IMAGE', data: { url: media, name: 'Name', alt: 'Image' } },
          { id: uuid(), name: 'MEDIA', category: 'IMAGE', data: { url: media, name: 'Name', alt: 'Image' } },
          { id: uuid(), name: 'MEDIA', category: 'IMAGE', data: { url: media, name: 'Name', alt: 'Image' } },
          { id: uuid(), name: 'MEDIA', category: 'IMAGE', data: { url: media, name: 'Name', alt: 'Image' } },
          { id: uuid(), name: 'MEDIA', category: 'IMAGE', data: { url: media, name: 'Name', alt: 'Image' } },
          { id: uuid(), name: 'MEDIA', category: 'IMAGE', data: { url: media, name: 'Name', alt: 'Image' } },
          { id: uuid(), name: 'MEDIA', category: 'IMAGE', data: { url: media, name: 'Name', alt: 'Image' } },
        ],

        variant: variant.id as GallerySectionVariants,
        styleName: variant.name,
        designedBy: 'Plly Staff',
      }
      sections.push(data)
    }
  })

  return sections
}
