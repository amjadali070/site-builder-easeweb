import { GallerySection } from '../../types'

export default function VariantOne({ section }: { section: GallerySection }) {
  return (
    <div className="bg-black py-[50px]">
      <div className="container w-[1300px] max-w-full grid grid-cols-2  mx-auto gap-2">
        {section.variables.map(({ data: { url, alt } }, idx) => (
          <div key={idx} style={{ aspectRatio: '4 / 3' }}>
            <img className="object-cover object-center bg-black w-full h-full" src={url} alt={alt} />
          </div>
        ))}
      </div>
    </div>
  )
}
