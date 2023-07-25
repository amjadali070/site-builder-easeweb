import React, { useContext, useEffect, useRef, useState } from 'react'
import { WebsiteContext } from 'src/components/context/WebsiteContext'
import TextEditor from 'src/components/new/TextEditor'
import { upsertBlockByPageID } from 'src/services/website.service'
import DesignOptions, { DesignOptionTypes } from 'src/components/new/DesignOptions'
import ModalDialog, { ModalProps } from '../../new/ModalDialog'
import TextToolbar from '../../new/textEditor/TextToolbar'
import { ButtonState } from '../../../_polly/components/src/constants'
import ButtonLink from '../../new/ButtonEditor/ButtonLink'
import ModalDialogV2 from '../../new/ModalDialogV2'
import BottomFloatingButton from '../../BottomFloatingButton'
import SectionHeader from './SectionHeader'
import ButtonEditor from '../../new/ButtonEditor'

const DEFAULT_HEADING = 'Living the dream'

const DEFAULT_CONTENT = `
<p>
  The future of NFT Blogging begins now.
  Document your stories, freely express yourself,
  and drop important knowledge with
  decentralized blogging.
</p>
<p>
  The future of NFT Blogging begins now.
  Document your stories, freely express yourself,
  and drop important knowledge with
  decentralized blogging.
</p>
<p>
  The future of NFT Blogging begins now.
  Document your stories, freely express yourself,
  and drop important knowledge with
  decentralized blogging.
</p>
`

interface IProps extends ModalProps {
  defaultValue: any
  websiteID?: string
  pageID?: string
  onUpdate?: (value: any) => void
}

const FormBlog = (props: IProps) => {
  const websiteContext = useContext(WebsiteContext)
  const { defaultValue, pageID, onUpdate, ...rest } = props
  const headingEditorRef = useRef()
  const contentEditorRef = useRef()

  const [saving, setSaving] = useState(false)
  const [heading, setHeading] = useState({
    value: DEFAULT_HEADING,
    settings: { size: 'heading1' },
    image: null,
    ...defaultValue?.props?.title,
  })
  const [blog, setBlog] = useState({
    value: DEFAULT_CONTENT,
    settings: {},
    image: null,
    ...defaultValue?.props?.content,
  })
  const [link, setLink] = useState<ButtonState['link'] | null>(
    defaultValue?.props?.link ? defaultValue?.props?.link : null,
  )
  const [button, setButton] = useState<ButtonState | null>(
    defaultValue?.props?.button ? defaultValue?.props?.button : null,
  )
  const [showLinkModal, setShowLinkModal] = useState(false)

  const onSubmit = () => {
    setSaving(true)
    const items = {
      type: 'BLOG',
      updatedAt: new Date().toISOString(),
      ...defaultValue,
      props: {
        title: heading,
        content: blog,
        link,
        button,
      },
    }
    upsertBlockByPageID(websiteContext.pageID ?? pageID ?? '', items).then(() => rest.onClose())
  }

  const onBackgroundChange = (updates: any) => {
    if (updates.backgroundImage) {
      const editor: any = contentEditorRef.current
      // console.log(editor, editor.insertImage)
      editor?.insertImage(updates.backgroundImage)
    } else {
      setHeading({ ...heading, settings: { ...heading.settings, ...updates } })
      setBlog({ ...blog, settings: { ...blog.settings, ...updates } })
    }
  }

  const handleButtonChanges = (styles: Record<string, string>) => {
    if (button) {
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
    const item = {
      type: 'BLOG',
      updatedAt: new Date().toISOString(),
      ...defaultValue,
      props: {
        title: heading,
        content: blog,
        link,
        button,
      },
    }
    onUpdate?.(item)
  }, [heading, blog, link, button])

  return (
    <>
      <ModalDialog {...rest}>
        <div className="w-full px-5 pb-20">
          <DesignOptions
            options={[
              DesignOptionTypes.BG_COLOR,
              DesignOptionTypes.IMAGE,
              DesignOptionTypes.BUTTON,
              DesignOptionTypes.ANIMATION,
            ]}
            onChange={onBackgroundChange}
            textSettings={heading.settings}
            onButtonChange={handleButtonChanges}
            title="Blog"
            imageButtonLabel="Image within Blog"
          />
          <h2 className="mb-6 px-2 py-3 text-xl border border-black">Post Heading</h2>
          <div className="mb-6">
            <TextToolbar
              settings={heading.settings}
              onChange={updates =>
                setHeading({
                  ...heading,
                  settings: {
                    ...heading.settings,
                    ...updates,
                  },
                })
              }
              onLinkClick={() => setShowLinkModal(true)}
              onEmojiClick={({ emoji }) => {
                const editor: any = headingEditorRef.current
                editor?.insertEmoji(emoji)
              }}
            />
            <TextEditor
              defaultValue={heading.value}
              settings={heading.settings}
              onChange={value => setHeading({ ...heading, value })}
              editorRef={headingEditorRef}
            />
          </div>
          <h2 className="mb-6 px-2 py-3 text-xl border border-black">Post Content</h2>
          <div className="mb-6">
            <TextToolbar
              settings={blog.settings}
              onChange={updates =>
                setBlog({
                  ...blog,
                  settings: {
                    ...blog.settings,
                    ...updates,
                  },
                })
              }
              onLinkClick={() => setShowLinkModal(true)}
              onEmojiClick={({ emoji }) => {
                const editor: any = contentEditorRef.current
                editor?.insertEmoji(emoji)
              }}
            />
            <TextEditor
              editorRef={contentEditorRef}
              defaultValue={blog.value}
              settings={blog.settings}
              onChange={value => setBlog({ ...blog, value })}
            />
          </div>

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
      </ModalDialog>

      <ModalDialogV2 open={showLinkModal} onBack={() => setShowLinkModal(false)}>
        <ButtonLink
          onSave={l => {
            setLink(l)
            setShowLinkModal(false)
          }}
          link={link}
        />
      </ModalDialogV2>
    </>
  )
}

export default FormBlog
