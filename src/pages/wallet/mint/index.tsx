import { useCallback, useContext, useEffect, useState } from 'react'
import AuthenticatedPage from 'src/components/AuthenticatedPage'
import { MintContext } from 'src/components/context/MintContext'
import HeaderNav from 'src/components/HeaderNav'
import ConnectMetamask from 'src/components/mint/ConnectMetamask'
import Component from 'src/components/new/Component'
import { ethers } from 'ethers'
import { getBlockById } from 'src/lib/services/mint.service'
import { useNavigate } from 'react-router-dom'
import { formatEthAddress } from 'src/util/format'

const PAGE_SIZE = 8

interface NFTToken {
  id: ethers.BigNumber
  uri: string
}

function RenderBlock(props: any) {
  const { id } = props

  const [block, setBlock] = useState<any>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    getBlockById(id)
      .then(x => setBlock(x))
      .finally(() => setLoading(false))
  }, [id])

  if (loading) return <span>Loading</span>
  if (block) return <Component data={block} />
  return <span>Failed to render component</span>
}

export default function WalletMintList() {
  const { account, contract } = useContext(MintContext)
  const [tokens, setTokens] = useState([] as NFTToken[])
  const [hasMore, setHasMore] = useState(true)
  const [fetching, setFetching] = useState(true)
  // const [showTokenModal, setShowTokenModal] = useState(false)
  const navigate = useNavigate()

  const loadMore = useCallback(
    async (offset = 0) => {
      setFetching(true)
      const provider = new ethers.providers.Web3Provider(window.ethereum)
      const res: any[] = await contract.connect(provider).functions.listLatestTokens(account, offset, PAGE_SIZE)
      const token = res[0]

      setFetching(false)
      setTokens(x => [...x, ...token])
      if (token.length < PAGE_SIZE) setHasMore(false)
    },
    [account],
  )

  useEffect(() => {
    setTokens([])
    setHasMore(false)
    if (!account) return
    setHasMore(true)
    loadMore()
  }, [account, loadMore])

  return (
    <AuthenticatedPage>
      <HeaderNav backButton />
      <div className="p-4">
        <h2 className="mb-1 text-xl font-medium">Minted Components</h2>

        <button
          type="button"
          className="mb-4 text-sky-500 w-full text-left"
          onClick={() => navigate('/wallet/mint/transactions')}
        >
          View all mint transaction history
        </button>

        <div className="mb-4">
          <p className="mb-1">Connect your wallet to view your tokens</p>
          <ConnectMetamask />
        </div>

        <div className="grid grid-cols-2 gap-4">
          {tokens.map(token => (
            <div
              key={token.id.toHexString()}
              className="flex flex-col w-full h-full aspect-1 cursor-pointer overflow-hidden border"
            >
              <div className="overflow-hidden">
                <RenderBlock id={token.uri} />
              </div>
              <div className="grow" />
              <button type="button" className="border-t">
                {formatEthAddress(token.id.toHexString())}
              </button>
            </div>
          ))}
        </div>
        {hasMore && (
          <button
            type="button"
            className="mt-4 border border-black disabled:opacity-30 w-full"
            onClick={() => loadMore(tokens.length)}
            disabled={fetching}
          >
            Load more
          </button>
        )}
      </div>
    </AuthenticatedPage>
  )
}
