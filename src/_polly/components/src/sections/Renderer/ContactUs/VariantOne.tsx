import { ContactUsMap, ContactUsSection } from '../../types'
import Map from './Map'

export default function VariantOne({ section }: { section: ContactUsSection }) {
  const title = section.variables.find(variable => variable.name === 'TITLE')?.data
  const subTitle = section.variables.find(variable => variable.name === 'SUBTITLE')?.data
  const paragraph = section.variables.find(variable => variable.name === 'PARAGRAPH')?.data
  const address = section.variables.find(variable => variable.name === 'ADDRESS')?.data
  const hours = section.variables.find(variable => variable.name === 'HOURS')?.data
  const phone = section.variables.find(variable => variable.name === 'PHONE')?.data
  const email = section.variables.find(variable => variable.name === 'EMAIL')?.data
  const map = section.variables.find(variable => variable.name === 'MAP')?.data as ContactUsMap

  return (
    <div className="flex bg-[#F5EEE9] flex-col-reverse lg:flex-row">
      <div className="flex-1 flex justify-center pt-0 pb-14 md:py-20">
        <div className="space-y-10">
          <div className="space-y-3">
            <p className="text-[40px] text-center hidden md:block">{title}</p>

            {(subTitle || paragraph) && (
              <div>
                <p className="text-[18px] text-center">{subTitle}</p>
                <p className="text-center leading-7">{paragraph}</p>
              </div>
            )}
          </div>

          <div>
            <p className="text-[18px text-center w-8/12 mx-auto font-light">{address}</p>
          </div>

          {hours && (
            <div>
              <p className="text-[18px] text-center font-bold mb-2">Hours</p>
              <p className="text-[18px] text-center whitespace-pre-wrap font-light">{hours}</p>
            </div>
          )}

          <div>
            <p className="text-[18px] text-center font-bold mb-2">Phone</p>
            <p className="text-[18px] text-center font-light">{phone}</p>
          </div>

          <div>
            <p className="text-[18px] text-center font-bold mb-2">Email</p>
            <p className="text-[18px] text-center font-light">{email}</p>
          </div>
        </div>
      </div>

      <div className="flex-1 relative">
        <p className="text-[40px] text-center py-10 md:hidden">{title}</p>
        <div className="w-10/12 mx-auto md:w-full h-[250px] md:h-full top-0 left-0">
          <Map address={map.address} position={map.position} />
        </div>
      </div>
    </div>
  )
}
