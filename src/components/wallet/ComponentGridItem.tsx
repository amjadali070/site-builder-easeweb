import { useState } from 'react'
import MintModal from '../modal/MintModal'
import Component from '../new/Component'
import ActionButtons, { IActionButtonsProps } from './ActionButtons'

export interface ComponentGridItem extends IActionButtonsProps {
  component: any
  onThumbnailClick: () => void
}

export default function ComponentGridItem(props: ComponentGridItem) {
  const { component, onThumbnailClick, onEdit, onDuplicate, onDelete } = props
  const [showMintModal, setShowMintModal] = useState(false)

  return (
    <div className="flex flex-col w-full h-full aspect-1 border border-black cursor-pointer overflow-hidden">
      <button type="button" className="overflow-hidden" onClick={onThumbnailClick}>
        <Component data={{ ...component }} />
      </button>
      <div className="grow" />
      <ActionButtons {...{ onEdit, onDuplicate, onDelete }} />

      <MintModal open={showMintModal} onClose={() => setShowMintModal(false)} component={component} />
      <button type="button" className="border-t border-black" onClick={() => setShowMintModal(true)}>
        Mint
      </button>
    </div>
  )
}
