import { IoPencil } from 'react-icons/io5'

export default function EditImageOverlay({ src, alt = '' }: { src: string; alt?: string }) {
  return (
    <>
      <img {...{ src, alt }} className="w-full h-full object-cover object-center bg-black" />
      <div className="absolute top-0 left-0 bg-black/30 w-full h-full grid place-items-center">
        <IoPencil className="text-white" color="white" size={32} />
      </div>
    </>
  )
}
