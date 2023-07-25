import { useNavigate } from 'react-router-dom'
import { PropsWithChildren, useContext, useEffect } from 'react'
import { AuthContext } from './AuthContext'

export default function UnauthenticatedPage(props: PropsWithChildren<Record<string, unknown>>) {
  const navigate = useNavigate()
  const { authState } = useContext(AuthContext)
  const { children } = props

  useEffect(() => {
    if (authState === 'authenticated') {
      navigate('/', { replace: true })
    }
  }, [authState])

  // eslint-disable-next-line react/jsx-no-useless-fragment
  return <>{children}</>
}
