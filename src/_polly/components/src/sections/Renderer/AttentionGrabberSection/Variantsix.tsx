import { SectionSlate } from '../../../../../../components/editor'
import { AttentionGrabberSection } from '../../types'
import { motion, useScroll } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'

export default function Variantsix({ section }: { section: AttentionGrabberSection }) {
  const title = section.variables.find(variable => variable.name === 'TITLE')?.data
  const subTitle = section.variables.find(variable => variable.name === 'SUBTITLE')?.data
  const paragraph = section.variables.find(variable => variable.name === 'PARAGRAPH')?.data
  const buttonOne = section.variables.find(variable => variable.name === 'BUTTON_1')?.data
  const buttonTwo = section.variables.find(variable => variable.name === 'BUTTON_2')?.data
  const media = section.variables.find(variable => variable.name === 'MEDIA')?.data

  const [offsetY, setOffsetY] = useState(0)
  // const [parentContainer, setParentContainer] = useState(useRef(null))

  const ref = useRef(null)

  const { scrollYProgress } = useScroll({
    // container: parentContainer,
    target: ref,
    offset: ['0% 30%', '50%'],
  })

  useEffect(() => {
    // setParentContainer(getScrollParent(ref.current))

    return scrollYProgress.onChange(latest => setOffsetY(latest))
  }, [])

  // const getScrollParent = (node: HTMLElement | any): HTMLElement | any => {
  //   let isElement = node instanceof HTMLElement
  //   let overflowY = isElement ? getComputedStyle(node).overflowY : ''
  //   let isScrollable = !(overflowY?.includes('hidden') || overflowY?.includes('visible'))

  //   if (node == null) {
  //     return null
  //   }
  //   if (isScrollable && node.scrollHeight > node.clientHeight) {
  //     return node
  //   } else {
  //     return getScrollParent(node.parentNode)
  //   }
  // }

  return (
    <div ref={ref}>
      <div className="bg-white py-[150px]">
        <div className="container mx-auto px-0 md:px-0 relative pt-20 md:pt-36">
          <motion.div
            animate={{ y: 0, opacity: 1 }}
            initial={{ y: 100, opacity: 0, transitionDuration: '0.4s' }}
            className="w-full px-auto absolute top-0 z-10"
            // style={
            //   offsetY < window.innerHeight + 100
            //     ? {
            //         transform: `translateY(${window.innerWidth > 500 ? offsetY * -0.24 : offsetY * -0.2}px) scale(${
            //           1 - offsetY * 0.0009
            //         })`,
            //       }
            //     : {}
            // }
          >
            <div className="w-[750px] max-w-full px-2 mx-auto">
              <div
                className="text-5xl md:text-8xl text-center uppercase tracking-wide font-bold"
                style={{ transform: `translateY(${offsetY * -120}px)` }}
              >
                <SectionSlate initialValue={title} previewMode />
              </div>
            </div>

            {subTitle && (
              <div className="w-[750px] max-w-full px-2 mx-auto mt-10">
                <div
                  style={{ transform: `translateY(${offsetY * -80}px)` }}
                  className=" md:text-4xl font-bold uppercase tracking-wide text-center"
                >
                  <SectionSlate initialValue={subTitle} previewMode />
                </div>
              </div>
            )}

            {paragraph && (
              <div className="w-[750px] max-w-full px-2 mx-auto mt-10">
                <div style={{ transform: `translateY(${offsetY * -50}px)` }} className="text-center leading-7">
                  <SectionSlate initialValue={paragraph} previewMode />
                </div>
              </div>
            )}

            {buttonOne && (
              <div
                style={{ transform: `translateY(${offsetY * -35}px)` }}
                className="flex justify-center gap-5 mt-14 flex-wrap"
              >
                <a className="h-11 px-4 bg-white flex justify-center items-center" href={buttonOne.to}>
                  {buttonOne.label}
                </a>
                {buttonTwo && (
                  <a className="h-11 px-4 border border-black flex justify-center items-center " href={buttonTwo.to}>
                    {buttonTwo.label}
                  </a>
                )}
              </div>
            )}
          </motion.div>

          {media && (
            <div className="h-[430px] w-[300px] mx-auto overflow-hidden flex items-end">
              <img
                className="h-[550px] w-[300px] object-cover object-center bg-black"
                style={{ transform: `translateY(${offsetY * 70}px)` }}
                src={media}
                alt=""
              />
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
