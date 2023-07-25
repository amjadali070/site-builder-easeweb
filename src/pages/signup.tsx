import { Auth } from 'aws-amplify'
import React, { useState } from 'react'
import ConfirmCodeForm from 'src/components/signIn/ConfirmCodeForm'
import SignInForm from 'src/components/signIn/SigninForm'
import UnauthenticatedPage from 'src/components/UnauthenticatedPage'
import { createUser } from 'src/lib/services/user.service'
import Layout from '../components/layout/Layout'
import { ISignUpUser } from '../lib/types/types'

export default function Signup() {
  const [confirm, setConfirm] = useState(false)
  const [loading, setLoading] = useState(false)
  const [email, setEmail] = useState('')
  const [error, setError] = useState('')

  const onSubmit = async (user: ISignUpUser) => {
    try {
      setLoading(true)
      const { userSub } = await Auth.signUp({
        username: user.email?.trim(),
        password: user.password?.trim(),
        attributes: {
          email: user.email?.trim(),
          name: `${user.firstName.trim()} ${user.lastName.trim()}`,
        },
      })
      await createUser({
        id: userSub,
        firstName: user.firstName.trim(),
        lastName: user.lastName.trim(),
        email: user.email.trim(),
      })
      setEmail(user.email)
      setConfirm(true)
    } catch (err: any) {
      setError(err?.message ?? 'Something went wrong')
      setConfirm(false)
    } finally {
      setLoading(false)
    }
  }

  return (
    <UnauthenticatedPage>
      <Layout>
              {!confirm ? (
                <SignInForm onSubmit={onSubmit} loading={loading} error={error} />
              ) : (
                <ConfirmCodeForm email={email} />
              )}
      </Layout>
    </UnauthenticatedPage>
  )
}
