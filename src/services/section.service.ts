import { getSectionVariantsWithPreview } from 'src/util/sections/get-variants'
import { ButtonLinkTypes } from 'src/_polly/components/src/constants'
import {
  AboutUsSection,
  AttentionGrabberSection,
  ContactUsSection,
  FAQSection,
  GallerySection,
  QuoteSection,
  TeamMembersSection,
  TextSection,
} from 'src/_polly/components/src/sections'
import { v4 as uuid } from 'uuid'

export async function getSectionTemplates() {
  const attentionGrabberSection = getSectionVariantsWithPreview('ATTENTION_GRABBER')
  const gallerySection = getSectionVariantsWithPreview('GALLERY')
  const textSection = getSectionVariantsWithPreview('TEXT')
  const TeamMembersSection = getSectionVariantsWithPreview('TEAM_MEMBERS')
  const aboutUsSection = getSectionVariantsWithPreview('ABOUT_US')
  const contactUsSection = getSectionVariantsWithPreview('CONTACT_US')
  const faqSection = getSectionVariantsWithPreview('FAQ')
  const quoteSection = getSectionVariantsWithPreview('QUOTE_SECTION')

  const templates = [
    {
      id: '1',
      name: 'Techboom',
      thumbnail: '/mock/templates/1/techboom.png',
      menu: {
        pages: [
          { title: 'Home', url: '/', type: ButtonLinkTypes.INTERNAL, id: uuid() },
          { title: 'About Us', url: '/about-us', type: ButtonLinkTypes.INTERNAL, id: uuid() },
          { title: 'Contact Us', url: '/contact-us', type: ButtonLinkTypes.INTERNAL, id: uuid() },
        ],
        style: 'MENU_BAR1',
      },
      footer: {
        style: 'FOOTER2',
      },
      blocks: [
        {
          type: attentionGrabberSection[0].type,
          variables: (attentionGrabberSection as AttentionGrabberSection[]).filter(ag => ag.variant === 'VARIANT_2')[0]
            .variables,
          variant: 'VARIANT_2',
        },
        {
          type: gallerySection[0].type,
          variables: (gallerySection as GallerySection[]).filter(ag => ag.variant === 'VARIANT_2')[0].variables,
          variant: 'VARIANT_2',
        },
        {
          type: textSection[0].type,
          variables: (textSection as TextSection[]).filter(ag => ag.variant === 'VARIANT_7')[0].variables,
          variant: 'VARIANT_7',
        },
        {
          type: gallerySection[0].type,
          variables: (gallerySection as GallerySection[]).filter(ag => ag.variant === 'VARIANT_3')[0].variables,
          variant: 'VARIANT_3',
        },
        {
          type: TeamMembersSection[0].type,
          variables: (TeamMembersSection as TeamMembersSection[]).filter(ag => ag.variant === 'VARIANT_4')[0].variables,
          variant: 'VARIANT_4',
        },
        {
          type: contactUsSection[0].type,
          variables: (contactUsSection as ContactUsSection[]).filter(ag => ag.variant === 'VARIANT_6')[0].variables,
          variant: 'VARIANT_6',
        },
      ],
    },
    {
      id: '2',
      name: 'Next Level Landing',
      thumbnail: '/mock/templates/1/next.png',
      menu: {
        pages: [
          { title: 'Home', url: '/', type: ButtonLinkTypes.INTERNAL, id: uuid() },
          { title: 'About Us', url: '/about-us', type: ButtonLinkTypes.INTERNAL, id: uuid() },
          { title: 'Contact Us', url: '/contact-us', type: ButtonLinkTypes.INTERNAL, id: uuid() },
        ],
        style: 'MENU_BAR1',
      },
      footer: {
        style: 'FOOTER2',
      },
      blocks: [
        {
          type: attentionGrabberSection[0].type,
          variables: (attentionGrabberSection as AttentionGrabberSection[]).filter(ag => ag.variant === 'VARIANT_1')[0]
            .variables,
          variant: 'VARIANT_1',
        },
        {
          type: textSection[0].type,
          variables: (textSection as TextSection[]).filter(ag => ag.variant === 'VARIANT_7')[0].variables,
          variant: 'VARIANT_7',
        },
        {
          type: gallerySection[0].type,
          variables: (gallerySection as GallerySection[]).filter(ag => ag.variant === 'VARIANT_3')[0].variables,
          variant: 'VARIANT_3',
        },
        {
          type: gallerySection[0].type,
          variables: (gallerySection as GallerySection[]).filter(ag => ag.variant === 'VARIANT_4')[0].variables,
          variant: 'VARIANT_4',
        },
        {
          type: TeamMembersSection[0].type,
          variables: (TeamMembersSection as TeamMembersSection[]).filter(ag => ag.variant === 'VARIANT_1')[0].variables,
          variant: 'VARIANT_1',
        },
      ],
    },
    {
      id: '3',
      name: 'Restaurant',
      thumbnail: '/mock/templates/1/Restaurant.png',
      menu: {
        pages: [
          { title: 'Home', url: '/', type: ButtonLinkTypes.INTERNAL, id: uuid() },
          { title: 'About Us', url: '/about-us', type: ButtonLinkTypes.INTERNAL, id: uuid() },
          { title: 'Contact Us', url: '/contact-us', type: ButtonLinkTypes.INTERNAL, id: uuid() },
        ],
        style: 'MENU_BAR1',
      },
      footer: {
        style: 'FOOTER2',
      },
      blocks: [
        {
          type: attentionGrabberSection[0].type,
          variables: (attentionGrabberSection as AttentionGrabberSection[]).filter(ag => ag.variant === 'VARIANT_8')[0]
            .variables,
          variant: 'VARIANT_3',
        },
        {
          type: gallerySection[0].type,
          variables: (gallerySection as GallerySection[]).filter(ag => ag.variant === 'VARIANT_2')[0].variables,
          variant: 'VARIANT_2',
        },
        {
          type: textSection[0].type,
          variables: (textSection as TextSection[]).filter(ag => ag.variant === 'VARIANT_7')[0].variables,
          variant: 'VARIANT_7',
        },
        {
          type: gallerySection[0].type,
          variables: (gallerySection as GallerySection[]).filter(ag => ag.variant === 'VARIANT_1')[0].variables,
          variant: 'VARIANT_1',
        },
        {
          type: aboutUsSection[0].type,
          variables: (aboutUsSection as AboutUsSection[]).filter(ag => ag.variant === 'VARIANT_2')[0].variables,
          variant: 'VARIANT_2',
        },
        {
          type: contactUsSection[0].type,
          variables: (contactUsSection as ContactUsSection[]).filter(ag => ag.variant === 'VARIANT_1')[0].variables,
          variant: 'VARIANT_1',
        },
      ],
    },
    {
      id: '4',
      name: 'Fashion',
      thumbnail: '/mock/templates/1/Fashion.png',
      menu: {
        pages: [
          { title: 'Home', url: '/', type: ButtonLinkTypes.INTERNAL, id: uuid() },
          { title: 'About Us', url: '/about-us', type: ButtonLinkTypes.INTERNAL, id: uuid() },
          { title: 'Contact Us', url: '/contact-us', type: ButtonLinkTypes.INTERNAL, id: uuid() },
        ],
        style: 'MENU_BAR1',
      },
      footer: {
        style: 'FOOTER2',
      },
      blocks: [
        {
          type: attentionGrabberSection[0].type,
          variables: (attentionGrabberSection as AttentionGrabberSection[]).filter(ag => ag.variant === 'VARIANT_4')[0]
            .variables,
          variant: 'VARIANT_4',
        },
        {
          type: gallerySection[0].type,
          variables: (gallerySection as GallerySection[]).filter(ag => ag.variant === 'VARIANT_7')[0].variables,
          variant: 'VARIANT_7',
        },
        {
          type: textSection[0].type,
          variables: (textSection as TextSection[]).filter(ag => ag.variant === 'VARIANT_5')[0].variables,
          variant: 'VARIANT_5',
        },
        {
          type: faqSection[0].type,
          variables: (faqSection as FAQSection[]).filter(ag => ag.variant === 'VARIANT_2')[0].variables,
          variant: 'VARIANT_2',
        },
        {
          type: TeamMembersSection[0].type,
          variables: (TeamMembersSection as TeamMembersSection[]).filter(ag => ag.variant === 'VARIANT_5')[0].variables,
          variant: 'VARIANT_5',
        },
        {
          type: gallerySection[0].type,
          variables: (gallerySection as GallerySection[]).filter(ag => ag.variant === 'VARIANT_1')[0].variables,
          variant: 'VARIANT_1',
        },
        {
          type: aboutUsSection[0].type,
          variables: (aboutUsSection as AboutUsSection[]).filter(ag => ag.variant === 'VARIANT_2')[0].variables,
          variant: 'VARIANT_2',
        },
        {
          type: contactUsSection[0].type,
          variables: (contactUsSection as ContactUsSection[]).filter(ag => ag.variant === 'VARIANT_1')[0].variables,
          variant: 'VARIANT_1',
        },
      ],
    },
    {
      id: '5',
      name: 'Blog',
      thumbnail: '/mock/templates/2/thumbnail.png',
      menu: {
        pages: [
          { title: 'Home', url: '/', type: ButtonLinkTypes.INTERNAL, id: uuid() },
          { title: 'About Us', url: '/about-us', type: ButtonLinkTypes.INTERNAL, id: uuid() },
          { title: 'Contact Us', url: '/contact-us', type: ButtonLinkTypes.INTERNAL, id: uuid() },
        ],
        style: 'MENU_BAR1',
      },
      footer: {
        style: 'FOOTER2',
      },
      blocks: [
        {
          type: attentionGrabberSection[0].type,
          variables: (attentionGrabberSection as AttentionGrabberSection[]).filter(ag => ag.variant === 'VARIANT_9')[0]
            .variables,
          variant: 'VARIANT_9',
        },
        {
          type: gallerySection[0].type,
          variables: (gallerySection as GallerySection[]).filter(ag => ag.variant === 'VARIANT_1')[0].variables,
          variant: 'VARIANT_1',
        },
        {
          type: quoteSection[0].type,
          variables: (quoteSection as QuoteSection[]).filter(ag => ag.variant === 'VARIANT_4')[0].variables,
          variant: 'VARIANT_4',
        },
        {
          type: gallerySection[0].type,
          variables: (gallerySection as GallerySection[]).filter(ag => ag.variant === 'VARIANT_7')[0].variables,
          variant: 'VARIANT_7',
        },
        {
          type: textSection[0].type,
          variables: (textSection as TextSection[]).filter(ag => ag.variant === 'VARIANT_5')[0].variables,
          variant: 'VARIANT_5',
        },
        {
          type: TeamMembersSection[0].type,
          variables: (TeamMembersSection as TeamMembersSection[]).filter(ag => ag.variant === 'VARIANT_6')[0].variables,
          variant: 'VARIANT_6',
        },
        {
          type: contactUsSection[0].type,
          variables: (contactUsSection as ContactUsSection[]).filter(ag => ag.variant === 'VARIANT_5')[0].variables,
          variant: 'VARIANT_5',
        },
      ],
    },
    {
      id: '6',
      name: 'Blog',
      thumbnail: '/mock/templates/1/SERVICES.png',
      menu: {
        pages: [
          { title: 'Home', url: '/', type: ButtonLinkTypes.INTERNAL, id: uuid() },
          { title: 'About Us', url: '/about-us', type: ButtonLinkTypes.INTERNAL, id: uuid() },
          { title: 'Contact Us', url: '/contact-us', type: ButtonLinkTypes.INTERNAL, id: uuid() },
        ],
        style: 'MENU_BAR1',
      },
      footer: {
        style: 'FOOTER2',
      },
      blocks: [
        {
          type: attentionGrabberSection[0].type,
          variables: (attentionGrabberSection as AttentionGrabberSection[]).filter(ag => ag.variant === 'VARIANT_5')[0]
            .variables,
          variant: 'VARIANT_5',
        },
        {
          type: quoteSection[0].type,
          variables: (quoteSection as QuoteSection[]).filter(ag => ag.variant === 'VARIANT_7')[0].variables,
          variant: 'VARIANT_7',
        },
        {
          type: gallerySection[0].type,
          variables: (gallerySection as GallerySection[]).filter(ag => ag.variant === 'VARIANT_2')[0].variables,
          variant: 'VARIANT_2',
        },
        {
          type: gallerySection[0].type,
          variables: (gallerySection as GallerySection[]).filter(ag => ag.variant === 'VARIANT_9')[0].variables,
          variant: 'VARIANT_9',
        },
        {
          type: TeamMembersSection[0].type,
          variables: (TeamMembersSection as TeamMembersSection[]).filter(ag => ag.variant === 'VARIANT_6')[0].variables,
          variant: 'VARIANT_6',
        },
        {
          type: contactUsSection[0].type,
          variables: (contactUsSection as ContactUsSection[]).filter(ag => ag.variant === 'VARIANT_6')[0].variables,
          variant: 'VARIANT_6',
        },
      ],
    },
  ]

  return templates
}
