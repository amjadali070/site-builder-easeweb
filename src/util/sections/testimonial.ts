import {
  Section,
  SectionTags,
  TESTIMONIALSectionItem,
  TESTIMONIALVariables,
  TESTIMONIALVariants,
} from 'src/_polly/components/src/sections'
import { v4 as uuid } from 'uuid'
import { getSectionVariants } from './get-variants'
const tags: Record<TESTIMONIALVariants, SectionTags[]> = {
  VARIANT_1: ['IMAGE', 'SLIDESHOW', 'ANIMATION'],
}
export function getTESTIMONIALVariants() {
  const variants = getSectionVariants('TESTIMONIAL')
  const sections: Section<TESTIMONIALVariants, TESTIMONIALVariables>[] = []

  variants.forEach(variant => {
    const data: Section<TESTIMONIALVariants, TESTIMONIALVariables> = {
      id: variant.id,
      createdAt: '',
      isSection: true,
      type: 'TESTIMONIAL',
      updatedAt: '',
      tags: tags[variant.id as TESTIMONIALVariants],
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
              title: 'Testimonial',
              subtitle: 'Tech wid, Bd',
              image:
                'https://images.unsplash.com/photo-1615921511258-0aa98c84d400?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTY1fHxsb2dvfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
              description:
                'Pastry shortbread muffin sesame snaps icing marzipan. Brownie sesame snaps candy canes chocolate cake donut bonbon powder cotton candy. Jelly sesame snaps gummies pudding cotton candy. Sesame snaps danish muffin sweet roll cheesecake cake wafer pastry. Icing fruitcake cookie cupcake cake muffin cheesecake bonbon pie. Wafer marshmallow gummi bears wafer halvah. Croissant jelly-o croissant gummi bears cake. Gingerbread icing dessert toffee lemon drops sweet roll jelly beans.',
            },
            {
              id: uuid(),
              title: 'Testimonial',
              subtitle: 'Apple pie gummi',
              image:
                'https://images.unsplash.com/photo-1554730501-8dd4db2b18cc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nzd8fGxvZ298ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
              description:
                'Apple pie apple pie gummi bears shortbread liquorice shortbread gummi bears jujubes sugar plum. Sweet roll biscuit tiramisu muffin sesame snaps lollipop. Sweet lemon drops fruitcake apple pie bonbon topping tiramisu cupcake chocolate. Cake caramels bonbon sugar plum candy canes macaroon. Jelly marzipan cupcake pudding candy. Candy cotton candy gingerbread chocolate cookie gingerbread bear claw.',
            },
            {
              id: uuid(),
              title: 'Testimonial',
              subtitle: 'Pudding biscuit pastry',
              image:
                'https://images.unsplash.com/photo-1579509330413-8a7e4addc442?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OTZ8fGxvZ298ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
              description:
                'Pudding biscuit pastry gingerbread sugar plum jelly sweet roll soufflé. Caramels shortbread gingerbread gummies gingerbread dessert muffin danish caramels. Candy apple pie carrot cake cake ice cream chocolate cake muffin. Sesame snaps lemon drops muffin muffin wafer danish. Topping icing gummi bears dragée wafer danish.',
            },
          ] as TESTIMONIALSectionItem[],
        },
      ],
      variant: variant.id as TESTIMONIALVariants,
      styleName: variant.name,
    }
    sections.push(data)
  })

  return sections
}
