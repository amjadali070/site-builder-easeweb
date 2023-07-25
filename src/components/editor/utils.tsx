import escapeHtml from 'escape-html'
import { Text } from 'slate'

export const serialize = (node: any) => {
  if (Text.isText(node)) {
    let string = escapeHtml(node.text)
    if (node.bold) {
      string = `<strong>${string}</strong>`
    }
    return string
  }

  const children = node.children.map((n: any) => serialize(n)).join('')

  switch (node.type) {
    case 'block-quote':
      return `<blockquote><p>${children}</p></blockquote>`
    case 'h1':
      return `<h1 className=${node.data.get('className')}>${children}</h1>`
    case 'h2':
      return `<h2>${children}</h2>`
    case 'h3':
      return `<h3>${children}</h3>`
    case 'h4':
      return `<h4>${children}</h4>`
    case 'h5':
      return `<h5>${children}</h5>`
    case 'h6':
      return `<h6>${children}</h6>`
    case 'bulleted-list':
      return `<ul>${children}</ul>`
    case 'numbered-list':
      return `<ol>${children}</ol>`
    default:
      return children
  }
}

/**
 const BLOCK_TAGS = {
  blockquote: 'quote',
  p: 'paragraph',
  pre: 'code',
}

// Add a dictionary of mark tags.
const MARK_TAGS = {
  em: 'italic',
  strong: 'bold',
  u: 'underline',
  s: 'strikethrough'
}

export const htmlRules = [
  {
    serialize(obj: any, children: any) {
      if (obj.object === 'block') {
        switch (obj.type) {
          case 'block-quote':
            return (
              <blockquote className={obj.data.get('className')} style={obj.data.get('style')}>
                {children}
              </blockquote>
            )
          case 'h1':
            return (
              <h1 className={obj.data.get('className')} style={obj.data.get('style')}>
                {children}
              </h1>
            )
          case 'h2':
            return (
              <h2 className={obj.data.get('className')} style={obj.data.get('style')}>
                {children}
              </h2>
            )
          case 'h3':
            return (
              <h3 className={obj.data.get('className')} style={obj.data.get('style')}>
                {children}
              </h3>
            )
          case 'h4':
            return (
              <h4 className={obj.data.get('className')} style={obj.data.get('style')}>
                {children}
              </h4>
            )
          case 'h5':
            return (
              <h5 className={obj.data.get('className')} style={obj.data.get('style')}>
                {children}
              </h5>
            )
          case 'h6':
            return (
              <h6 className={obj.data.get('className')} style={obj.data.get('style')}>
                {children}
              </h6>
            )
          case 'bulleted-list':
            return (
              <ul className={obj.data.get('className')} style={obj.data.get('style')}>
                {children}
              </ul>
            )
          case 'numbered-list':
            return (
              <ol className={obj.data.get('className')} style={obj.data.get('style')}>
                {children}
              </ol>
            )
            default:
            return (
              <blockquote className={obj.data.get('className')} style={obj.data.get('style')}>
                {children}
              </blockquote>
            )
        }
      }
    }
  }
]
 */
