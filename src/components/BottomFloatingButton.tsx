type BottomFloatingButtonProps = {
  label: string
  secondaryLabel?: string
  onSecondaryClick?: () => void
}

export default function BottomFloatingButton({
  onClick,
  label,
  onSecondaryClick,
  secondaryLabel,
  ...props
}: BottomFloatingButtonProps &
  React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>) {
  return (
    <div className="fixed lg:max-w-[484px] bottom-0 w-full left-0 flex justify-between">
      <button
        {...props}
        type="button"
        className="w-full py-5 font-medium bg-green-600 uppercase text-white text-lg hover:bg-green-700"
        onClick={onClick}
      >
        {label}
      </button>

      {onSecondaryClick && (
        <button
          {...props}
          type="button"
          className="w-full py-5 font-medium bg-black uppercase text-red-500 text-lg"
          onClick={onSecondaryClick}
        >
          {secondaryLabel}
        </button>
      )}
    </div>
  )
}
