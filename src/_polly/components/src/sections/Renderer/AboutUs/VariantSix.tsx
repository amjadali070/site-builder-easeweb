import { GoPrimitiveDot } from 'react-icons/go'
import { SectionSlate } from '../../../../../../components/editor'
import { AboutUsSection as AboutUsSectionType } from '../../types'

interface VariantFourProps {
  section: AboutUsSectionType
}

export default function VariantSix({ section }: VariantFourProps) {
  const title = section.variables.find(variable => variable.name === 'TITLE')?.data
  const subTitle = section.variables.find(variable => variable.name === 'SUBTITLE')?.data
  const paragraph = section.variables.find(variable => variable.name === 'PARAGRAPH')?.data
  //   const buttonOne = section.variables.find(variable => variable.name === 'BUTTON_1')?.data
  //   const buttonTwo = section.variables.find(variable => variable.name === 'BUTTON_2')?.data

  return (
    <div
      style={{
        backgroundImage: `url('http://www.pixel-industry.com/html/royal-plate/img/pics/bkg-img1.jpg')`,
      }}
    >
      <div className="container mx-auto lg:p-16 p-6">
        <div className="flex flex-row gap-6 w-full">
          <div className="w-8/12 hidden lg:block">
            <img
              className="my-12 w-full hidden lg:block"
              src="https://www.freepnglogos.com/uploads/food-png/food-plate-png-transparent-image-pngpix-14.png"
              alt=""
            />
            <img
              className="my-12 w-full hidden lg:block"
              src="https://www.freepnglogos.com/uploads/food-png/food-sutherland-foodservice-12.png"
              alt=""
            />
          </div>
          <div
            className="w-full flex items-center hero border-[16px] border-[#131822] shadow-lg shadow-black"
            style={{
              backgroundImage: `url('http://www.pixel-industry.com/html/royal-plate/img/pics/bkg-img2.png')`,
            }}
          >
            <div className="text-center m-10 lg:m-0 lg:mx-14">
              <p className="text-4xl font-head text-[#B48B7E]">
                {<SectionSlate initialValue={subTitle} previewMode />}
              </p>
              <p className="text-4xl font-sub">{<SectionSlate initialValue={title} previewMode />}</p>
              <div className="text-[#B48B7E] my-2 w-28 mx-auto flex items-center">
                <div className="w-full">
                  <div className="bg-[#B48B7E] h-[1px]"></div>
                </div>
                <span className="mx-2">
                  <GoPrimitiveDot></GoPrimitiveDot>
                </span>
                <div className="w-full">
                  <div className="bg-[#B48B7E] h-[1px]"></div>
                </div>
              </div>
              <p className="mt-6">
                {<SectionSlate initialValue={paragraph} previewMode />}
                Lx minus fuga earum aut animi enim delectus provident reiciendis in, totam, voluptatum doloremque
                facilis eos velit beatae molestias eum laborum, vero a dicta aliquid veritatis labore libero itaque!
                Temporibus vero incidunt animi veritatis sapiente deserunt, voluptas, aspernatur reiciendis iusto,
                quaerat cumque distinctio! Odit nostrum delectus iste, ad voluptatibus repellat tempora adipisci
                voluptatum distinctio. Tenetur recusandae eligendi, dolore officiis sint odit adipisci deserunt earum?
              </p>
            </div>
          </div>
          <div className="w-8/12 hidden lg:block">
            <img
              className="my-12 w-full hidden lg:block"
              src="https://www.freepnglogos.com/uploads/food-png/food-home-nanoosh-20.png"
              alt=""
            />
            <img
              className="my-12 w-full hidden lg:block"
              src="https://www.freepnglogos.com/uploads/food-png/food-plate-png-transparent-image-pngpix-2.png"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  )
}
