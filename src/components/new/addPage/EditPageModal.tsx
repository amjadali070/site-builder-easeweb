import { useState } from 'react'
import { useForm } from 'react-hook-form'
import InputText from 'src/components/common/InputText'
import { updatePage } from '../../../services/website.service'
import ModalDialogV2 from '../ModalDialogV2'

interface EditPageModalProps {
  title?: string
  open: boolean
  setOpen: React.Dispatch<React.SetStateAction<boolean>>
  onClose?: () => void
  page: any
}

const EditPageModal = ({ title, open, setOpen, page, onClose }: EditPageModalProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  const [updating, setUpdating] = useState(false)

  const onSubmit = async (data: { name: string }) => {
    setUpdating(true)
    await updatePage(page.id, { name: data.name })
    setOpen(false)
    onClose?.()
  }

  return (
    <ModalDialogV2 title={title ?? 'Edit Page'} open={open} onBack={() => setOpen(false)}>
      <div className="p-5">
        <form onSubmit={handleSubmit(onSubmit)}>
          <InputText
            label="Page name"
            type="text"
            placeholder="Name"
            name="name"
            value={page.name}
            register={register}
            errors={errors}
            required={{
              value: true,
              message: 'Name is required',
            }}
          />
          <button disabled={updating} className="px-4 py-3 border border-black w-full mt-6" type="submit">
            Updat{updating ? 'ing' : 'e'}
          </button>
        </form>
      </div>
    </ModalDialogV2>
  )
}

export default EditPageModal
