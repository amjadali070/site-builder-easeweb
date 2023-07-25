import { useEffect, useState } from 'react'
import AuthenticatedPage from 'src/components/AuthenticatedPage'
import HeaderNav from 'src/components/HeaderNav'
import TransactionDetailsModal from 'src/components/modal/details/TransactionDetailsModal'
import { getMintLog } from 'src/lib/services/mint.service'
import { formatEthAddress } from 'src/util/format'

export default function MintTransactionList() {
  const [logs, setLogs] = useState([] as any[])
  const [view, setView] = useState<any>(null)

  useEffect(() => {
    getMintLog().then(items => setLogs(items))
  }, [])

  return (
    <AuthenticatedPage>
      <TransactionDetailsModal open={!!view} transaction={view} onClose={() => setView(null)} />

      <HeaderNav backButton />
      <div className="p-4">
        <h2 className="mb-4 text-xl font-medium">Transaction history</h2>
        {logs.map(x => (
          <button
            type="button"
            key={x.transactionHash}
            className="px-3 py-3 border-b hover:bg-slate-300"
            onClick={() => setView(x)}
          >
            <div>
              <span className="text-sm text-gray-500">Hash: </span>
              {formatEthAddress(x.transactionHash)}
            </div>
            <div>
              <span className="text-sm text-gray-500">From: </span>
              {formatEthAddress(x.from)}
            </div>
            <div>
              <span className="text-sm text-gray-500">Time: {x.createdAt}</span>
            </div>
          </button>
        ))}
      </div>
    </AuthenticatedPage>
  )
}
