import { Auth } from 'aws-amplify'
import clsx from 'clsx'
import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import InputText from 'src/components/common/InputText'
import UnauthenticatedPage from 'src/components/UnauthenticatedPage'
import { Link } from 'react-router-dom'
import { IoEyeOffOutline, IoEyeOutline } from 'react-icons/io5'
import Layout from '../components/layout/Layout'
import { Loader } from '../components/loader'
import logo from '../assets/images/logo.png'


interface ISignIpUser {
  email: string
  password: string
}

export default function Signin() {
  const {
    register,
    formState: { errors },
    handleSubmit,
    watch,
  } = useForm()
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  const [showPassword, setShowPassword] = useState(false)

  const onSubmit = async (user: ISignIpUser) => {
    const { email, password } = user
    try {
      setLoading(true)
      await Auth.signIn(email, password)
    } catch (err: any) {
      setError(err?.message ?? 'Something went wrong')
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    const subscription = watch(() => setError(''))
    return () => subscription.unsubscribe()
  }, [watch])

  return (
    <UnauthenticatedPage>
      <Loader show={loading} />
      <Layout>
        <div className='flex justify-start items-center flex-col h-screen bg-gray-50'>

            <div className='relative w-full h-full'>
                <video 
                    // src={shareVideo} 
                    // type="video/mp4" 
                    loop 
                    controls={false}
                    muted 
                    autoPlay
                    className='w-full h-full object-cover'/>
              
                <div className='absolute flex flex-col justify-center items-center top-0 left-0 right-0 buttom-0 bg-blackOverlay h-full gap-3 w-full'>
                  {error && (
                          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative md:w-96 w-5/6" role="alert">
                          <span className="block ">Sorry, your password was incorrect. Please double-check your password.</span>
                          <span className="absolute top-0 bottom-0 right-0 px-4 py-3">
                            <svg className="fill-current h-6 w-6 text-red-500" 
                            role="button" xmlns="http://www.w3.org/2000/svg" 
                            viewBox="0 0 20 20"
                            onClick={() => {setError('')}}
                            >
                              <title>Close</title>
                              <path d="M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z"/></svg>
                          </span>
                        </div>
                  )}
                  <form className="w-full flex flex-col justify-center items-center" onSubmit={handleSubmit(onSubmit)}>
                    <div className='px-7 h-auto md:w-2/6 w-5/6 flex flex-col items-center rounded-md gap-4  border-gray-100 border bg-white shadow-xl'>
                        <Link
                            to="/"
                        >
                            <img src={logo} width="150px" alt='logo' className='mt-10 mb-6'/>
                        </Link>
                        
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
                        <div className="relative w-full flex items-center justify-end">
                          <InputText
                            label="Password"
                            placeholder='Password'
                            name="password"
                            type={showPassword ? 'text' : 'password'}
                            register={register}
                            errors={errors}
                            required={{ value: true, message: 'Password is required' }}
                          />
                          <div className="absolute mt-1 mr-3 text-gray-500">
                            <button type="button" 
                              className='hover:text-green-600'
                              onClick={() => setShowPassword(!showPassword)}>
                              {showPassword ? <IoEyeOutline size={20} /> : <IoEyeOffOutline size={20} />}
                            </button>
                          </div>
                        </div>
                          <button
                            disabled={loading}
                            type="submit"
                            className={clsx(
                              loading && 'disabled:opacity-50 cursor-not-allowed',
                              'bg-green-500 text-white px-6 py-2 rounded-md font-semibold text-base outline-none w-full hover:bg-green-600 hover:border-green-600 border-green-500 border-2 block',
                            )}
                          >
                            Login
                          </button>
                        <div className='flex my-2 w-full px-10'>
                            <hr className='w-2/3 h-px mx-auto mt-3 mr-5 border-0 rounded bg-gray-300'/>
                            <p className='text-slate-500'>OR</p>
                            <hr className='w-2/3 h-px mx-auto mt-3 ml-5 border-0 rounded  bg-gray-300'/>
                        </div>
                        {/* <div className='shadow-2xl'>
                            <GoogleLogin
                                onSuccess={responseGoogle}
                                onError={()=>{
                                    console.log("Login Error")
                                }}
                            />
                        </div> */}
                        <p className='text-sm mb-5'>
                          <Link to="/forgot-password" className="hover:text-green-600">
                            Forgot password?
                          </Link>
                        </p>
                        
                    </div>
                    </form>
                    <div className='flex justify-center items-center border-gray-100 border-2 h-auto md:w-2/6 w-5/6 rounded-md py-5 border-gray-100 border bg-white shadow-xl'>
                        <p className='text-sm font-bold'>Dont have an account? 
                            
                            <Link
                                to="/signup"
                                className='text-green-500'
                            >
                                <span> Sign up</span>
                            </Link>
                        </p>
                    </div>
                </div>
            </div>
        </div>
      </Layout>
    </UnauthenticatedPage>
  )
}
