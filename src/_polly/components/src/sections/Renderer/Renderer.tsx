import { Section } from '../types'
import AboutUsSection from './AboutUs/AboutUs'
import AttentionGrabberSection from './AttentionGrabberSection/AttentionGrabberSection'
import BlogSection from './Blog/Blog'
import ContactUsSection from './ContactUs/ContactUs'
import FAQSection from './FAQ/FAQ'
import GallerySection from './Gallery/Gallery'
import MENUSection from './Menu/Menu'
import QuoteSection from './Quote/Quote'
import TABLESection from './Table/Table'
import TeamMembersSection from './TeamMembers/TeamMembers'
import Testimonial from './Testimonial/Testimonial'
import TextSection from './TextSection/TextSection'
import ImageOmg from './ImageOmg/ImageOmg'

export default function RenderSection({ section }: { section: Section<any, any> }) {
  switch (section.type) {
    case 'TEXT':
      return <TextSection {...{ section }} />

    case 'ATTENTION_GRABBER':
      return <AttentionGrabberSection {...{ section }} />

    case 'GALLERY':
      return <GallerySection {...{ section }} />

    case 'ABOUT_US':
      return <AboutUsSection {...{ section }} />

    case 'QUOTE_SECTION':
      return <QuoteSection {...{ section }} />

    case 'TEAM_MEMBERS':
      return <TeamMembersSection {...{ section }} />

    case 'FAQ':
      return <FAQSection {...{ section }} />

    case 'CONTACT_US':
      return <ContactUsSection {...{ section }} />

    case 'MENU':
      return <MENUSection {...{ section }} />

    case 'TESTIMONIAL':
      return <Testimonial {...{ section }} />

    case 'TABLE':
      return <TABLESection {...{ section }} />

    case 'BLOG':
      return <BlogSection {...{ section }} />

    case 'IMAGE_OMG':
      return <ImageOmg {...{ section }} />

    default:
      return null
  }
}
