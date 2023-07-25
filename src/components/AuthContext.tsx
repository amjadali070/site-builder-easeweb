import { Auth, Hub } from 'aws-amplify'
import React, { PropsWithChildren, useEffect, useState } from 'react'

type AuthState = 'loading' | 'authenticated' | 'unauthenticated'

interface IValue {
  authState: AuthState
}

export const AuthContext = React.createContext<IValue>({ authState: 'loading' })

export function AuthContextProvider(props: PropsWithChildren<Record<string, unknown>>) {
  const { children } = props
  const [authState, setAuthState] = useState<AuthState>('loading')

  // Use effect is run when component loading is mounted
  useEffect(() => {
    // Define updateAuthState
    const updateAuthState = async () => {
      try {
        // Get current auth user, this throw error if not authenticated
        await Auth.currentAuthenticatedUser()
        // No error, change auth state to show page content
        setAuthState('authenticated')
      } catch (error) {
        // Error, change auth state to redirect user to login page
        setAuthState('unauthenticated')
      }
    }
    // Call AuthState Once
    updateAuthState()
    // Set up Hub to listen for auth event in case user log out
    Hub.listen('auth', updateAuthState)
    return () => Hub.remove('auth', updateAuthState) // cleanup
  }, [])

  // eslint-disable-next-line react/jsx-no-constructed-context-values
  return <AuthContext.Provider value={{ authState }}>{children}</AuthContext.Provider>
}
