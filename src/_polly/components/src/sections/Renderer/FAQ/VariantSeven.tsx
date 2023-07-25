import { FAQSection, FAQSectionItem } from '../../types'

function VariantSeven({ section }: { section: FAQSection }) {
  const title = section.variables.find(variable => variable.name === 'TITLE')?.data
  const faqs = section.variables.find(variable => variable.name === 'ITEMS')?.data as FAQSectionItem[]
  return (
    <>
      <div className="py-20 px-6 md:px-12">
        <div className="border-b border-[#262525]">
          <h4 className="text-[#262525] text-[16px] font-neuton mb-2 uppercase">{title}</h4>
        </div>
        <div>
          {faqs?.map(feature => (
            <div
              key={feature?.id}
              className="flex justify-between md:grid md:grid-cols-[20%_40%_20%_20%] border-b border-[#262525] items-center py-2"
            >
              <h4 className="hidden md:block text-[#262525] text-[30px] font-neue opacity-80 ">{feature?.title}</h4>
              <p className="hidden md:block text-[#262525] text-[24px] font-neuton opacity-70">
                {feature?.description}
              </p>
              <div className="md:hidden">
                <h4 className="text-[#262525] text-[24px] leading-none font-neue opacity-80 ">{feature?.title}</h4>
                <p className="text-[#262525] text-[18px] font-neuton opacity-70">{feature?.description}</p>
              </div>
              <p>
                {feature?.items && feature?.items !== '' && (
                  <p className="text-[#262525] text-[18px] md:text-[24px]  font-neuton opacity-70">
                    ({feature?.items}times)
                  </p>
                )}
              </p>
              <p className="hidden md:block text-[#262525] text-[24px] font-neuton opacity-70 text-end">
                {feature?.year}
              </p>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}
export default VariantSeven
