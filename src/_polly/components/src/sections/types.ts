export type SectionTypes =
  | 'TEXT'
  | 'ATTENTION_GRABBER'
  | 'GALLERY'
  | 'ABOUT_US'
  | 'QUOTE_SECTION'
  | 'TEAM_MEMBERS'
  | 'FAQ'
  | 'CONTACT_US'
  | 'MENU'
  | 'TESTIMONIAL'
  | 'TABLE'
  | 'BLOG'
  | 'PORTFOLIO'
  | 'IMAGE_OMG'

export type SectionVariableCategories = 'TEXT' | 'IMAGE' | 'VIDEO' | 'BUTTON' | 'MAP'
export type SectionVariable<Variables> = {
  id: string
  name: Variables
  category: SectionVariableCategories
  data: any
}

export type SectionTags = 'IMAGE' | 'VIDEO' | 'SLIDESHOW' | 'ANIMATION' | 'BACKGROUND' | 'BUTTON'
export type Section<Variants, Variables> = {
  id: string
  isSection: boolean
  type: SectionTypes
  variant: Variants
  variables: Array<SectionVariable<Variables>>
  updatedAt: string
  createdAt: string
  tags?: SectionTags[]
  styleName?: string
  designedBy?: string
}

// 1 -YOLO TEXT ------------------------------------------
export type TextSectionVariants =
  | 'VARIANT_1'
  | 'VARIANT_2'
  | 'VARIANT_3'
  | 'VARIANT_4'
  | 'VARIANT_5'
  | 'VARIANT_6'
  | 'VARIANT_7'
  | 'VARIANT_8'
  | 'VARIANT_9'
  | 'VARIANT_10'
  | 'VARIANT_11'
  | 'VARIANT_12'
  | 'VARIANT_13'
  | 'VARIANT_14'
  | 'VARIANT_15'
  | 'VARIANT_16'
  | 'VARIANT_17'
  | 'VARIANT_19'

export type TextSectionVariables = 'TITLE' | 'SUBTITLE' | 'PARAGRAPH' | 'MEDIA' | 'BUTTON_1' | 'BUTTON_2' | 'MEDIAGROUP'
export type TextSection = Section<TextSectionVariants, TextSectionVariables>
export type TextSectionMediaGroup = {
  id: string
  name: string
  description?: string
  image: string
}
// 2 -  Love@first site------------------------------

export type AttentionGrabberVariants =
  | 'VARIANT_1'
  | 'VARIANT_2'
  | 'VARIANT_3'
  | 'VARIANT_4'
  | 'VARIANT_5'
  | 'VARIANT_6'
  | 'VARIANT_7'
  | 'VARIANT_8'
  | 'VARIANT_9'
  | 'VARIANT_10'
  | 'VARIANT_11'
  | 'VARIANT_12'
  | 'VARIANT_13'
  | 'VARIANT_14'
export type AttentionGrabberVariables = 'TITLE' | 'SUBTITLE' | 'PARAGRAPH' | 'MEDIA' | 'BUTTON_1' | 'BUTTON_2'
export type AttentionGrabberSection = Section<AttentionGrabberVariants, AttentionGrabberVariables>

// 3 - GELLERY BY LIT-------------------------

export type GallerySectionVariants =
  | 'VARIANT_1'
  | 'VARIANT_2'
  | 'VARIANT_3'
  | 'VARIANT_4'
  | 'VARIANT_5'
  | 'VARIANT_6'
  | 'VARIANT_7'
  | 'VARIANT_8'
  | 'VARIANT_9'
  | 'VARIANT_10'
  | 'VARIANT_11'
  | 'VARIANT_12'
  | 'VARIANT_13'
  | 'VARIANT_14'
  | 'VARIANT_15'
export type GallerySectionVariables = 'MEDIA'
export type GallerySection = Section<GallerySectionVariants, GallerySectionVariables>

// 3 - ABOUT US-------------------------

export type AboutUsVariants =
  | 'VARIANT_1'
  | 'VARIANT_2'
  | 'VARIANT_3'
  | 'VARIANT_4'
  | 'VARIANT_5'
  | 'VARIANT_6'
  | 'VARIANT_7'
  | 'VARIANT_8'
  | 'VARIANT_9'
  | 'VARIANT_10'
  | 'VARIANT_12'
export type AboutUsVariables =
  | 'TITLE'
  | 'SUBTITLE'
  | 'SUBTITLE2'
  | 'PARAGRAPH'
  | 'PARAGRAPH_2'
  | 'MEDIA'
  | 'BUTTON_1'
  | 'BUTTON_2'
export type AboutUsSection = Section<AboutUsVariants, AboutUsVariables>

// 5 - QUOTE ME ----------------------------------

export type QuoteVariants =
  | 'VARIANT_1'
  | 'VARIANT_2'
  | 'VARIANT_3'
  | 'VARIANT_4'
  | 'VARIANT_5'
  | 'VARIANT_6'
  | 'VARIANT_7'
  | 'VARIANT_8'
  | 'VARIANT_9'
  | 'VARIANT_10'
export type QuoteVariables = 'TITLE' | 'SUBTITLE' | 'DESCRIPTION' | 'MEDIA' | 'BUTTON_1' | 'BUTTON_2'
export type QuoteSection = Section<QuoteVariants, QuoteVariables>

// 5 - TEAM MEMBER ----------------------------------

