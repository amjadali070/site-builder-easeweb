import { GallerySection } from '../../types'

export default function VariantTwo({ section }: { section: GallerySection }) {
  return (
    <div className="bg-black py-[50px]">
      <div className="container max-w-full h-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mx-auto gap-2 ">
        {section.variables.map(({ data: { url, alt } }, idx) => (
          <div key={idx} style={{ aspectRatio: '4 / 3' }}>
            <img className="object-cover object-center bg-black w-full h-full" src={url} alt={alt} />
          </div>
        ))}
      </div>
    </div>
  )
}
