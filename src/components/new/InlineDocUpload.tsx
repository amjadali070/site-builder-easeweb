import { useEffect } from 'react'
import { useDropzone } from 'react-dropzone'

type InlineDocUploadProps = {
  onSelect: (file: File) => void
}

const InlineDocUpload = ({ onSelect }: InlineDocUploadProps) => {
  const { acceptedFiles, getRootProps, getInputProps } = useDropzone({
    accept: 'image/jpeg, image/png, image/jpg, application/pdf',
    maxFiles: 1,
    maxSize: 52428800,
  })

  useEffect(() => {
    if (acceptedFiles.length) {
      onSelect(acceptedFiles[0])
    }
  }, [acceptedFiles])

  return (
    <div className="mt-6 h-32 border border-black border-dashed flex justify-center items-center">
      <div {...getRootProps({ className: 'dropzone' })}>
        <input {...getInputProps()} />
        <div className="flex justify-center flex-col items-center">
          {acceptedFiles.length > 0 ? (
            <>
              <p>Selected file:</p>
              <p className="mt-1">{acceptedFiles[0].name}</p>
            </>
          ) : (
            <>
              <p>Select to upload a document</p>
              <p className="text-sm mt-1" style={{ color: 'gray' }}>
                Maximum 1 file (50MB) can be uploaded
              </p>
            </>
          )}
        </div>
      </div>
    </div>
  )
}

export default InlineDocUpload
