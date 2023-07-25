import { GallerySection } from '../../types'

export default function VariantThee({ section }: { section: GallerySection }) {
  return (
    <div className="flex bg-black py-[50px]">
      <div className="container w-[1300px] max-w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mx-auto gap-4 ">
        {section.variables.map(({ data: { url, alt } }, idx) => (
          <div key={idx} style={{ aspectRatio: '1 / 3' }}>
            <img className="object-cover object-center bg-black w-full h-full" src={url} alt={alt} />
          </div>
        ))}
      </div>
    </div>
  )
}
