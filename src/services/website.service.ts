import { omit } from 'lodash'
import { UpdatePageInput, UpdatePageMutation, UpdatePageMutationVariables } from 'src/API'
import { graphqlQuery } from 'src/lib/queries'
import {
  createPageRecord,
  createWebsiteRecord,
  deleteWebsiteRecord,
  getPageByID,
  getPagesByWebsite,
  getWebsiteByID,
} from 'src/lib/services/website.service'
import { PollyComponentType } from 'src/_polly/components/src/component.path'
import { v4 as uuid } from 'uuid'
import { updatePage as updatePageMutation } from '../graphql/mutations'
import { ButtonLinkTypes } from '../_polly/components/src/constants'

export async function createNewWebsite(data: any) {
  const website = await createWebsiteRecord(data)

  if (website?.id) {
    await createPageRecord({
      websiteID: website.id,
      name: 'Home page',
      path: '/',
      blocks: '[]',
    })

    return website
  }

  return null
}

export async function deleteWebsite(id: string) {
  return deleteWebsiteRecord(id)
}

export async function duplicateWebsite(id: string) {
  const site = await getWebsiteByID(id)
  const pages = await getPagesByWebsite(id)

  const newSite = await createWebsiteRecord(omit(site, ['id', 'createdAt', 'updatedAt']))
  if (newSite?.id)
    for (const page of pages) {
      await createPageRecord({
        websiteID: newSite.id,
        name: page?.name!,
        path: page?.path!,
        blocks: page?.blocks!,
      })
    }

  return newSite
}

export async function getHomePageByWebsite(websiteID: string) {
  const pages = await getPagesByWebsite(websiteID)
  return pages[0]
}

export async function updateHomePage(websiteID: string, updates: Omit<UpdatePageInput, 'id'>) {
  try {
    const page = await getHomePageByWebsite(websiteID)
    // TODO
    if (!page) return

    const { data } = await graphqlQuery<UpdatePageMutation>({
      query: updatePageMutation,
      variables: {
        input: {
          ...updates,
          id: page.id,
        },
      } as UpdatePageMutationVariables,
    })

    return data?.updatePage
  } catch (error) {
    console.error('@website.service::updateHomePage::error', error)
    throw error
  }
}

export async function updatePage(pageID: string, updates: Omit<UpdatePageInput, 'id'>) {
  try {
    const page = await getPageByID(pageID)
    // TODO
    if (!page) return

    const { data } = await graphqlQuery<UpdatePageMutation>({
      query: updatePageMutation,
      variables: {
        input: {
          ...updates,
          id: page.id,
        },
      } as UpdatePageMutationVariables,
    })

    return data?.updatePage
  } catch (error) {
    console.error('@website.service::updatePage::error', error)
    throw error
  }
}

export async function getComponents(websiteID: string) {
  return getHomePageByWebsite(websiteID).then(page => JSON.parse(page?.blocks || '[]') as any[])
}

export async function getComponentsByPageID(pageID: string) {
  return getPageByID(pageID).then(page => JSON.parse(page?.blocks || '[]') as any[])
}

export async function updateComponents(websiteID: string, components: any[]) {
  return updateHomePage(websiteID, { blocks: JSON.stringify(components) })
}

export async function updateComponentsByPageID(pageID: string, components: any[]) {
  return updatePage(pageID, { blocks: JSON.stringify(components) })
}

/**
 * Get index of component need to be updated
 * @param components list components
 * @param block block need to update
 * @returns index
 */
function getIndex(components: any[], block: any) {
  let index = 0
  switch (block.type) {
    case 'FOOTER':
      index = components.length
      break
    case 'MENU_BAR':
      index = 0
      break
    default:
      index = components.length - 1
      break
  }
  return index
}

export interface IBlock {
  id?: string
  type: PollyComponentType
  props: any
  updatedAt: string
}

