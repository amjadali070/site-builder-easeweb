import { Auth } from 'aws-amplify'
import clsx from 'clsx'
import { useNavigate } from 'react-router-dom'
import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import InputText from 'src/components/common/InputText'
import Layout from '../components/layout/Layout'
import { Loader } from '../components/loader'

interface IUser {
  email: string
  password: string
}

const ForgotPassword = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm()
  const navigate = useNavigate()
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  const onSubmit = async (user: IUser) => {
    const { email } = user
    try {
      setLoading(true)
      await Auth.forgotPassword(email)
      localStorage.setItem('email', email)
      navigate('/verify-reset-password')
    } catch (err: any) {
      setError(err.message)
    } finally {
      setLoading(false)
    }
  }

  return (
    <Layout>
      <Loader show={loading} />
      <div className="h-full min-h-screen flex justify-center sm:py-[10vh] w-full mx-auto bg-gray-100">
        <div className="w-full md:w-8/12 lg:w-6/12 2xl:w-2/6 lg:ml-8 xl:ml-12 2xl:ml-20">
          <div className="bg-white h-full flex flex-col items-center px-8  py-10 rounded-md border-gray-100 border shadow-xl">
            <h2 className="mb-10 font-bold text-xl sm:text-2xl text-left w-full">Find your Account</h2>
            <form className="mb-2 flex flex-col w-full text-sm" onSubmit={handleSubmit(onSubmit)}>
              <div className="mb-8">
                <InputText
                  label="Email"
                  placeholder='Email'
                  name="email"
                  register={register}
                  errors={errors}
                  required={{ value: true, message: 'Email is required' }}
                  pattern={{
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: 'Invalid email address',
                  }}
                />
              </div>
              {error && <span className="text-secondary.main text-center mb-4">{error}</span>}
              <div className="mb-4">
                <button
                  disabled={loading}
                  type="submit" 
                  className={clsx(
                    loading && 'disabled:opacity-50 cursor-not-allowed',
                    'bg-green-500 text-white px-6 py-2 rounded-md font-semibold text-base outline-none w-full hover:bg-green-600 hover:border-green-600 border-green-500 border-2 block',
                  )}
                >
                  Find Account
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default ForgotPassword
