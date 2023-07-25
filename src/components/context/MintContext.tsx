import React, { useEffect, useMemo, useState } from 'react'
import { ethers } from 'ethers'
import PollyContract from 'src/_polly/nft/artifacts/contracts/PollyComponentToken.sol/PollyComponentToken.json'

const contractAddress = '0xCb0e94Ebf3495780A3c05320a8E92B34a3132086'
const contract = new ethers.Contract(contractAddress, PollyContract.abi)

export interface MintContextState {
  chainId: string | number
  contract: ethers.Contract
  account: string
  status: 'metamask-required' | 'connection-checking' | 'ready'
}

export const MintContext = React.createContext<MintContextState>({
  chainId: '0x0',
  contract,
  account: '',
  status: 'metamask-required',
})

export const MintProvider = ({ children }: React.PropsWithChildren<Record<string, unknown>>) => {
  const [metaMaskInstalled] = useState(() => !!window.ethereum?.isMetaMask)
  const [account, setAccount] = useState('')
  const [chainId, setChainId] = useState('0x0')
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    if (!metaMaskInstalled) return

    let changed = false
    const fn = async () => {
      const provider = new ethers.providers.Web3Provider(window.ethereum)
      const [accounts, _chainId] = await Promise.all([
        provider.send('eth_accounts', []),
        provider.send('net_version', []),
      ])
      const firstAccount: string = accounts[0] || ''

      setChainId(_chainId)
      if (!changed) {
        setAccount(firstAccount)
        setLoading(false)
      }
    }
    fn()

    const accountHandler = (accounts: string[]) => {
      changed = true
      setAccount(accounts[0] || '')
      setLoading(false)
    }

    const chainHandler = (_chainId: string) => setChainId(_chainId)

    window.ethereum.on('accountsChanged', accountHandler)
    window.ethereum.on('chainChanged', chainHandler)

    // eslint-disable-next-line consistent-return
    return () => {
      window.ethereum.removeListener('accountsChanged', accountHandler)
      window.ethereum.removeListener('chainChanged', chainHandler)
    }
  }, [metaMaskInstalled])

  const status = useMemo(() => {
    if (!metaMaskInstalled) return 'metamask-required'
    if (loading) return 'connection-checking'
    return 'ready'
  }, [metaMaskInstalled, loading])

  // eslint-disable-next-line react/jsx-no-constructed-context-values
  return <MintContext.Provider value={{ contract, account, status, chainId }}>{children}</MintContext.Provider>
}
