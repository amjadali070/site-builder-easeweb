import { ContactUsSection } from '../../types'
import { useForm } from 'react-hook-form'
import InputText from '../../../../../../components/common/InputText'
import { useState } from 'react'
import clsx from 'clsx'

export default function VariantFive({ section }: { section: ContactUsSection }) {
  const title = section.variables.find(variable => variable.name === 'TITLE')?.data
  const subtitle =
    section.variables.find(variable => variable.name === 'SUBTITLE')?.data ??
    'Be the first to find out about sales, styles and everything between.'
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
    classInput: 'bg-transparent font-extralight text-sm w-full border border-black px-3 py-2',
    classLabel: 'font-extralight text-sm inline-block pb-0 mb-1',
  }

  return (
    <div className="bg-[#B7B6C4]">
      <div className="flex justify-center md:py-10 md:py-14 font-light md:min-h-[550px]">
        <div className="md:space-y-5 w-full md:max-w-[750px] md:w-10/12 relative">
          <div className="md:absolute w-full md:w-7/12 top-0 right-0 z-0">
            <div className="mx-auto w-full h-[220px] md:h-[350px] top-0 left-0">
              <img className="h-full w-full object-cover object-center bg-black" src={media} alt="" />
            </div>
          </div>

          <div className="top-10 md:absolute bg-[#efefef] w-full md:w-7/12 px-10 py-12 z-1">
            <p className="text-[40px]">{title}</p>
            <p className="text-sm">{subtitle}</p>

            <form className="py-7 flex flex-col mx-auto text-sm" onSubmit={handleSubmit(onSubmit)}>
              <div className="grid gap-3">
                <div className="">
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
    </div>
  )
}
