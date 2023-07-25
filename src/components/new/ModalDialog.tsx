import { useLocation } from 'react-router-dom'
import React, { useEffect, useState } from 'react'
// import { ReactComponent as BackIcon } from 'src/assets/icons/navbar/back.svg'
import Modal from '../common/Modal'

export interface ModalProps {
  open: boolean
  title?: React.ReactNode
  customHeader?: boolean
  onClose: () => void
  onBack?: () => void
  onNext?: () => void
}

interface ModalDialogProps extends ModalProps {
  children: any
  title?: React.ReactNode
}

const ModalDialog = ({ title, open, customHeader, onClose, onBack, onNext, children }: ModalDialogProps) => {
  const currentLocation = useLocation()
  const [location] = useState(currentLocation)

  useEffect(() => {
    if (currentLocation !== location) onClose()
  }, [onClose, currentLocation, location])

  return (
    <Modal open={open}>
      <div className="fixed lg:max-w-[500px] inset-0 bg-white overflow-auto">
        {!customHeader && (
          <div className="flex items-center py-5 px-10 items-">
            {onBack && (
              <button type="button" className="flex-shrink-0 mr-8" onClick={onBack}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" 
                className="w-10 h-10 mr-[35px] text-slate-500 hover:text-slate-800 cursor-pointer ">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M18.75 19.5l-7.5-7.5 7.5-7.5m-6 15L5.25 12l7.5-7.5" />
                </svg>
              </button>
            )}
            <h1 className="flex-grow text-xl font-bold text-slate-600">{title}</h1>
            {onNext ? (
              <button
                type="button"
                className="flex-shrink-0 px-10 py-2 text-base border shadow-md bg-green-500 hover:bg-green-600 text-white rounded-lg"
                onClick={onNext}
              >
                Next
              </button>
            ) : (
              <button type="button" className="flex-shrink-0 px-2 text-xl font-bold text-slate-600 hover:text-red-600" onClick={onClose}>
                X
              </button>
            )}
          </div>
        )}
        {children}
      </div>
    </Modal>
  )
}

export default ModalDialog
