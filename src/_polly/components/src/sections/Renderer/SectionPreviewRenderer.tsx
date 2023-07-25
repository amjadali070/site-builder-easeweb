import { useRef, useEffect, useState } from 'react'
import { Section } from '../types'
import clsx from 'clsx'
import RenderSection from './Renderer'

function Preview({
  section,
  onHeight,
  parentWidth,
  widthMultiplier = 4.13,
  scale = 1,
}: {
  section: Section<any, any>
  onHeight: (height: number) => void
  parentWidth?: number
  widthMultiplier?: number
  scale?: number
}) {
  const ref = useRef<HTMLDivElement | null>(null)
  const width = parentWidth ? `${parentWidth * (widthMultiplier / scale)}px` : '1872px'
  const matrix = 0.25 * scale

  const heightSetCountRef = useRef(0)
  const intervalRef = useRef<NodeJS.Timer | null>(null)

  const checkHeight = () => {
    if (heightSetCountRef.current >= 5) {
      if (intervalRef.current) {
        clearInterval(intervalRef.current)
      }
      return
    }

    if (ref.current) {
      const height = ref.current.clientHeight * matrix
      onHeight(height)
      heightSetCountRef.current += 1
    }
  }

  useEffect(() => {
    checkHeight()

    const interval = setInterval(() => {
      checkHeight()
    }, 1000)

    intervalRef.current = interval

    return () => {
      clearInterval(interval)
    }
  }, [])

  return (
    <div
      ref={ref}
      style={{ transform: `matrix(${matrix}, 0, 0, ${matrix}, 0, 0)`, width }}
      className=" h-auto overflow-hidden block origin-top-left relative"
    >
      <div className="block">
        <div className="block z-[100]">
          <RenderSection {...{ section }} />
        </div>
      </div>
    </div>
  )
}

export default function SectionPreviewRenderer({
  section,
  disableHover,
  widthMultiplier,
  noShadow,
  scale,
}: {
  section: Section<any, any>
  disableHover?: boolean
  widthMultiplier?: number
  noShadow?: boolean
  scale?: number
}) {
  const [height, setHeight] = useState(0)
  const [parentWidth, setParentWidth] = useState(0)

  const ref = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    if (ref.current) {
      setParentWidth(ref.current.clientWidth)
    }
  }, [])

  return (
    <div
      ref={ref}
      className={clsx('w-full relative mt-0 mx-auto', !disableHover && 'hover:scale-[1.03] transition-all')}
      style={{
        filter: noShadow ? 'none' : 'drop-shadow(0px 12px 12px rgba(0, 0, 0, 0.25))',
      }}
    >
      <div className="min-h-[30px] w-full overflow-hidden ml[-1px] box-content">
        <div className="flex-grow relative">
          <div className="inline-block align-bottom">
            <div>
              <div className="flex">
                <div className="w-full my-0 mx-auto overflow-hidden" style={{ height: `${height}px` }}>
                  <Preview {...{ section, parentWidth, widthMultiplier, scale }} onHeight={h => setHeight(h)} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
