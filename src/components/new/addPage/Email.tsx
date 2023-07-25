import React, { useState } from 'react'
import { ReactComponent as EmailIcon } from '../../../assets/icons/menuBar/email.svg'

const Email = (props: any) => {
  const { onSubmit } = props
  const [value, setValue] = useState('')
  return (
    <div className="p-5">
      <h1 className="text-4xl">Email</h1>
      <div className="h-[2px] mt-2 w-[60%] bg-[#C4C4C4]" />
      <div className="mt-10">
        <div className="flex items-center">
          <EmailIcon width={40} />
          <input
            value={value}
            onChange={e => setValue(e.target.value)}
            placeholder="youremail@plly.io"
            type="text"
            name="name"
            className="ml-2 placeholder-gray-300 :placeholder:text-xs w-full h-11 pl-2.5 bg-white border-b-[1px] border-black focus:outline-none"
          />
        </div>
      </div>
      <div className="mt-4">
        <button
          className="px-4 py-3 border border-black w-full"
          type="submit"
          onClick={() => onSubmit(`mailto:${value}`)}
        >
          Save
        </button>
      </div>
    </div>
  )
}

export default Email
