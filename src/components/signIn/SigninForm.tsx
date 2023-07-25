import { useForm } from 'react-hook-form'
import React, { useRef, useState } from 'react'
import { ISignUpUser } from 'src/lib/types/types'
import clsx from 'clsx'
import { Link } from 'react-router-dom'
import { IoEyeOffOutline, IoEyeOutline } from 'react-icons/io5'
import InputText from '../common/InputText'
import { Loader } from '../loader'
import logo from '../../assets/images/logo.png'

interface IProps {
  onSubmit: (user: ISignUpUser) => void
  loading: boolean
  error?: string
}

const SignInForm: React.FC<IProps> = ({ onSubmit, loading, error }) => {
  const {
    register,
    formState: { errors },
    handleSubmit,
    watch,
  } = useForm()

  const password = useRef({})
  password.current = watch('password', '')

  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)

  return (
    <>
      <Loader show={loading} />

      <div className='flex flex-col items-center h-full bg-gray-50 md:h-screen'>
                <div className='flex justify-between md:px-20 px-10 w-full mt-3'>
                    <Link
                        to="/"
                    >
                        <img src={logo} width="130px" alt='logo' className=''/>
                    </Link>
                    <div className='flex justify-center items-center gap-3'>
                        <p className='hidden md:flex font-bold text-px opacity-70 text-neutral-600'>Already have an account?</p>    
                        <Link
                            to="/signin"
                            className='text-neutral-600 font-bold text-md hover:text-green-500'
                        >
                            <span>Login</span>
                            
                        </Link>    
                    </div>
                </div>
                <form onSubmit={handleSubmit(onSubmit)} className="w-full">
                <div className='flex flex-col items-center h-full w-full md:pt-12 pt-8'>
                    <div className='px-5 md:px-10 h-auto md:w-2/6 w-5/6 flex flex-col items-center rounded-md gap-4 border-gray-100 border bg-white py-8 shadow-xl'>
                        <div className='w-full'>
                            <h1 className='text-2xl font-bold  mb-3'>Sign up</h1>
                            <hr className='w-full h-px -mt-1 mb-5 border-0 rounded  bg-gray-300'/>
                        </div>
                        <InputText
                          label="First Name"
                          placeholder='First Name'
                          name="firstName"
                          register={register}
                          errors={errors}
                          required={{ value: true, message: 'First name is required' }}
                        />
                        <InputText
                          label="Last Name"
                          placeholder='Last Name'
                          name="lastName"
                          register={register}
                          errors={errors}
                          required={{ value: true, message: 'Last name is required' }}
                        />
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
                            minLength={{ value: 8, message: 'Password must be 8-32 characters long' }}
                            maxLength={{ value: 32, message: 'Password must be 8-32 characters long' }}
                          />
                          <div className="absolute mt-1 mr-3 text-gray-500">
                            <button type="button" 
                              className='hover:text-green-600'
                              onClick={() => setShowPassword(!showPassword)}>
                              {showPassword ? <IoEyeOutline size={20} /> : <IoEyeOffOutline size={20} />}
                            </button>
                          </div>
                        </div>
                        <div className="relative w-full flex items-center justify-end">
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
                            validate={value => value === password.current || 'The passwords do not match'}
                          />
                          <div className="absolute mt-1 mr-3 text-gray-500">
                            <button type="button" 
                              className='hover:text-green-600'
                              onClick={() => setShowConfirmPassword(!showConfirmPassword)}>
                              {showConfirmPassword ? <IoEyeOutline size={20} /> : <IoEyeOffOutline size={20} />}
                            </button>
                          </div>
                        </div>
                        {error && <span className="text-secondary.main text-center mb-4">{error}</span>}
                        <div className="btn-submit w-full mt-4">
                          <button
                            disabled={loading}
                            type="submit"
                            className={clsx(
                              loading && 'cursor-not-allowed disabled:opacity-50',
                              'bg-green-500 text-white px-6 py-2 rounded-md font-semibold text-base outline-none w-full hover:bg-green-600 hover:border-green-600 border-green-500 border-2 block',
                            )}
                          >
                            Create New Account
                          </button>
                        </div>
                    </div>
               </div>
               </form>
            </div>



      {/* <h2 className="mb-10 font-bold text-xl sm:text-2xl text-left w-full">Create new account</h2>
      <form className="mb-8 flex flex-col w-full text-sm" onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-4">
          <InputText
            label="First Name"
            name="firstName"
            register={register}
            errors={errors}
            required={{ value: true, message: 'First name is required' }}
          />
        </div>
        <div className="mb-4">
          <InputText
            label="Last Name"
            name="lastName"
            register={register}
            errors={errors}
            required={{ value: true, message: 'Last name is required' }}
          />
        </div>
        <div className="mb-4">
          <InputText
            label="Email"
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
        <div className="mb-4 relative">
          <InputText
            label="Password"
            name="password"
            type={showPassword ? 'text' : 'password'}
            register={register}
            errors={errors}
            required={{ value: true, message: 'Password is required' }}
            minLength={{ value: 8, message: 'Password must be 8-32 characters long' }}
            maxLength={{ value: 32, message: 'Password must be 8-32 characters long' }}
          />
          <div className="absolute right-4 top-[79px]">
            <button type="button" onClick={() => setShowPassword(!showPassword)}>
              {showPassword ? <IoEyeOutline size={24} /> : <IoEyeOffOutline size={24} />}
            </button>
          </div>
        </div>
        <div className="mb-4 relative">
          <InputText
            label="Confirm Password"
            name="confirmPassword"
            type={showConfirmPassword ? 'text' : 'password'}
            register={register}
            errors={errors}
            required={{ value: true, message: 'Confirm password is required' }}
            minLength={{ value: 8, message: 'Confirm password must be 8-32 characters long' }}
            maxLength={{ value: 32, message: 'Confirm password must be 8-32 characters long' }}
            validate={value => value === password.current || 'The passwords do not match'}
          />
          <div className="absolute right-4 top-[79px]">
            <button type="button" onClick={() => setShowConfirmPassword(!showConfirmPassword)}>
              {showConfirmPassword ? <IoEyeOutline size={24} /> : <IoEyeOffOutline size={24} />}
            </button>
          </div>
        </div>
        {error && <span className="text-secondary.main text-center mb-4">{error}</span>}
        <div className="btn-submit">
          <button
            disabled={loading}
            type="submit"
            className={clsx(
              loading && 'cursor-not-allowed disabled:opacity-50',
              'w-full py-4 font-medium bg-secondary.main text-white',
            )}
          >
            Create New Account
          </button>
        </div>
      </form>
      <div>
        <Link to="/signin" className="text-sm text-secondary.main font-medium">
          Login to your account
        </Link>
      </div> */}
    </>
  )
}

export default SignInForm
