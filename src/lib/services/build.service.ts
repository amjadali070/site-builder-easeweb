import { Auth } from 'aws-amplify'
import {
  CloudFrontClient,
  waitUntilInvalidationCompleted,
  waitUntilDistributionDeployed
} from '@aws-sdk/client-cloudfront'
import {
  BuildStatus,
  CreateBuildRequestMutation,
  CreateBuildRequestMutationVariables,
  GetBuildRequestByWebsiteIDQuery,
  GetBuildRequestByWebsiteIDQueryVariables,
  ModelSortDirection,
  OnUpdateBuildRequestSubscription,
  OnUpdateBuildRequestSubscriptionVariables
} from 'src/API'
import { createBuildRequest } from 'src/graphql/mutations'
import { onUpdateBuildRequest } from 'src/graphql/subscriptions'
import { graphqlQuery, graphqlSubscribe } from '../queries'
import { getBuildRequestByWebsiteID } from 'src/graphql/queries'

export const startBuild = async (websiteID: string) => {
  try {
    const { attributes } = await Auth.currentAuthenticatedUser()
    const { data } = await graphqlQuery<CreateBuildRequestMutation>({
      query: createBuildRequest,
      variables: {
        input: {
          userID: attributes.sub,
          status: BuildStatus.INPROGRESS,
          websiteID
        }
      } as CreateBuildRequestMutationVariables
    })

    const buildRequest = data?.createBuildRequest
    if (!buildRequest) {
      throw new Error('Create build request failed')
    }

    return buildRequest
  } catch (error) {
    console.error('@build.service::createBuildRequest::error', error)
    throw error
  }
}

export const getLatestBuildRequest = async (websiteID: string) => {
  const { data } = await graphqlQuery<GetBuildRequestByWebsiteIDQuery>({
    query: getBuildRequestByWebsiteID,
    variables: {
      websiteID,
      sortDirection: ModelSortDirection.DESC,
      limit: 1
    } as GetBuildRequestByWebsiteIDQueryVariables
  })

  return data?.getBuildRequestByWebsiteID?.items?.[0] || null
}

/**
 * SUBSCRIPTIONS
 */
export const buildSubscriptions = async () => {
  const { attributes } = await Auth.currentAuthenticatedUser()

  return {
    onUpdate: graphqlSubscribe<OnUpdateBuildRequestSubscription>({
      query: onUpdateBuildRequest,
      variables: { userID: attributes.sub } as OnUpdateBuildRequestSubscriptionVariables
    })
      .map(x => x?.value?.data?.onUpdateBuildRequest)
      .filter(x => !!x)
      .map(x => x as NonNullable<typeof x>)
  }
}

export const waitBuild = async (id: string) => {
  return new Promise(async resolve => {
    const { onUpdate } = await buildSubscriptions()
    const subscription = onUpdate
      .filter(item => item.id === id)
      .subscribe(item => {
        resolve(item)
        subscription.unsubscribe()
      })
  })
}

/**
 * CLOUDFRONT
 * */
const cloudFrontClient = async () => {
  const credentials = await Auth.currentCredentials()

  return new CloudFrontClient({
    region: 'us-east-1', // without region, sdk v3 won't work
    credentials: Auth.essentialCredentials(credentials)
  })
}

export const waitDeployment = async (distributionID: string) => {
  return waitUntilDistributionDeployed(
    {
      client: await cloudFrontClient(),
      maxWaitTime: 600,
      minDelay: 20,
      maxDelay: 40
    },
    {
      Id: distributionID
    }
  )
}

export const waitInvalidation = async (distributionID: string, invalidationID: string) => {
  return waitUntilInvalidationCompleted(
    {
      client: await cloudFrontClient(),
      maxWaitTime: 300,
      minDelay: 20,
      maxDelay: 40
    },
    {
      Id: invalidationID,
      DistributionId: distributionID
    }
  )
}
