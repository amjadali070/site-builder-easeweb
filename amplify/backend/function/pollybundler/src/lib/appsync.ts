import aws4 from 'aws4';
import axios from 'axios';
import { URL } from 'url';

const uri = new URL(process.env.API_POLLYAPI_GRAPHQLAPIENDPOINTOUTPUT)

function graphql(query: any) {
  const signed = aws4.sign({
    service: 'appsync',
    region: process.env.REGION,

    host: uri.host,
    path: uri.pathname,
    method: 'POST',
    body: JSON.stringify(query),
    headers: {
      'Content-Type': 'application/json'
    },

    // axios specifics
    data: query,
    url: uri.toString(),
    timeout: 2000
  })

  console.log(signed)

  return axios(signed)
}

export function getWebsite(id: string) {
  return graphql({
    query: `
      query GetWebsite($id: ID!) {
        getWebsite(id: $id) {
          id
          name
          config
          userID
          createdAt
          cloudfrontDistributionID
          cloudfrontDomainName
          updatedAt
          menu
          footer
        }
      }
    `,
    variables: { id }
  })
}

export function getPagesByWebsiteID(websiteID: string) {
  return graphql({
    query: `query GetPageByWebsiteID(
      $websiteID: ID
      $createdAt: ModelStringKeyConditionInput
      $sortDirection: ModelSortDirection
      $filter: ModelPageFilterInput
      $limit: Int
      $nextToken: String
    ) {
      getPageByWebsiteID(
        websiteID: $websiteID
        createdAt: $createdAt
        sortDirection: $sortDirection
        filter: $filter
        limit: $limit
        nextToken: $nextToken
      ) {
        items {
          id
          name
          path
          websiteID
          blocks
          createdAt
          userID
          updatedAt
        }
        nextToken
      }
    }`,
    variables: {
      websiteID
    }
  })
}

export function updateWebsite(id: string, params: any) {
  return graphql({
    query: `
      mutation UpdateWebsite(
        $input: UpdateWebsiteInput!
        $condition: ModelWebsiteConditionInput
      ) {
        updateWebsite(input: $input, condition: $condition) {
          id
          name
          config
          userID
          createdAt
          cloudfrontDistributionID
          cloudfrontDomainName
          updatedAt
        }
      }
    `,
    variables: {
      input: {
        id,
        ...params
      }
    }
  })
}

export function updateBuildRequest(id: string, params: any) {
  return graphql({
    query: `
      mutation UpdateBuildRequest(
        $input: UpdateBuildRequestInput!
        $condition: ModelBuildRequestConditionInput
      ) {
        updateBuildRequest(input: $input, condition: $condition) {
          id
          status
          websiteID
          createdAt
          userID
          cloudfrontInvalidationID
          updatedAt
        }
      }
    `,
    variables: {
      input: {
        id,
        ...params
      }
    }
  })
}
