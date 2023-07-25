import { useCallback, useContext, useEffect, useState } from 'react'
import { getWebsiteByID } from 'src/lib/services/website.service'
import {
  getLatestBuildRequest,
  startBuild,
  waitBuild,
  waitDeployment,
  waitInvalidation,
} from 'src/lib/services/build.service'
import { BuildStatus } from 'src/API'
import dayjs from 'dayjs'
import { WebsiteContext } from '../context/WebsiteContext'
import Animation from '../animation'
import { Loader } from '../loader'
import ModalDialogV2 from '../new/ModalDialogV2'

export default function BuildModal(props: any) {
  const { open, onClose } = props
  const { websiteID } = useContext(WebsiteContext)

  const [loading, setLoading] = useState(false)
  const [website, setWebsite] = useState<any>()
  const [buildRequest, setBuildRequest] = useState<any>()
  const [invalidated, setInvalidated] = useState(true)
  const [building, setBuilding] = useState(false)
  const [finished, setFinished] = useState(true)
  const [stillShowBuildingAnim, setStillShowBuildingAnim] = useState(false)
  const [showSuccessModal, setShowSuccessModal] = useState(false)

  const showBuildSettings =
    !loading && !building && invalidated && buildRequest?.status !== BuildStatus.INPROGRESS && finished

  const showBuildingAnim =
    (!loading && (building || buildRequest?.status === BuildStatus.INPROGRESS)) || stillShowBuildingAnim

  const waitForDeployment = useCallback(async (site: any, buildReq: any) => {
    if (buildReq.status === BuildStatus.SUCCESS && site?.cloudfrontDistributionID) {
      if (!buildReq.cloudfrontInvalidationID) {
        setInvalidated(false)
        setStillShowBuildingAnim(false)
        await waitDeployment(site.cloudfrontDistributionID)
      } else {
        setInvalidated(false)
        setStillShowBuildingAnim(false)
        await waitInvalidation(site.cloudfrontDistributionID, buildReq.cloudfrontInvalidationID)
      }
    }
    setInvalidated(true)
  }, [])

  const waitForBuildRequest = useCallback(async (id: string) => {
    const updatedBuildRequest: any = await waitBuild(id)
    setBuildRequest(updatedBuildRequest)
    const site = await getWebsiteByID(updatedBuildRequest.websiteID)
    setWebsite(site)

    await waitForDeployment(site, updatedBuildRequest)
  }, [])

  useEffect(() => {
    setLoading(true)
    Promise.all([getWebsiteByID(websiteID), getLatestBuildRequest(websiteID)])
      .then(([_website, _buildRequest]) => {
        setWebsite(_website)
        setBuildRequest(_buildRequest)
        if (_buildRequest?.status === BuildStatus.INPROGRESS) {
          return waitForBuildRequest(_buildRequest.id)
        }
        if (_buildRequest) {
          waitForDeployment(_website, _buildRequest)
        }
        return undefined
      })
      .finally(() => setLoading(false))
  }, [websiteID])

  const start = async () => {
    setFinished(false)
    setBuilding(true)
    setStillShowBuildingAnim(true)
    const buildReq = await startBuild(websiteID)
    setBuildRequest(buildReq)
    setBuilding(false)

    await waitForBuildRequest(buildReq.id)
    setShowSuccessModal(true)
    setFinished(true)
  }

  return (
    <>
      <Loader show={loading} />

      <ModalDialogV2 title="Build Site" open={open} onBack={onClose}>
        <div className="p-4">
          <div className="flex flex-col justify-center items-center">
            {showBuildingAnim && (
              <>
                <Animation name="website-building" size={400} />
                <p className="text-lg mt-2">Building the website</p>
              </>
            )}

            {!invalidated && !loading && (
              <>
                <Animation name="server" size={350} />
                <p className="text-lg mt-2">Deploying new changes</p>
              </>
            )}
          </div>

          {showBuildSettings && (
            <>
              <button
                type="button"
                onClick={start}
                className="mb-2 w-full py-3 disabled:opacity-50 text-white bg-green-500 hover:bg-green-600 shadow-md"
              >
                Build Website
              </button>

              {!loading && buildRequest && website?.cloudfrontDomainName && (
                <div className="mt-2 border border-gray-300 px-4 py-3 space-y-4 shadow-md">
                  <div className="space-y-1">
                    <p className="px-2 py-1 bg-green-100 inline-block text-xs font-medium">{buildRequest.status}</p>
                    <p>Last build attempt: {dayjs(buildRequest.createdAt).format('MM-DD-YYYY hh:mm a')}</p>
                  </div>

                  <button
                    type="button"
                    onClick={() => window.open(`https://${website?.cloudfrontDomainName}`, '_blank')?.focus()}
                    className="w-full py-2 disabled:opacity-50 text-white bg-zinc-800 hover:bg-zinc-600"
                  >
                    Visit Website
                  </button>
                </div>
              )}
            </>
          )}
        </div>
      </ModalDialogV2>

      <ModalDialogV2 title="Deploy" open={showSuccessModal} onBack={() => setShowSuccessModal(false)}>
        <div className="flex flex-col justify-center items-center px-4">
          <Animation name="success" loop={false} size={250} />
          <button
            type="button"
            onClick={() => window.open(`https://${website?.cloudfrontDomainName}`, '_blank')?.focus()}
            className="w-full py-2 disabled:opacity-50 text-white bg-black"
          >
            Visit Website
          </button>
        </div>
      </ModalDialogV2>
    </>
  )
}
