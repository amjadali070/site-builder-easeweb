/* eslint-disable */
import EmojiPicker, { IEmojiData } from 'emoji-picker-react'
import React, { PropsWithChildren, useCallback, useEffect, useState } from 'react'
import { HexColorPicker } from 'react-colorful'
import { createEditor, Descendant, Editor as SlateEditor, Element as SlateElement, Transforms } from 'slate'
import {
  Editable,
  ReactEditor,
  RenderElementProps,
  RenderLeafProps,
  Slate,
  useFocused,
  useSelected,
  useSlate,
  useSlateStatic,
  withReact,
} from 'slate-react'

import { CustomEditor, CustomElement, CustomText, Formats, ImageElement, VideoElement } from './types'

import ModalDialogV2 from '../new/ModalDialogV2'

import clsx from 'clsx'
import { IoTrash } from 'react-icons/io5'
import { ButtonLinkTypes } from '../../_polly/components/src/constants'
import ButtonLink from '../new/ButtonEditor/ButtonLink'
import ImageUploader from '../new/ImageUploader'
import GoogleFonts from '../new/textEditor/GoogleFonts'
import EmbedModal from './EmbedModal'
import FontList from './FontList'
import {
  AlightCenterIcon,
  AlightJustifyIcon,
  AlightLeftIcon,
  AlightRightIcon,
  BoldIcon,
  EmojiIcon,
  ItalicIcon,
  LinkIcon,
  ListBulletedIcon,
  ListNumberedIcon,
  StrikeThroughIcon,
  UnderlineIcon,
} from './icons'
import TextColorIcon from './TextColorIcon'
import TextHighlightColorIcon from './TextHighlightColorIcon'

declare module 'slate' {
  interface CustomTypes {
    Editor: CustomEditor
    Element: CustomElement
    Text: CustomText
  }
}

type ColorPickerType = 'text' | 'highlight' | 'background' | undefined

const LIST_TYPES = ['numbered-list', 'bulleted-list']
const TEXT_ALIGN_TYPES = ['left', 'center', 'right', 'justify']

interface EditorProps {
  backgroundColor?: string
  backgroundImage?: string
  onBackgroundColorChange?: (color: any) => void
  initialValue?: Descendant[]
  onChange?: (value: Descendant[]) => void
  readOnly?: boolean
  previewMode?: boolean
  showListSelectors?: boolean
}

