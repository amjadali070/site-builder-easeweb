import { FAQSection, FAQSectionItem } from '../../types'
import FAQItem from './FAQItem'

export default function VariantTwo({ section }: { section: FAQSection }) {
  const title = section.variables.find(variable => variable.name === 'TITLE')?.data
  const subTitle = section.variables.find(variable => variable.name === 'SUBTITLE')?.data
  const paragraph = section.variables.find(variable => variable.name === 'PARAGRAPH')?.data
  const faqs = section.variables.find(variable => variable.name === 'ITEMS')?.data as FAQSectionItem[]

  return (
    <div className="bg-[#C0C0C0]">
      <div className="container mx-auto py-[100px] font-light">
        <div className="w-[750px] max-w-full mx-auto space-y-9">
          {title && (
            <div className="text-[40px]">
              <p className="text-center">{title}</p>
            </div>
          )}
          {subTitle && (
            <div>
              <p className="text-[18px] text-center">{subTitle}</p>
            </div>
          )}
          {paragraph && (
            <div>
              <p className="text-center">{paragraph}</p>
            </div>
          )}
        </div>

        <div className="px-7 grid grid-cols-1 justify-between gap-y-14 gap-x-16 mt-14 md:grid-cols-4">
          {faqs.map(faq => (
            <FAQItem key={faq.id} title={faq.title} description={faq.description} />
          ))}
        </div>
      </div>
    </div>
  )
}