export async function upsertBlock(websiteID: string, block: IBlock) {
  const components: any[] = await getComponents(websiteID)
  if (block.id) {
    components.splice(
      components.findIndex(x => x.id === block.id),
      1,
      block,
    )
  } else {
    components.splice(getIndex(components, block), 0, { ...block, id: uuid() })
  }

  return updateComponents(websiteID, components)
}

export async function upsertBlockByPageID(pageID: string, block: IBlock) {
  const components: any[] = await getComponentsByPageID(pageID)
  if (block.id) {
    components.splice(
      components.findIndex(x => x.id === block.id),
      1,
      block,
    )
  } else {
    components.splice(getIndex(components, block), 0, { ...block, id: uuid() })
  }

  return updateComponentsByPageID(pageID, components)
}

// ----------------- Template and page -----------------

export interface IPage {
  id: string
  name: string
  blocks: IBlock[]
  thumbnail: string
}

export interface ITemplate {
  id: string
  name: string
  thumbnail: string
  menu: {
    pages: {
      title: string
      url: string
      type: ButtonLinkTypes
      id: string
    }[]
    style: string
  }
  footer: {
    style: string
    info?: {
      twitter?: string
      phoneNumber?: string
      address?: string
      copyRight?: string
      facebook?: string
      name?: string
      instagram?: string
      fax?: string
      email?: string
    }
  }
  blocks: IBlock[]
  pages: {
    path: string
    id: string
    name: string
    blocks: IBlock[]
  }[]
}