export default function SectionSlate({
  backgroundColor,
  backgroundImage,
  onBackgroundColorChange,
  initialValue = [],
  onChange,
  readOnly = false,
  previewMode = false,
  showListSelectors = false,
}: EditorProps) {
  const [editor] = useState(() => withImages(withReact(createEditor())))

  const renderElement = useCallback((props: RenderElementProps) => <Element {...props} />, [])

  const renderLeaf = useCallback((props: RenderLeafProps) => <Leaf {...props} />, [])

  const [showAlignOptions, setShowAlignOptions] = useState(false)
  const [showListOptions, setShowListOptions] = useState(false)
  const [showEmojiPicker, setShowEmojiPicker] = useState(false)
  const [colorPickerType, setColorPickerType] = useState<ColorPickerType>(undefined)
  const [showLinkModal, setShowLinkModal] = useState(false)
  const [showFontModal, setShowFontModal] = useState(false)
  const [showImageUploader, setShowImageUploader] = useState(false)
  const [showEmbedModal, setShowEmbedModal] = useState(false)

  const handleEmojiSelect = (_event: React.MouseEvent<Element, MouseEvent>, data: IEmojiData) => {
    editor.insertText(data.emoji)
  }

  const handleColorPicker = (color: any) => {
    if (colorPickerType === 'background') onBackgroundColorChange?.(color)
    if (colorPickerType === 'text') setTextColorMark({ editor, color, isHighlight: false })
    if (colorPickerType === 'highlight') setTextColorMark({ editor, color, isHighlight: true })
  }

  const toggleColorPicker = (type: ColorPickerType) => {
    if (colorPickerType === type) {
      setColorPickerType(undefined)
      return
    }
    setColorPickerType(type)
  }

  const toggleExpandedOptions = (clicked: 'color' | 'emoji') => {
    if (clicked === 'color') {
      setShowEmojiPicker(false)
    }

    if (clicked === 'emoji') {
      setColorPickerType(undefined)
    }
  }

  useEffect(() => {
    if (previewMode) {
      editor.children = initialValue
      editor.onChange()
    }
  }, [initialValue, previewMode])

  return (
    <>
      <GoogleFonts />
      <Slate editor={editor} value={initialValue} {...{ onChange }}>
        <Editable
          {...{ renderElement, renderLeaf }}
          readOnly={readOnly}
          className={clsx(!previewMode && 'border-b border-black mt-3 p-1', previewMode && 'w-full')}
          style={{ backgroundColor, backgroundImage }}
        />

        {!previewMode && (
          <div className="border border-black px-4 mt-3">
            <div className="flex items-center justify-between py-4">
              <div className="border-r border-black pr-4 flex-grow">
                <button type="button" onClick={() => setShowFontModal(true)}>
                  Font
                </button>
              </div>

              <div className="flex items-center gap-x-4 px-3">
                <MarkButton format="bold">
                  <BoldIcon />
                </MarkButton>
                <MarkButton format="italic">
                  <ItalicIcon />
                </MarkButton>
                <MarkButton format="underline">
                  <UnderlineIcon />
                </MarkButton>
                <MarkButton format="striketrough">
                  <StrikeThroughIcon />
                </MarkButton>

                <button
                  onClick={() => {
                    toggleColorPicker('text')
                    toggleExpandedOptions('color')
                  }}
                >
                  <TextColorIcon />
                </button>

                <button
                  onClick={() => {
                    toggleColorPicker('highlight')
                    toggleExpandedOptions('color')
                  }}
                >
                  <TextHighlightColorIcon />
                </button>

                {showListSelectors && (
                  <>
                    <OptionSelector>
                      <button onClick={() => setShowAlignOptions(true)}>
                        <AlightLeftIcon />
                      </button>

                      {showAlignOptions && (
                        <OptionSelectorModal>
                          <OptionSelectorItem format="left" onClick={() => setShowAlignOptions(false)}>
                            <AlightLeftIcon />
                          </OptionSelectorItem>
                          <OptionSelectorItem format="center" onClick={() => setShowAlignOptions(false)}>
                            <AlightCenterIcon />
                          </OptionSelectorItem>
                          <OptionSelectorItem format="right" onClick={() => setShowAlignOptions(false)}>
                            <AlightRightIcon />
                          </OptionSelectorItem>
                          <OptionSelectorItem format="justify" onClick={() => setShowAlignOptions(false)}>
                            <AlightJustifyIcon />
                          </OptionSelectorItem>
                        </OptionSelectorModal>
                      )}
                    </OptionSelector>

                    <OptionSelector>
                      <button onClick={() => setShowListOptions(true)}>
                        <ListBulletedIcon />
                      </button>

                      {showListOptions && (
                        <OptionSelectorModal>
                          <OptionSelectorItem format="bulleted-list" onClick={() => setShowListOptions(false)}>
                            <ListBulletedIcon />
                          </OptionSelectorItem>
                          <OptionSelectorItem format="numbered-list" onClick={() => setShowListOptions(false)}>
                            <ListNumberedIcon />
                          </OptionSelectorItem>
                        </OptionSelectorModal>
                      )}
                    </OptionSelector>
                  </>
                )}

                <button
                  type="button"
                  onClick={() => {
                    setShowEmojiPicker(!showEmojiPicker)
                    toggleExpandedOptions('emoji')
                  }}
                >
                  <EmojiIcon />
                </button>

                <button type="button" onClick={() => setShowLinkModal(!showEmojiPicker)}>
                  <LinkIcon />
                </button>
              </div>
            </div>

            {showEmojiPicker && (
              <div className="pb-4">
                <EmojiPicker onEmojiClick={handleEmojiSelect} pickerStyle={{ width: '100%' }} />
              </div>
            )}
            {colorPickerType && (
              <div className="pb-4">
                <HexColorPicker color={backgroundColor} onChange={handleColorPicker} style={{ width: '100%' }} />
              </div>
            )}
          </div>
        )}
      </Slate>

      <ModalDialogV2 open={showLinkModal} onBack={() => setShowLinkModal(false)}>
        <ButtonLink
          onSave={l => {
            setLinkMark(editor, l)
            setShowLinkModal(false)
          }}
        />
      </ModalDialogV2>

      <ModalDialogV2 open={showFontModal} onBack={() => setShowFontModal(false)}>
        <FontList
          onSelect={font => {
            setFontMark(editor, font)
            setShowFontModal(false)
          }}
        />
      </ModalDialogV2>

      <ModalDialogV2 title="Add image" open={showImageUploader} onBack={() => setShowImageUploader(false)}>
        <ImageUploader
          onSubmit={url => {
            insertImage(editor, url)
            setShowImageUploader(false)
          }}
          buttonLabel="Select Image"
        />
      </ModalDialogV2>

      <ModalDialogV2 title="Embed Video" open={showEmbedModal} onBack={() => setShowEmbedModal(false)}>
        <EmbedModal
          onAdd={url => {
            insertEmbedVideo(editor, url)
            setShowEmbedModal(false)
          }}
        />
      </ModalDialogV2>
    </>
  )
}

