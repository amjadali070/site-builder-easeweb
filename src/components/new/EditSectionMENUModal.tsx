import clsx from 'clsx'
import { useContext, useEffect, useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { ReactComponent as ImageIcon } from 'src/assets/icons/new/image.svg'
import BottomFloatingButton from 'src/components/BottomFloatingButton'
import { WebsiteContext } from 'src/components/context/WebsiteContext'
import ModalDialogV2 from 'src/components/new/ModalDialogV2'
import { upsertBlockByPageID } from 'src/services/website.service'
import { getSectionVariants } from 'src/util/sections/get-variants'
import {
  MENUSection,
  MENUSectionItem,
  MENUVariables,
  MENUVariants,
  SectionVariableCategories,
} from 'src/_polly/components/src/sections'
import { v4 as uuid } from 'uuid'
// import { ReactComponent as DeleteIcon } from '../../assets/icons/menuBar/delete.svg'
// import { ReactComponent as EditIcon } from '../../assets/icons/menuBar/edit.svg'
import { EditSection } from './EditSectionModal'
import ImageUploader from './ImageUploader'

interface EditSectionMENUModalProps extends EditSection {
  section: MENUSection
}

type EditMENUProps = {
  data?: MENUSectionItem
  onSave: (data: Partial<MENUSectionItem>) => void
}

function Item({
  data,
  onDeleteClick,
  onEditClick,
}: {
  data: MENUSectionItem
  onEditClick: () => void
  onDeleteClick: () => void
}) {
  return (
    <div className="border  h-[65px] flex justify-between bg-zinc-800 rounded-md text-white hover:bg-zinc-600">
      <div className="flex items-center">
        <div className="grid grid-cols-2 gap-1 ml-2 mr-4">
          <div className="w-2 h-2 bg-gray-300 rounded-full" />
          <div className="w-2 h-2 bg-gray-300 rounded-full" />
          <div className="w-2 h-2 bg-gray-300 rounded-full" />
          <div className="w-2 h-2 bg-gray-300 rounded-full" />
        </div>
        <div className="flex items-center gap-4">
          <div className="aspect-1 h-10">
            <img className="object-cover object-center bg-black w-full h-full" src={data.image} alt={data.title} />
          </div>
          <p>{data.title}</p>
        </div>
      </div>

      <div className="flex">
        <button
          type="button"
          className="flex justify-center items-center w-16 border-l border-black"
          onClick={onEditClick}
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-105 duration-300">
            <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
          </svg>

        </button>
        <button
          type="button"
          className="flex justify-center items-center w-16 border-l border-black"
          onClick={onDeleteClick}
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-105 duration-300">
            <path strokeLinecap="round" strokeLinejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
          </svg>

        </button>
      </div>
    </div>
  )
}

type FormInput = {
  title: string
  subtitle: string
  description: string
}

function EditMENU({ data, onSave }: EditMENUProps) {
  const [url, setUrl] = useState(data?.image || '')
  const [showImageModal, setShowImageModal] = useState(false)
  const { register, handleSubmit, watch } = useForm<FormInput>()
  const onSubmit: SubmitHandler<FormInput> = value => {
    setShowImageModal(false)
    onSave({
      ...value,
      image: url,
      id: data?.id,
    })
  }

  const title = watch('title')
  const subtitle = watch('subtitle')
  const description = watch('description')

  return (
    <div className="px-4">
      <div className="mb-6">
        <button type="button" className="w-full" onClick={() => setShowImageModal(true)}>
          <div
            className={clsx(
              'w-full bg-white',
              !url && 'aspect-1 flex justify-center items-center border border-black',
              url && 'aspect-1',
            )}
          >
            {url && <img src={url} className="object-cover object-center bg-black w-full h-full" alt={title} />}
            {!url && <ImageIcon />}
          </div>
        </button>
      </div>

      <form className="pb-24" onSubmit={handleSubmit(onSubmit)}>
        <div className="space-y-8">
          <div>
            <h2 className="uppercase font-medium text-sm">Name</h2>
            <input
              className="border-b border-black w-full py-2 outline-none mt-1"
              type="text"
              defaultValue={data?.title}
              {...register('title')}
            />
          </div>
          <div>
            <h2 className="uppercase font-medium text-sm">Subtitle</h2>
            <input
              className="border-b border-black w-full py-2 outline-none mt-1"
              type="text"
              defaultValue={data?.subtitle}
              {...register('subtitle')}
            />
          </div>
          <div>
            <h2 className="uppercase font-medium text-sm">Description</h2>
            <textarea
              className="border-b border-black w-full py-2 outline-none mt-1"
              value={data?.description}
              rows={4}
              {...register('description')}
            />
          </div>
        </div>
      </form>

      <BottomFloatingButton
        label={data?.id ? 'Update' : 'Add'}
        onClick={handleSubmit(onSubmit)}
        disabled={!url || !title || !subtitle || !description}
      />

      <ModalDialogV2 open={showImageModal} onBack={() => setShowImageModal(false)}>
        <ImageUploader onSubmit={setUrl} buttonLabel="Select Image" onClose={() => setShowImageModal(false)} />
      </ModalDialogV2>
    </div>
  )
}

export default function EditSectionMENUModal({
  section: defaultValue,
  open,
  onClose: onBack,
  onUpdate,
}: EditSectionMENUModalProps) {
  const websiteContext = useContext(WebsiteContext)

  const [section, setSection] = useState(defaultValue)
  const [sectionVariants, setSectionVariants] = useState<MENUVariants[]>([])

  const [showAddMENUModal, setShowAddMENUModal] = useState(false)
  const [editMENU, setEditMENU] = useState<MENUSectionItem>()
  const [updating, setUpdating] = useState(false)

  const title = section.variables.find(variable => variable.name === 'TITLE')
  const subTitle = section.variables.find(variable => variable.name === 'SUBTITLE')
  const menu = section.variables.find(variable => variable.name === 'ITEMS')

  const updateVariableData = (name: MENUVariables, category: SectionVariableCategories, data: any) => {
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

  const handleSectionDesign = () => {
    setSectionVariants([...getSectionVariants(section.type).map(v => v.id as any)])
  }

  const handleVariantChange = (variant: MENUVariants) => {
    setSection(_sec => ({ ..._sec, variant: variant as any }))
  }

  const handleDelete = (id: string) => {
    const newItems = menu?.data.filter((item: MENUSectionItem) => item.id !== id)
    setSection({
      ...section,
      variables: section.variables.map(variable => {
        if (variable.name === 'ITEMS') {
          return { ...variable, data: newItems }
        }
        return variable
      }),
    })
  }

  const handleEditAdd = (data: Partial<MENUSectionItem>) => {
    if (data.id) {
      const newItems = menu?.data.map((item: MENUSectionItem) => {
        if (item.id === data.id) {
          return { ...item, ...data }
        }
        return item
      })
      setSection({
        ...section,
        variables: section.variables.map(variable => {
          if (variable.name === 'ITEMS') {
            return { ...variable, data: newItems }
          }
          return variable
        }),
      })
    } else {
      setSection({
        ...section,
        variables: section.variables.map(variable => {
          if (variable.name === 'ITEMS') {
            return { ...variable, data: [...variable.data, data] }
          }
          return variable
        }),
      })
    }
    setEditMENU(undefined)
    setShowAddMENUModal(false)
  }

  const handleSave = async () => {
    setUpdating(true)
    await upsertBlockByPageID(websiteContext.pageID, section as any)
    onBack()
  }

  useEffect(() => {
    onUpdate?.(section)
  }, [section])

  return (
    <div>
      <ModalDialogV2 {...{ open, onBack }}>
        <div className="px-4">
        <div className='w-full flex justify-center items-center'>
            <button type="button" onClick={handleSectionDesign} className="w-1/2 text-center rounded-md p-3 border mb-5 bg-green-500 text-white shadow-md hover:bg-green-600">
              Section Template
            </button>
          </div>
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
            <h2 className="uppercase font-medium text-sm">Subtitle</h2>
            <input
              className="border-b border-black w-full py-2 outline-none mt-1"
              type="text"
              value={subTitle?.data}
              onChange={value => {
                updateVariableData('SUBTITLE', 'TEXT', value.target.value)
              }}
            />
          </div>
        </div>
        <div className="px-4 mt-12 space-y-5 pb-24">
          <h2 className="uppercase font-medium text-sm">MENUs</h2>
          <div className="space-y-5">
            {menu?.data.map((item: MENUSectionItem) => (
              <Item
                key={item.id}
                data={item}
                onDeleteClick={() => handleDelete(item.id)}
                onEditClick={() => setEditMENU(item)}
              />
            ))}
          </div>
          <button
            className="border bg-green-500 rounded-md shadow-md hover:bg-green-600 h-[65px] flex justify-center items-center text-lg px-6 w-full text-white"
            type="button"
            onClick={() => setShowAddMENUModal(true)}
          >
            Add MENU
          </button>
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

      <ModalDialogV2
        open={editMENU !== undefined || showAddMENUModal}
        onBack={() => (editMENU ? setEditMENU(undefined) : setShowAddMENUModal(false))}
      >
        <EditMENU data={editMENU} onSave={handleEditAdd} />
      </ModalDialogV2>
    </div>
  )
}
