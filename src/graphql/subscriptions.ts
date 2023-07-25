/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateUserProfile = /* GraphQL */ `
  subscription OnCreateUserProfile {
    onCreateUserProfile {
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
export const onUpdateUserProfile = /* GraphQL */ `
  subscription OnUpdateUserProfile {
    onUpdateUserProfile {
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
export const onDeleteUserProfile = /* GraphQL */ `
  subscription OnDeleteUserProfile {
    onDeleteUserProfile {
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
export const onCreateWebsite = /* GraphQL */ `
  subscription OnCreateWebsite($userID: String) {
    onCreateWebsite(userID: $userID) {
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
export const onUpdateWebsite = /* GraphQL */ `
  subscription OnUpdateWebsite($userID: String) {
    onUpdateWebsite(userID: $userID) {
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
export const onDeleteWebsite = /* GraphQL */ `
  subscription OnDeleteWebsite($userID: String) {
    onDeleteWebsite(userID: $userID) {
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
export const onCreateBuildRequest = /* GraphQL */ `
  subscription OnCreateBuildRequest($userID: String) {
    onCreateBuildRequest(userID: $userID) {
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
export const onUpdateBuildRequest = /* GraphQL */ `
  subscription OnUpdateBuildRequest($userID: String) {
    onUpdateBuildRequest(userID: $userID) {
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
export const onDeleteBuildRequest = /* GraphQL */ `
  subscription OnDeleteBuildRequest($userID: String) {
    onDeleteBuildRequest(userID: $userID) {
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
export const onCreatePage = /* GraphQL */ `
  subscription OnCreatePage($userID: String) {
    onCreatePage(userID: $userID) {
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
export const onUpdatePage = /* GraphQL */ `
  subscription OnUpdatePage($userID: String) {
    onUpdatePage(userID: $userID) {
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
export const onDeletePage = /* GraphQL */ `
  subscription OnDeletePage($userID: String) {
    onDeletePage(userID: $userID) {
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
export const onCreateBlock = /* GraphQL */ `
  subscription OnCreateBlock {
    onCreateBlock {
      id
      type
      props
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onUpdateBlock = /* GraphQL */ `
  subscription OnUpdateBlock {
    onUpdateBlock {
      id
      type
      props
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onDeleteBlock = /* GraphQL */ `
  subscription OnDeleteBlock {
    onDeleteBlock {
      id
      type
      props
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onCreateMintTransaction = /* GraphQL */ `
  subscription OnCreateMintTransaction($userID: String) {
    onCreateMintTransaction(userID: $userID) {
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
export const onUpdateMintTransaction = /* GraphQL */ `
  subscription OnUpdateMintTransaction($userID: String) {
    onUpdateMintTransaction(userID: $userID) {
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
export const onDeleteMintTransaction = /* GraphQL */ `
  subscription OnDeleteMintTransaction($userID: String) {
    onDeleteMintTransaction(userID: $userID) {
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
