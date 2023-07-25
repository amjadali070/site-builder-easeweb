import React, { useContext, useRef, useState, useEffect } from 'react'
import { Descendant } from 'slate'
import { WebsiteContext } from 'src/components/context/WebsiteContext'
import TextEditor from 'src/components/new/TextEditor'
import { upsertBlockByPageID } from 'src/services/website.service'
import { ButtonState } from 'src/_polly/components/src/constants'
import { RangeStatic } from 'quill'
import ButtonEditor from '../../new/ButtonEditor'
import DesignOptions, { DesignOptionTypes } from '../../new/DesignOptions'
import { ModalProps } from '../../new/ModalDialog'
import TextToolbar from '../../new/textEditor/TextToolbar'
import ModalDialogV2 from '../../new/ModalDialogV2'
import ButtonLink from '../../new/ButtonEditor/ButtonLink'
import SectionHeader from './SectionHeader'
import BottomFloatingButton from '../../BottomFloatingButton'
import { Editor } from '../../editor'

export enum SIZE {
  H1 = 'heading1',
  H2 = 'heading2',
  H3 = 'heading3',
  H4 = 'heading4',
  H5 = 'heading5',
  H6 = 'heading6',
  P = 'paragraph',
}

export enum TEXT_ALIGN {
  LEFT = 'left',
  CENTER = 'center',
  RIGHT = 'right',
}

export interface TextProps {
  value: string
  image: string | null
  content: Descendant[]
  settings: {
    backgroundColor?: string
    backgroundImage?: string
    color?: string
    bold?: boolean
    font?: string
    italic?: boolean
    size?: SIZE
    strikethrough?: boolean
    textAlign?: TEXT_ALIGN
    underline?: boolean
  }
}

interface SectionTitleProps extends ModalProps {
  // eslint-disable-next-line
  defaultValue: TextProps | any
  websiteID?: string
  pageID?: string
  onUpdate?: (value: any) => void
}

const DEFAULT_SUB_HEADLINE = '<p style="text-align:center">Sub-headline</p>'

const initialValue: Descendant[] = [
  {
    type: 'paragraph',
    children: [{ text: '' }],
  },
  {
    type: 'paragraph',
    children: [{ text: '' }],
  },
  {
    type: 'h1',
    align: 'center',
    children: [{ text: 'Living the Dream' }],
  },
  {
    type: 'paragraph',
    children: [{ text: '' }],
  },
  {
    type: 'paragraph',
    children: [{ text: '' }],
  },
]

