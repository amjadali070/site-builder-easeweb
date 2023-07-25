import clsx from 'clsx'
import React from 'react'
import HeadlessInput from 'src/components/new/HeadlessInput'
import { TextProps } from '../modal/section/SectionTitle'

interface IProps {
  className?: string
  settings: TextProps['settings']
  defaultValue: string
  onChange?: (value: string) => void
  editorRef?: any
}

const TextEditor = (props: IProps) => {
  const { defaultValue, className, settings, onChange, editorRef } = props
  const { backgroundColor, backgroundImage, size, bold, italic, color, font, textAlign, underline } = settings

  return (
    <div className={clsx('polly-text-editor', className)}>
      <div
        className="relative"
        style={{
          backgroundColor: backgroundColor || 'black',
        }}
      >
        {backgroundImage && (
          <div className="absolute inset-0 w-full h-full">
            <img className="object-cover w-full h-full" src={backgroundImage} alt="background" />
          </div>
        )}
        <HeadlessInput
          ref={editorRef}
          className={clsx(
            'relative px-4 py-8 border border-black',
            bold && 'font-bold',
            italic && 'italic',
            underline && 'underline',
            `text-${textAlign}`,
            size === 'heading1' && 'text-4xl',
            size === 'heading2' && 'text-3xl',
            size === 'heading3' && 'text-2xl',
            size === 'heading4' && 'text-xl',
            size === 'heading5' && 'text-lg',
            size === 'heading6' && 'text-base',
            size === 'paragraph' && 'text-base',
          )}
          style={{
            color: color || 'white',
            fontFamily: font,
          }}
          defaultValue={defaultValue}
          onChange={onChange}
        />
      </div>
    </div>
  )
}

export default TextEditor
