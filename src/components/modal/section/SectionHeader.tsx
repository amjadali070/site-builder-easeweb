import { IoTrashOutline } from 'react-icons/io5'

type SectionHeaderProps = {
  title: string
  showDeleteButton?: boolean
  onDelete?: () => void
}

export default function SectionHeader({ title, showDeleteButton, onDelete }: SectionHeaderProps) {
  return (
    <div className="my-6 flex items-center justify-between">
      <div className=" text-3xl font-light">{title}</div>
      {showDeleteButton && (
        <button type="button" onClick={onDelete}>
          <IoTrashOutline size={24} />
        </button>
      )}
    </div>
  )
}
