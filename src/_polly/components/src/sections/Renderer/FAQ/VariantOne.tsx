import { FAQSection, FAQSectionItem } from '../../types'
import FAQItem from './FAQItem'

export default function VariantOne({ section }: { section: FAQSection }) {
  const title = section.variables.find(variable => variable.name === 'TITLE')?.data
  const subTitle = section.variables.find(variable => variable.name === 'SUBTITLE')?.data
  const paragraph = section.variables.find(variable => variable.name === 'PARAGRAPH')?.data
  const faqs = section.variables.find(variable => variable.name === 'ITEMS')?.data as FAQSectionItem[]

  return (
    <div className="bg-black">
      <div className="container mx-auto py-[100px] font-light">
        <div className="w-[750px] max-w-full mx-auto space-y-9">
          <div className="text-[40px]">
            <p className="text-white text-center">{title}</p>
          </div>
          {subTitle && (
            <div>
              <p className="text-white text-[18px] text-center">{subTitle}</p>
            </div>
          )}
          {paragraph && (
            <div>
              <p className="text-white text-center">{paragraph}</p>
            </div>
          )}
        </div>

        <div className="px-7 grid grid-cols-1 justify-between gap-y-14 gap-x-16 mt-14 md:grid-cols-4">
          {faqs.map((faq, idx) => (
            <FAQItem key={faq.id} title={faq.title} description={faq.description} whiteFont={true} icon={idx % 4} />
          ))}
        </div>
      </div>
    </div>
  )
}
