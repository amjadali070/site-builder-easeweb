import React, { useContext, useState } from 'react'
import clsx from 'clsx'
import Footer1 from '../../../_polly/components/src/Footer1'
import Footer2 from '../../../_polly/components/src/Footer2'
import Footer3 from '../../../_polly/components/src/Footer3'
import Footer4 from '../../../_polly/components/src/Footer4'
import { WebsiteContext } from '../../context/WebsiteContext'
import { saveWebsite } from '../../../lib/services/website.service'

interface IProps {
  footer: any
  onSubmit: () => void
}

const PreviewFooter: React.FC<IProps> = ({ footer, onSubmit }) => {
  const websiteContext = useContext(WebsiteContext)
  const [saving, setSaving] = useState(false)
  const [style, setStyle] = useState(footer?.style ?? 'FOOTER1')
  const settings = footer.props.info

  const submit = async () => {
    setSaving(true)
    saveWebsite({
      id: websiteContext.websiteID,
      footer: JSON.stringify({
        style,
        info: settings,
      }),
    })
      .then(() => onSubmit())
      .finally(() => setSaving(false))
  }

  return (
    <div className="p-5">
      <div className="mb-10">
        <h1 className="text-4xl inline-block font-bold border-b-2 border-[#545252] pr-16 pb-2">Footer</h1>
      </div>
      <button
        type="button"
        onClick={() => setStyle('FOOTER1')}
        className={clsx('mb-10 border w-full shadow-md', style === 'FOOTER1' && 'border-black border-4')}
      >
        <Footer1 info={settings} />
      </button>
      <button
        type="button"
        onClick={() => setStyle('FOOTER2')}
        className={clsx('mb-10 border w-full shadow-md', style === 'FOOTER2' && 'border-black border-4')}
      >
        <Footer2 info={settings} />
      </button>
      <button
        type="button"
        onClick={() => setStyle('FOOTER3')}
        className={clsx('mb-10 border w-full shadow-md', style === 'FOOTER3' && 'border-black border-4')}
      >
        <Footer3 info={settings} />
      </button>
      <button
        type="button"
        onClick={() => setStyle('FOOTER4')}
        className={clsx('mb-10 border w-full shadow-md', style === 'FOOTER4' && 'border-black border-4')}
      >
        <Footer4 info={settings} />
      </button>
      <button
        type="button"
        className="my-10 border w-full bg-green-500 hover:bg-green-600 shadow-md rounded-md text-white flex-grow flex items-center justify-center text-center p-4 disabled:opacity-50"
        onClick={submit}
        disabled={!style || saving}
      >
        {saving ? 'Saving' : 'Save'}
      </button>
    </div>
  )
}

export default PreviewFooter
