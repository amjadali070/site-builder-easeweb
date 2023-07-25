export default function MENUTextItem({
  image,
  title,
  subtitle,
  description,
}: {
  image: string
  title: string
  subtitle: string
  description: string
}) {
  return (
    <div className="lg:flex md:flex gap-4 items-center justify-between">
      {image && <img src={image} alt="" className="w-24 h-24 rounded-full mx-auto md:mx-0 lg:mb-0 lg:mx-0 mb-4" />}

      <div className="flex items-center justify-between w-full">
        <div className="w-full">
          {title && <h1 className="text-lg uppercase">{title}</h1>}
          <p className="text-sm">{description}</p>
        </div>
        <div className="border-t border-b py-6">
          {subtitle && <h1 className="text-4xl font-sub text-[#B48B7E]">${subtitle}</h1>}
        </div>
      </div>
    </div>
  )
}
