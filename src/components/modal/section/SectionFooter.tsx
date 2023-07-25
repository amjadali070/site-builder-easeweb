import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { ReactComponent as FacebookIcon } from '../../../_polly/components/src/assets/icons/facebook.svg'
import { ReactComponent as InstagramIcon } from '../../../_polly/components/src/assets/icons/instagram.svg'
import { ReactComponent as TwitterIcon } from '../../../_polly/components/src/assets/icons/twitter.svg'
import InputText from '../../common/InputText'
import ModalDialog, { ModalProps } from '../../new/ModalDialog'
import ModalDialogV2 from '../../new/ModalDialogV2'
import FooterPreview from './SectionFooterPreview'

export interface Settings {
  name: string
  email: string
  phoneNumber: string
  fax: string
  address: string
  facebook: string
  instagram: string
  twitter: string
  copyRight: string
}

interface IProps extends ModalProps {
  defaultValue: any
  websiteID?: string
}

const FormFooter = (props: IProps) => {
  const { defaultValue, onClose, ...modalProps } = props
  const [footer, setFooter] = useState(defaultValue)
  const [showModalPreview, setShowModalPreview] = useState(false)

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({
    defaultValues: {
      name: '',
      email: '',
      phoneNumber: '',
      fax: '',
      address: '',
      facebook: '',
      instagram: '',
      twitter: '',
      copyRight: '',
      ...defaultValue?.info,
    },
  })

  const preview = (form: any) => {
    setFooter({
      ...footer,
      props: {
        ...footer.props,
        info: form,
      },
    })
    setShowModalPreview(true)
  }

  return (
    <ModalDialogV2 title="Footer settings" onBack={onClose} {...modalProps}>
      <div className="p-5">
        <ModalDialog
          title="Footer Preview"
          open={showModalPreview}
          onBack={() => setShowModalPreview(false)}
          onClose={() => setShowModalPreview(false)}
        >
          <FooterPreview footer={footer} onSubmit={onClose} />
        </ModalDialog>

        <div className="text-4xl font-bold">Footer</div>
        <div className="h-[2px] mt-2 w-[60%] bg-[#545252]" />
        <form onSubmit={handleSubmit(preview)}>
          <div className="my-10">
            <InputText
              label="BUSINESS NAME"
              type="text"
              placeholder="My Website"
              name="name"
              register={register}
              classInput="placeholder-gray-300 :placeholder:text-xs w-full h-11 pl-2.5 bg-white border-b-2 border-gray-500 focus:outline-none focus:border-green-500"
              errors={errors}
            />
          </div>
          <div className="my-10">
            <InputText
              label="CONTACT EMAIL"
              type="text"
              placeholder="myemail@mywebsite.com"
              name="email"
              register={register}
              classInput="placeholder-gray-300 :placeholder:text-xs w-full h-11 pl-2.5 bg-white border-b-2 border-gray-500 focus:outline-none focus:border-green-500"
              errors={errors}
            />
          </div>
          <div className="my-10">
            <InputText
              label="PHONE NUMBER"
              type="text"
              placeholder="987-654-3210"
              name="phoneNumber"
              register={register}
              classInput="placeholder-gray-300 :placeholder:text-xs w-full h-11 pl-2.5 bg-white border-b-2 border-gray-500 focus:outline-none focus:border-green-500"
              errors={errors}
            />
          </div>
          <div className="my-10">
            <InputText
              label="FAX"
              type="text"
              placeholder="987-654-3210"
              name="fax"
              register={register}
              classInput="placeholder-gray-300 :placeholder:text-xs w-full h-11 pl-2.5 bg-white border-b-2 border-gray-500 focus:outline-none focus:border-green-500"
              errors={errors}
            />
          </div>
          <div className="my-10">
            <InputText
              label="ADDRESS"
              type="text"
              placeholder="123 Mockingbird Lane, San Fancis"
              name="address"
              register={register}
              classInput="placeholder-gray-300 :placeholder:text-xs w-full h-11 pl-2.5 bg-white border-b-2 border-gray-500 focus:outline-none focus:border-green-500"
              errors={errors}
            />
          </div>
          <div className="my-10">
            <span className="block mb-2 text-gray-700 font-bold">SOCIAL ACCOUNTS</span>
            <div className="pl-3">
              <div className="flex items-end gap-2">
                <FacebookIcon className="flex-shrink-0" width={20} height={20} />
                <InputText
                  label=""
                  type="text"
                  placeholder=""
                  name="facebook"
                  register={register}
                  classInput="placeholder-gray-300 :placeholder:text-xs w-full h-11 pl-2.5 bg-white border-b-2 border-gray-500 focus:outline-none focus:border-green-500"
                  errors={errors}
                />
              </div>
              <div className="flex items-end gap-2">
                <InstagramIcon className="flex-shrink-0" width={20} height={20} />
                <InputText
                  label=""
                  type="text"
                  placeholder=""
                  name="instagram"
                  register={register}
                  classInput="placeholder-gray-300 :placeholder:text-xs w-full h-11 pl-2.5 bg-white border-b-2 border-gray-500 focus:outline-none focus:border-green-500"
                  errors={errors}
                />
              </div>
              <div className="flex items-end gap-2">
                <TwitterIcon className="flex-shrink-0" width={20} height={20} />
                <InputText
                  label=""
                  type="text"
                  placeholder=""
                  name="twitter"
                  register={register}
                  classInput="placeholder-gray-300 :placeholder:text-xs w-full h-11 pl-2.5 bg-white border-b-2 border-gray-500 focus:outline-none focus:border-green-500"
                  errors={errors}
                />
              </div>
            </div>
          </div>
          <div className="my-10">
            <InputText
              label="COPYRIGHT MESSAGE"
              type="text"
              placeholder="@2022 by My Website"
              name="copyRight"
              register={register}
              classInput="placeholder-gray-300 :placeholder:text-xs w-full h-11 pl-2.5 bg-white border-b-2 border-gray-500 focus:outline-none focus:border-green-500"
              errors={errors}
            />
          </div>
          <div className="mt-8 border  focus:outline-none bg-green-500 shadow-md rounded-md hover:bg-green-600 text-white">
            <button type="submit" className="pt-4 pb-4 text-center w-full">
              Preview
            </button>
          </div>
        </form>
      </div>
    </ModalDialogV2>
  )
}

export default FormFooter
