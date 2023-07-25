import { useEffect, useState } from 'react'

import { getPages, IBlock, IPage } from 'src/services/website.service'

interface IChoosePageTemplateProps {
  setSelectedTemplate: React.Dispatch<React.SetStateAction<IBlock[]>>
}

const ChoosePageTemplate = ({ setSelectedTemplate }: IChoosePageTemplateProps) => {
  const [pages, setPages] = useState<IPage[]>([])
  const [selected, setSelected] = useState<string | null>(null)

  useEffect(() => {
    getPages().then(_pages => {
      setPages(_pages)
    })
  }, [])

  return (
    <div>
      <div className="border border-black text-lg p-2 cursor-pointer w-full mt-6">Choose a template</div>

      <div className="mt-6">
        {pages.map(({ id, thumbnail, name, blocks }) => (
          <button
            type="button"
            key={id}
            onClick={() => {
              setSelectedTemplate(blocks)
              setSelected(id)
            }}
            className={`w-full aspect-[4/3] bg-cover bg-black mb-6 cursor-pointer 
            ${selected === id ? 'opacity-100 shadow-xl' : ''}
            ${selected && selected !== id ? 'opacity-25' : ''}
            `}
          >
            {selected} - {id}
            <img src={thumbnail} alt={name} className="w-full h-full" />
          </button>
        ))}
      </div>
    </div>
  )
}

export default ChoosePageTemplate