const FormTitle = (props: SectionTitleProps) => {
  const websiteContext = useContext(WebsiteContext)
  const { defaultValue, pageID, open, onClose, onUpdate, ...rest } = props
  const editorRef = useRef<any>(null)
  const subHeadlineEditorRef = useRef()

  const [saving, setSaving] = useState(false)
  const [title, setTitle] = useState<TextProps>({
    content: initialValue,
    image: null,
    settings: {
      backgroundColor: 'white',
    },
    ...defaultValue?.props?.title,
  })
  const [subHeadline, setSubHeadline] = useState(
    defaultValue?.props?.subHeadline ? defaultValue?.props?.subHeadline : null,
  )
  const [button, setButton] = useState<ButtonState | null>(
    defaultValue?.props?.button ? defaultValue?.props?.button : null,
  )
  const [showLinkModal, setShowLinkModal] = useState(false)
  const [addLinkConfigs, setAddLinkConfigs] = useState<{ editor: any; range: RangeStatic | undefined } | undefined>(
    undefined,
  )

  const onSubmit = () => {
    setSaving(true)
    // eslint-disable-next-line
    const p: any = { title }
    if (subHeadline) p.subHeadline = subHeadline
    if (button) p.button = button
    const items = {
      type: 'TITLE',
      updatedAt: new Date().toISOString(),
      ...defaultValue,
      props: p,
      createdFromEditor: true,
      columns: 4,
    }
    upsertBlockByPageID(websiteContext.pageID || pageID || '', items).then(() => onClose())
  }

  const handleDesignOptionsClick = (option: DesignOptionTypes) => {
    if (option === DesignOptionTypes.SUB_HEADING) {
      if (subHeadline) {
        setSubHeadline({
          ...subHeadline,
          visible: !subHeadline?.visible,
        })
        return
      }

      setSubHeadline({
        ...title,
        value: DEFAULT_SUB_HEADLINE,
        settings: {
          size: 'heading2',
          backgroundColor: title.settings.backgroundColor,
        },
        visible: true,
      })
    }
  }

  // eslint-disable-next-line
  const handleDesignOptionsChange = (updates: any) => {
    setTitle({ ...title, settings: { ...title.settings, ...updates } })
    if (subHeadline) setSubHeadline({ ...subHeadline, settings: { ...subHeadline.settings, ...updates } })
  }

  const handleButtonChanges = (styles: Record<string, string>) => {
    if (button) {
      // eslint-disable-next-line
      setButton((_button: any) => ({ ..._button, settings: { ..._button.settings, ...styles }, visible: true }))
      return
    }

    setButton({
      value: 'Button',
      settings: styles,
      link: null,
      visible: true,
    })
  }

  useEffect(() => {
    const p: any = { title }
    if (subHeadline) p.subHeadline = subHeadline
    if (button) p.button = button
    const items = {
      type: 'TITLE',
      updatedAt: new Date().toISOString(),
      ...defaultValue,
      props: p,
    }
    onUpdate?.(items)

    if (editorRef.current?.editor) {
      if (title.settings.backgroundImage) {
        editorRef.current.editor.container.style.backgroundImage = title.settings.backgroundImage
      } else {
        editorRef.current.editor.container.style.backgroundColor = title.settings.backgroundColor
      }
    }
  }, [title, subHeadline, button])

  return (
    // eslint-disable-next-line react/jsx-props-no-spreading
    <>
      <ModalDialogV2 open={open} onBack={onClose} {...rest}>
        <div className="w-full px-5 pb-20">
          <DesignOptions
            options={[
              DesignOptionTypes.SUB_HEADING,
              DesignOptionTypes.IMAGE,
              DesignOptionTypes.BG_COLOR,
              DesignOptionTypes.BUTTON,
              DesignOptionTypes.ANIMATION,
              DesignOptionTypes.PADDING,
              DesignOptionTypes.BUTTON,
            ]}
            onClick={handleDesignOptionsClick}
            onChange={handleDesignOptionsChange}
            onButtonChange={handleButtonChanges}
            textSettings={title.settings}
            title="Heading"
            isSubHeadingEnabled={subHeadline?.visible}
            isButtonEnabled={button?.visible}
            onButtonHide={() => setButton((b: any) => ({ ...b, visible: false }))}
          />

          <Editor
            backgroundColor={title.settings.backgroundColor}
            backgroundImage={title.settings.backgroundImage}
            onBackgroundColorChange={color => {
              setTitle({ ...title, settings: { ...title.settings, backgroundColor: color } })
            }}
            initialValue={title?.content ?? initialValue}
            onChange={value => setTitle({ ...title, content: value })}
          />

          {subHeadline && subHeadline?.visible && (
            <>
              <SectionHeader
                title="Sub-Heading"
                showDeleteButton
                onDelete={() => setSubHeadline({ ...subHeadline, visible: false })}
              />
              <TextToolbar
                settings={subHeadline.settings}
                onChange={updates =>
                  setSubHeadline({ ...subHeadline, settings: { ...subHeadline.settings, ...updates } })
                }
                onLinkClick={() => {
                  const editor: any = subHeadlineEditorRef.current
                  const range: RangeStatic = editor?.getSelectedTextRange()
                  setAddLinkConfigs({
                    editor,
                    range,
                  })
                  setShowLinkModal(true)
                }}
                onEmojiClick={({ emoji }) => {
                  const editor: any = subHeadlineEditorRef.current
                  editor?.insertEmoji(emoji)
                }}
              />
              <TextEditor
                className="mb-6"
                defaultValue={subHeadline.value}
                settings={subHeadline.settings}
                editorRef={subHeadlineEditorRef}
                onChange={value => setSubHeadline({ ...subHeadline, value })}
              />
            </>
          )}

          {button && button?.visible && (
            <>
              <SectionHeader
                title="Button"
                showDeleteButton
                onDelete={() => {
                  setButton({
                    ...button,
                    visible: false,
                  })
                }}
              />
              <ButtonEditor className="m-6" button={button} setButton={setButton} />
            </>
          )}

          <BottomFloatingButton
            label={`${defaultValue.id ? 'Updat' : 'Creat'}${saving ? 'ing' : 'e'}`}
            onClick={onSubmit}
            disabled={saving}
          />
        </div>
      </ModalDialogV2>
      <ModalDialogV2 open={showLinkModal} onBack={() => setShowLinkModal(false)}>
        <ButtonLink
          onSave={l => {
            if (addLinkConfigs) {
              addLinkConfigs.editor?.insertLink(addLinkConfigs.range, l.to)
            }
            setShowLinkModal(false)
          }}
        />
      </ModalDialogV2>
    </>
  )
}

export default FormTitle
