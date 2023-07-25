import { API } from 'aws-amplify'
import { GraphQLResult } from '@aws-amplify/api-graphql'
import { Observable } from 'zen-observable-ts'

interface Options {
  query: any
  maxDepth?: number
  variables?: {}
  authMode?: "AWS_IAM" | "AMAZON_COGNITO_USER_POOLS"
}

type Subscription<T> = Observable<{
  provider: any
  value: {
    data: T
  }
}>

export function graphqlQuery<T = object>(options: Options) {
  const promise = API.graphql({
    query: options.query,
    variables: options.variables || {},
    authMode: options.authMode
  }) as unknown as Promise<
    GraphQLResult<T>
  >
  ;(promise as any).cancel = () => API.cancel(promise)

  return promise
}
export function graphqlSubscribe<T = object>(options: Options) {
  const observable = API.graphql({
    query: options.query,
    variables: options.variables || {},
  }) as Subscription<T>

  return observable
}
