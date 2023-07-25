import React, { useState } from 'react'

const ExternalWebpage = (props: any) => {
  const { onSubmit } = props
  const [value, setValue] = useState('')

  return (
    <div className="p-5">
      <h1 className="text-4xl">External Webpage</h1>
      <div className="h-[2px] mt-2 w-[80%] bg-[#C4C4C4]" />
      <h1 className="text-4xl mt-10">Domain Address</h1>
      <div className="mt-10">
        <div className="flex items-center">
          <div className="h-9 w-6 bg-[#C4C4C4]" />
          <div className="pl-4 flex items-center">
            <span>http://www.</span>
            <input
              value={value}
              onChange={e => setValue(e.target.value)}
              type="text"
              name="name"
              className="ml-2 placeholder-gray-300 :placeholder:text-xs w-full h-11 pl-2.5 bg-white border-b-[1px] border-black focus:outline-none"
            />
          </div>
        </div>
      </div>
      <div className="mt-4">
        <button
          className="px-4 py-3 border border-black w-full"
          type="submit"
          onClick={() => onSubmit(`http://www.${value}`)}
        >
          Save
        </button>
      </div>
    </div>
  )
}

export default ExternalWebpage
