import { useContext } from 'react'
import { ethers } from 'ethers'
import { formatEthAddress } from 'src/util/format'
import { MintContext } from '../context/MintContext'

export default function ConnectMetamask() {
  const { status, account } = useContext(MintContext)

  const connectWallet = async () => {
    const provider = new ethers.providers.Web3Provider(window.ethereum)
    await provider.send('wallet_requestPermissions', [
      {
        eth_accounts: {},
      },
    ])
  }

  return (
    <div className="flex">
      {status === 'connection-checking' && <div>Loading</div>}

      {status === 'metamask-required' && (
        <a className="font-medium" href="https://metamask.io/download/" target="_blank" rel="noopener noreferrer">
          Install Metamask extension to continue
        </a>
      )}

      {!account && (
        <button type="button" className="px-3 py-2 border border-black" onClick={connectWallet}>
          Connect Metamask
        </button>
      )}

      {account && (
        <>
          <div className="flex-grow">Account: {formatEthAddress(account)}</div>
          <button type="button" className="flext-shrink-0 text-sm text-sky-500" onClick={connectWallet}>
            Switch
          </button>
        </>
      )}
    </div>
  )
}
