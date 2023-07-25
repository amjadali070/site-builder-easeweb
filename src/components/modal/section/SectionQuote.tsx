import React, { useContext, useEffect, useRef, useState } from 'react'
import { WebsiteContext } from 'src/components/context/WebsiteContext'
import DesignOptions, { DesignOptionTypes } from 'src/components/new/DesignOptions'
import TextEditor from 'src/components/new/TextEditor'
import { upsertBlockByPageID } from 'src/services/website.service'
import { ButtonState } from '../../../_polly/components/src/constants'
import BottomFloatingButton from '../../BottomFloatingButton'
import ButtonLink from '../../new/ButtonEditor/ButtonLink'
import ModalDialog, { ModalProps } from '../../new/ModalDialog'
import ModalDialogV2 from '../../new/ModalDialogV2'
import TextToolbar from '../../new/textEditor/TextToolbar'

const DEFAULT_TITLE = '<p style="text-align:center" class="italic">Quote, use important words -- You</p>'

interface IProps extends ModalProps {
  defaultValue: any
  websiteID?: string
  pageID?: string
  onUpdate?: (value: any) => void
}

const FormQuote = (props: IProps) => {
  const websiteContext = useContext(WebsiteContext)
  const { defaultValue, pageID, onUpdate, ...rest } = props
  const editorRef = useRef()

  const [saving, setSaving] = useState(false)
  const [quote, setQuote] = useState({
    value: DEFAULT_TITLE,
    settings: {
      size: 'heading1',
      backgroundColor: 'black',
    },
    image: null,
    ...defaultValue?.props?.title,
  })
  const [link, setLink] = useState<ButtonState['link'] | null>(
    defaultValue?.props?.link ? defaultValue?.props?.link : null,
  )
  const [showLinkModal, setShowLinkModal] = useState(false)

  const onSubmit = () => {
    setSaving(true)
    const items = {
      type: 'QUOTE',
      updatedAt: new Date().toISOString(),
      ...defaultValue,
      props: { title: quote, link },
    }
    upsertBlockByPageID(websiteContext.pageID ?? pageID ?? '', items).then(() => rest.onClose())
  }

  useEffect(() => {
    const item = {
      type: 'QUOTE',
      updatedAt: new Date().toISOString(),
      ...defaultValue,
      props: { title: quote, link },
    }
    onUpdate?.(item)
  }, [quote, link])

  return (
    <>
      <ModalDialog {...rest}>
        <div className="w-full px-5 pb-20">
          <DesignOptions
            onChange={updates => setQuote({ ...quote, settings: { ...quote.settings, ...updates } })}
            options={[
              DesignOptionTypes.BG_COLOR,
              DesignOptionTypes.IMAGE,
              DesignOptionTypes.BUTTON,
              DesignOptionTypes.ANIMATION,
              DesignOptionTypes.PADDING,
            ]}
            textSettings={quote.settings}
            title="Quote"
          />
          <TextToolbar
            settings={quote.settings}
            onChange={updates => setQuote({ ...quote, settings: { ...quote.settings, ...updates } })}
            onLinkClick={() => setShowLinkModal(true)}
            onEmojiClick={({ emoji }) => {
              const editor: any = editorRef.current
              editor?.insertEmoji(emoji)
            }}
          />
          <TextEditor
            className="mb-6"
            defaultValue={quote.value}
            settings={quote.settings}
            onChange={value => setQuote({ ...quote, value })}
            editorRef={editorRef}
          />

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

export default FormQuote
