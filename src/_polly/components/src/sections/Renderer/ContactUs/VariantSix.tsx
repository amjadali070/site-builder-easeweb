import { ContactUsSection } from '../../types'
import { useForm } from 'react-hook-form'
import InputText from '../../../../../../components/common/InputText'
import { useState } from 'react'
import clsx from 'clsx'

export default function VariantSix({ section }: { section: ContactUsSection }) {
  const title = section.variables.find(variable => variable.name === 'TITLE')?.data
  const subtitle =
    section.variables.find(variable => variable.name === 'SUBTITLE')?.data ??
    'Join our email list and get access to specials deals exclusive to our subscribers.'

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
    <div className="bg-[#EFEFEF]">
      <div className="flex justify-center py-10 md:py-14 font-light">
        <div className="space-y-6 w-10/12 max-w-[700px]">
          <p className="text-[45px] text-center">{title}</p>
          <p className="text-sm text-center">{subtitle}</p>

          <form className="py-7 flex flex-col md:w-10/12 mx-auto text-sm" onSubmit={handleSubmit(onSubmit)}>
            <div className="grid gap-5 md:gap-0 md:grid-cols-[1fr_0.4fr] items-end">
              <div className="">
                <InputText
                  {...inputClasses}
                  label="Enter your email here"
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
              <div className="btn-submit">
                <button
                  disabled={loading}
                  type="submit"
                  className={clsx(
                    loading && 'cursor-not-allowed disabled:opacity-50',
                    'w-full px-5 py-[9px] text-sm bg-black text-white',
                  )}
                >
                  Submit
                </button>
              </div>
            </div>
            {error && <span className="text-secondary.main text-center pt-4">{error}</span>}
          </form>
        </div>
      </div>
    </div>
  )
}
