import { useRef, useState } from 'react'
import { ReactComponent as EditIcon } from '../../../assets/icons/menuBar/edit.svg'
import AddPage from '../../new/addPage/AddPage'
import ModalDialogV2 from '../../new/ModalDialogV2'

interface EditMenubarItemProps {
  defaultValue: any
  onUpdate: (value: any) => void
}

export default function EditMenubarItem({ defaultValue, onUpdate }: EditMenubarItemProps) {
  const [value, setValue] = useState({
    title: '',
    url: '',
    visible: true,
    ...defaultValue,
  })
  const [titleError, setTitleError] = useState('')
  const [showLinkModal, setShowLinkModal] = useState(false)
  const inputRef = useRef<HTMLInputElement | null>(null)

  const handleSubmit = () => {
    if (!value.title) {
      setTitleError('Name is required')
      inputRef.current?.focus()
      return
    }
    setTitleError('')
    onUpdate(value)
  }

  return (
    <>
      <div className="p-5">
        <h1 className="text-4xl">{defaultValue?.title ? 'Edit Page Link' : 'Add Page Link'}</h1>
        <div className="mb-10 h-[2px] mt-2 w-[60%] bg-[#C4C4C4]" />

        <div className="mb-10 flex">
          <div className="h-10 w-7 bg-[#C4C4C4]" />
          <div className="flex-grow pl-8">
            <div className="h-10 w-full text-xl">
              <input
                type="text"
                className="w-full h-11 pl-2.5 bg-white border-b-2 border-[#C4C4C4] focus:outline-none"
                value={value.title}
                placeholder="Name"
                ref={inputRef}
                onChange={e => {
                  setValue((prevValue: any) => ({ ...prevValue, title: e.target.value }))
                  setTitleError('')
                }}
              />
              {titleError && <p className="text-red-500 text-sm mt-1">{titleError}</p>}
            </div>

            <button
              type="button"
              onClick={() => {
                setValue({ ...value, visible: !value.visible })
              }}
              className={`mt-10 w-full text-left p-3 border border-black ${!value?.visible && 'bg-gray-300'}`}
            >
              Hide Page
            </button>
          </div>
        </div>

        <div className="mt-16">
          <button type="button" className="w-full flex items-center gap-x-6" onClick={() => setShowLinkModal(true)}>
            <div className="h-12 w-20 border border-black flex justify-center items-center">
              <EditIcon />
            </div>
            <p className="text-lg">{defaultValue?.url ? 'Edit' : 'Add'} Link</p>
          </button>
        </div>

        <button className="mt-12 px-4 py-3 border border-black w-full" type="submit" onClick={handleSubmit}>
          {defaultValue?.title ? 'Update' : 'Add'}
        </button>
      </div>

      <ModalDialogV2 open={showLinkModal} onBack={() => setShowLinkModal(false)}>
        <AddPage
          defaultValue={value}
          onSubmit={(item: any) => {
            setShowLinkModal(false)
            setValue({
              ...value,
              url: item.url,
              type: item.type,
            })
          }}
        />
      </ModalDialogV2>
    </>
  )
}
