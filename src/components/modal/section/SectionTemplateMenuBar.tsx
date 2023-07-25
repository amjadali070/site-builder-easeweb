import clsx from 'clsx'
import React from 'react'
import { STYLE_MENU } from 'src/_polly/components/src/MenuBar'
import { ReactComponent as HumburgerIcon } from '../../../assets/icons/menuBar/humburger.svg'

interface IProps {
  style: STYLE_MENU
  setStyle: (style: STYLE_MENU) => void
  openMenu: () => void
}

function SectionTemplateMenuBar(props: IProps) {
  const { style, setStyle, openMenu } = props
  return (
    <>
      <h1 className="text-4xl">Select Menu</h1>
      <div className="h-[2px] mt-2 w-[60%] bg-[#C4C4C4]" />
      <button
        type="button"
        className={clsx(style === 'MENU_BAR1' && 'border-[2px] border-black', 'my-10 w-full')}
        onClick={() => setStyle('MENU_BAR1')}
      >
        <div className="p-4 flex justify-between border border-black">
          <span>Site Name</span>
          <HumburgerIcon />
        </div>
      </button>
      <button
        type="button"
        className={clsx(style === 'MENU_BAR2' && 'border-[2px] border-black', 'my-10 w-full')}
        onClick={() => setStyle('MENU_BAR2')}
      >
        <div className="p-4 flex justify-between border border-black">
          <div />
          <span>Site Name</span>
          <HumburgerIcon />
        </div>
      </button>
      <button
        type="button"
        className={clsx(style === 'MENU_BAR3' && 'border-[2px] border-black', 'my-10 w-full')}
        onClick={() => setStyle('MENU_BAR3')}
      >
        <div className="p-4 border border-black">
          <div className="flex justify-end">
            <HumburgerIcon className="" />
          </div>
          <div className="h-[2px] my-6 bg-black" />
          <span>Site Name</span>
        </div>
      </button>
      <div className="mt-10">
        <button className="px-4 py-3 border border-black w-full" type="submit" onClick={openMenu}>
          Next
        </button>
      </div>
    </>
  )
}

export default SectionTemplateMenuBar
