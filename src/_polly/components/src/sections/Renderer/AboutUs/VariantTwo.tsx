import { AboutUsSection as AboutUsSectionType } from '../../types'
import { ReactComponent as FacebookIcon } from '../../../assets/icons/facebook.svg'
import { ReactComponent as InstagramIcon } from '../../../assets/icons/instagram.svg'
import { ReactComponent as TwitterIcon } from '../../../assets/icons/twitter.svg'
import { SectionSlate } from '../../../../../../components/editor'

interface VariantTwoProps {
  section: AboutUsSectionType
}

export default function VariantTwo({ section }: VariantTwoProps) {
  const title = section.variables.find(variable => variable.name === 'TITLE')?.data
  const subTitle = section.variables.find(variable => variable.name === 'SUBTITLE')?.data
  const paragraph = section.variables.find(variable => variable.name === 'PARAGRAPH')?.data
  const buttonOne = section.variables.find(variable => variable.name === 'BUTTON_1')?.data
  const buttonTwo = section.variables.find(variable => variable.name === 'BUTTON_2')?.data
  const media = section.variables.find(variable => variable.name === 'MEDIA')?.data
  const socialAccounts = { facebook: '#', instagram: '#', twitter: '#' }

  return (
    <div className="bg-[#C1C2C4] box-border">
      <div className="container mx-auto p-0 md:px-10 md:py-10">
        <div className="grid md:grid-cols-[70%_30%] font-light">
          <div className="bg-white py-8 px-6 md:px-16 md:py-12 space-y-6">
            <div>
              <p className="text-[40px] md:text-[60px] text-center md:text-left">{<SectionSlate initialValue={title} previewMode/>}</p>
            </div>

            {subTitle && (
              <div>
                <p className="text-[24px] text-center md:text-left">{<SectionSlate initialValue={subTitle} previewMode/>}</p>
              </div>
            )}

            {paragraph && (
              <div>
                <p className=" text-center md:text-left leading-7">{<SectionSlate initialValue={paragraph} previewMode/>}</p>
              </div>
            )}

            <div className="flex gap-8 md:gap-4 items-center justify-center md:justify-between flex-wrap pt-5">
              {buttonOne && (
                <div className="flex gap-5 flex-wrap">
                  <a className="h-11 px-5 bg-[#54575D] flex justify-center items-center text-white" href={buttonOne.to}>
                    {buttonOne.label}
                  </a>
                  {buttonTwo && (
                    <a
                      className="h-11 px-5 border border-[#54575D] flex justify-center items-center "
                      href={buttonTwo.to}
                    >
                      {buttonTwo.label}
                    </a>
                  )}
                </div>
              )}

              <div className="flex justify-end gap-5 md:gap-4">
                <a href={socialAccounts.facebook ?? '#'} target="_blank">
                  <FacebookIcon className="fill-[#54575D] h-6 w-6 md:h-5 w-5" />
                </a>
                <a href={socialAccounts.instagram ?? '#'} target="_blank">
                  <InstagramIcon className="fill-[#54575D] h-6 w-6 md:h-5 w-5" />
                </a>
                <a href={socialAccounts.twitter ?? '#'} target="_blank">
                  <TwitterIcon className="fill-[#54575D] h-6 w-6 md:h-5 w-5" />
                </a>
              </div>
            </div>
          </div>

          <div
            className="bg-black bg-cover bg-no-repeat bg-center h-[330px] md:h-auto"
            style={{ backgroundImage: media ? `url(${media})` : '' }}
          />
        </div>
      </div>
    </div>
  )
}
