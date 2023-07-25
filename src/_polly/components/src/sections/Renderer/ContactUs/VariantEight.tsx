import clsx from 'clsx'
import { motion } from 'framer-motion'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { BiUserCircle } from 'react-icons/bi'
import { GoPrimitiveDot } from 'react-icons/go'
import { HiOutlineMail } from 'react-icons/hi'
import { MdOutlineAlternateEmail } from 'react-icons/md'
import { RiMessage2Line } from 'react-icons/ri'
import InputText from '../../../../../../components/common/InputText'
import TextArea from '../../../../../../components/common/TextArea'
import { ContactUsSection } from '../../types'

export default function VariantEight({ section }: { section: ContactUsSection }) {
  const title = section.variables.find(variable => variable.name === 'TITLE')?.data
  //   const media =
  //     section.variables.find(variable => variable.name === 'MEDIA')?.data ??
  //     'https://images.unsplash.com/photo-1660236822651-4263beb35fa8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80'

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm()

  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  const onSubmit = async () => {
    setLoading(true)
    try {
    } catch (error) {
      setError('Something went wrong!')
    }
    setLoading(false)
  }

  const inputClasses = {
    classInput: 'input block focus:outline-none mx-auto pl-14 p-2.5 border-2 lg:w-10/12 w-11/12 rounded-none',
    classLabel: 'font-extralight text-sm inline-block absolute left-32 top-4',
  }

  return (
    <div className="mx-auto my-8 container">
      <div className="flex">
        <div className="w-11/12 hidden lg:block">
          <img
            className="w-full"
            src="https://images.unsplash.com/photo-1554679665-f5537f187268?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
            alt=""
          />
        </div>
        <div className="w-full flex items-center">
          <div className="text-center w-full">
            <h1 className="text-[#B48B7E] font-head text-4xl">Reservation</h1>
            <h1 className="font-sub text-4xl">{title}</h1>
            <div className="text-[#B48B7E] mt-2 mb-8 w-28 mx-auto flex items-center">
              <div className="w-full">
                <div className="bg-[#B48B7E] h-[1px]"></div>
              </div>
              <span className="mx-2">
                <GoPrimitiveDot></GoPrimitiveDot>
              </span>
              <div className="w-full">
                <div className="bg-[#B48B7E] h-[1px]"></div>
              </div>
            </div>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ type: 'spring', stiffness: 100, duration: 300 }}
              viewport={{ once: true }}
            >
              <form className="grid lg:grid-cols-1 md:grid-cols-2" onSubmit={handleSubmit(onSubmit)}>
                <div className="relative mb-2">
                  <div className="flex absolute inset-y-0 left-0 items-center pl-8 md:pl-8 lg:pl-20 pointer-events-none">
                    <span className="text-[#B48B7E]">
                      <BiUserCircle />
                    </span>
                  </div>
                  <InputText
                    {...inputClasses}
                    label="First Name"
                    name="firstname"
                    register={register}
                    errors={errors}
                    required={{ value: true, message: 'First name is required' }}
                  />
                </div>
                <div className="relative mb-2">
                  <div className="flex absolute inset-y-0 left-0 items-center pl-8 md:pl-8 lg:pl-20 pointer-events-none">
                    <span className="text-[#B48B7E]">
                      <BiUserCircle />
                    </span>
                  </div>
                  <InputText
                    {...inputClasses}
                    label="Last Name"
                    name="lastname"
                    register={register}
                    errors={errors}
                    required={{ value: true, message: 'Last name is required' }}
                  />
                </div>
                <div className="relative mb-2">
                  <div className="flex absolute inset-y-0 left-0 items-center pl-8 md:pl-8 lg:pl-20 pointer-events-none">
                    <span className="text-[#B48B7E]">
                      <HiOutlineMail />
                    </span>
                  </div>
                  <InputText
                    {...inputClasses}
                    label="Email"
                    name="email"
                    register={register}
                    errors={errors}
                    required={{ value: true, message: 'email name is required' }}
                    pattern={{
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message: 'Invalid email address',
                    }}
                  />
                </div>
                <div className="relative mb-2">
                  <div className="flex absolute inset-y-0 left-0 items-center pl-8 md:pl-8 lg:pl-20 pointer-events-none">
                    <span className="text-[#B48B7E]">
                      <MdOutlineAlternateEmail />
                    </span>
                  </div>
                  <InputText
                    {...inputClasses}
                    label="Subject"
                    name="subject"
                    register={register}
                    errors={errors}
                    required={{ value: true, message: 'Subject is required' }}
                  />
                </div>
                <div className="relative mb-2">
                  <div className="flex absolute inset-y-0 left-0 items-center pl-8 md:pl-8 lg:pl-20 pointer-events-none">
                    <span className="text-[#B48B7E]">
                      <RiMessage2Line />
                    </span>
                  </div>
                  <TextArea
                    {...inputClasses}
                    label="Message"
                    name="message"
                    register={register}
                    errors={errors}
                    required={{ value: true, message: 'Message is required' }}
                  />
                </div>
                {error && <span className="text-secondary.main text-center mb-4">{error}</span>}
                <div className="btn-submit">
                  <button
                    disabled={loading}
                    type="submit"
                    className={clsx(
                      loading && 'cursor-not-allowed disabled:opacity-50',
                      'btn mx-auto rounded-none bg-[#161D27] hover:bg-[#B48B7E] hover:border-[#B48B7E] py-2 font-thin text-white lg:w-10/12 w-11/12',
                    )}
                  >
                    Find A Table
                  </button>
                </div>
              </form>
            </motion.div>
          </div>
        </div>
        <div className="w-11/12 hidden lg:block">
          <img
            className="w-full"
            src="https://images.unsplash.com/photo-1578474846511-04ba529f0b88?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
            alt=""
          />
        </div>
      </div>
    </div>
  )
}
