import { useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'

import { getSectionTemplates } from 'src/services/section.service'
import { deleteWebsite, getComponents, getTemplates, ITemplate } from '../services/website.service'
import { getWebsitesByUserID } from '../lib/services/website.service'
import { Loader } from '../components/loader'
import AuthenticatedPage from '../components/AuthenticatedPage'
import HeaderNav from '../components/HeaderNav'
import WebsiteSettings from '../components/modal/WebsiteSettings'
import ConfirmModal from '../components/new/ConfirmModal'
import ModalDialog from '../components/new/ModalDialog'
import PreviewLayout from '../components/layout/PreviewLayout'
// import custom from '../assets/images/custom.gif'

export default function New() {
  const navigate = useNavigate()

  const [loading, setLoading] = useState(true)
  const [websites, setWebsites] = useState([] as any[])
  const [templates, setTemplates] = useState<ITemplate[]>([])
  const [sectionTemplates, setSectionTemplates] = useState<any[]>([])
  const [selectedTemplate, setSelectedTemplate] = useState<any>(null)
  const [selectedSectionTemplate, setSelectedSectionTemplate] = useState<any>(null)
  const [showModalNewWebsite, setShowModalNewWebsite] = useState(false)
  const [showModalChooseTemplate, setShowModalChooseTemplate] = useState(false)
  const [confirmDeleteWebsiteId, setConfirmDeleteWebsiteId] = useState(null)
  const [showConfirmDeleteModal, setShowConfirmDeleteModal] = useState(false)

  const handleDeleteWebsite = async (id: string) => {
    setWebsites(_websites => _websites.filter(w => w.id !== id))
    await deleteWebsite(id)
  }

  const handleConfirmDeleteWebsite = async (confirmed: boolean) => {
    if (confirmDeleteWebsiteId && confirmed) await handleDeleteWebsite(confirmDeleteWebsiteId)

    setShowConfirmDeleteModal(false)
    setConfirmDeleteWebsiteId(null)
  }

  const fetchWebsites = () => {
    getWebsitesByUserID()
      .then(async res => {
        const sites = await Promise.all(
          (res?.items || [])
            .filter(item => item !== null)
            .map(async item => ({
              ...item,
              components: await getComponents(item?.id as string),
            })),
        )
        setWebsites(sites)
      })
      .finally(() => setLoading(false))
  }

  const fetchTemplates = () => {
    getTemplates().then(res => setTemplates(res || []))
    getSectionTemplates().then(res => setSectionTemplates(res || []))
  }

  useEffect(() => {
    fetchWebsites()
    fetchTemplates()
  }, [])

  return (
    <AuthenticatedPage>
      <PreviewLayout>
        <Loader show={loading} />

        <HeaderNav />

        {/* home page */}
        <div className="w-full px-5 pt-5">
          {websites.map(website => {
            const bgImage: string = website?.components?.[0]?.props?.src || null
            const bgColor: string = website?.components?.[0]?.props?.title?.settings?.backgroundColor || '#3f3f46'
            return (
              <div key={website.id} 
              className="mb-6 w-full border flex shadow-md bg-zinc-900 border-b-4 border-black h-20 justify-between cursor-pionter items-center hover:bg-zinc-600 hover:border-green-500"
              >
                <div className='flex justify-center items-center text-white w-12'>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 12h16.5m-16.5 3.75h16.5M3.75 19.5h16.5M5.625 4.5h12.75a1.875 1.875 0 010 3.75H5.625a1.875 1.875 0 010-3.75z" />
                  </svg>


                </div>
                <div className='w-full flex items-center justify-start pr-16'>
                  <div className="flex w-full justify-center items-center border border-neutral-500">
                    <button
                      type="button"
                      className="h-8 cursor-pointer relative bg-cover "
                      style={{
                        width: '100%',
                        aspectRatio: '4 / 3',
                        background: bgImage ? `url(${bgImage})` : bgColor,
                      }}
                      onClick={() => navigate(`/websites/${website.id}`)}
                    >
                      <p className="font-extralight flex text-center pl-5 items-center text-sm text-white ">
                        {website.name}
                      </p>
                    </button>

                      <button
                        type="button"
                        className="h-8 w-16  flex justify-center items-center bg-neutral-600 border-l border-neutral-500 text-white"
                        onClick={() => navigate(`/websites/${website.id}`)}
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
                        </svg>

                      </button>
                  </div>
                </div>
                <button
                  type="button"
                  className="h-full w-14 flex justify-center items-center text-white"
                  onClick={() => {
                  setConfirmDeleteWebsiteId(website.id)
                  setShowConfirmDeleteModal(true)
                  }}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
                  </svg>

                </button>
              </div>
            )
          })}

          {/* build a new website */}
          <div className="mb-6 w-full h-20 bg-green-500 border shadow-md flex justify-center items-center hover:bg-green-600 hover:border-b-4 hover:border-black">
            <button
              type="button"
              className="font-extralight flex text-center justify-center items-center text-white  text-xl w-full h-full"
              onClick={() => setShowModalChooseTemplate(true)}
            >
              Build a New Site
            </button>
          </div>

          {/* wallet */}
          {/* <div className="mb-6 w-full aspect-w-4 aspect-h-3 bg-black">
            <button
              type="button"
              className="font-extralight flex text-center justify-center items-center text-white text-7xl"
              onClick={() => navigate('/wallet')}
            >
              Digital Wallet
            </button>
          </div> */}
        </div>

        {/* modals */}
        <ConfirmModal
          open={showConfirmDeleteModal}
          onConfirm={handleConfirmDeleteWebsite}
          title="Are you sure you would like to delete this website?"
        />

        <WebsiteSettings
          template={selectedTemplate}
          sectionTemplate={selectedSectionTemplate}
          open={showModalNewWebsite}
          onClose={() => setShowModalNewWebsite(false)}
        />

        <ModalDialog
          title="Choose Category"
          open={showModalChooseTemplate}
          onClose={() => setShowModalChooseTemplate(false)}
        >
          <div className="px-10">

            

            {sectionTemplates.map(template => (
              <div key={template.id} className="mb-6 w-full">
                <button
                  type="button"
                  onClick={() => {
                    setSelectedSectionTemplate(template)
                    setShowModalNewWebsite(true)
                  }}
                >
                  <div className="bg-green-500 border rounded-lg shadow-md ">
                      <img className="relative rounded-lg w-full object-scale-down bg-blackOverlay" src={template.thumbnail} alt={template.name} />
                      {/* <div className="px-5 py-2 text-white">
                          <span>{template.name}</span>
                      </div> */}
                  </div>
                  
                </button>
              </div>
            ))}

            {templates.map(template => (
              <div key={template.id} className="mb-6 w-full aspect-w-4 aspect-h-3 bg-black">
                <button
                  type="button"
                  onClick={() => {
                    setSelectedTemplate(template)
                    setShowModalNewWebsite(true)
                  }}
                >
                  <img className="inset-0" src={template.thumbnail} alt={template.name} />
                </button>
              </div>
            ))}

            <div className="mb-10 mt-6 w-full bg-slate-700 text-white border rounded-lg shadow-md h-80 flex justify-center items-center cursor-pointer hover:bg-slate-800">
              <button
                type="button"
                className="font-extralight flex text-center justify-center items-center text-white text-5xl"
                onClick={() => setShowModalNewWebsite(true)}
              >
                Custom site
              </button>
            </div>
          </div>
        </ModalDialog>
      </PreviewLayout>
    </AuthenticatedPage>
  )
}
