import { Section } from 'src/_polly/components/src/sections'
import { getTextSectionTemplate } from './get-text-template'

export function getSectionTemplate(section: Section<any, any>) {
  const type = section.type
  if (type === 'TEXT') {
    return getTextSectionTemplate(section)
  }

  return ''
}
