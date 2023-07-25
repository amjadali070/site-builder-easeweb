import clsx from 'clsx'
import React, { HTMLInputTypeAttribute } from 'react'
import { FieldErrors, FieldValues, Path, RegisterOptions, UseFormRegister } from 'react-hook-form'

interface InputProps extends RegisterOptions<FieldValues> {
  label: string
  name: Path<FieldValues>
  placeholder?: string
  type?: HTMLInputTypeAttribute
  register: UseFormRegister<FieldValues>
  classInput?: string
  classLabel?: string
  errors?: FieldErrors<FieldValues>
  defaultValue?: any
}

const InputText: React.FC<InputProps> = ({
  register,
  label,
  name,
  required,
  errors,
  type = 'text',
  classInput = 'flex-1 border-gray-200 outline-none border-2 p-2 rounded-md hover:border-gray-400 w-full focus:border-green-500',
  classLabel = 'text-black font-extralight text-3xl inline-block pb-3 mb-2',
  placeholder,
  ...props
}) => (
  <>
    <input
      {...register(name, { required, ...props })}
      type={type}
      className={clsx(classInput)}
      placeholder={placeholder}
    />
    {errors?.[name] && <span className="text-secondary.main">{errors?.[name]?.message}</span>}
  </>
)

export default InputText
