
export default function ColorPalette(props: any) {
  const { onChange } = props
  return (
    <>
      <div className="mb-4 px-6">
        <h3 className="mb-2 font-medium">Common</h3>
        <div className="flex flex-wrap px-4">
          <div className="w-1/4 p-2 text-center">
            <div className="aspect-w-1 aspect-h-1">
              <button type="button" onClick={() => onChange('white')}>
                <div className="w-full h-full bg-white border border-black" />
              </button>
            </div>
          </div>
          <div className="w-1/4 p-2 text-center">
            <div className="aspect-w-1 aspect-h-1">
              <button type="button" onClick={() => onChange('black')}>
                <div className="w-full h-full bg-black" />
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="mb-4 px-6">
        <h3 className="mb-2 font-medium">Popular</h3>
        <div className="flex flex-wrap px-4">
          {['#DE9170', '#966B7E', '#D0867E', '#ECAE65', '#A29283', '#47453F', '#B2B2B0', '#676360'].map(x => (
            <div className="w-1/4 p-2 text-center" key={x}>
              <div className="aspect-w-1 aspect-h-1">
                <button type="button" onClick={() => onChange(x)}>
                  <div className="w-full h-full" style={{ background: x }} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}