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
}

const TextArea: React.FC<InputProps> = ({
  register,
  label,
  name,
  required,
  errors,
  classInput = 'w-full border border-[#E8E8E8] px-4 py-4',
  classLabel = 'block mb-2 text-gray-700',
  placeholder,
  ...props
}) => (
  <>
    <label className={clsx(classLabel)}>
      {label}
      {required && <span className="text-secondary.main">*</span>}
    </label>
    <textarea {...register(name, { required, ...props })} className={clsx(classInput)} placeholder={placeholder} />
    {errors?.[name] && <span className="text-secondary.main">{errors?.[name]?.message}</span>}
  </>
)

export default TextArea
