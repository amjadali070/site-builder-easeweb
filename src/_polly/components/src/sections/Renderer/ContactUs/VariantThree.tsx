import clsx from 'clsx'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import InputText from '../../../../../../components/common/InputText'
import TextArea from '../../../../../../components/common/TextArea'
import { ContactUsSection } from '../../types'

export default function VariantThree({ section }: { section: ContactUsSection }) {
  const title = section.variables.find(variable => variable.name === 'TITLE')?.data
  const media =
    section.variables.find(variable => variable.name === 'MEDIA')?.data ??
    'https://images.unsplash.com/photo-1660236822651-4263beb35fa8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80'

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
    classInput: 'font-extralight text-sm w-full border border-black px-3 py-2',
    classLabel: 'font-extralight text-sm inline-block pb-0 mb-1',
  }

  return (
    <div className="flex bg-[#F5EEE9] flex-col-reverse lg:flex-row">
      <div className="flex-1 flex justify-center pt-0 pb-14 md:py-14">
        <div className="space-y-5">
          <p className="text-[60px] text-center md:text-left uppercase font-bold hidden md:block">{title}</p>

          <form className="mb-8 flex flex-col w-10/12 md:w-[350px] mx-auto text-sm" onSubmit={handleSubmit(onSubmit)}>
            <div className="grid grid-cols-2 gap-3">
              <div className="mb-5">
                <InputText
                  {...inputClasses}
                  label="First Name"
                  name="firstName"
                  register={register}
                  errors={errors}
                  required={{ value: true, message: 'First name is required' }}
                />
              </div>
              <div className="mb-5">
                <InputText
                  {...inputClasses}
                  label="Last Name"
                  name="lastName"
                  register={register}
                  errors={errors}
                  required={{ value: true, message: 'Last name is required' }}
                />
              </div>
            </div>
            <div className="mb-5">
              <InputText
                {...inputClasses}
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
            <div className="mb-5">
              <InputText
                {...inputClasses}
                label="Subject"
                name="subject"
                register={register}
                errors={errors}
                required={{ value: true, message: 'Subject is required' }}
              />
            </div>
            <div className="mb-5">
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
                  'px-5 py-3 font-medium bg-black text-white',
                )}
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>

      <div className="flex-1 relative">
        <p className="text-[60px] font-bold uppercase text-center py-10 md:hidden">{title}</p>
        <div className="w-10/12 mx-auto md:w-full h-[250px] md:h-full top-0 left-0">
          <img className="h-full w-full object-cover object-center bg-black" src={media} alt="" />
        </div>
      </div>
    </div>
  )
}
