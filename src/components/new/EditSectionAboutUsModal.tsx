import { useContext, useEffect, useState } from 'react'
import {
  SectionVariableCategories,
  AboutUsSection,
  AboutUsVariables,
  AboutUsVariants,
} from 'src/_polly/components/src/sections'
import { v4 as uuid } from 'uuid'
import { upsertBlockByPageID } from '../../services/website.service'
import { getSectionVariants } from '../../util/sections/get-variants'
import BottomFloatingButton from '../BottomFloatingButton'
import { WebsiteContext } from '../context/WebsiteContext'
import ModalDialogV2 from './ModalDialogV2'
import SectionMediaField from './SectionField/SectionMediaField'
import SectionTextField from './SectionField/SectionTextField'

type EditSection = {
  open: boolean
  section: AboutUsSection | null
  onClose: () => void
  onUpdate?: (section: AboutUsSection) => void
}

export default function EditSectionAboutUsModal({
  open,
  section: defaultValue,
  onClose: onBack,
  onUpdate,
}: EditSection) {
  const websiteContext = useContext(WebsiteContext)

  if (!open || !defaultValue) return null

  const [section, setSection] = useState(defaultValue)
  const [updating, setUpdating] = useState(false)
  const [sectionVariants, setSectionVariants] = useState<AboutUsVariants[]>([])

  const title = section.variables.find(variable => variable.name === 'TITLE')
  const subTitle2 = section.variables.find(variable => variable.name === 'SUBTITLE2')
  const subTitle = section.variables.find(variable => variable.name === 'SUBTITLE')
  const paragraph = section.variables.find(variable => variable.name === 'PARAGRAPH')
  const paragraphTwo = section.variables.find(variable => variable.name === 'PARAGRAPH_2')
  const media = section.variables.find(variable => variable.name === 'MEDIA')

  const updateVariableData = (name: AboutUsVariables, category: SectionVariableCategories, data: any) => {
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

  const handleVariantChange = (variant: AboutUsVariants) => {
    setSection(_sec => ({ ..._sec, variant: variant as any }))
    if (variant === 'VARIANT_2' || variant === 'VARIANT_3' || variant === 'VARIANT_4') {
      const m = section.variables.find(variable => variable.name === 'MEDIA')
      if (!m) {
        setSection(_sec => ({
          ..._sec,
          variables: [
            ..._sec.variables,
            {
              id: uuid(),
              name: 'MEDIA',
              category: 'IMAGE',
              data: 'https://images.unsplash.com/photo-1660236822651-4263beb35fa8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
            },
          ],
        }))
      }
    }
  }

  useEffect(() => {
    onUpdate?.(section)
  }, [section])

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
        <div className="px-4 space-y-8 mt-4 pb-24">
          {section.variant !== 'VARIANT_10' && (
            <>
              <SectionTextField
                initialValue={title?.data ?? []}
                onChange={value => updateVariableData('TITLE', 'TEXT', value)}
              />

              <SectionTextField
                title="Subtitle"
                initialValue={subTitle?.data ?? []}
                onChange={value => updateVariableData('SUBTITLE', 'TEXT', value)}
              />

              <SectionTextField
                title="Paragraph"
                initialValue={paragraph?.data ?? []}
                isParagraph
                onChange={value => updateVariableData('PARAGRAPH', 'TEXT', value)}
              />
            </>
          )}

          {section.variant === 'VARIANT_10' && (
            <>
              <div className="p-4 border-2 border-black text-center text-2xl ">
                <select value={websiteContext.dropValue} onChange={e => websiteContext.setDropValue(e.target.value)}>
                  <option value="info" key="info">
                    INFO
                  </option>
                  <option value="about-us" key="about-us">
                    ABOUT US
                  </option>
                </select>
              </div>

              <SectionTextField
                title="Subtitle One"
                initialValue={subTitle?.data ?? []}
                onChange={value => updateVariableData('SUBTITLE', 'TEXT', value)}
              />

              <SectionTextField
                title="Subtitle Two"
                initialValue={subTitle2?.data ?? []}
                onChange={value => updateVariableData('SUBTITLE2', 'TEXT', value)}
              />

              <SectionTextField
                title="Paragraph One"
                initialValue={paragraph?.data ?? []}
                isParagraph
                onChange={value => updateVariableData('PARAGRAPH', 'TEXT', value)}
              />

              <SectionTextField
                title="Paragraph Two"
                initialValue={paragraphTwo?.data ?? []}
                isParagraph
                onChange={value => updateVariableData('PARAGRAPH_2', 'TEXT', value)}
              />
            </>
          )}

          <SectionMediaField
            defaultValue={media?.data}
            onChange={url => {
              if (!url) {
                setSection({ ...section, variables: section.variables.filter(variable => variable.name !== 'MEDIA') })
                return
              }
              updateVariableData('MEDIA', 'IMAGE', url)
            }}
          />
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
