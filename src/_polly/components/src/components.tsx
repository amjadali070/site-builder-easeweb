import { IoTrash } from 'react-icons/io5'
import { Transforms } from 'slate'
import { ReactEditor, RenderElementProps, RenderLeafProps, useFocused, useSelected, useSlateStatic } from 'slate-react'
import { ImageElement, VideoElement } from './types'

export const Leaf = ({ attributes, children, leaf }: RenderLeafProps) => {
  if (leaf.link) {
    children = <a href={leaf.link.to}>{children}</a>
  }

  if (leaf.fontFamily) {
    children = <span style={{ fontFamily: leaf.fontFamily }}>{children}</span>
  }

  if (leaf.bold) {
    children = <strong>{children}</strong>
  }

  if (leaf.code) {
    children = <code>{children}</code>
  }

  if (leaf.italic) {
    children = <em>{children}</em>
  }

  if (leaf.underline) {
    children = <u>{children}</u>
  }

  if (leaf.striketrough) {
    children = <s>{children}</s>
  }

  if (leaf.highlightColor) {
    children = <span style={{ backgroundColor: leaf.highlightColor }}>{children}</span>
  }

  if (leaf.color) {
    children = <span style={{ color: leaf.color }}>{children}</span>
  }

  return <span {...attributes}>{children}</span>
}

export const Element = ({ attributes, children, element }: RenderElementProps) => {
  const style = { textAlign: element.align, color: element.color }

  switch (element.type) {
    case 'block-quote':
      return (
        <blockquote style={style} {...attributes}>
          {children}
        </blockquote>
      )
    case 'bulleted-list':
      return (
        <ul style={style} {...attributes}>
          {children}
        </ul>
      )
    case 'h1':
      return (
        <h1 style={style} {...attributes} className="font-bold text-4xl">
          {children}
        </h1>
      )
    case 'h2':
      return (
        <h2 style={style} {...attributes} className="font-bold text-3xl">
          {children}
        </h2>
      )
    case 'h3':
      return (
        <h3 style={style} {...attributes} className="font-bold text-2xl">
          {children}
        </h3>
      )
    case 'h4':
      return (
        <h4 style={style} {...attributes} className="font-bold text-xl">
          {children}
        </h4>
      )
    case 'h5':
      return (
        <h5 style={style} {...attributes} className="font-bold text-lg">
          {children}
        </h5>
      )
    case 'h6':
      return (
        <h6 style={style} {...attributes} className="font-bold text-bage">
          {children}
        </h6>
      )
    case 'list-item':
      return (
        <li style={style} {...attributes}>
          {children}
        </li>
      )
    case 'numbered-list':
      return (
        <ol style={style} {...attributes}>
          {children}
        </ol>
      )
    case 'image':
      return <Image {...{ attributes, children, element }} />
    case 'video':
      return <Video {...{ attributes, children, element }} />
    default:
      return (
        <p style={style} {...attributes}>
          {children}
        </p>
      )
  }
}

const Image = ({ attributes, children, element }: RenderElementProps) => {
  const editor = useSlateStatic()
  const path = ReactEditor.findPath(editor, element)

  const selected = useSelected()
  const focused = useFocused()

  return (
    <div {...attributes}>
      {children}
      <div contentEditable={false} className="relative flex justify-center">
        <img
          src={(element as ImageElement).url}
          className={`block w-full h-auto text-center`}
          style={{
            boxShadow: focused && selected ? '0 0 0 3px #B4D5FF' : 'none',
          }}
        />
        <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center z-20">
          <div
            onClick={e => {
              e.stopPropagation()
              Transforms.removeNodes(editor, { at: path })
            }}
            className={`bg-white shadow-md p-1 cursor-pointer rounded-md ${selected && focused ? 'inline' : 'hidden'}`}
          >
            <IoTrash size={20} />
          </div>
        </div>
      </div>
    </div>
  )
}

const Video = ({ attributes, children, element }: RenderElementProps) => {
  return (
    <div {...attributes}>
      {children}
      <div
        style={{
          padding: '75% 0 0 0',
          position: 'relative',
        }}
      >
        <iframe
          style={{
            position: 'absolute',
            top: '0',
            left: '0',
            width: '100%',
            height: '100%',
          }}
          src={(element as VideoElement).url}
          frameBorder={0}
          allowFullScreen
        />
      </div>
    </div>
  )
}
