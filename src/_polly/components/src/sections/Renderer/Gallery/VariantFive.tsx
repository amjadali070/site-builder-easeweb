import { GallerySection } from '../../types'

export default function VariantFive({ section }: { section: GallerySection }) {
  return (
    <div className="bg-black py-[50px]">
      <div className=" container w-[1300px]  max-w-full grid-cols-6 space-y-2 lg:space-y-0 md:grid-col-3 lg:grid lg:gap-3 lg:grid-rows-3 mx-auto">
        {section.variables.map(({ data: { url, alt } }, idx) => {
          if (idx % 9 == 0) {
            return (
              <div className="w-full col-span-3">
                <img className="object-cover object-center bg-black w-full h-full" src={url} alt={alt} />
              </div>
            )
          } else if (idx % 9 === 1) {
            return (
              <div className="w-full col-span-3">
                <img className="object-cover object-center bg-black w-full h-full" src={url} alt={alt} />
              </div>
            )
          } else if (idx % 9 === 2) {
            return (
              <div className="w-full col-span-2">
                <img className="object-cover object-center bg-black w-full h-full" src={url} alt={alt} />
              </div>
            )
          } else if (idx % 9 === 3) {
            return (
              <div className="w-full col-span-4">
                <img className="object-cover object-center bg-black w-full h-full" src={url} alt={alt} />
              </div>
            )
          } else if (idx % 9 === 4) {
            return (
              <div className="w-full col-span-3">
                <img className="object-cover object-center bg-black w-full h-full" src={url} alt={alt} />
              </div>
            )
          } else if (idx % 9 === 5) {
            return (
              <div className="w-full col-span-2">
                <img className="object-cover object-center bg-black w-full h-full" src={url} alt={alt} />
              </div>
            )
          } else if (idx % 9 === 6) {
            return (
              <div className="w-full col-span-1">
                <img className="object-cover object-center bg-black w-full h-full" src={url} alt={alt} />
              </div>
            )
          } else if (idx % 9 === 7) {
            return (
              <div className="w-full col-span-4">
                <img className="object-cover object-center bg-black w-full h-full" src={url} alt={alt} />
              </div>
            )
          } else if (idx % 9 === 8) {
            return (
              <div className="w-full col-span-2">
                <img className="object-cover object-center bg-black w-full h-full" src={url} alt={alt} />
              </div>
            )
          }
        })}
      </div>
    </div>
  )
}