const pages: IPage[] = [
  // LANDING
  {
    id: 'landing-1',
    name: 'Home',
    thumbnail: '/mock/pages/landing-1.png',
    blocks: [
      {
        type: 'TITLE',
        updatedAt: '2022-04-10T15:43:23.097Z',
        props: {
          button: {
            settings: {
              boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
              borderColor: '#000',
              backgroundColor: 'white',
              color: 'black',
              borderWidth: '1px',
              display: 'block',
              width: '249px',
              fontSize: '30px',
              height: '60px',
              maxWidth: '100%',
            },
            link: null,
            value: 'Get Solar',
          },
          subHeadline: {
            image: null,
            settings: { backgroundColor: 'black', size: 'paragraph' },
            value:
              '<p class="ql-align-center"><br></p><p class="ql-align-center">There are lots of ways to save money but few that make this much sense. Your power. Your savings. Palmetto service and support.</p><p class="ql-align-center"><br></p>',
          },
          title: {
            image: null,
            settings: {
              backgroundColor: 'black',
              size: 'heading1',
              backgroundImage: 'https://polly35612-dev.s3.us-east-2.amazonaws.com/public/assets/image-1651252329558',
            },
            value: '<p class="ql-align-center"><br></p><p class="ql-align-center">It pays to go solar</p>',
          },
        },
      },
      {
        type: 'TITLE',
        updatedAt: '2022-04-10T15:45:18.455Z',
        props: {
          subHeadline: {
            image: null,
            settings: { backgroundColor: 'white', size: 'paragraph', color: 'black' },
            value:
              '<p>As homeowners, you can help mitigate the effects of climate change.</p><p>Better yet: You can save money while doing it.</p><p>Palmetto’s technologically innovative products offer an easy path to solar energy savings—putting power and control back in your hands. We partner with solar specialists in your area to deliver end-to-end solutions that foster jobs in your local community, increase access to clean energy, and ensure long-term savings and support for every system installed.</p><p>As of September 2021, Palmetto homeowners are on track to prevent more than one million metric tons of carbon dioxide from reaching our atmosphere. And we’re just getting started.</p>',
          },
          title: {
            image: null,
            settings: { backgroundColor: 'white', size: 'heading1', color: 'black' },
            value: '<h2 class="ql-align-center">Imagine the impact you can make</h2>',
          },
        },
      },
      {
        type: 'TITLE',
        updatedAt: '2022-04-10T15:47:21.247Z',
        props: {
          title: {
            image: null,
            settings: {
              backgroundColor: 'black',
              size: 'heading1',
              backgroundImage: 'https://polly35612-dev.s3.us-east-2.amazonaws.com/public/assets/image-1651252374175',
            },
            value:
              '<p class="ql-align-center"><br></p><p class="ql-align-center"><br></p><p class="ql-align-center">Leading the world towards a clean energy future</p><p class="ql-align-center"><br></p><p class="ql-align-center"><br></p>',
          },
        },
      },
      {
        type: 'TITLE',
        updatedAt: '2022-04-10T15:48:32.768Z',
        props: {
          title: {
            image: null,
            settings: { backgroundColor: 'white', size: 'heading1', color: 'black', bold: true },
            value:
              '<p class="ql-align-center"><br></p><p class="ql-align-center">Join the clean energy conversation</p>',
          },
        },
      },
      {
        type: 'BLOG',
        updatedAt: '2022-04-10T15:51:26.640Z',
        props: {
          title: {
            settings: { size: 'heading1' },
            image: null,
            value: '<p>Leading The World Towards A Clean Energy Future</p>',
          },
          content: {
            settings: { size: 'paragraph' },
            image: null,
            value:
              '<p>Palmetto believes that all consumers should be able to choose energy from renewable resources as a right, not a privilege. Our proprietary technology, marketplace model, and consumer mobile application are designed to simplify and democratize access to clean energy, making it easy and affordable for homeowners to make the switch to solar energy - and other renewable and smart technology offerings as the Palmetto Energy Marketplace expands.<img src="https://polly35612-dev.s3.us-east-2.amazonaws.com/public/assets/image-1651269479305"></p>',
          },
        },
      },
      {
        type: 'TITLE',
        updatedAt: '2022-04-10T15:52:48.315Z',
        props: {
          button: {
            settings: {
              boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
              borderColor: '#000',
              backgroundColor: '#fff',
              borderWidth: '1px',
              display: 'block',
              width: '346px',
              fontSize: '30px',
              height: '60px',
              maxWidth: '100%',
            },
            link: null,
            value: 'Estimate Your Savings',
          },
          subHeadline: {
            image: null,
            settings: { backgroundColor: 'white', size: 'paragraph', color: 'black' },
            value: '<p class="ql-align-center">Go solar for as low as $85/mo¹</p><p class="ql-align-center"><br></p>',
          },
          title: {
            image: null,
            settings: { backgroundColor: 'white', size: 'heading2', color: 'black' },
            value: '<p class="ql-align-center">Clean energy is for everyone</p>',
          },
        },
      },
    ],
  },
  // ABOUT US
  {
    id: 'about-us-1',
    name: 'About Us',
    thumbnail: '/mock/pages/about-us-1.png',
    blocks: [
      {
        type: 'IMAGE',
        props: { src: 'https://polly104820-staging.s3.us-east-2.amazonaws.com/public/assets/image-1649598245839' },
        updatedAt: '2022-04-10T13:44:07.714Z',
      },
      {
        type: 'TITLE',
        updatedAt: '2022-04-10T13:45:26.238Z',
        props: {
          title: {
            image: null,
            settings: { backgroundColor: 'white', size: 'heading1', color: 'black', bold: true, font: 'Advent Pro' },
            value: '<p class="ql-align-center">Our Services</p>',
          },
        },
      },
      {
        type: 'TITLE',
        updatedAt: '2022-04-10T13:47:35.622Z',
        props: {
          subHeadline: {
            image: null,
            settings: { backgroundColor: 'white', size: 'paragraph', color: 'black' },
            value: '<p class="ql-align-center">Have an idea for an app? Whatever the platform, we\'ll build it..</p>',
          },
          title: {
            image: null,
            settings: {
              backgroundColor: 'white',
              size: 'heading1',
              color: 'black',
              backgroundImage:
                'https://polly104820-staging.s3.us-east-2.amazonaws.com/public/assets/image-1649598397407',
            },
            value: '<p class="ql-align-center">App Development</p>',
          },
        },
      },
      {
        type: 'BLOG',
        updatedAt: '2022-04-10T14:12:29.879Z',
        props: {
          title: {
            settings: { backgroundColor: '#DE9170', size: 'heading1' },
            image: null,
            value: '<p>Our Mission</p>',
          },
          content: {
            settings: { backgroundColor: '#DE9170' },
            image: null,
            value:
              '<p>Techboom is an Advocacy for Technology Education and a Software Development Company. We build innovative, lightning fast, and flexible products for clients in New York and Silicon Valley. Then with our growing revenue, we provide scholarships and technology educational for underserved communities.</p>',
          },
        },
      },
      {
        type: 'TITLE',
        updatedAt: '2022-04-10T14:13:20.570Z',
        props: {
          title: {
            image: null,
            settings: { backgroundColor: 'white', size: 'heading1', color: 'black', bold: true, font: 'Advent Pro' },
            value: '<p class="ql-align-center">Highlights</p>',
          },
        },
      },
      {
        id: 'c807b990-3010-404f-af11-160a3e4f044c',
        type: 'IMAGE',
        props: { src: 'https://polly104820-staging.s3.us-east-2.amazonaws.com/public/assets/image-1649600032242' },
        updatedAt: '2022-04-10T14:13:54.720Z',
      },
    ],
  },
  // CONTACT US
  {
    id: 'contact-us-1',
    name: 'Contact Us',
    thumbnail: '/mock/pages/contact-us-1.png',
    blocks: [
      {
        type: 'TITLE',
        updatedAt: '2022-04-10T16:10:48.103Z',
        props: {
          subHeadline: {
            image: null,
            settings: { backgroundColor: 'white', size: 'paragraph', color: 'black' },
            value:
              '<p class="ql-align-center">Phone</p><p class="ql-align-center">+123-456-7890</p><p class="ql-align-center"><br></p><p class="ql-align-center">Email</p><p class="ql-align-center">hello@website.com</p><p class="ql-align-center"><br></p><p class="ql-align-center">Address</p><p class="ql-align-center">123 Street 4567 Don</p>',
          },
          title: {
            image: null,
            settings: { backgroundColor: 'white', size: 'heading1', color: 'black' },
            value: '<p class="ql-align-center">Contact Information</p>',
          },
        },
      },
      {
        type: 'TITLE',
        updatedAt: '2022-04-10T16:14:30.767Z',
        props: {
          button: {
            settings: {
              boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
              borderColor: '#000',
              backgroundColor: '#fff',
              color: 'black',
              borderWidth: '1px',
              display: 'block',
              width: '249px',
              fontSize: '30px',
              height: '60px',
              maxWidth: '100%',
            },
            link: { to: 'hello@website.com', type: 'email' },
            value: 'Email Us',
          },
          title: {
            image: null,
            settings: {
              backgroundColor: 'white',
              size: 'heading1',
              color: 'white',
              backgroundImage:
                'https://polly35612-dev.s3.us-east-2.amazonaws.com/public/assets/ezgif-4-b26b2e492f.jpeg',
              bold: false,
            },
            value: '<p class="ql-align-center">Get In Touch</p>',
          },
        },
      },
    ],
  },
  // BLOGS
  {
    id: 'blog-1',
    name: 'Blog',
    thumbnail: '/mock/pages/blog-1.png',
    blocks: [
      {
        type: 'BLOG',
        updatedAt: '2022-04-10T16:23:29.656Z',
        props: {
          title: {
            settings: { backgroundColor: 'white', size: 'heading1', color: 'black', font: 'Source Serif Pro' },
            image: null,
            value: '<p>What would free speech look like on Elon Musk’s Twitter?</p>',
          },
          content: {
            settings: { backgroundColor: 'white', size: 'paragraph', color: 'black', font: 'Source Serif Pro' },
            image: null,
            value:
              '<p><img src="https://polly35612-dev.s3.us-east-2.amazonaws.com/public/assets/image-1651251541606"></p><p>After acquiring a 9% stake in Twitter, Elon Musk questioned free speech on the platform and asks whether it is undermining democracy.&nbsp;</p>',
          },
        },
      },
      {
        type: 'BLOG',
        updatedAt: '2022-04-10T16:27:21.296Z',
        props: {
          title: {
            settings: { backgroundColor: 'white', size: 'heading1', color: 'black', font: 'Source Serif Pro' },
            image: null,
            value: '<p>Recipes for Korean-inspired cooking&nbsp;</p>',
          },
          content: {
            settings: { backgroundColor: 'white', color: 'black', font: 'Source Serif Pro' },
            image: null,
            value:
              '<p><img src="https://polly35612-dev.s3.us-east-2.amazonaws.com/public/assets/image-1651251653782"></p><p>Korean corn grilled cheese, one of several recipes highlighting iconic Korean flavors and ingredients.</p>',
          },
        },
      },
    ],
  },
  // RESTAURANT HOME
  {
    id: 'restaurant-home-1',
    name: 'Home',
    thumbnail: '/mock/pages/restaurant-home-1.png',
    blocks: [
      {
        type: 'TITLE',
        updatedAt: '2022-04-10T20:01:01.297Z',
        props: {
          button: {
            settings: {
              boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
              borderColor: '#ECAE65',
              backgroundColor: '#ECAE65',
              color: 'white',
              display: 'block',
              bold: false,
              borderRadius: '25px',
              size: 'paragraph',
              borderWidth: '1px',
              width: '249px',
              fontSize: '30px',
              height: '60px',
              maxWidth: '100%',
              font: 'Oswald',
            },
            link: null,
            value: 'Order Now',
          },
          title: {
            image: null,
            settings: { backgroundColor: 'black', size: 'heading1', color: '#ECAE65', bold: false, font: 'Oswald' },
            value: '<p class="ql-align-center">An award winning Contemporary Asian restaurant&nbsp;</p>',
          },
        },
      },
      {
        type: 'IMAGE',
        props: { src: 'https://polly35612-dev.s3.us-east-2.amazonaws.com/public/assets/image-1651251676387' },
        updatedAt: '2022-04-10T20:02:11.988Z',
      },
      {
        type: 'TITLE',
        updatedAt: '2022-04-10T20:03:50.233Z',
        props: {
          title: {
            image: null,
            settings: {
              backgroundColor: 'black',
              size: 'heading1',
              color: '#ECAE65',
              bold: true,
              font: 'Dancing Script',
            },
            value:
              '<p class="ql-align-center">The Best Restaurant In Middle East &amp; North Africa 2022</p><p class="ql-align-center">Listed In The Worlds 50 Best Discovery Dubai!</p><p class="ql-align-center">Forbes Top 10 Coolest Places To Eat 2019</p><p class="ql-align-center">TimeOut Dubai Best Asian Restaurant 2018/2019/2020</p>',
          },
        },
      },
      {
        type: 'IMAGE',
        props: { src: 'https://polly35612-dev.s3.us-east-2.amazonaws.com/public/assets/image-1651251699083' },
        updatedAt: '2022-04-10T20:04:12.111Z',
      },
      {
        type: 'BLOG',
        updatedAt: '2022-04-10T20:07:37.107Z',
        props: {
          title: {
            settings: { size: 'heading1', color: '#ECAE65', bold: true, font: 'Oswald' },
            image: null,
            value: '<p>HOME GROWN</p>',
          },
          content: {
            settings: { size: 'paragraph', color: '#B2B2B0', font: 'Oswald' },
            image: null,
            value:
              '<p>Founded in late November 2016, 3FILS is piloted by a team who live by a diehard daringness to be different, to offer a story akin to the ‘2 cents worth’ opinion of dining in Dubai’ with every bite.</p><p>With harbour-side community style dining, 3FILS serves up premium Asian dishes with a Japanese twist as its focus.&nbsp;</p><p><img src="https://polly35612-dev.s3.us-east-2.amazonaws.com/public/assets/image-1651251719651"></p><p><img src="https://polly35612-dev.s3.us-east-2.amazonaws.com/public/assets/image-1651251834631"></p>',
          },
        },
      },
      {
        type: 'IMAGE',
        props: { src: 'https://polly35612-dev.s3.us-east-2.amazonaws.com/public/assets/image-1651251855132' },
        updatedAt: '2022-04-10T20:09:59.360Z',
      },
      {
        type: 'TITLE',
        updatedAt: '2022-04-10T20:11:13.138Z',
        props: {
          subHeadline: {
            image: null,
            settings: { backgroundColor: 'black', size: 'paragraph', color: 'white', font: 'Oswald' },
            value:
              '<p>For the many, we comfortably seat and feed over 100 people.</p><p>The 3FILS team is a family, available whenever you need them for anything, removing the ‘personal waiter’ vibe of hospitality.</p><p>They will help elevate your dining experience with a sense of comfort, discovery and sharing.</p><p>No matter your attire, our home is your home and the doors will always be open for you.&nbsp;</p>',
          },
          title: {
            image: null,
            settings: { backgroundColor: 'black', size: 'heading1', color: '#ECAE65', bold: true, font: 'Oswald' },
            value: '<p class="ql-align-center">WHAT TO EXPECT</p>',
          },
        },
      },
      {
        type: 'BLOG',
        updatedAt: '2022-04-10T20:13:19.261Z',
        props: {
          title: {
            settings: { size: 'heading1', color: '#ECAE65', bold: true, font: 'Oswald' },
            image: null,
            value: '<p>As Seen In</p>',
          },
          content: {
            settings: {},
            image: null,
            value:
              '<p><img src="https://polly35612-dev.s3.us-east-2.amazonaws.com/public/assets/image-1651251904617"><img src="https://polly35612-dev.s3.us-east-2.amazonaws.com/public/assets/image-1651251921668"><img src="https://polly35612-dev.s3.us-east-2.amazonaws.com/public/assets/image-1651251955056"></p>',
          },
        },
      },
      {
        type: 'IMAGE',
        props: { src: 'https://polly35612-dev.s3.us-east-2.amazonaws.com/public/assets/image-1651252279967' },
        updatedAt: '2022-04-10T20:13:56.638Z',
      },
      {
        type: 'TITLE',
        updatedAt: '2022-04-10T20:15:15.478Z',
        props: {
          subHeadline: {
            image: null,
            settings: { backgroundColor: 'black', size: 'paragraph', font: 'Oswald' },
            value:
              '<p>We have a team coming from all over the world, individuals with great energy and full of ideas.</p><p>Be part of this ever-growing team. We are also on a look out for great collaborators to work with, be it in Dubai or elsewhere around the world.</p><p>Great minds that thinks alike.</p><p><br></p><p>opportunities@3fils.com</p>',
          },
          title: {
            image: null,
            settings: { backgroundColor: 'black', size: 'heading1', color: '#ECAE65', bold: true, font: 'Oswald' },
            value: '<p class="ql-align-center">OPPORTUNITIES</p>',
          },
        },
      },
      {
        type: 'TITLE',
        updatedAt: '2022-04-10T20:16:28.233Z',
        props: {
          subHeadline: {
            image: null,
            settings: { backgroundColor: 'black', size: 'paragraph', font: 'Oswald' },
            value:
              '<p>Thursday 12–11:30PM</p><p>Friday 12–11:30PM</p><p>Saturday 12–11:30PM</p><p>Sunday 12–11:30PM</p><p>Monday 12–11:30PM</p><p>Tuesday 12–11:30PM</p><p>Wednesday 12–11:30PM</p><p><br></p><p>🥢 Dine In 12pm – 12am [NO RESERVATIONS]</p><p><br></p><p class="ql-align-center">&nbsp;🛵 Delivery 10:30pm</p>',
          },
          title: {
            image: null,
            settings: { backgroundColor: 'black', size: 'heading1', color: '#ECAE65', font: 'Oswald' },
            value: '<p class="ql-align-center">Opening Hours</p>',
          },
        },
      },
      {
        type: 'TITLE',
        updatedAt: '2022-04-10T20:17:27.730Z',
        props: {
          subHeadline: {
            image: null,
            settings: { backgroundColor: 'black', size: 'paragraph', font: 'Oswald' },
            value:
              '<p>Shop 02, Jumeirah Fishing Harbour 1</p><p>Al Urouba St​</p><p>PO BOX 19913</p><p><br></p><p>Phone</p><p>+9714333 4003</p><p>+971562730030</p><p><br></p><p>Email</p><p>info@3fils.com</p><p><br></p><p>For Business Enquiries</p><p>business@3fils.com</p>',
          },
          title: {
            image: null,
            settings: { backgroundColor: 'black', size: 'heading1', color: '#ECAE65', font: 'Oswald' },
            value: '<p class="ql-align-center">Our Address</p>',
          },
        },
      },
    ],
  },
  // RESTAURANT MENU
  {
    id: 'restaurant-menu-1',
    name: 'Menu',
    thumbnail: '/mock/pages/restaurant-menu-1.png',
    blocks: [
      {
        type: 'TITLE',
        updatedAt: '2022-04-10T20:20:29.324Z',
        props: {
          title: {
            image: null,
            settings: { backgroundColor: 'black', size: 'heading1', color: '#ECAE65', bold: false, font: 'Oswald' },
            value: '<p class="ql-align-center">Menu</p>',
          },
        },
      },
      {
        type: 'TITLE',
        updatedAt: '2022-04-10T20:24:23.016Z',
        props: {
          title: {
            image: null,
            settings: { backgroundColor: 'black', size: 'heading2', color: '#ECAE65', font: 'Oswald' },
            value: '<p class="ql-align-center">START SIMPLE</p>',
          },
        },
      },
      {
        type: 'BLOG',
        updatedAt: '2022-04-10T20:23:20.719Z',
        props: {
          title: {
            settings: { size: 'heading2', color: '#ECAE65', font: 'Oswald' },
            image: null,
            value: '<p>SEAWEED SALAD - $32</p>',
          },
          content: {
            settings: { font: 'Oswald' },
            image: null,
            value:
              '<p>Seaweed, granny smith, walnut - Allergies: Gluten, Dairy, Tree Nut, Sesame, Soya, Fish</p><p><img src="https://polly35612-dev.s3.us-east-2.amazonaws.com/public/assets/image-1651255715351"></p>',
          },
        },
      },
      {
        type: 'TITLE',
        updatedAt: '2022-04-10T20:25:20.085Z',
        props: {
          title: {
            image: null,
            settings: { backgroundColor: 'black', size: 'heading2', color: '#ECAE65', font: 'Oswald' },
            value: '<p class="ql-align-center">USE THEM HANDS</p>',
          },
        },
      },
      {
        type: 'BLOG',
        updatedAt: '2022-04-10T20:27:09.172Z',
        props: {
          title: {
            settings: { size: 'heading2', color: '#ECAE65', font: 'Oswald' },
            image: null,
            value: '<p>WINGS - $41</p>',
          },
          content: {
            settings: {},
            image: null,
            value:
              '<p>Togarashi soy garlic - Allergies:</p><p>Soy, Sesame, Gluten, Garlic</p><p><img src="https://polly35612-dev.s3.us-east-2.amazonaws.com/public/assets/image-1651255816677"></p>',
          },
        },
      },
    ],
  },
]

