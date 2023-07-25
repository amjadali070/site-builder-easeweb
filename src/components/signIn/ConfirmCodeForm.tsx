import React, { useState } from 'react'
import { Auth } from 'aws-amplify'
import clsx from 'clsx'
import { Link, useNavigate } from 'react-router-dom'
import { Loader } from '../loader'

interface IProps {
  email: string
}

const ConfirmForm: React.FC<IProps> = ({ email }) => {
  const [code, setCode] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  const navigate = useNavigate()

  const confirmSignUp = async (e: React.FormEvent) => {
    e.preventDefault()
    try {
      setLoading(true)
      await Auth.confirmSignUp(email, code)
      navigate('/signin')
    } catch (err: any) {
      setError(err.message)
    } finally {
      setLoading(false)
    }
  }

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCode(e.target.value)
  }

  return (
    <>
      <Loader show={loading} />
      <h2 className="mb-10 font-bold text-xl sm:text-2xl text-left w-full">Confirm Code</h2>
      <form className="mb-8 flex flex-col w-full text-sm" onSubmit={confirmSignUp}>
        <div className="mb-4">
          <label className="block mb-2 text-gray-700">Code</label>
          <input type="text" className="w-full border border-[#E8E8E8] px-4 py-4" onChange={onChange} />
        </div>
        {error && <span className="text-secondary.main mb-4 text-center">{error}</span>}
        <button
          type="submit"
          disabled={code.length !== 6 || loading}
          className={clsx(
            (code.length !== 6 || loading) && 'disabled:opacity-50 cursor-not-allowed',
            'w-full py-4 font-medium bg-secondary.main text-white',
          )}
        >
          Confrim
        </button>
      </form>
      <div>
        <Link to="/signin" className="text-sm text-secondary.main font-medium">
          Login to your account
        </Link>
      </div>
    </>
  )
}

export default ConfirmForm