export type TeamMembersVariants =
  | 'VARIANT_1'
  | 'VARIANT_2'
  | 'VARIANT_3'
  | 'VARIANT_4'
  | 'VARIANT_5'
  | 'VARIANT_6'
  | 'VARIANT_7'
export type TeamMembersVariables =
  | 'TITLE'
  | 'SUBTITLE'
  | 'PARAGRAPH'
  | 'MEDIA'
  | 'BUTTON_1'
  | 'BUTTON_2'
  | 'TEAM_MEMBERS'
export type TeamMembersSection = Section<TeamMembersVariants, TeamMembersVariables>
export type TeamMembersSectionMember = {
  id: string
  name: string
  subtitle?: string
  description?: string
  image: string
  button?: {
    label: string
    url: string
  }
}

// 7 - FAQ ---------------------------------------------

export type FAQVariants = 'VARIANT_1' | 'VARIANT_2' | 'VARIANT_3' | 'VARIANT_4' | 'VARIANT_5' | 'VARIANT_7'
export type FAQVariables = 'TITLE' | 'SUBTITLE' | 'PARAGRAPH' | 'MEDIA' | 'BUTTON_1' | 'BUTTON_2' | 'ITEMS'
export type FAQSection = Section<FAQVariants, FAQVariables>
export type FAQSectionItem = {
  id: string
  title: string
  description: string
  items?: string
  year?: string
}

// 8- CONTACT US----------------------------------------

export type ContactUsVariants =
  | 'VARIANT_1'
  | 'VARIANT_2'
  | 'VARIANT_3'
  | 'VARIANT_4'
  | 'VARIANT_5'
  | 'VARIANT_6'
  | 'VARIANT_7'
  | 'VARIANT_8'
  | 'VARIANT_9'
  | 'VARIANT_10'
  | 'VARIANT_11'
  | 'VARIANT_12'
  | 'VARIANT_13'
export type ContactUsVariables =
  | 'TITLE'
  | 'SUBTITLE'
  | 'PARAGRAPH'
  | 'MEDIA'
  | 'BUTTON_1'
  | 'BUTTON_2'
  | 'ADDRESS'
  | 'HOURS'
  | 'PHONE'
  | 'EMAIL'
  | 'MAP'
export type ContactUsSection = Section<ContactUsVariants, ContactUsVariables>
export type ContactUsMap = {
  position: { lat: number; lng: number }
  address: string
}

// 8- MENU----------------------------------------

export type MENUVariants = 'VARIANT_1' | 'VARIANT_2'
export type MENUVariables = 'TITLE' | 'SUBTITLE' | 'PARAGRAPH' | 'MEDIA' | 'BUTTON_1' | 'BUTTON_2' | 'ITEMS' | 'IMAGE'
export type MENUSection = Section<MENUVariants, MENUVariables>
export type MENUSectionItem = {
  id: string
  title: string
  subtitle: string
  description: string
  image: string
}
export type MENUImageItem = {
  id: string
  title: string
  subtitle: string
  image: string
}

// 9- TESTIMONIAL----------------------------------------

export type TESTIMONIALVariants = 'VARIANT_1'
export type TESTIMONIALVariables =
  | 'TITLE'
  | 'SUBTITLE'
  | 'PARAGRAPH'
  | 'MEDIA'
  | 'BUTTON_1'
  | 'BUTTON_2'
  | 'ITEMS'
  | 'IMAGE'
export type TESTIMONIALSection = Section<TESTIMONIALVariants, TESTIMONIALVariables>
export type TESTIMONIALSectionItem = {
  id: string
  title: string
  subtitle: string
  description: string
  image: string
}

// 10- TABLE----------------------------------------

export type TABLEVariants = 'VARIANT_1'
export type TABLEVariables = 'TITLE' | 'SUBTITLE' | 'PARAGRAPH' | 'MEDIA' | 'BUTTON_1' | 'BUTTON_2' | 'ITEMS' | 'IMAGE'
export type TABLESection = Section<TABLEVariants, TABLEVariables>
export type TABLESectionItem = {
  id: string
  title: string
  subtitle: string
  description: string
}

// 11- GOAT BLOG----------------------------------------
export type BlogVariants = 'VARIANT_1' | 'VARIANT_2' | 'VARIANT_3'
export type BlogVariables = 'TITLE' | 'SUBTITLE' | 'MEDIA' | 'ITEMS' | 'PARAGRAPH'
export type BlogSection = Section<BlogVariants, BlogVariables>
export type BlogItemsGroup = {
  id: string
  name: string
  description?: string
  image: string
}

// 11- PORTFOLIO SECTION----------------------------------------
export type PortfolioVariants = 'VARIANT_1'
export type PortfolioVariables = 'TITLE' | 'SUBTITLE' | 'MEDIA' | 'ITEMS' | 'PARAGRAPH'
export type PortfolioSection = Section<PortfolioVariants, PortfolioVariables>
export type PortfolioItemsGroup = {
  id: string
  name: string
  description?: string
  image: string
}

// 12-- IMAGE OMG SECTION -------------------------------------------

export type ImageOmgVariants = 'VARIANT_1' | 'VARIANT_2'
export type ImageOmgVariables =
  | 'TITLE'
  | 'SUBTITLE'
  | 'PARAGRAPH'
  | 'MEDIA'
  | 'BUTTON_1'
  | 'BUTTON_2'
  | 'ITEMS'
  | 'IMAGE'
export type ImageOmgSection = Section<ImageOmgVariants, ImageOmgVariables>
export type ImageOmgItemsGroup = {
  id: string
  title: string
  subtitle: string
  description: string
}

