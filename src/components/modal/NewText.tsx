import { useState } from 'react'
import ModalDialog, { ModalProps } from '../new/ModalDialog'
import SectionBlog from './section/SectionBlog'
import SectionQuote from './section/SectionQuote'
import SectionTitle from './section/SectionTitle'

export default function NewTextSection(props: ModalProps) {
  const { onClose } = props

  const [showTitle, setShowTitle] = useState(false)
  const [showQuote, setShowQuote] = useState(false)
  const [showBlog, setShowBlog] = useState(false)

  return (
    <ModalDialog title="Text Section" {...props}>
      <SectionTitle
        open={showTitle}
        defaultValue={{}}
        onBack={() => setShowTitle(false)}
        onClose={() => {
          setShowTitle(false)
          onClose()
        }}
      />
      <SectionQuote
        open={showQuote}
        defaultValue={{}}
        onBack={() => setShowQuote(false)}
        onClose={() => {
          setShowQuote(false)
          onClose()
        }}
      />
      <SectionBlog
        open={showBlog}
        defaultValue={{}}
        onBack={() => setShowBlog(false)}
        onClose={() => {
          setShowBlog(false)
          onClose()
        }}
      />
      <div className="w-full px-5">
        {/* <h2 className="font-extralight mb-6 text-4xl">Text Section</h2> */}
        <div className="mb-6 w-full aspect-w-4 aspect-h-3 bg-black">
          <button
            type="button"
            className="font-extralight flex text-center justify-center items-center text-white text-5xl"
            onClick={() => setShowTitle(true)}
          >
            Write a Title
          </button>
        </div>
        <div className="mb-6 w-full aspect-w-4 aspect-h-3 bg-black">
          <button
            type="button"
            className="px-4 font-extralight flex text-left items-center text-white text-5xl italic"
            onClick={() => setShowQuote(true)}
          >
            “Quote, use important words” -- You
          </button>
        </div>
        <div className="mb-6 w-full bg-black">
          <button
            type="button"
            className="px-6 py-5 font-extralight text-left text-white text-5xl"
            onClick={() => setShowBlog(true)}
          >
            <p className="mb-4 text-2xl">Create a Blog Post About Important Things</p>
            <p className="mb-4 text-base">
              The future of NFT Blogging begins now. Document your stories, freely express yourself, and drop important
              knowledge with decentralized blogging.
            </p>
            <img src="/mock/image1.png" alt="" />
          </button>
        </div>
      </div>
    </ModalDialog>
  )
}
