import { Descendant } from 'slate'
import { AboutUsVariables, AboutUsVariants, Section, SectionTags } from 'src/_polly/components/src/sections'
import { v4 as uuid } from 'uuid'
import { getSectionVariants } from './get-variants'
const tags: Record<AboutUsVariants, SectionTags[]> = {
  VARIANT_1: [],
  VARIANT_2: ['IMAGE'],
  VARIANT_3: ['IMAGE'],
  VARIANT_4: [],
  VARIANT_5: [],
  VARIANT_6: ['IMAGE'],
  VARIANT_7: ['IMAGE', 'ANIMATION'],
  VARIANT_8: ['IMAGE', 'ANIMATION'],
  VARIANT_9: ['IMAGE', 'ANIMATION'],
  VARIANT_10: ['IMAGE', 'ANIMATION'],
  VARIANT_12: [],
}
export function getAboutUsVariants() {
  const title: Descendant[] = [{ type: 'h1', children: [{ text: 'Title' }] }]
  const subTitle: Descendant[] = [{ type: 'h3', children: [{ text: 'Sub Title' }] }]
  const paragraph: Descendant[] = [{ type: 'paragraph', children: [{ text: 'Paragraph' }] }]
  const media =
    'https://images.unsplash.com/photo-1660236822651-4263beb35fa8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80'

  const variants = getSectionVariants('ABOUT_US')
  const sections: Section<AboutUsVariants, AboutUsVariables>[] = []

  variants.forEach(variant => {
    if (variant.id === 'VARIANT_10') {
      const subTitle1: Descendant[] = [
        { type: 'h3', children: [{ text: 'Citation', className: 'text-[15px] lg:text-[30px]' }] },
      ]
      const subTitle2: Descendant[] = [
        { type: 'h3', children: [{ text: 'Publication', className: 'text-[15px] lg:text-[30px]' }] },
      ]
      const paragraph1: Descendant[] = [
        {
          type: 'paragraph',
          children: [{ text: 'DILLER SCOFIDIO + RENFRO OMA "\n" pellt clarkee architects "\n" obermoser architects' }],
        },
      ]
      const paragraph2: Descendant[] = [
        {
          type: 'paragraph',
          children: [{ text: 'DILLER SCOFIDIO + RENFRO OMA "\n" pellt clarkee architects "\n" obermoser architects' }],
        },
      ]
      const data: Section<AboutUsVariants, AboutUsVariables> = {
        id: variant.id,
        createdAt: '',
        isSection: true,
        type: 'ABOUT_US',
        updatedAt: '',
        tags: tags[variant.id as AboutUsVariants],
        variables: [
          { id: uuid(), category: 'TEXT', data: subTitle1, name: 'SUBTITLE' },
          { id: uuid(), category: 'TEXT', data: subTitle2, name: 'SUBTITLE2' },
          { id: uuid(), category: 'TEXT', data: paragraph1, name: 'PARAGRAPH' },
          { id: uuid(), category: 'TEXT', data: paragraph2, name: 'PARAGRAPH_2' },
          { id: uuid(), category: 'IMAGE', data: media, name: 'MEDIA' },
        ],
        variant: variant.id as AboutUsVariants,
        styleName: variant.name,
        designedBy: 'Plly Staff',
      }
      sections.push(data)
    } else if (variant.id === 'VARIANT_12') {
      const title: Descendant[] = [{ type: 'paragraph', children: [{ text: 'ABOUT ME' }] }]
      const subTitle: Descendant[] = [
        {
          type: 'paragraph',
          children: [
            {
              text: 'Skateboard cardigan cold-pressed hella normcore narwhal. Occupy chartreuse art party quinoa. Hashtag forage pitchfork franzen waistcoat post-ironic distillery four dollar toast mlkshk irony disrupt kickstarter mustache four loko before they sold out. Pinterest DIY pop-up, viral four loko celiac put a bird on it chartreuse dreamcatcher lo-fi praxis meggings',
            },
          ],
        },
      ]
      const paragraph: Descendant[] = [
        {
          type: 'paragraph',
          children: [
            {
              text: 'Gastropub gentrify ugh hashtag literally schlitz ramps viral bruh hammock typewriter pork belly. Cornhole 8-bit health goth literally. Four dollar toast YOLO portland paleo, kale chips cray swag before they sold out mixtape pitchfork actually cold-pressed DSA.',
            },
          ],
        },
      ]
      const data: Section<AboutUsVariants, AboutUsVariables> = {
        id: variant.id,
        createdAt: '',
        isSection: true,
        type: 'ABOUT_US',
        updatedAt: '',
        variables: [
          { id: uuid(), category: 'TEXT', data: title, name: 'TITLE' },
          { id: uuid(), category: 'TEXT', data: subTitle, name: 'SUBTITLE' },
          { id: uuid(), category: 'TEXT', data: paragraph, name: 'PARAGRAPH' },
          { id: uuid(), category: 'IMAGE', data: media, name: 'MEDIA' },
        ],
        variant: variant.id as AboutUsVariants,
        styleName: variant.name,
        designedBy: 'Hayatul Islam',
      }
      sections.push(data)
    } else {
      const data: Section<AboutUsVariants, AboutUsVariables> = {
        id: variant.id,
        createdAt: '',
        isSection: true,
        type: 'ABOUT_US',
        updatedAt: '',
        tags: tags[variant.id as AboutUsVariants],
        variables: [
          { id: uuid(), category: 'TEXT', data: title, name: 'TITLE' },
          { id: uuid(), category: 'TEXT', data: subTitle, name: 'SUBTITLE' },
          { id: uuid(), category: 'TEXT', data: paragraph, name: 'PARAGRAPH' },
          { id: uuid(), category: 'IMAGE', data: media, name: 'MEDIA' },
        ],
        variant: variant.id as AboutUsVariants,
        styleName: variant.name,
        designedBy: 'Plly Staff',
      }
      sections.push(data)
    }
  })

  return sections
}
