import { createUserProfile } from '../../graphql/mutations'
import { CreateUserProfileInput } from '../../API'
import { graphqlQuery } from '../queries'

/**
 * create user
 */
export const createUser = async <T>(user: T) => {
  try {
    const { data } = await graphqlQuery<CreateUserProfileInput>({
      query: createUserProfile,
      variables: { input: user },
      authMode: 'AWS_IAM'
    })
    if (!data) return
    //@ts-ignore
    return data.createUserProfile
  } catch (error) {
    console.error('@user.service::createUser::error', error)
    throw error
  }
}
