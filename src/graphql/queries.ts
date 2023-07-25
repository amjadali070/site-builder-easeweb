/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getUserProfile = /* GraphQL */ `
  query GetUserProfile($id: ID!) {
    getUserProfile(id: $id) {
      id
      firstName
      lastName
      email
      profilePics {
        bucket
        region
        key
      }
      createdAt
      updatedAt
    }
  }
`;
export const listUserProfiles = /* GraphQL */ `
  query ListUserProfiles(
    $filter: ModelUserProfileFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUserProfiles(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        firstName
        lastName
        email
        profilePics {
          bucket
          region
          key
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getWebsite = /* GraphQL */ `
  query GetWebsite($id: ID!) {
    getWebsite(id: $id) {
      id
      name
      config
      userID
      createdAt
      cloudfrontDistributionID
      cloudfrontDomainName
      menu
      footer
      pages
      updatedAt
    }
  }
`;
export const listWebsites = /* GraphQL */ `
  query ListWebsites(
    $filter: ModelWebsiteFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listWebsites(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        config
        userID
        createdAt
        cloudfrontDistributionID
        cloudfrontDomainName
        menu
        footer
        pages
        updatedAt
      }
      nextToken
    }
  }
`;
export const getWebsiteByUserID = /* GraphQL */ `
  query GetWebsiteByUserID(
    $userID: ID
    $createdAt: ModelStringKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelWebsiteFilterInput
    $limit: Int
    $nextToken: String
  ) {
    getWebsiteByUserID(
      userID: $userID
      createdAt: $createdAt
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        name
        config
        userID
        createdAt
        cloudfrontDistributionID
        cloudfrontDomainName
        menu
        footer
        pages
        updatedAt
      }
      nextToken
    }
  }
`;
export const getBuildRequest = /* GraphQL */ `
  query GetBuildRequest($id: ID!) {
    getBuildRequest(id: $id) {
      id
      status
      websiteID
      createdAt
      userID
      cloudfrontInvalidationID
      updatedAt
    }
  }
`;
export const listBuildRequests = /* GraphQL */ `
  query ListBuildRequests(
    $filter: ModelBuildRequestFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listBuildRequests(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        status
        websiteID
        createdAt
        userID
        cloudfrontInvalidationID
        updatedAt
      }
      nextToken
    }
  }
`;
export const getBuildRequestByWebsiteID = /* GraphQL */ `
  query GetBuildRequestByWebsiteID(
    $websiteID: ID
    $createdAt: ModelStringKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelBuildRequestFilterInput
    $limit: Int
    $nextToken: String
  ) {
    getBuildRequestByWebsiteID(
      websiteID: $websiteID
      createdAt: $createdAt
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        status
        websiteID
        createdAt
        userID
        cloudfrontInvalidationID
        updatedAt
      }
      nextToken
    }
  }
`;
export const getPage = /* GraphQL */ `
  query GetPage($id: ID!) {
    getPage(id: $id) {
      id
      name
      path
      websiteID
      blocks
      createdAt
      userID
      updatedAt
    }
  }
`;
export const listPages = /* GraphQL */ `
  query ListPages(
    $filter: ModelPageFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPages(filter: $filter, limit: $limit, nextToken: $nextToken) {
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
  }
`;
export const getPageByWebsiteID = /* GraphQL */ `
  query GetPageByWebsiteID(
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
  }
`;
export const getBlock = /* GraphQL */ `
  query GetBlock($id: ID!) {
    getBlock(id: $id) {
      id
      type
      props
      createdAt
      updatedAt
      owner
    }
  }
`;
export const listBlocks = /* GraphQL */ `
  query ListBlocks(
    $filter: ModelBlockFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listBlocks(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        type
        props
        createdAt
        updatedAt
        owner
      }
      nextToken
    }
  }
`;
export const getMintTransaction = /* GraphQL */ `
  query GetMintTransaction($id: ID!) {
    getMintTransaction(id: $id) {
      id
      transactionHash
      from
      userID
      blockID
      createdAt
      updatedAt
      block {
        id
        type
        props
        createdAt
        updatedAt
        owner
      }
    }
  }
`;
export const listMintTransactions = /* GraphQL */ `
  query ListMintTransactions(
    $filter: ModelMintTransactionFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listMintTransactions(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        transactionHash
        from
        userID
        blockID
        createdAt
        updatedAt
        block {
          id
          type
          props
          createdAt
          updatedAt
          owner
        }
      }
      nextToken
    }
  }
`;
export const getMintTransactionByUser = /* GraphQL */ `
  query GetMintTransactionByUser(
    $userID: ID
    $createdAt: ModelStringKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelMintTransactionFilterInput
    $limit: Int
    $nextToken: String
  ) {
    getMintTransactionByUser(
      userID: $userID
      createdAt: $createdAt
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        transactionHash
        from
        userID
        blockID
        createdAt
        updatedAt
        block {
          id
          type
          props
          createdAt
          updatedAt
          owner
        }
      }
      nextToken
    }
  }
`;
