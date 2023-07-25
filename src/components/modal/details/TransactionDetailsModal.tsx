import ModalDialog, { ModalProps } from 'src/components/new/ModalDialog'
import { ethers } from 'ethers'
import { useCallback, useContext, useEffect, useMemo, useState } from 'react'
import { MintContext } from 'src/components/context/MintContext'
import Component from 'src/components/new/Component'
import { MintTransaction } from 'src/API'

interface IProps extends ModalProps {
  transaction: MintTransaction
}

export default function TransactionDetailsModal(props: IProps) {
  const { chainId } = useContext(MintContext)
  const { transaction, ...modalProps } = props
  const { transactionHash, createdAt } = transaction || {}

  const [refreshing, setRefreshing] = useState(false)
  const [response, setResponse] = useState<any>(null)
  const [receipt, setReceipt] = useState<any>(null)

  const component = useMemo(
    () => (transaction?.block ? { ...transaction.block, props: JSON.parse(transaction.block.props) } : null),
    [transaction?.block],
  )

  const load = useCallback(async () => {
    if (!transactionHash) {
      setResponse(null)
      setReceipt(null)
      return
    }

    setRefreshing(true)
    const provider = new ethers.providers.Web3Provider(window.ethereum)
    const [_response, _receipt] = await Promise.all([
      provider.getTransaction(transactionHash),
      provider.getTransactionReceipt(transactionHash),
    ])
    setResponse(_response)
    setReceipt(_receipt)
    setRefreshing(false)
  }, [transactionHash])

  useEffect(() => {
    ;(async () => {
      if (!transactionHash) {
        setResponse(null)
        setReceipt(null)
        return
      }

      setRefreshing(true)
      const provider = new ethers.providers.Web3Provider(window.ethereum)
      const [_response, _receipt] = await Promise.all([
        provider.getTransaction(transactionHash),
        provider.getTransactionReceipt(transactionHash),
      ])
      setResponse(_response)
      setReceipt(_receipt)
      setRefreshing(false)
    })()
  }, [transactionHash])

  return (
    <ModalDialog title="Transaction details" {...modalProps}>
      <div className="p-4">
        <button
          type="button"
          className="mb-4 border border-black w-full disabled:opacity-30"
          disabled={refreshing}
          onClick={load}
        >
          Refresh
        </button>
        <div>
          {component && (
            <div className="mb-4">
              <div className="mb-2 text-sm text-gray-600">Component preview: </div>
              <Component data={component} />
            </div>
          )}
          <div className="mb-3">
            <span className="text-sm text-gray-600">Transaction hash: </span>
            <p className="break-words">{transactionHash}</p>
          </div>
          <div className="mb-3">
            <span className="text-sm text-gray-600">Time: </span>
            <p className="break-words">{createdAt}</p>
          </div>
          {!refreshing &&
            (!response ? (
              <p className="text-red-500">Transaction not found on current network (chainId={chainId})</p>
            ) : (
              <>
                <div className="mb-3">
                  <span className="text-sm text-gray-600">Account: </span>
                  <p className="break-words">{response.from}</p>
                </div>
                <div className="mb-3">
                  <span className="text-sm text-gray-600">Contract: </span>
                  <p className="break-words">{response.to}</p>
                </div>
                <div className="mb-3">
                  <div className="text-sm text-gray-600">Status: </div>
                  <div className="font-medium">
                    {!receipt && <div>Pending</div>}
                    {receipt.status === 1 ? (
                      <div className="text-green-600">Confirmed</div>
                    ) : (
                      <div className="text-red-500">Rejected</div>
                    )}
                  </div>
                </div>
              </>
            ))}
        </div>
      </div>
    </ModalDialog>
  )
}
