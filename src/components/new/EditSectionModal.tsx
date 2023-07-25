import EditSectionFAQModal from 'src/components/new/EditSectionFAQModal'
import EditSectionMENUModal from 'src/components/new/EditSectionMENUModal'
import EditSectionTABLEModal from 'src/components/new/EditSectionTableModal'
import EditSectionTESTIMONIALModal from 'src/components/new/EditSectionTestimonialModal'
import {
  AboutUsSection,
  AttentionGrabberSection,
  ContactUsSection,
  FAQSection,
  GallerySection,
  MENUSection,
  TABLESection,
  TeamMembersSection,
  TESTIMONIALSection,
  TextSection,
  BlogSection,
  PortfolioSection,
  ImageOmgSection,
} from 'src/_polly/components/src/sections'
import EditSectionAboutUsModal from './EditSectionAboutUsModal'
import EditSectionContactUsModal from './EditSectionContactUsModal'
import EditSectionGalleryModal from './EditSectionGalleryModal'
import EditSectionTeamMembersModal from './EditSectionTeamMembersModal'
import EditSectionTextModal from './EditSectionTextModal'
import EditSectionAttentionGetter from './EditSectionAttentionGetter'
import EditSectionBlogModal from './EditSectionBlogModal'
import EditSectionPortfolioModal from './EditSectionPortfolioModal'
import EditSectionImageOmg from './EditSectionImageOmg'

export interface EditSection {
  open: boolean
  section:
  | TextSection
  | AttentionGrabberSection
  | GallerySection
  | TeamMembersSection
  | FAQSection
  | MENUSection
  | ContactUsSection
  | TESTIMONIALSection
  | TABLESection
  | BlogSection
  | AboutUsSection
  | PortfolioSection
  | ImageOmgSection
  | null
  onClose: () => void
  onUpdate?: (
    section:
      | TextSection
      | AttentionGrabberSection
      | GallerySection
      | TeamMembersSection
      | FAQSection
      | MENUSection
      | ContactUsSection
      | TESTIMONIALSection
      | TABLESection
      | BlogSection
      | AboutUsSection
      | PortfolioSection
      | ImageOmgSection,
  ) => void
}

export default function EditSectionModal({ open, section, onClose: onBack, onUpdate }: EditSection) {
  switch (section?.type) {
    case 'TEXT':
      return <EditSectionTextModal {...{ open, onClose: onBack, onUpdate }} section={section as TextSection} />

    case 'ATTENTION_GRABBER':
      return (
        <EditSectionAttentionGetter
          {...{ open, onClose: onBack, onUpdate }}
          section={section as AttentionGrabberSection}
        />
      )

    case 'ABOUT_US':
      return <EditSectionAboutUsModal {...{ open, onClose: onBack, onUpdate }} section={section as AboutUsSection} />

    case 'GALLERY':
      return <EditSectionGalleryModal {...{ open, onClose: onBack, onUpdate }} section={section as GallerySection} />

    case 'TEAM_MEMBERS':
      return (
        <EditSectionTeamMembersModal {...{ open, onClose: onBack, onUpdate }} section={section as TeamMembersSection} />
      )

    case 'FAQ':
      return <EditSectionFAQModal {...{ open, onClose: onBack, onUpdate }} section={section as FAQSection} />

    case 'MENU':
      return <EditSectionMENUModal {...{ open, onClose: onBack, onUpdate }} section={section as MENUSection} />

    case 'CONTACT_US':
      return (
        <EditSectionContactUsModal {...{ open, onClose: onBack, onUpdate }} section={section as ContactUsSection} />
      )

    case 'TESTIMONIAL':
      return (
        <EditSectionTESTIMONIALModal {...{ open, onClose: onBack, onUpdate }} section={section as TESTIMONIALSection} />
      )

    case 'TABLE':
      return <EditSectionTABLEModal {...{ open, onClose: onBack, onUpdate }} section={section as TABLESection} />

    case 'BLOG':
      return <EditSectionBlogModal {...{ open, onClose: onBack, onUpdate }} section={section as BlogSection} />

    case 'PORTFOLIO':
      return <EditSectionPortfolioModal {...{ open, onClose: onBack, onUpdate }} section={section as PortfolioSection} />

    case 'IMAGE_OMG':
      return <EditSectionImageOmg {...{ open, onClose: onBack, onUpdate }} section={section as ImageOmgSection} />
    
    default:
      return null
  }
}
