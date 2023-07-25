import { GallerySection } from '../../types';
import '../../../css/custom.css'

export default function VariantSix({ section }: { section: GallerySection }) {
  let check = true;
  return (
    <div className="bg-white py-[1px] lg:py-[20px] mb-1">
      <div className="container w-[350px] lg:w-[1300px] h-full mx-auto">
        <h3 className="col px-3 px-sm-2 px-md-0 text-[2em] lg:text-[5em]">OUR SERVICES</h3>
        <div className="grid grid-cols-2 lg:grid-cols-2 gap-[4px] lg:gap-[12px] mt-[3px]">
          {section.variables.map(({ data: { url, name, alt } }, idx) => {
            if (check) {
              { check = false; }
              return (
                <div key={idx} className=" grid row-span-5 bg-no-repeat bg-center bg-cover bg-white relative tmp-inner ">
                  <img className="object-cover object-center bg-black w-full h-full" src={url} alt={alt}
                  />
                  <div className="hover-box mx-auto py-[20px]">
                    <span>
                      <h1 className='lg:text-[3.5em] text-center py-1 lg:py-6 mx-auto text-white'>{name}</h1>
                      <p className='text-[10px] lg:text-[1.5em] font-semibold text-white text-center mx-auto' >{alt}</p>
                    </span>
                  </div>
                </div>
              );
            }
            else {
              { check = true }
              return (
                <div key={idx} className="grid  bg-no-repeat bg-center bg-cover bg-black relative tmp-inner">
                  <img className="object-cover object-center bg-black w-full h-full" src={url} alt={alt}
                  />
                  <div className="hover-box mx-auto py-[20px]">
                    <span>
                      <h1 className='lg:text-[3.5em] text-center py-1 lg:py-6 mx-auto text-white'>{name}</h1>
                      <p className=' text-[10px] lg:text-[1.5em] font-semibold text-white text-center mx-auto' >{alt}</p>
                    </span>
                  </div>
                </div>
              );


            }


          })}
        </div>
      </div>
    </div>

  )
}
