import clsx from 'clsx'
import DOMPurify from 'dompurify'
import { useParams } from 'react-router-dom'
import { TextProps } from '../../../components/modal/section/SectionTitle'
import { ButtonLinkTypes, ButtonState } from './constants'
import Renderer from './Renderer'

const stylish = (_settings: TextProps['settings']) => {
  return clsx()
}

const stylishWrapper = (settings: any, image: boolean): any => {
  return {
    backgroundColor: image ? undefined : settings.backgroundColor || 'black',
    fontFamily: settings.font,
  }
}

const getLink = (link: ButtonState['link'], websiteID: string): string => {
  if (!link?.type || !link.to) return '#'

  const { to, type } = link

  if (type === ButtonLinkTypes.EXTERNAL || type === ButtonLinkTypes.DOCUMENT) return to
  if (type === ButtonLinkTypes.EMAIL) return `mailto:${to}`
  if (type === ButtonLinkTypes.INTERNAL) {
    if (websiteID) {
      return `/websites/${websiteID}${to}`
    }
    return to
  }

  return '#'
}

const getTarget = (link: ButtonState['link']): string => {
  if (!link?.type || !link.to) return '_self'
  const { type } = link
  if (type === ButtonLinkTypes.INTERNAL) return '_self'
  return '_blank'
}

export default function Text(props: any) {
  const params = useParams()
  const websiteID = params?.id as string

  const { title, content, subHeadline, link } = props

  // didn't destructure the props above to get type
  const button = props.button as ButtonState

  const image = title.image || title.settings.backgroundImage
  const T = link ? 'a' : 'div'

  return (
    <T className="relative" href={link ? getLink(link, websiteID) : ''} target={link ? getTarget(link) : '_self'}>
      {image && (
        <div className="absolute inset-0 w-full h-full">
          <img className="object-cover w-full h-full" src={image} />
        </div>
      )}
      <div
        className="component-render relative text-ratio flex items-center"
        style={stylishWrapper(title.settings, !!image)}
      >
        {/* <div className="float-left w-full px-4 py-8 min-h-full polly-text-editor space-y-6"> */}
        <div className="float-left w-full polly-text-editor">
          <div
            className={stylish(title.settings)}
            style={title.settings}
            dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(title.value) }}
          />

          {title?.content && <Renderer initialValue={title.content} />}

          {subHeadline && subHeadline?.visible && (
            <div
              style={{ fontFamily: subHeadline.settings.font, ...subHeadline.settings }}
              className={stylish(subHeadline.settings)}
              dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(subHeadline.value) }}
            />
          )}

          {content && (
            <div
              className={`text__content ${stylish(content.settings)}`}
              dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(content.value) }}
            />
          )}

          {button && button?.visible && (
            <div className="flex justify-evenly">
              <a
                href={getLink(button.link, websiteID)}
                target={getTarget(button.link)}
                className={stylish(button.settings)}
                style={{ ...button.settings, fontFamily: button.settings.font, display: 'grid', placeItems: 'center' }}
              >
                {button.value}
              </a>
            </div>
          )}
        </div>
      </div>
    </T>
  )
}
