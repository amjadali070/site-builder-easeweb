import { ReactNode, useState } from 'react'
import { IoAdd, IoRemove } from 'react-icons/io5'
import clsx from 'clsx'

interface SectionMediaFieldProps {
  children: ReactNode
  title: string
  preview?: ReactNode
}

export default function SectionBaseField({ children, title, preview }: SectionMediaFieldProps) {
  const [expanded, setExpanded] = useState(false)
  return (
    <div className={clsx('border shadow-md rounded-md bg-slate-200', !expanded && 'text-white')}>
      {!expanded && (
        <div className="p-4 flex justify-between items-center bg-zinc-800 rounded-md hover:bg-zinc-600">
          <div>
            <h2 className={clsx(preview ? 'text-[18px]' : 'text-[34px]')}>{title}</h2>
            {preview && <div className="mt-2">{preview}</div>}
          </div>

          <div className="ml-2">
            <button
              type="button"
              onClick={() => {
                setExpanded(!expanded)
              }}
              className="p-1"
            >
              <IoAdd size={30} />
            </button>
          </div>
        </div>
      )}

      {expanded && (
        <div className="p-4">
          <div className="flex justify-between items-center">
            <h2 className="text-[18px]">{title}</h2>
            <button
              type="button"
              onClick={() => {
                setExpanded(!expanded)
              }}
              className="p-1"
            >
              <IoRemove size={24} />
            </button>
          </div>
          {children}
        </div>
      )}

      {/* <div className="flex justify-between items-center pl-4 pr-6 py-4">
        <div>
          <h2 className={clsx(expanded && 'text-[18px]', !expanded && 'text-[34px]')}>{title}</h2>
          {expanded && children}
        </div>

        {!expanded && (
          <div>
            <IoAdd
              size={30}
              onClick={() => {
                setExpanded(!expanded)
              }}
            />
          </div>
        )}
      </div> */}
    </div>
  )
}
