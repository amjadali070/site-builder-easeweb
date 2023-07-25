import clsx from 'clsx'
import React, { useState } from 'react'
import { Auth } from 'aws-amplify'

const NavBar2: React.FC = () => {
  const [loading, setLoading] = useState(false)

  const signOut = async () => {
    try {
      setLoading(true)
      await Auth.signOut()
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="p-4 px-10">
      <button
        disabled={loading}
        type="submit"
        className={clsx(
          loading && 'cursor-not-allowed disabled:opacity-50',
          'w-full py-4 font-medium bg-green-500 text-white border border-transparent rounded-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500',
        )}
        onClick={signOut}
      >
        Log Out
      </button>
    </div>
  )
}

export default NavBar2
