import React, { useContext, useState } from 'react'
import { HexColorPicker } from 'react-colorful'

import EmojiPicker, { IEmojiData } from 'emoji-picker-react'
import { ReactComponent as LinkIcon } from '../../../assets/icons/toolbar/link-icon.svg'
import { ReactComponent as TextLeftIcon } from '../../../assets/icons/toolbar/text-left.svg'
import { ReactComponent as TextCenterIcon } from '../../../assets/icons/toolbar/text-center.svg'
import { ReactComponent as TextRightIcon } from '../../../assets/icons/toolbar/text-right.svg'
import { ReactComponent as EmojiIcon } from '../../../assets/icons/toolbar/emoji.svg'

import { WebsiteContext } from '../../context/WebsiteContext'

import ColorPalette from '../ColorPalette'
import ModalDialog from '../ModalDialog'
import GoogleFonts from './GoogleFonts'
import { TEXT_ALIGN, TextProps } from '../../modal/section/SectionTitle'

interface TextToolbarProps {
  settings: TextProps['settings']
  onLinkClick?: () => void
  onChange: (setting: TextProps['settings']) => void
  onEmojiClick?: (emoji: IEmojiData) => void
}

interface FontButtonProps {
  label: string
  font: string
}

function getHeadingLabel(heading?: string) {
  if (!heading) return 'Heading 1'
  if (heading.startsWith('heading')) {
    const lastChar = heading.charAt(heading.length - 1)
    return `Heading ${lastChar}`
  }
  return heading
}

