import { debounce } from 'lodash'
import { useContext, useEffect, useState } from 'react'
import { getGeocode, getLatLng } from 'use-places-autocomplete'
import { v4 as uuid } from 'uuid'
import {
  ContactUsMap,
  ContactUsSection,
  ContactUsVariables,
  ContactUsVariants,
  SectionVariableCategories,
} from 'src/_polly/components/src/sections'
import { upsertBlockByPageID } from '../../services/website.service'
import { getSectionVariants } from '../../util/sections/get-variants'
import BottomFloatingButton from '../BottomFloatingButton'
import { WebsiteContext } from '../context/WebsiteContext'
import { EditSection } from './EditSectionModal'
import ModalDialogV2 from './ModalDialogV2'

interface EditSectionContactUsModalProps extends EditSection {
  section: ContactUsSection
}

export default function EditSectionContactUsModal({
  open,
  section: defaultValue,
  onClose: onBack,
  onUpdate,
}: EditSectionContactUsModalProps) {
  const websiteContext = useContext(WebsiteContext)

  if (!open || !defaultValue) return null

  const [section, setSection] = useState(defaultValue)
  const [updating, setUpdating] = useState(false)
  const [sectionVariants, setSectionVariants] = useState<ContactUsVariants[]>([])

  const title = section.variables.find(variable => variable.name === 'TITLE')
  const address = section.variables.find(variable => variable.name === 'ADDRESS')
  const hours = section.variables.find(variable => variable.name === 'HOURS')
  const email = section.variables.find(variable => variable.name === 'EMAIL')
  const phone = section.variables.find(variable => variable.name === 'PHONE')
  const map = section.variables.find(variable => variable.name === 'MAP')

  const updateVariableData = (name: ContactUsVariables, category: SectionVariableCategories, data: any) => {
    const current = section.variables.find(variable => variable.name === name)
    if (!current) {
      setSection({
        ...section,
        variables: [...section.variables, { name, data, category, id: uuid() }],
      })
      return
    }
    const otherVariables = section.variables.filter(variable => variable.name !== name)
    const newVariables = [...otherVariables, { ...current, data }]
    setSection({ ...section, variables: newVariables })
  }

  const handleSave = async () => {
    setUpdating(true)
    await upsertBlockByPageID(websiteContext.pageID, section as any)
    onBack()
  }

  const handleSectionDesign = () => {
    setSectionVariants([...getSectionVariants(section.type).map(v => v.id as any)])
  }

  const handleVariantChange = (variant: ContactUsVariants) => {
    setSection(_sec => ({ ..._sec, variant: variant as any }))
  }

  const handleMapAddress = async (newAddress: string) => {
    const results = await getGeocode({ address: newAddress })
    const { lat, lng } = getLatLng(results[0])
    updateVariableData('MAP', 'MAP', { address: newAddress, position: { lat, lng } } as ContactUsMap)
  }

  const debouncedHandleMapAddress = debounce(handleMapAddress, 500)

  useEffect(() => {
    onUpdate?.(section)
  }, [section])

  if (section.variant === 'VARIANT_12') {
    return (
      <>
        <ModalDialogV2 open={open} onBack={onBack}>
          <div className="px-4">
          <div className='w-full flex justify-center items-center'>
            <button type="button" onClick={handleSectionDesign} className="w-1/2 text-center rounded-md p-3 border mb-5 bg-green-500 text-white shadow-md hover:bg-green-600">
              Section Template
            </button>
          </div>
          </div>
          <div className="px-4 space-y-8 mt-4">
            <div>
              <h2 className="uppercase font-medium text-sm">Title1</h2>
              <input
                className="border-b border-black w-full py-2 outline-none mt-1"
                type="text"
                value={title?.data}
                onChange={value => {
                  updateVariableData('TITLE', 'TEXT', value.target.value)
                }}
              />
            </div>
          </div>
          <BottomFloatingButton label={updating ? 'Updating...' : 'Update'} onClick={handleSave} disabled={updating} />
        </ModalDialogV2>

        <ModalDialogV2 open={sectionVariants.length} onBack={() => setSectionVariants([])} title="Section Design">
          <div className="">
            <div className="">
              {sectionVariants.map(variant => (
                <button
                  key={variant}
                  type="button"
                  className={`w-full text-left p-3 pl-10 hover:bg-gray-300 ${
                    section.variant === variant && 'bg-stone-600 text-white'
                  }`}
                  onClick={() => handleVariantChange(variant)}
                >
                  {variant}
                </button>
              ))}
            </div>
          </div>
        </ModalDialogV2>
      </>
    )
  }
  return (
    <>
      <ModalDialogV2 open={open} onBack={onBack}>
        <div className="w-full flex justify-center items-center">

          <button type="button" onClick={handleSectionDesign} className="w-1/2 text-center rounded-md p-3 border mb-5 bg-green-500 text-white shadow-md hover:bg-green-600">
            Section Design
          </button>
        </div>
        <div className="px-4 space-y-8 mt-4">
          <div>
            <h2 className="uppercase font-medium text-sm">Title</h2>
            <input
              className="border-b border-black w-full py-2 outline-none mt-1"
              type="text"
              value={title?.data}
              onChange={value => {
                updateVariableData('TITLE', 'TEXT', value.target.value)
              }}
            />
          </div>
          <div>
            <h2 className="uppercase font-medium text-sm">Phone</h2>
            <input
              className="border-b border-black w-full py-2 outline-none mt-1"
              type="text"
              value={phone?.data}
              onChange={value => {
                updateVariableData('PHONE', 'TEXT', value.target.value)
              }}
            />
          </div>
          <div>
            <h2 className="uppercase font-medium text-sm">Email</h2>
            <input
              className="border-b border-black w-full py-2 outline-none mt-1"
              type="text"
              value={email?.data}
              onChange={value => {
                updateVariableData('EMAIL', 'TEXT', value.target.value)
              }}
            />
          </div>
          <div>
            <h2 className="uppercase font-medium text-sm">Hours</h2>
            <textarea
              className="border-b border-black w-full py-2 outline-none mt-1"
              value={hours?.data}
              onChange={value => {
                updateVariableData('HOURS', 'TEXT', value.target.value)
              }}
              rows={4}
            />
          </div>
          <div>
            <h2 className="uppercase font-medium text-sm">Address</h2>
            <input
              className="border-b border-black w-full py-2 outline-none mt-1"
              type="text"
              value={address?.data}
              onChange={value => {
                updateVariableData('ADDRESS', 'TEXT', value.target.value)
              }}
            />
          </div>
          <div>
            <h2 className="uppercase font-medium text-sm">Map</h2>
            <input
              className="border-b border-black w-full py-2 outline-none mt-1"
              type="text"
              defaultValue={map?.data?.address}
              onChange={e => debouncedHandleMapAddress(e.target.value)}
            />
          </div>
        </div>
        <BottomFloatingButton label={updating ? 'Updating...' : 'Update'} onClick={handleSave} disabled={updating} />
      </ModalDialogV2>

      <ModalDialogV2 open={sectionVariants.length} onBack={() => setSectionVariants([])} title="Section Design">
        <div className="">
          <div className="">
            {sectionVariants.map(variant => (
              <button
                key={variant}
                type="button"
                className={`w-full text-left p-3 pl-10 hover:bg-gray-300 ${
                  section.variant === variant && 'bg-stone-600 text-white'
                }`}
                onClick={() => handleVariantChange(variant)}
              >
                {variant}
              </button>
            ))}
          </div>
        </div>
      </ModalDialogV2>
    </>
  )
}
