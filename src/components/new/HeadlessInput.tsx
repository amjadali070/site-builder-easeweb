import React, { useEffect, useImperativeHandle, useRef, useState } from 'react'
import DOMPurify from 'dompurify'
import Quill, { DeltaOperation, RangeStatic } from 'quill'

const HeadlessInput = React.forwardRef((props: any, ref) => {
  const { className, style, defaultValue, onChange } = props

  const [flag, setChangeFlag] = useState<boolean | number>(0)
  const editorRef = useRef<HTMLDivElement>(null)
  const editor = useRef<Quill>()

  useImperativeHandle(ref, () => ({
    insertImage: (url: string) => {
      const quill = editor.current
      const range = quill?.getSelection(true) as RangeStatic
      const ops: DeltaOperation[] = []

      // will throw if range.index === 0 (bug?)
      if (range.index) {
        ops.push({ retain: range.index })
      }

      // will throw if range.length === 0
      if (range.length) {
        ops.push({ delete: range.length })
      }

      ops.push({ insert: { image: url } })

      // Add image and move the cursor after the image
      quill?.updateContents({ ops } as any, 'user')
      quill?.setSelection(range.index + 1, 0)
    },
    insertEmoji: (emoji: any) => {
      const quill = editor.current
      const selection = quill?.getSelection(true)
      quill?.insertText(selection?.index ?? 0, emoji)
    },
    getSelectedTextRange: () => {
      const quill = editor.current
      const range = quill?.getSelection()
      return range
    },
    insertLink: (range: RangeStatic, link: string) => {
      const quill = editor.current

      if (range && range.length !== 0) {
        const text = quill?.getText(range.index, range.length)
        quill?.deleteText(range.index, range.length)
        const delta = {
          ops: [{ retain: range.index }, { insert: text, attributes: { link } }],
        }

        // @ts-ignore
        quill?.updateContents(delta)
      }
    },
  }))

  useEffect(() => {
    if (!editorRef.current) return
    const root = editorRef.current
    root.innerHTML = DOMPurify.sanitize(defaultValue)

    import('quill').then(module => {
      // eslint-disable-next-line new-cap
      const quill = new module.default(root, {
        // modules: { toolbar: toolbarRef.current }
      })

      let timer: any = 0
      quill.on('text-change', () => {
        clearTimeout(timer)
        timer = setTimeout(() => {
          setChangeFlag(x => !x)
        }, 500)
      })

      quill.setSelection(quill.getLength(), 0)
      quill.blur()
      editor.current = quill
    })
  }, [defaultValue])

  useEffect(() => {
    // quill "text-change" event has not fired, prevent first onChange call
    if (flag === 0) return

    onChange?.(editor.current?.root?.innerHTML)
  }, [flag])

  return <div ref={editorRef} className={className} style={style} />
})

HeadlessInput.displayName = 'HeadlessInput'
export default HeadlessInput
