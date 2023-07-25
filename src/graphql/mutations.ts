/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createUserProfile = /* GraphQL */ `
  mutation CreateUserProfile(
    $input: CreateUserProfileInput!
    $condition: ModelUserProfileConditionInput
  ) {
    createUserProfile(input: $input, condition: $condition) {
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
export const updateUserProfile = /* GraphQL */ `
  mutation UpdateUserProfile(
    $input: UpdateUserProfileInput!
    $condition: ModelUserProfileConditionInput
  ) {
    updateUserProfile(input: $input, condition: $condition) {
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
export const deleteUserProfile = /* GraphQL */ `
  mutation DeleteUserProfile(
    $input: DeleteUserProfileInput!
    $condition: ModelUserProfileConditionInput
  ) {
    deleteUserProfile(input: $input, condition: $condition) {
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
export const createWebsite = /* GraphQL */ `
  mutation CreateWebsite(
    $input: CreateWebsiteInput!
    $condition: ModelWebsiteConditionInput
  ) {
    createWebsite(input: $input, condition: $condition) {
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
export const updateWebsite = /* GraphQL */ `
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
      menu
      footer
      pages
      updatedAt
    }
  }
`;
export const deleteWebsite = /* GraphQL */ `
  mutation DeleteWebsite(
    $input: DeleteWebsiteInput!
    $condition: ModelWebsiteConditionInput
  ) {
    deleteWebsite(input: $input, condition: $condition) {
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
export const createBuildRequest = /* GraphQL */ `
  mutation CreateBuildRequest(
    $input: CreateBuildRequestInput!
    $condition: ModelBuildRequestConditionInput
  ) {
    createBuildRequest(input: $input, condition: $condition) {
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
export const updateBuildRequest = /* GraphQL */ `
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
`;
export const deleteBuildRequest = /* GraphQL */ `
  mutation DeleteBuildRequest(
    $input: DeleteBuildRequestInput!
    $condition: ModelBuildRequestConditionInput
  ) {
    deleteBuildRequest(input: $input, condition: $condition) {
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
export const createPage = /* GraphQL */ `
  mutation CreatePage(
    $input: CreatePageInput!
    $condition: ModelPageConditionInput
  ) {
    createPage(input: $input, condition: $condition) {
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
export const updatePage = /* GraphQL */ `
  mutation UpdatePage(
    $input: UpdatePageInput!
    $condition: ModelPageConditionInput
  ) {
    updatePage(input: $input, condition: $condition) {
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
export const deletePage = /* GraphQL */ `
  mutation DeletePage(
    $input: DeletePageInput!
    $condition: ModelPageConditionInput
  ) {
    deletePage(input: $input, condition: $condition) {
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
export const createBlock = /* GraphQL */ `
  mutation CreateBlock(
    $input: CreateBlockInput!
    $condition: ModelBlockConditionInput
  ) {
    createBlock(input: $input, condition: $condition) {
      id
      type
      props
      createdAt
      updatedAt
      owner
    }
  }
`;
export const updateBlock = /* GraphQL */ `
  mutation UpdateBlock(
    $input: UpdateBlockInput!
    $condition: ModelBlockConditionInput
  ) {
    updateBlock(input: $input, condition: $condition) {
      id
      type
      props
      createdAt
      updatedAt
      owner
    }
  }
`;
export const deleteBlock = /* GraphQL */ `
  mutation DeleteBlock(
    $input: DeleteBlockInput!
    $condition: ModelBlockConditionInput
  ) {
    deleteBlock(input: $input, condition: $condition) {
      id
      type
      props
      createdAt
      updatedAt
      owner
    }
  }
`;
export const createMintTransaction = /* GraphQL */ `
  mutation CreateMintTransaction(
    $input: CreateMintTransactionInput!
    $condition: ModelMintTransactionConditionInput
  ) {
    createMintTransaction(input: $input, condition: $condition) {
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
export const updateMintTransaction = /* GraphQL */ `
  mutation UpdateMintTransaction(
    $input: UpdateMintTransactionInput!
    $condition: ModelMintTransactionConditionInput
  ) {
    updateMintTransaction(input: $input, condition: $condition) {
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
export const deleteMintTransaction = /* GraphQL */ `
  mutation DeleteMintTransaction(
    $input: DeleteMintTransactionInput!
    $condition: ModelMintTransactionConditionInput
  ) {
    deleteMintTransaction(input: $input, condition: $condition) {
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
