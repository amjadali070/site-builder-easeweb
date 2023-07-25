import { MouseEvent, PropsWithChildren, useEffect } from 'react'
import ReactDOM from 'react-dom'

interface ModalProps {
  open: boolean
  onClose?: () => void
  disableClickOutside?: boolean
}

export default function Modal(props: PropsWithChildren<ModalProps>) {
  const { open, onClose, children, disableClickOutside } = props

  // Prevent scrolling in background
  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden'
    }

    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [open])

  // On unmount

  const onBackdropClick = (event: MouseEvent) => {
    if (disableClickOutside) return

    // if click directly to the backdrop
    if (event.target === event.currentTarget) {
      onClose?.()
    }
  }

  return !open
    ? null
    : ReactDOM.createPortal(
        <div
          className="fixed top-0 left-0 w-[20px] right-0 bottom-0 z-50 bg-black bg-opacity-50 overflow-auto flex justify-center items-center"
          onClickCapture={onBackdropClick}
        >
          {children}
        </div>,
        document.getElementById('modal-wrapper') as Element,
      )
}
