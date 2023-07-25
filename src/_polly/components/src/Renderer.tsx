/* eslint-disable */
import { useCallback, useEffect, useState } from 'react'
import { createEditor, Descendant } from 'slate'
import { Editable, RenderElementProps, RenderLeafProps, Slate, withReact } from 'slate-react'
import { CustomEditor, CustomElement, CustomText } from './types'
import { withImages } from './utils'
import { Leaf, Element } from './components'
import GoogleFonts from './GoogleFonts'

declare module 'slate' {
  interface CustomTypes {
    Editor: CustomEditor
    Element: CustomElement
    Text: CustomText
  }
}

interface RendererProps {
  backgroundColor?: string
  backgroundImage?: string
  initialValue: Descendant[]
}

export default function Renderer(props: RendererProps) {
  const { backgroundColor, backgroundImage, initialValue } = props

  const [editor] = useState(() => withImages(withReact(createEditor())))

  const renderElement = useCallback((props: RenderElementProps) => <Element {...props} />, [])
  const renderLeaf = useCallback((props: RenderLeafProps) => <Leaf {...props} />, [])

  useEffect(() => {
    editor.children = initialValue
    editor.onChange()
  }, [initialValue])

  return (
    <>
      <GoogleFonts />
      <Slate editor={editor} value={initialValue}>
        <Editable
          {...{ renderElement, renderLeaf }}
          readOnly
          className="w-full"
          style={{ backgroundColor, backgroundImage }}
        />
      </Slate>
    </>
  )
}
