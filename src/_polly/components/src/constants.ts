export const enum ButtonLinkTypes {
  EXTERNAL = 'external',
  INTERNAL = 'internal',
  DOCUMENT = 'document',
  EMAIL = 'email',
}

export interface ButtonState {
  value: string
  settings: Record<string, any>
  link: {
    to: string
    type: ButtonLinkTypes
  } | null
  visible: boolean
}
