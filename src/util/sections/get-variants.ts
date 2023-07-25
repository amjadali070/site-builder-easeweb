import { SectionTypes } from 'src/_polly/components/src/sections'
import { getAboutUsVariants } from './about-us'
import { getAttentionGrabberVariants } from './attention-grabber'
import { getBlogVariants } from './Blog'
import { getContactUsVariants } from './contact-us'
import { getFAQVariants } from './faq'
import { getGalleryVariants } from './gallery'
import { getMENUVariants } from './menu'
import { getPortfolioVariants } from './portfolio'
import { getQuoteVariants } from './quote'
import { getTABLEVariants } from './table'
import { getTeamMembersVariants } from './team-members'
import { getTESTIMONIALVariants } from './testimonial'
import { getTextVariants } from './text'
import { getImageOmgVariants } from './image-omg'

const variantCounts = {
  TEXT: 19,
  ATTENTION_GRABBER: 14,
  GALLERY: 15,
  ABOUT_US: 12,
  QUOTE_SECTION: 8,
  TEAM_MEMBERS: 6,
  FAQ: 7,
  CONTACT_US: 13,
  MENU: 2,
  TESTIMONIAL: 1,
  TABLE: 1,
  BLOG: 3,
  PORTFOLIO: 1,
  IMAGE_OMG: 2,
}

export function getSectionVariants(type?: SectionTypes) {
  if (!type || !variantCounts[type]) {
    return []
  }
  return generateSectionVariants(variantCounts[type])
}

function generateSectionVariants(count: number) {
  return [
    ...Array(count)
      .fill(null)
      .map((_, i) => ({ id: `VARIANT_${i + 1}`, name: `Variant ${i + 1}` })),
  ]
}

const variantGetters = {
  TEXT: getTextVariants,
  ATTENTION_GRABBER: getAttentionGrabberVariants,
  GALLERY: getGalleryVariants,
  ABOUT_US: getAboutUsVariants,
  QUOTE_SECTION: getQuoteVariants,
  TEAM_MEMBERS: getTeamMembersVariants,
  FAQ: getFAQVariants,
  CONTACT_US: getContactUsVariants,
  MENU: getMENUVariants,
  TESTIMONIAL: getTESTIMONIALVariants,
  TABLE: getTABLEVariants,
  BLOG: getBlogVariants,
  PORTFOLIO: getPortfolioVariants,
  IMAGE_OMG: getImageOmgVariants,
}

export function getSectionVariantsWithPreview(type?: SectionTypes) {
  if (!type) return []
  return variantGetters[type]()
}
