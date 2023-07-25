import clsx from 'clsx'
import React, { useState } from 'react'
import { HexColorPicker } from 'react-colorful'
import { ButtonState } from 'src/_polly/components/src/constants'
import Button from './Button'
import ColorPalette from '../ColorPalette'
import ModalDialog from '../ModalDialog'
import TextToolbar from '../textEditor/TextToolbar'
import ButtonLink from './ButtonLink'
import ModalDialogV2 from '../ModalDialogV2'

interface IProps {
  className?: string
  button: ButtonState
  setButton: React.Dispatch<React.SetStateAction<ButtonState | null>>
}

const ButtonEditor = (props: IProps) => {
  const {
    className,
    button: { settings, value, link },
    setButton,
  } = props

  const [showColorModal, setShowColorModal] = useState(false)
  const [showLinkModal, setShowLinkModal] = useState(false)
  const [colorMode, setColorMode] = useState<'bg' | 'stroke' | null>(null)
  const [showButtonModal, setShowButtonModal] = useState(false)
  const [variantActiveTab, setVariantActiveTab] = useState<'large' | 'medium' | 'small'>('large')
  const [showColorPicker, setShowColorPicker] = useState(false)

  const handleColorChange = (color: string) => {
    if (colorMode === 'bg')
      setButton(b => {
        if (!b) return null
        return { ...b, settings: { ...b.settings, backgroundColor: color } }
      })
    if (colorMode === 'stroke')
      setButton(b => {
        if (!b) return null
        return { ...b, settings: { ...b.settings, borderColor: color } }
      })
    setShowColorModal(false)
  }

  const handleVariantChange = (styles: Record<string, string>) => {
    setButton(b => {
      if (!b) return null
      return {
        ...b,
        settings: {
          ...b.settings,
          ...styles,
          backgroundColor: b.settings.backgroundColor,
          borderColor: b.settings.borderColor,
          color: b.settings.color,
        },
      }
    })
    setShowButtonModal(false)
  }

  return (
    <>
      <ModalDialog title="Color Palette" open={showColorModal} onClose={() => setShowColorModal(false)}>
        <ColorPalette onChange={handleColorChange} />
      </ModalDialog>

      <ModalDialogV2 title="Button" open={showButtonModal} onBack={() => setShowButtonModal(false)}>
        <Button onSelect={handleVariantChange} activeTab={variantActiveTab} />
      </ModalDialogV2>

      <ModalDialog title="Link" open={showLinkModal} onClose={() => setShowLinkModal(false)}>
        <ButtonLink
          onSave={({ to, type }) => {
            setButton(b => {
              if (!b) return null
              return { ...b, link: { to, type } }
            })
            setShowLinkModal(false)
          }}
          link={link}
        />
      </ModalDialog>

      <div className="my-6 px-2 py-3 flex border border-black justify-between">
        <button
          type="button"
          className="grow border-r border-black"
          onClick={() => {
            setShowButtonModal(true)
            setVariantActiveTab('large')
          }}
        >
          large
        </button>
        <button
          type="button"
          className="grow border-r border-black"
          onClick={() => {
            setShowButtonModal(true)
            setVariantActiveTab('medium')
          }}
        >
          medium
        </button>
        <button
          type="button"
          className="grow"
          onClick={() => {
            setShowButtonModal(true)
            setVariantActiveTab('small')
          }}
        >
          small
        </button>
      </div>

      <TextToolbar
        settings={settings}
        onChange={updates =>
          setButton(b => {
            if (!b) return null
            return { ...b, settings: { ...b.settings, ...updates } }
          })
        }
        onLinkClick={() => setShowLinkModal(true)}
        onEmojiClick={({ emoji }) => {
          setButton(b => {
            if (!b) return null
            return { ...b, value: b.value + emoji }
          })
        }}
      />

      <div className={clsx('polly-text-editor', className)}>
        <div className="flex justify-evenly">
          <input
            style={{ ...settings, fontFamily: settings.font }}
            className={clsx(
              'outline-none text-center',
              settings.bold && 'font-bold',
              settings.italic && 'italic',
              settings.underline && 'underline',
            )}
            type="text"
            value={value}
            onChange={e =>
              setButton(b => {
                if (!b) return null
                return { ...b, value: e.target.value }
              })
            }
          />
        </div>
      </div>

      <div className="mb-6 p-3 border border-black bg-white">
        <div className="flex justify-between items-center">
          <button
            type="button"
            onClick={() => {
              if (colorMode !== 'stroke' && showColorPicker) {
                setShowColorPicker(false)
              } else {
                setShowColorPicker(true)
              }
              setColorMode('bg')
            }}
            className="flex items-center"
          >
            <span>Background Color</span>
            <div className="h-8 w-8 ml-8 shadow-md" style={{ backgroundColor: settings.backgroundColor || '#fff' }} />
          </button>
          <button
            type="button"
            onClick={() => {
              if (colorMode !== 'bg' && showColorPicker) {
                setShowColorPicker(false)
              } else {
                setShowColorPicker(true)
              }
              setColorMode('stroke')
            }}
            className="flex items-center"
          >
            <span>Stroke</span>
            <div className="h-8 w-8 ml-8 shadow-md" style={{ backgroundColor: settings.borderColor || '#000' }} />
          </button>
        </div>
        {showColorPicker && (
          <div className="my-3">
            <HexColorPicker
              color={colorMode === 'bg' ? settings.backgroundColor ?? '#000' : settings.borderColor ?? '#000'}
              onChange={handleColorChange}
              style={{
                width: '100%',
              }}
            />
          </div>
        )}
      </div>
    </>
  )
}

export default ButtonEditor
