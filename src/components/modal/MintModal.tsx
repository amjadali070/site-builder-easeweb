import { useContext, useState } from 'react'
import ModalDialog, { ModalProps } from 'src/components/new/ModalDialog'
import { ethers } from 'ethers'
import { createMintLog, createNewBlock } from 'src/lib/services/mint.service'
import { useNavigate } from 'react-router-dom'
import { MintContext } from '../context/MintContext'
import Component from '../new/Component'
import ConnectMetamask from '../mint/ConnectMetamask'
import ConfirmModal from '../new/ConfirmModal'

interface IProps extends ModalProps {
  component: any
}

export default function MintModal(props: IProps) {
  const { component, ...modalProps } = props
  const { contract, account } = useContext(MintContext)
  const [minting, setMinting] = useState(false)
  const [showSuccessModal, setShowSuccessModal] = useState(false)
  const [errorMsg, setErrorMsg] = useState('')
  const navigate = useNavigate()

  const mint = async () => {
    const provider = new ethers.providers.Web3Provider(window.ethereum)
    const signer = provider.getSigner(account)
    setMinting(true)

    const block = await createNewBlock({
      type: component.type,
      props: JSON.stringify(component.props),
    })
    if (!block) return

    try {
      const result: ethers.providers.TransactionResponse = await contract.connect(signer).safeMint(account, block.id)
      await createMintLog({ from: account, blockID: block.id, transactionHash: result.hash })
      setShowSuccessModal(true)
    } catch (e: any) {
      if (e.code === 4001) {
        setErrorMsg('Mint aborted!')
      } else {
        setErrorMsg(`Error: ${e.message}`)
      }
    } finally {
      setMinting(false)
    }
  }

  return (
    <ModalDialog title="Mint Component" {...modalProps}>
      <ConfirmModal
        open={showSuccessModal}
        onConfirm={() => navigate('/wallet/mint/transactions')}
        title="Component queued for minting. View transaction history?"
      />

      <div className="px-4">
        <Component data={{ ...component }} />
        <div className="py-4">
          <p>Do you want to mint this component?</p>
        </div>
        <div className="mb-2">
          <ConnectMetamask />
        </div>
        {account && (
          <button
            type="button"
            className="border border-black w-full disabled:opacity-30"
            disabled={minting}
            onClick={mint}
          >
            Mint
          </button>
        )}
        <p className="text-red-500">{errorMsg}</p>
      </div>
    </ModalDialog>
  )
}