export async function getPages(): Promise<IPage[]> {
  return pages
}

export async function getTemplates(): Promise<ITemplate[]> {
  const templates: ITemplate[] = [
    // {
    //   id: '1',
    //   name: 'Landing',
    //   thumbnail: '/mock/templates/1/thumbnail.png',
    //   menu: {
    //     pages: [
    //       { title: 'Home', url: '/', type: ButtonLinkTypes.INTERNAL, id: uuid() },
    //       { title: 'About Us', url: '/about-us', type: ButtonLinkTypes.INTERNAL, id: uuid() },
    //       { title: 'Contact Us', url: '/contact-us', type: ButtonLinkTypes.INTERNAL, id: uuid() },
    //     ],
    //     style: 'MENU_BAR1',
    //   },
    //   footer: {
    //     style: 'FOOTER2',
    //   },
    //   blocks: pages.find(page => page.id === 'landing-1')!.blocks,
    //   pages: [
    //     {
    //       id: '1',
    //       name: pages.find(page => page.id === 'about-us-1')!.name,
    //       path: '/about-us',
    //       blocks: pages.find(page => page.id === 'about-us-1')!.blocks,
    //     },
    //     {
    //       id: '2',
    //       name: pages.find(page => page.id === 'contact-us-1')!.name,
    //       path: '/contact-us',
    //       blocks: pages.find(page => page.id === 'contact-us-1')!.blocks,
    //     },
    //   ],
    // },
    // {
    //   id: '2',
    //   name: 'Blog',
    //   thumbnail: '/mock/templates/2/thumbnail.png',
    //   menu: {
    //     pages: [
    //       { title: 'Home', url: '/', type: ButtonLinkTypes.INTERNAL, id: uuid() },
    //       { title: 'Contact Us', url: '/contact-us', type: ButtonLinkTypes.INTERNAL, id: uuid() },
    //     ],
    //     style: 'MENU_BAR1',
    //   },
    //   footer: {
    //     style: 'FOOTER2',
    //   },
    //   blocks: pages.find(page => page.id === 'blog-1')!.blocks,
    //   pages: [
    //     {
    //       id: '1',
    //       name: pages.find(page => page.id === 'contact-us-1')!.name,
    //       path: '/contact-us',
    //       blocks: pages.find(page => page.id === 'contact-us-1')!.blocks,
    //     },
    //   ],
    // },
    // {
    //   id: '3',
    //   name: 'Restaurant',
    //   thumbnail: '/mock/templates/3/thumbnail.png',
    //   menu: {
    //     pages: [
    //       { title: 'Home', url: '/', type: ButtonLinkTypes.INTERNAL, id: uuid() },
    //       { title: 'Menu', url: '/menu', type: ButtonLinkTypes.INTERNAL, id: uuid() },
    //       { title: 'Contact Us', url: '/contact-us', type: ButtonLinkTypes.INTERNAL, id: uuid() },
    //     ],
    //     style: 'MENU_BAR1',
    //   },
    //   footer: {
    //     style: 'FOOTER2',
    //   },
    //   blocks: pages.find(page => page.id === 'restaurant-home-1')!.blocks,
    //   pages: [
    //     {
    //       id: '1',
    //       name: pages.find(page => page.id === 'restaurant-menu-1')!.name,
    //       path: '/menu',
    //       blocks: pages.find(page => page.id === 'restaurant-menu-1')!.blocks,
    //     },
    //     {
    //       id: '2',
    //       name: pages.find(page => page.id === 'contact-us-1')!.name,
    //       path: '/contact-us',
    //       blocks: pages.find(page => page.id === 'contact-us-1')!.blocks,
    //     },
    //   ],
    // },8
  ]
  return templates
}
