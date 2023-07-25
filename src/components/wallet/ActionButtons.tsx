import { ReactComponent as DuplicateIcon } from '../../assets/icons/widget/duplicate.svg'
import { ReactComponent as TrashIcon } from '../../assets/icons/widget/trash.svg'

export interface IActionButtonsProps {
  onEdit: () => void
  onDuplicate: () => void
  onDelete: () => void
}

export default function ActionButtons(props: IActionButtonsProps) {
  const { onEdit, onDuplicate, onDelete } = props
  return (
    <div className="grid grid-flow-col grid-cols-[1fr_40px_40px] h-[30px] max-h-[30px] min-h-[30px] w-full bg-white border-t border-black text-black text-base font-light">
      <button type="button" onClick={onEdit} className="grid place-items-center h-full w-full border-r border-black">
        edit
      </button>
      <button
        type="button"
        onClick={onDuplicate}
        className="grid place-items-center h-full w-full border-r border-black"
      >
        <DuplicateIcon />
      </button>
      <button type="button" onClick={onDelete} className="grid place-items-center h-full w-full">
        <TrashIcon />
      </button>
    </div>
  )
}
