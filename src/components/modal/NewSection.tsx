import { ReactNode, useState } from 'react'
import ModalDialog, { ModalProps } from 'src/components/new/ModalDialog'
import { SectionTypes } from 'src/_polly/components/src/sections'
import ModalDialogV2 from '../new/ModalDialogV2'
import NewSectionVariantSelection from './NewSectionVariantSelection'
import NewTextSection from './NewText'

export function Item({ label, onClick, color }: { label: string; onClick: () => void; color: string }) {
  return (
    <button
      type="button"
      className="w-full text-left py-4 flex border-b items-center justify-start px-12 text-xl transition hover:border-t ease-in-out delay-100 hover:-translate-y-1 hover:scale-110 duration-300 hover:shadow-md"
      {...{ onClick }}
      style={{ backgroundColor: color }}
    >
      {label}
    </button>
  )
}

export function SectionCategory({ children }: { children: ReactNode }) {
  return <div className="">{children}</div>
}

export default function NewSection(props: ModalProps) {
  const { onClose } = props

  const [showTextSection, setShowTextSection] = useState(false)
  const [selectedSection, setSelectedSection] = useState<SectionTypes | undefined>()

  return (
    <ModalDialog title="Section Templates" {...props}>
      <NewTextSection
        open={showTextSection}
        onBack={() => setShowTextSection(false)}
        onClose={() => {
          setShowTextSection(false)
          onClose()
        }}
      />
      <div className="w-full">
        <SectionCategory>
          <Item color="#FFFFFF" label="Attention Grabber" onClick={() => setSelectedSection('ATTENTION_GRABBER')} />
        </SectionCategory>
        <SectionCategory>
          <Item color="#FFFFFF" label="Image OMG" onClick={() => setSelectedSection('IMAGE_OMG')} />
          <Item color="#FFFFFF" label="Gallery" onClick={() => setSelectedSection('GALLERY')} />
        </SectionCategory>
        <SectionCategory>
          <Item color="#FFFFFF" label="Blog" onClick={() => setSelectedSection('BLOG')} />
          <Item color="#FFFFFF" label="Text" onClick={() => setSelectedSection('TEXT')} />
          <Item color="#FFFFFF" label="Portfolio" onClick={() => setSelectedSection('PORTFOLIO')} />
          <Item color="#FFFFFF" label="Quote Me" onClick={() => setSelectedSection('QUOTE_SECTION')} />
        </SectionCategory>
        <SectionCategory>
          <Item color="#FFFFFF" label="About US" onClick={() => setSelectedSection('ABOUT_US')} />
          <Item color="#FFFFFF" label="Team Members" onClick={() => setSelectedSection('TEAM_MEMBERS')} />
          <Item color="#FFFFFF" label="Contact Us" onClick={() => setSelectedSection('CONTACT_US')} />
          <Item color="#FFFFFF" label="FAQs" onClick={() => setSelectedSection('FAQ')} />
          <Item color="#FFFFFF" label="MENU" onClick={() => setSelectedSection('MENU')} />
          <Item color="#FFFFFF" label="Testimonial" onClick={() => setSelectedSection('TESTIMONIAL')} />
          <Item color="#FFFFFF" label="Table" onClick={() => setSelectedSection('TABLE')} />
        </SectionCategory>
      </div>
      <div className="px-5 pb-10 mt-10">
        <button
          type="button"
          className="w-full py-3 border border shadow-md text-white flex items-center justify-center rounded-lg bg-green-500 hover:bg-green-600 text-[28px] font-light mt-10"
          onClick={() => setShowTextSection(true)}
        >
          Create new Section
        </button>
      </div>

      <ModalDialogV2 open={selectedSection !== undefined} onBack={() => setSelectedSection(undefined)}>
        <NewSectionVariantSelection
          onClose={() => {
            setSelectedSection(undefined)
            onClose()
          }}
          sectionType={selectedSection}
        />
      </ModalDialogV2>
    </ModalDialog>
  )
}
