import { TextSection } from 'src/_polly/components/src/sections'

export function getTextSectionTemplate(section: TextSection) {
  const title = section.variables.find(variable => variable.name === 'TITLE')?.data
  const subTitle = section.variables.find(variable => variable.name === 'SUBTITLE')?.data
  const paragraph = section.variables.find(variable => variable.name === 'PARAGRAPH')?.data

  if (section.variant === 'VARIANT_1')
    return (
      <div className="bg-black">
        <div className="container mx-auto space-y-4" style={{ padding: '100px 0' }}>
          <div className="w-[750px] max-w-full mx-auto">
            <div className="text-[72px]">
              <p className="text-white text-center" style={{ lineHeight: '90px' }}>
                {title}
              </p>
            </div>
          </div>

          {subTitle && (
            <div className="w-[750px] max-w-full mx-auto">
              <div className="text-[20px]">
                <p className="text-white text-center">{subTitle}</p>
              </div>
            </div>
          )}

          {paragraph && (
            <div className="w-[750px] max-w-full mx-auto">
              <div>
                <p className="text-white text-center">{paragraph}</p>
              </div>
            </div>
          )}
        </div>
      </div>
    )

  return null
}
