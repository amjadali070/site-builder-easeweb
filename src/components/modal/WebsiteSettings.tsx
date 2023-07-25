import { useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { v4 as uuid } from 'uuid'
import { createPageRecord, getWebsiteByID, saveWebsite } from 'src/lib/services/website.service'
import { createNewWebsite, ITemplate, upsertBlock } from 'src/services/website.service'
import { IoAdd } from 'react-icons/io5'
import InputText from '../common/InputText'
import HeaderNav from '../HeaderNav'
import ImageUploader from '../new/ImageUploader'
import ModalDialog from '../new/ModalDialog'
import { Loader } from '../loader'
import { ButtonLinkTypes } from '../../_polly/components/src/constants'

interface WebsiteSettingsProps {
  template?: ITemplate
  sectionTemplate?: any
  open: boolean
  onClose: () => void
  id?: string
  websiteLogo?: string
}

export default function WebsiteSettings({
  template,
  open,
  onClose,
  sectionTemplate,
  id,
  websiteLogo,
}: WebsiteSettingsProps) {
  const navigate = useNavigate()
  const {
    register,
    formState: { errors },
    setValue,
    handleSubmit,
  } = useForm()

  const [loading, setLoading] = useState(false)
  const [logo, setLogo] = useState<string | null>(null)
  const [showModalUploadLogo, setShowModalUploadLogo] = useState(false)

  const onSubmit = async (form: any) => {
    setLoading(true)

    // if editing existing website
    if (id) {
      await saveWebsite({ id, ...form, config: JSON.stringify(form.config) })
      // closes the settings modal and
      // !exiting the fn
      setLoading(false)
      onClose()
      return
    }

    // else create a new website
    try {
      const website = await createNewWebsite({
        ...form,
        config: JSON.stringify(form.config),
      })
      if (template) {
        const { blocks } = template
        const { pages } = template

        await saveWebsite({
          id: website?.id ?? '',
          menu: JSON.stringify(template.menu),
          footer: JSON.stringify({
            ...template.footer,
            info: {
              twitter: '#',
              phoneNumber: '123-456-7890',
              address: '123 Mockingbird Lane, San Fancis',
              copyRight: `© ${new Date().getFullYear()} ${form.name}`,
              facebook: '#',
              name: form.name,
              instagram: '#',
              fax: '123-456-7890',
              email: 'hello@example.com',
            },
          }),
        })

        blocks.forEach(async (block: any) => {
          await upsertBlock(website?.id || '', block)
        })

        pages.forEach(async (page: any) => {
          const pageBlocks = JSON.stringify(page.blocks.map((block: any) => ({ ...block, id: uuid() })))
          await createPageRecord({
            blocks: pageBlocks,
            name: page.name,
            path: page.path,
            websiteID: website?.id || '',
          })
        })
      } else if (sectionTemplate) {
        await saveWebsite({
          id: website?.id ?? '',
          menu: JSON.stringify(sectionTemplate.menu),
          footer: JSON.stringify({
            ...sectionTemplate.footer,
            info: {
              twitter: '#',
              phoneNumber: '123-456-7890',
              address: '123 Mockingbird Lane, San Fancis',
              copyRight: `© ${new Date().getFullYear()} ${form.name}`,
              facebook: '#',
              name: form.name,
              instagram: '#',
              fax: '123-456-7890',
              email: 'hello@example.com',
            },
          }),
        })

        // await Promise.all(
        //   sectionTemplate.blocks.reverse().map((block: any) => {
        //     console.log(block)
        //     return upsertBlock(website?.id || '', {
        //       ...block,
        //       isSection: true,
        //     })
        //   }),
        // )

        for (const block of sectionTemplate.blocks.reverse()) {
          console.log(block)
          await upsertBlock(website?.id || '', {
            ...block,
            isSection: true,
          })
        }
      } else {
        await saveWebsite({
          id: website?.id ?? '',
          menu: JSON.stringify({
            pages: [{ title: 'Home', url: '/', type: ButtonLinkTypes.INTERNAL }],
            style: 'MENU_BAR1',
          }),
          footer: JSON.stringify({
            style: 'FOOTER2',
            info: {
              twitter: '#',
              phoneNumber: '123-456-7890',
              address: '123 Mockingbird Lane, San Fancis',
              copyRight: `© ${new Date().getFullYear()} ${form.name}`,
              facebook: '#',
              name: form.name,
              instagram: '#',
              fax: '123-456-7890',
              email: 'hello@example.com',
            },
          }),
        })
      }
      navigate(`/websites/${website?.id}`)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    if (!id) return
    getWebsiteByID(id).then(data => {
      const config = JSON.parse(data?.config || '{}')
      setValue('name', data?.name || '')
      setValue('config.title', config?.title || '')
      setValue('config.logo', config?.logo || undefined)
    })
  }, [id, setValue])

  return (
    <>
      <Loader show={loading} />

      <ModalDialog customHeader open={open} onClose={onClose}>
        <HeaderNav backButton onBackClick={onClose} logo={logo} />

        <form onSubmit={handleSubmit(onSubmit)} className="px-6 pt-8 pb-20">
          <div className="mb-8">
            <InputText
              label="Your Site Name"
              type="text"
              placeholder="Website Name"
              name="name"
              register={register}
              required={{ value: true, message: 'Site name is required' }}
              errors={errors}
            />
          </div>

          <div className="mb-8">
            <InputText
              label="Title Tag"
              type="text"
              placeholder="Page Title"
              name="config.title"
              register={register}
              required={{ value: true, message: 'Title is required' }}
              errors={errors}
            />
          </div>

          <div className="mb-8">
            <label className="text-black font-extralight text-3xl inline-block pb-4 mb-2">Click to Add Logo</label>
            <br />
            {logo || websiteLogo ? (
              <button type="button" onClick={() => setShowModalUploadLogo(true)}>
                <img
                  src={logo ?? websiteLogo}
                  alt="Brand logo"
                  className="object-contain border border-black mb-4 h-36 w-36 rounded-full"
                />
              </button>
            ) : (
              <button
                type="button"
                className="h-36 w-36 border border-black rounded-full flex justify-center items-center"
                onClick={() => setShowModalUploadLogo(true)}
              >
                <div className="h-28 w-28 bg-gray-200 rounded-full flex justify-center items-center">
                  <IoAdd size={32} />
                </div>
              </button>
            )}
          </div>

          

          <button
            className="fixed lg:max-w-[447px] rounded-lg shadow-md left-6 right-6 bottom-8 p-4 w-full bg-green-500 hover:bg-green-600 text-white font-extralight text-2xl"
            type="submit"
            disabled={loading}
          >
            {loading ? 'Saving' : 'Save'}
          </button>
        </form>
      </ModalDialog>

      <ModalDialog title="Upload logo" open={showModalUploadLogo} onClose={() => setShowModalUploadLogo(false)}>
        <ImageUploader
          onSubmit={image => {
            setValue('config.logo', image)
            setLogo(image)
            setShowModalUploadLogo(false)
          }}
        />
      </ModalDialog>
    </>
  )
}
