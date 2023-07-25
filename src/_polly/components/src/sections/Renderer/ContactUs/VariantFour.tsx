import { ContactUsSection } from '../../types'
import { useForm } from 'react-hook-form'
import InputText from '../../../../../../components/common/InputText'
import TextArea from '../../../../../../components/common/TextArea'
import { useState } from 'react'
import clsx from 'clsx'

export default function VariantFour({ section }: { section: ContactUsSection }) {
  const title = section.variables.find(variable => variable.name === 'TITLE')?.data
  const subtitle =
    section.variables.find(variable => variable.name === 'SUBTITLE')?.data ??
    'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters'

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
    <div className="bg-[#F5EEE9]">
      <div className="flex justify-center py-10 md:py-14">
        <div className="space-y-8 w-10/12 max-w-[700px]">
          <p className="text-[45px] text-center font-medium">{title}</p>
          <p className="text-sm text-center">{subtitle}</p>

          <form className="pt-12 flex flex-col md:w-10/12 mx-auto text-sm" onSubmit={handleSubmit(onSubmit)}>
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
    </div>
  )
}
