import clsx from 'clsx'
import { useState } from 'react'
import MenuBar from 'src/_polly/components/src/MenuBar'
import { saveWebsite } from '../../../lib/services/website.service'

interface Props {
  websiteId: string
  menu: any
  website: any
  onClose: () => void
}

export default function SectionMenuPreview({ menu, onClose, websiteId, website }: Props) {
  const [fetching, setFetching] = useState(false)
  const [style, setStyle] = useState(menu?.style ?? 'MENU_BAR1')

  const onSave = () => {
    setFetching(true)
    saveWebsite({
      id: websiteId,
      menu: JSON.stringify({
        ...menu,
        style,
      }),
    }).then(() => onClose())
  }

  return (
    <div className="p-5">
      <div className="space-y-10">
        <button
          type="button"
          className={clsx('w-full border border-black', style === 'MENU_BAR1' && 'border-4')}
          onClick={() => setStyle('MENU_BAR1')}
        >
          <MenuBar {...{ ...menu, style: 'MENU_BAR1', website }} />
        </button>
        <button
          type="button"
          className={clsx('w-full border border-black', style === 'MENU_BAR2' && 'border-black border-4')}
          onClick={() => setStyle('MENU_BAR2')}
        >
          <MenuBar {...{ ...menu, style: 'MENU_BAR2', website }} />
        </button>
        <button
          type="button"
          className={clsx('w-full border border-black', style === 'MENU_BAR3' && 'border-black border-4')}
          onClick={() => setStyle('MENU_BAR3')}
        >
          <MenuBar {...{ ...menu, style: 'MENU_BAR3', website }} />
        </button>
      </div>

      <button
        type="button"
        className="my-10 border w-full border-black flex-grow flex items-center justify-center text-center p-4 disabled:opacity-50"
        onClick={onSave}
        disabled={fetching}
      >
        {fetching ? 'Saving' : 'Save'}
      </button>
    </div>
  )
}
