import { useNavigate } from 'react-router-dom'

export default function NFTComponentList() {
  const navigate = useNavigate()

  return (
    <div className="components p-4">
      <div className="header p-2">
        <div className="flex justify-between items-center">
          <h1 className="text-4xl">Minted</h1>
        </div>
        <div className="h-[1px] mt-2 w-full bg-[#C4C4C4]" />
      </div>
      <div className="p-2">
        <button type="button" className="border border-black px-2 py-1" onClick={() => navigate('/wallet/mint')}>
          See all
        </button>
      </div>
    </div>
  )
}
