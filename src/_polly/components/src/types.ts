import { CSSProperties } from 'react'
import { BaseEditor } from 'slate'
import { ReactEditor } from 'slate-react'
import { ButtonLinkTypes } from './constants'

export type TextAlign = 'left' | 'center' | 'right' | 'justify'

export type CustomEditor = BaseEditor & ReactEditor

export type ParagraphElement = {
  type: 'paragraph'
  align?: TextAlign
  color?: string
  children: CustomText[]
}

export type CodeElement = {
  type: 'code'
  align?: TextAlign
  color?: string
  children: CustomText[]
}

export type H1Element = {
  type: 'h1'
  align?: TextAlign
  color?: string
  children: CustomText[]
}

export type H2Element = {
  type: 'h2'
  align?: TextAlign
  color?: string
  children: CustomText[]
}

export type H3Element = {
  type: 'h3'
  align?: TextAlign
  color?: string
  children: CustomText[]
}

export type H4Element = {
  type: 'h4'
  align?: TextAlign
  color?: string
  children: CustomText[]
}

export type H5Element = {
  type: 'h5'
  align?: TextAlign
  color?: string
  children: CustomText[]
}

export type H6Element = {
  type: 'h6'
  align?: TextAlign
  color?: string
  children: CustomText[]
}

export type ListItemElement = {
  type: 'list-item'
  align?: TextAlign
  color?: string
  children: CustomText[]
}

export type NumberedListElement = {
  type: 'numbered-list'
  align?: TextAlign
  color?: string
  children: CustomText[]
}

export type BulletedListElement = {
  type: 'bulleted-list'
  align?: TextAlign
  color?: string
  children: CustomText[]
}

export type BlockQuotetElement = {
  type: 'block-quote'
  align?: TextAlign
  color?: string
  children: CustomText[]
}

export type ImageElement = {
  type: 'image'
  url: string
  align?: TextAlign
  color?: string
  children: CustomText[]
}

export type VideoElement = {
  type: 'video'
  url: string
  align?: TextAlign
  color?: string
  children: CustomText[]
}

export type CustomElement =
  | ParagraphElement
  | CodeElement
  | H1Element
  | H2Element
  | H3Element
  | H4Element
  | H5Element
  | H6Element
  | ListItemElement
  | NumberedListElement
  | BulletedListElement
  | BlockQuotetElement
  | ImageElement
  | VideoElement

export type FormattedText = {
  text: string
  bold?: boolean
  italic?: boolean
  underline?: boolean
  code?: boolean
  striketrough?: boolean
  color?: string
  highlightColor?: string
  link?: {
    to: string
    type: ButtonLinkTypes
  }
  fontFamily?: string
  style?: CSSProperties
  className?: string
}

export type Formats =
  | 'bold'
  | 'italic'
  | 'underline'
  | 'code'
  | 'striketrough'
  | 'style'
  | 'className'
  | 'h1'
  | 'h2'
  | 'h3'
  | 'h4'
  | 'h5'
  | 'h6'
  | 'list-item'
  | 'left'
  | 'center'
  | 'right'
  | 'justify'
  | 'numbered-list'
  | 'bulleted-list'
  | 'block-quote'

export type CustomText = FormattedText