export default function TextToolbar(props: TextToolbarProps) {
  const { onChange, settings, onLinkClick, onEmojiClick } = props

  const { addGoogleFont } = useContext(WebsiteContext)
  const [showHeadingModal, setShowHeadingModal] = useState(false)
  const [showFontModal, setShowFontModal] = useState(false)
  const [showColorModal, setShowColorModal] = useState(false)
  const [showColorPicker, setShowColorPicker] = useState(false)
  const [showEmojiPicker, setShowEmojiPicker] = useState(false)

  const updateSetting = <Type, Key extends keyof TextProps['settings']>(key: Key, value: Type) => {
    onChange({ [key]: value })
    setShowHeadingModal(false)
    setShowFontModal(false)
    setShowColorModal(false)
    if (key === 'font') {
      addGoogleFont(value as unknown as string)
    }
  }

  const handleEmojiClick = (_event: React.MouseEvent<Element, MouseEvent>, data: IEmojiData) => {
    if (onEmojiClick) onEmojiClick(data)
    setShowEmojiPicker(false)
  }

  const FontButton = ({ label, font }: FontButtonProps) => (
    <button
      type="button"
      className="w-full mb-4 px-3 py-4 border border-black text-3xl"
      style={{
        fontFamily: font,
        textShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
      }}
      onClick={() => updateSetting('font', font)}
    >
      {label}
    </button>
  )

  return (
    <>
      <div className="px-6 border border-black font-thin">
        <div className="py-3 flex divide-x divide-black border-b border-black">
          <button type="button" className="px-2 grow capitalize" onClick={() => setShowHeadingModal(true)}>
            {getHeadingLabel(settings?.size)}
          </button>
          <button type="button" className="px-2 grow" onClick={() => setShowFontModal(true)}>
            Font
          </button>
        </div>
        <div className="py-3 flex items-center justify-between">
          <button type="button" onClick={() => setShowColorPicker(!showColorPicker)}>
            <span
              className="h-6 w-6 block border border-black"
              style={{
                backgroundColor: settings.color || 'black',
              }}
            />
          </button>
          <button type="button" onClick={() => updateSetting('bold', !settings.bold)} className="font-bold">
            B
          </button>
          <button type="button" onClick={() => updateSetting('italic', !settings.italic)} className="italic">
            I
          </button>
          <button type="button" onClick={() => updateSetting('underline', !settings.underline)} className="underline">
            U
          </button>
          <button type="button" onClick={() => updateSetting('textAlign', TEXT_ALIGN.LEFT)}>
            <TextLeftIcon />
          </button>
          <button type="button" onClick={() => updateSetting('textAlign', TEXT_ALIGN.CENTER)}>
            <TextCenterIcon />
          </button>
          <button type="button" onClick={() => updateSetting('textAlign', TEXT_ALIGN.RIGHT)}>
            <TextRightIcon />
          </button>
          <button type="button" onClick={() => setShowEmojiPicker(!showEmojiPicker)}>
            <EmojiIcon />
          </button>
          <button type="button" onClick={onLinkClick}>
            <LinkIcon
              style={{
                height: '18px',
                width: 'auto',
              }}
            />
          </button>
        </div>

        {showColorPicker ? (
          <div className="mb-6 mt-3">
            <HexColorPicker
              color={settings.color ?? '#000'}
              onChange={(color: any) => updateSetting('color', color)}
              style={{ width: '100%' }}
            />
          </div>
        ) : null}

        {showEmojiPicker ? (
          <div className="mb-6 mt-3">
            <EmojiPicker onEmojiClick={handleEmojiClick} pickerStyle={{ width: '100%' }} />
          </div>
        ) : null}
      </div>
      {/* modals */}
      <div id="modals">
        <ModalDialog title="Heading Selector" open={showHeadingModal} onClose={() => setShowHeadingModal(false)}>
          <div className="p-4">
            <button
              type="button"
              className="w-full mb-4 font-bold px-3 py-4 border border-black text-4xl"
              onClick={() => updateSetting('size', 'heading1')}
            >
              Heading 1
            </button>
            <button
              type="button"
              className="w-full mb-4 font-bold px-3 py-4 border border-black text-3xl"
              onClick={() => updateSetting('size', 'heading2')}
            >
              Heading 2
            </button>
            <button
              type="button"
              className="w-full mb-4 font-bold px-3 py-4 border border-black text-2xl"
              onClick={() => updateSetting('size', 'heading3')}
            >
              Heading 3
            </button>
            <button
              type="button"
              className="w-full mb-4 font-bold px-3 py-4 border border-black text-xl"
              onClick={() => updateSetting('size', 'heading4')}
            >
              Heading 4
            </button>
            <button
              type="button"
              className="w-full mb-4 font-bold px-3 py-4 border border-black text-lg"
              onClick={() => updateSetting('size', 'heading5')}
            >
              Heading 5
            </button>
            <button
              type="button"
              className="w-full mb-4 font-bold px-3 py-4 border border-black text-base"
              onClick={() => updateSetting('size', 'heading6')}
            >
              Heading 6
            </button>
            <button
              type="button"
              className="w-full mb-4 px-3 py-4 border border-black text-base"
              onClick={() => updateSetting('size', 'paragraph')}
            >
              Paragraph
            </button>
          </div>
        </ModalDialog>
        <ModalDialog title="Font Palette" open={showFontModal} onClose={() => setShowFontModal(false)}>
          <div className="p-4">
            <GoogleFonts />
            <FontButton label="Volkhov" font="Volkhov" />
            <FontButton label="Source Serif Pro" font="Source Serif Pro" />
            <FontButton label="Advent Pro" font="Advent Pro" />
            <FontButton label="Allura" font="Allura" />
            <FontButton label="Rock Salt" font="Rock Salt" />
            <FontButton label="Serif" font='"Times New Roman", Times, serif' />
            <FontButton label="Sans Serif" font="sans-serif" />
            <FontButton label="Montserrat" font="Montserrat" />
            <FontButton label="Oswald" font="Oswald" />
            <FontButton label="Raleway" font="Raleway" />
            <FontButton label="Lato" font="Lato" />
            <FontButton label="Elsie" font="Elsie" />
            <FontButton label="Roboto" font="Roboto" />
            <FontButton label="Dancing Script" font="Dancing Script" />
            <FontButton label="Josefin Sans" font="Josefin Sans" />
          </div>
        </ModalDialog>
        <ModalDialog title="Color Palette" open={showColorModal} onClose={() => setShowColorModal(false)}>
          <ColorPalette onChange={(color: string) => updateSetting('color', color)} />
        </ModalDialog>
      </div>
    </>
  )
}
