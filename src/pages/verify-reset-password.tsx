import { Auth } from 'aws-amplify'
import clsx from 'clsx'
import React, { useEffect, useRef, useState } from 'react'
import { useForm } from 'react-hook-form'
import { IoEyeOffOutline, IoEyeOutline } from 'react-icons/io5'
import { useNavigate } from 'react-router-dom'
import InputText from 'src/components/common/InputText'
import Layout from '../components/layout/Layout'
import { Loader } from '../components/loader'

interface IUser {
  email: string
  code: string
  password: string
}

const ForgotPassword = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
    watch,
  } = useForm()
  const navigate = useNavigate()
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)

  const passwordRef = useRef({})
  passwordRef.current = watch('password', '')

  useEffect(() => {
    const email = localStorage.getItem('email')
    if (!email) navigate('/signin')
  }, [navigate])

  const onSubmit = async (user: IUser) => {
    const { code, password } = user
    const email = localStorage.getItem('email') as string
    try {
      setLoading(true)
      await Auth.forgotPasswordSubmit(email, code, password)
      navigate('/signin')
    } catch (err: any) {
      setError(err.message)
    } finally {
      setLoading(false)
    }
  }

  return (
    <Layout>
      <Loader show={loading} />
      <div className="h-full min-h-screen flex justify-center sm:py-[10vh] w-full  mx-auto bg-gray-100">
        <div className="w-full md:w-8/12 lg:w-6/12 2xl:w-2/6 lg:ml-8 xl:ml-12 2xl:ml-20">
          <div className="bg-white h-full flex flex-col items-center px-10  py-10">
            <h2 className="mb-10 font-bold text-xl sm:text-2xl text-left w-full">Reset Account Password</h2>
            <form className="mb-2 flex flex-col w-full text-sm" onSubmit={handleSubmit(onSubmit)}>
              <div className="mb-8">
                <InputText
                  label="Activation Code"
                  placeholder='Verification code'
                  name="code"
                  type="text"
                  register={register}
                  errors={errors}
                  required={{ value: true, message: 'Activation code is required' }}
                />
              </div>
              <div className="mb-8 relative w-full flex items-center justify-end">
                <InputText
                  label="Password"
                  placeholder='New Password'
                  name="password"
                  type={showPassword ? 'text' : 'password'}
                  register={register}
                  errors={errors}
                  required={{ value: true, message: 'Password is required' }}
                  minLength={{ value: 8, message: 'Password must be 8-32 characters long' }}
                  maxLength={{ value: 32, message: 'Password must be 8-32 characters long' }}
                />
                <div className="absolute  mt-1 mr-3 text-gray-500">
                  <button type="button" 
                    className='hover:text-green-600'
                    onClick={() => setShowPassword(!showPassword)}>
                    {showPassword ? <IoEyeOutline size={20} /> : <IoEyeOffOutline size={20} />}
                  </button>
                </div>
              </div>
              <div className="mb-8 relative w-full flex items-center justify-end">
                <InputText
                  label="Confirm Password"
                  placeholder='Confirm Password'
                  name="confirmPassword"
                  type={showConfirmPassword ? 'text' : 'password'}
                  register={register}
                  errors={errors}
                  required={{ value: true, message: 'Confirm password is required' }}
                  minLength={{ value: 8, message: 'Confirm password must be 8-32 characters long' }}
                  maxLength={{ value: 32, message: 'Confirm password must be 8-32 characters long' }}
                  validate={value => value === passwordRef.current || 'The passwords do not match'}
                />
                <div className="absolute  mt-1 mr-3 text-gray-500">
                  <button type="button" 
                    className='hover:text-green-600'
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}>
                    {showConfirmPassword ? <IoEyeOutline size={20} /> : <IoEyeOffOutline size={20} />}
                  </button>
                </div>
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
                  Reset
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
