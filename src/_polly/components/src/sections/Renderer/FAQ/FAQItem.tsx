import { ReactComponent as CircleIcon1 } from '../../../assets/icons/circleIcon1.svg'
import { ReactComponent as CircleIcon2 } from '../../../assets/icons/circleIcon2.svg'
import { ReactComponent as CircleIcon3 } from '../../../assets/icons/circleIcon3.svg'
import { ReactComponent as CircleIcon4 } from '../../../assets/icons/circleIcon4.svg'

export default function FAQTextItem({
  icon,
  title,
  description,
  whiteFont,
}: {
  icon?: number
  title: string
  description: string
  whiteFont?: boolean
}) {
  const getIcon = (icon: number | undefined) => {
    const iconClasses = `w-20 h-20 fill-${whiteFont ? 'white' : 'dark'}`

    switch (icon) {
      case 0:
        return <CircleIcon1 className={iconClasses} />
      case 1:
        return <CircleIcon2 className={iconClasses} />
      case 2:
        return <CircleIcon3 className={iconClasses} />
      case 3:
        return <CircleIcon4 className={iconClasses} />
      case 4:
        return <CircleIcon1 className={iconClasses} />

      default:
        return null
    }
  }


  return (
    <div className="flex flex-col items-center justify-center gap-5 text-center">
      {getIcon(icon)}
      {title && <p className={`${whiteFont ? 'text-white' : ''} text-[45px]`}>{title}</p>}
      <p className={`${whiteFont ? 'text-white' : ''}`}>{description}</p>
    </div>
  )
}


