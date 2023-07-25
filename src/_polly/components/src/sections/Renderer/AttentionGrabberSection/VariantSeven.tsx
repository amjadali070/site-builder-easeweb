import { AttentionGrabberSection } from '../../types'
import '../../../css/custom.css'
import { SectionSlate } from '../../../../../../components/editor'
import GoogleFontLoader from 'react-google-font-loader'

export default function VariantSeven({ section }: { section: AttentionGrabberSection }) {
  const title = section.variables.find(variable => variable.name === 'TITLE')?.data
  const subTitle = section.variables.find(variable => variable.name === 'SUBTITLE')?.data
  const paragraph = section.variables.find(variable => variable.name === 'PARAGRAPH')?.data
  const media = section.variables.find(variable => variable.name === 'MEDIA')?.data
  return (
    <div className="bg-black relative mx-auto">
      <GoogleFontLoader
        fonts={[
          {
            font: 'Monoton',
            weights: [400],
          },
        ]}
      />
      <div
        className="jumbotron overflow-hidden flex items-center bg-cover object-cover bg-no-repeat bg-black m-0 h-[500px] w-full lg:w-full lg:h-screen text-center"
        style={{
          backgroundImage: media ? `url(${media})` : '',
        }}
      >
        <div className="w-full pr-4 pl-4 mr-auto ml-auto">
          {/* <h2 className="jumbotron-heading1 uppercase text-black text-[50px] lg:text-[150px]">{title}</h2> */}
          {/* <h2 className="text-[20px] lg:text-[40px]">{subTitle}</h2> */}
          {/* <div className='uppercase text-black text-[50px] lg:text-[150px]'> */}
          <SectionSlate initialValue={title} previewMode />
          {/* </div> */}
          <div className='lg:mt-4'>
          <SectionSlate initialValue={subTitle} previewMode />
          </div>
          <div className='lg:mt-2'>
          <SectionSlate initialValue={paragraph} previewMode />
          </div>
          <div className="relative -top-96 text-black">
            <div className="cloud1">
              <img src="https://techboom.ai/images/cloud1%20(1).png" />
            </div>
            <div className="cloud2">
              <img src="https://techboom.ai/images/cloud2%20(1).png" />
            </div>
            <div className="cloud3">
              <img src="https://techboom.ai/images/cloud1%20(1).png" />
            </div>
            <div className="cloud4">
              <img src="https://techboom.ai/images/cloud2%20(1).png" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
