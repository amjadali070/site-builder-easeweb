export default function Footer2(props: any) {
  const { info } = props

  return (
    <div className="text-black text-base font-extralight border border-black flex items-center flex-col pt-4 pb-5 bg-white overflow-hidden">
      <h2 className="text-2xl font-semibold mb-3">{info.name}</h2>
      <span className="mb-4">Contact us at: {info.phoneNumber}</span>
      <span className="mb-6">Address: {info.address}</span>
      <a
        href={`mailto:${info.email}`}
        className="flex w-56 font-medium text-center items-center justify-center p-[10px] bg-black text-white"
      >
        Contact us
      </a>
    </div>
  )
}
