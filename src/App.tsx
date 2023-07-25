import { Route, Routes } from 'react-router-dom'
import { MintProvider } from 'src/components/context/MintContext'
import { AuthContextProvider } from 'src/components/AuthContext'
import { Amplify } from 'aws-amplify'
import awsExports from './aws-exports'
import 'tailwindcss/tailwind.css'
import './styles/globals.css'

import HomePage from './pages/index'
import SigninPage from './pages/signin'
import SignupPage from './pages/signup'
import VerifyPage from './pages/verify-reset-password'
import ForgotPage from './pages/forgot-password'
import WebsitePage from './pages/websites/[id]'
import WebsitePagePage from './pages/websites/[...id]'
import Wallet from './pages/wallet/index'
import WalletComponentList from './pages/wallet/components'
import WalletWebsite from './pages/wallet/[websiteId]'
import WalletWebsiteList from './pages/wallet/websites'
import WalletMintList from './pages/wallet/mint/index'
import WalletMintTransactionList from './pages/wallet/mint/transactions'
import LiveEdit from './pages/live-edit'
import PreviewPage from './pages/preview'
import PlaygroundPage from './pages/playground'
import VariantPreview from './pages/variant-preview'
import Bar from './pages/Dashboard'

Amplify.configure({ ...awsExports })

export default function App() {
  return (
    <AuthContextProvider>
      <MintProvider>
        <Routes>
          <Route path="/signin" element={<SigninPage />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/verify-reset-password" element={<VerifyPage />} />
          <Route path="/forgot-password" element={<ForgotPage />} />
          <Route path="/dashboard" element={<Bar />} />

          <Route path="/" element={<HomePage />} />
          <Route path="/websites/:id" element={<WebsitePage />} />
          <Route path="/websites/:id/*" element={<WebsitePagePage />} />
          <Route path="/wallet" element={<Wallet />} />
          <Route path="/wallet/components" element={<WalletComponentList />} />
          <Route path="/wallet/websites" element={<WalletWebsiteList />} />
          <Route path="/wallet/:websiteId" element={<WalletWebsite />} />
          <Route path="/wallet/mint" element={<WalletMintList />} />
          <Route path="/wallet/mint/transactions" element={<WalletMintTransactionList />} />
          <Route path="/preview/:id" element={<PreviewPage />} />
          <Route path="/playground" element={<PlaygroundPage />} />
          <Route path="/variant-preview" element={<VariantPreview />} />

          {/* Live edit */}
          <Route path="/live/:websiteId/:pageId" element={<LiveEdit />} />
        </Routes>
        <div id="modal-wrapper" />
      </MintProvider>
    </AuthContextProvider>
  )
}
