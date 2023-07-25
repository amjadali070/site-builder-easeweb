import ActionButtons, { IActionButtonsProps } from './ActionButtons'

export interface IWebsiteGridItemProps extends IActionButtonsProps {
  name: string
  onThumbnailClick: () => void
}

export default function WebsiteGridItem(props: IWebsiteGridItemProps) {
  const { name, onThumbnailClick, onEdit, onDuplicate, onDelete } = props
  return (
    <div className="flex flex-col w-full h-full aspect-1 cursor-pointer overflow-hidden border border-black">
      <button type="button" onClick={onThumbnailClick} className="grow bg-black font-extralight text-white text-3xl">
        {name}
      </button>
      <ActionButtons {...{ onEdit, onDuplicate, onDelete }} />
    </div>
  )
}
