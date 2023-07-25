interface ConfirmDeleteModalProps {
  open: boolean
  onConfirm: (status: boolean) => void
  title?: string
}

const ConfirmModal = ({
  open,
  onConfirm,
  title = 'Are you sure you would like to delete this component?'
}: ConfirmDeleteModalProps) => {
  if (!open) return null
  return (
    <div className="z-50 fixed top-0 right-0 bottom-0 left-0 justify-center items-center">
      <div className="relative w-full h-full bg-black/70 flex justify-center items-center">
        {/* <!-- Modal content --> */}
        <div className="w-96 bg-zinc-800 shadow-md rounded-md">
          {/* <!-- Modal body --> */}
          <div className="bg-green-500 text-white text-center text-xl py-2 rounded-t-md ">
            Warning
          </div>
          <div className="p-6 flex justify-center items-center my-2">
            <p className="w-56 text-base font-light leading-relaxed text-white text-center">{title}</p>
          </div>
          {/* <!-- Modal footer --> */}
          <div className="flex items-center pb-4 px-9 space-x-8">
            <button
              onClick={() => onConfirm(false)}
              type="button"
              className="w-full h-9 font-light text-white text-center shadow-md bg-green-500 rounded-md hover:bg-green-600"
            >
              NO
            </button>
            <button
              onClick={() => onConfirm(true)}
              type="button"
              className="w-full h-9 font-light text-white text-center shadow-md bg-green-500 rounded-md hover:bg-green-600"
            >
              YES
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ConfirmModal
