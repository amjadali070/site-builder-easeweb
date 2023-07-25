import React, { PropsWithChildren, useContext, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

import { AuthContext } from './AuthContext'

export default function AuthenticatedPage({ children }: PropsWithChildren<Record<string, unknown>>) {
  const navigate = useNavigate()

  const { authState } = useContext(AuthContext)

  useEffect(() => {
    if (authState === 'unauthenticated') {
      navigate('/signin', { replace: true })
    }
  }, [authState, navigate])

  // eslint-disable-next-line react/jsx-no-useless-fragment
  return <>{children}</>
}