const withImages = (editor: CustomEditor) => {
  const { isVoid } = editor

  editor.isVoid = element => {
    return element.type === 'image' ? true : isVoid(element)
  }

  return editor
}

const insertImage = (editor: CustomEditor, url: string) => {
  const image: ImageElement = { type: 'image', url, children: [{ text: '' }] }
  Transforms.insertNodes(editor, image)
}

const insertEmbedVideo = (editor: CustomEditor, url: string) => {
  const video: VideoElement = { type: 'video', url, children: [{ text: '' }] }
  Transforms.insertNodes(editor, video)
}

const setFontMark = (editor: CustomEditor, font: string) => {
  SlateEditor.addMark(editor, 'fontFamily', font)
}

const setLinkMark = (editor: CustomEditor, link: { to: string; type: ButtonLinkTypes }) => {
  SlateEditor.addMark(editor, 'link', link)
}

const setTextColorMark = ({
  editor,
  color,
  isHighlight,
}: {
  editor: CustomEditor
  color: any
  isHighlight: boolean
}) => {
  SlateEditor.addMark(editor, isHighlight ? 'highlightColor' : 'color', color)
}

const isBlockActive = (editor: CustomEditor, format: Formats, blockType = 'type') => {
  const { selection } = editor
  if (!selection) return false

  const [match] = Array.from(
    SlateEditor.nodes(editor, {
      at: SlateEditor.unhangRange(editor, selection),
      match: n => !SlateEditor.isEditor(n) && SlateElement.isElement(n) && (n as any)[blockType] === format,
    }),
  )

  return !!match
}

const toggleBlock = (editor: CustomEditor, format: any) => {
  const isActive = isBlockActive(editor, format, TEXT_ALIGN_TYPES.includes(format) ? 'align' : 'type')
  const isList = LIST_TYPES.includes(format)

  Transforms.unwrapNodes(editor, {
    match: n =>
      !SlateEditor.isEditor(n) &&
      SlateElement.isElement(n) &&
      LIST_TYPES.includes(n.type) &&
      !TEXT_ALIGN_TYPES.includes(format),
    split: true,
  })
  let newProperties: Partial<SlateElement>
  if (TEXT_ALIGN_TYPES.includes(format)) {
    newProperties = {
      align: isActive ? undefined : format,
    }
  } else {
    newProperties = {
      type: isActive ? 'paragraph' : isList ? 'list-item' : (format as any),
    }
  }
  Transforms.setNodes<SlateElement>(editor, newProperties)

  if (!isActive && isList) {
    const block = { type: format, children: [] }
    Transforms.wrapNodes(editor, block)
  }
}

const toggleMark = (editor: CustomEditor, format: Formats) => {
  const isActive = isMarkActive(editor, format)

  if (isActive) {
    SlateEditor.removeMark(editor, format)
  } else {
    SlateEditor.addMark(editor, format, true)
  }
}

const isMarkActive = (editor: CustomEditor, format: Formats) => {
  const marks = SlateEditor.marks(editor) as any
  return marks ? marks[format] === true : false
}

const MarkButton = ({ format, children }: PropsWithChildren<{ format: Formats }>) => {
  const editor: CustomEditor = useSlate()

  return (
    <button
      onMouseDown={event => {
        event.preventDefault()
        toggleMark(editor, format)
      }}
    >
      {children}
    </button>
  )
}

const BlockButton = ({ format, children, onClick }: PropsWithChildren<{ format: Formats; onClick?: () => void }>) => {
  const editor = useSlate()
  return (
    <button
      onMouseDown={event => {
        event.preventDefault()
        toggleBlock(editor, format)
        onClick?.()
      }}
    >
      {children}
    </button>
  )
}

const Leaf = ({ attributes, children, leaf }: RenderLeafProps) => {
  if (leaf.link) {
    children = <a href={leaf.link.to}>{children}</a>
  }

  if (leaf.style) {
    children = <span style={leaf.style}>{children}</span>
  }

  if (leaf.className) {
    children = <span className={leaf.className}>{children}</span>
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

const Element = ({ attributes, children, element }: RenderElementProps) => {
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

const OptionSelector = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="relative" style={{ display: 'inherit' }}>
      {children}
    </div>
  )
}

const OptionSelectorModal = ({ children }: { children: React.ReactNode }) => {
  return <div className="absolute top-0 left-0 z-10 bg-white border border-black p-1">{children}</div>
}

const OptionSelectorItem = ({
  children,
  format,
  onClick,
}: {
  children: React.ReactNode
  format: Formats
  onClick?: () => void
}) => {
  return <BlockButton {...{ format, onClick }}>{children}</BlockButton>
}
