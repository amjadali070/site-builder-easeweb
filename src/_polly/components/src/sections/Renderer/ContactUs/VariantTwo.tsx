import Map from './Map'
import { ContactUsMap, ContactUsSection } from '../../types'

export default function VariantTwo({ section }: { section: ContactUsSection }) {
  const subTitle = section.variables.find(variable => variable.name === 'SUBTITLE')?.data
  const paragraph = section.variables.find(variable => variable.name === 'PARAGRAPH')?.data
  const address = section.variables.find(variable => variable.name === 'ADDRESS')?.data
  const hours = section.variables.find(variable => variable.name === 'HOURS')?.data
  const phone = section.variables.find(variable => variable.name === 'PHONE')?.data
  const email = section.variables.find(variable => variable.name === 'EMAIL')?.data
  const map = section.variables.find(variable => variable.name === 'MAP')?.data as ContactUsMap

  return (
    <div className="flex bg-[#F5EEE9] flex-col">
      <div className="flex-1 flex justify-center py-6 md:py-8">
        <div className="space-y-2 md:space-y-4">
          {(subTitle || paragraph) && (
            <div>
              <p className="text-[18px] text-center">{subTitle}</p>
              <p className=" text-center leading-7">{paragraph}</p>
            </div>
          )}

          <div className="flex p-6 md:p-12 gap-8 flex-col md:flex-row justify-between">
            <div className="w-full md:w-8/12">
              <p className="text-[35px] w-full md:w-9/12 text-left font-medium">{address}</p>
            </div>

            <div className="flex gap-5 md:flex-col w-full md:w-4/12">
              {hours && (
                <div className="w-6/12 md:w-full">
                  <p className="text-[18px] font-bold mb-2">Hours</p>
                  <p className="text-[18px] whitespace-pre-wrap font-light">{hours}</p>
                </div>
              )}

              <div className="flex flex-col gap-5 w-6/12 md:w-full">
                {phone && (
                  <div>
                    <p className="text-[18px] font-bold mb-2">Phone</p>
                    <p className="text-[18px] font-light">{phone}</p>
                  </div>
                )}

                {email && (
                  <div>
                    <p className="text-[18px] font-bold mb-2">Email</p>
                    <p className="text-[18px] font-light">{email}</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex-1 relative">
        <div className="w-full h-[350px] top-0 left-0">
          <Map address={map.address} position={map.position} />
        </div>
      </div>
    </div>
  )
}
