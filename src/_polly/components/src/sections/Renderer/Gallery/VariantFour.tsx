import { GallerySection } from '../../types'

export default function VariantFour({ section }: { section: GallerySection }) {
  let indexIdentifier = 1
  return (
    <div className="bg-black py-[50px]">
      <div className=" container w-[1300px] mx-auto max-w-full grid-cols-3 space-y-2 lg:space-y-0 lg:grid lg:gap-3 lg:grid-rows-3">
        {section.variables.map(({ data: { url, alt } }, idx) => {
          if (idx === indexIdentifier) {
            if (indexIdentifier % 3 == 0) {
              indexIdentifier += 4
            } else {
              indexIdentifier += 2
            }
            return (
              <div key={idx} className="w-full col-span-2 row-span-2">
                <img className="object-cover object-center bg-black w-full h-full" src={url} alt={alt} />
              </div>
            )
          } else {
            return (
              <div key={idx} className="w-full">
                <img className="object-cover object-center bg-black w-full h-full" src={url} alt={alt} />
              </div>
            )
          }
        })}
      </div>
    </div>
  )
}
