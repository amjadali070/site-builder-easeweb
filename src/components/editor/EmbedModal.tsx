import { useState } from 'react'

interface EmbedModalProps {
  onAdd: (url: string) => void
}

export default function EmbedModal({ onAdd }: EmbedModalProps) {
  const [url, setUrl] = useState('')

  return (
    <div className="p-4">
      <input
        type="text"
        value={url}
        placeholder="Link"
        onChange={e => setUrl(e.target.value)}
        className="w-full border-b border-black outline-none px-4 py-4"
      />

      <button type="button" className="px-4 mt-4 py-3 border border-black w-full" onClick={() => onAdd(url)}>
        Add
      </button>
    </div>
  )
}
