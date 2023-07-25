/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateUserProfileInput = {
  id?: string | null,
  firstName: string,
  lastName: string,
  email: string,
  profilePics?: S3ObjectInput | null,
};

export type S3ObjectInput = {
  bucket: string,
  region: string,
  key: string,
};

export type ModelUserProfileConditionInput = {
  firstName?: ModelStringInput | null,
  lastName?: ModelStringInput | null,
  email?: ModelStringInput | null,
  and?: Array< ModelUserProfileConditionInput | null > | null,
  or?: Array< ModelUserProfileConditionInput | null > | null,
  not?: ModelUserProfileConditionInput | null,
};

export type ModelStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null",
}


export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type UserProfile = {
  __typename: "UserProfile",
  id: string,
  firstName: string,
  lastName: string,
  email: string,
  profilePics?: S3Object | null,
  createdAt: string,
  updatedAt: string,
};

export type S3Object = {
  __typename: "S3Object",
  bucket: string,
  region: string,
  key: string,
};

export type UpdateUserProfileInput = {
  id: string,
  firstName?: string | null,
  lastName?: string | null,
  email?: string | null,
  profilePics?: S3ObjectInput | null,
};

export type DeleteUserProfileInput = {
  id: string,
};

export type CreateWebsiteInput = {
  id?: string | null,
  name: string,
  config: string,
  userID: string,
  createdAt?: string | null,
  cloudfrontDistributionID?: string | null,
  cloudfrontDomainName?: string | null,
  menu?: string | null,
  footer?: string | null,
  pages?: string | null,
};

export type ModelWebsiteConditionInput = {
  name?: ModelStringInput | null,
  config?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  cloudfrontDistributionID?: ModelStringInput | null,
  cloudfrontDomainName?: ModelStringInput | null,
  menu?: ModelStringInput | null,
  footer?: ModelStringInput | null,
  pages?: ModelStringInput | null,
  and?: Array< ModelWebsiteConditionInput | null > | null,
  or?: Array< ModelWebsiteConditionInput | null > | null,
  not?: ModelWebsiteConditionInput | null,
};

export type Website = {
  __typename: "Website",
  id: string,
  name: string,
  config: string,
  userID: string,
  createdAt: string,
  cloudfrontDistributionID?: string | null,
  cloudfrontDomainName?: string | null,
  menu?: string | null,
  footer?: string | null,
  pages?: string | null,
  updatedAt: string,
};

export type UpdateWebsiteInput = {
  id: string,
  name?: string | null,
  config?: string | null,
  userID?: string | null,
  createdAt?: string | null,
  cloudfrontDistributionID?: string | null,
  cloudfrontDomainName?: string | null,
  menu?: string | null,
  footer?: string | null,
  pages?: string | null,
};

export type DeleteWebsiteInput = {
  id: string,
};

export type CreateBuildRequestInput = {
  id?: string | null,
  status: BuildStatus,
  websiteID: string,
  createdAt?: string | null,
  userID: string,
  cloudfrontInvalidationID?: string | null,
};

export enum BuildStatus {
  INPROGRESS = "INPROGRESS",
  SUCCESS = "SUCCESS",
  FAILED = "FAILED",
}


export type ModelBuildRequestConditionInput = {
  status?: ModelBuildStatusInput | null,
  websiteID?: ModelIDInput | null,
  createdAt?: ModelStringInput | null,
  cloudfrontInvalidationID?: ModelStringInput | null,
  and?: Array< ModelBuildRequestConditionInput | null > | null,
  or?: Array< ModelBuildRequestConditionInput | null > | null,
  not?: ModelBuildRequestConditionInput | null,
};

export type ModelBuildStatusInput = {
  eq?: BuildStatus | null,
  ne?: BuildStatus | null,
};

export type ModelIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export type BuildRequest = {
  __typename: "BuildRequest",
  id: string,
  status: BuildStatus,
  websiteID: string,
  createdAt: string,
  userID: string,
  cloudfrontInvalidationID?: string | null,
  updatedAt: string,
};

export type UpdateBuildRequestInput = {
  id: string,
  status?: BuildStatus | null,
  websiteID?: string | null,
  createdAt?: string | null,
  userID?: string | null,
  cloudfrontInvalidationID?: string | null,
};

export type DeleteBuildRequestInput = {
  id: string,
};

export type CreatePageInput = {
  id?: string | null,
  name: string,
  path: string,
  websiteID: string,
  blocks: string,
  createdAt?: string | null,
  userID: string,
};

export type ModelPageConditionInput = {
  name?: ModelStringInput | null,
  path?: ModelStringInput | null,
  websiteID?: ModelIDInput | null,
  blocks?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  and?: Array< ModelPageConditionInput | null > | null,
  or?: Array< ModelPageConditionInput | null > | null,
  not?: ModelPageConditionInput | null,
};

export type Page = {
  __typename: "Page",
  id: string,
  name: string,
  path: string,
  websiteID: string,
  blocks: string,
  createdAt: string,
  userID: string,
  updatedAt: string,
};

export type UpdatePageInput = {
  id: string,
  name?: string | null,
  path?: string | null,
  websiteID?: string | null,
  blocks?: string | null,
  createdAt?: string | null,
  userID?: string | null,
};

export type DeletePageInput = {
  id: string,
};

export type CreateBlockInput = {
  id?: string | null,
  type: string,
  props: string,
};

export type ModelBlockConditionInput = {
  type?: ModelStringInput | null,
  props?: ModelStringInput | null,
  and?: Array< ModelBlockConditionInput | null > | null,
  or?: Array< ModelBlockConditionInput | null > | null,
  not?: ModelBlockConditionInput | null,
};

export type Block = {
  __typename: "Block",
  id: string,
  type: string,
  props: string,
  createdAt: string,
  updatedAt: string,
  owner?: string | null,
};

export type UpdateBlockInput = {
  id: string,
  type?: string | null,
  props?: string | null,
};

export type DeleteBlockInput = {
  id: string,
};

export type CreateMintTransactionInput = {
  id?: string | null,
  transactionHash: string,
  from: string,
  userID: string,
  blockID: string,
  createdAt?: string | null,
};

export type ModelMintTransactionConditionInput = {
  transactionHash?: ModelStringInput | null,
  from?: ModelStringInput | null,
  blockID?: ModelIDInput | null,
  createdAt?: ModelStringInput | null,
  and?: Array< ModelMintTransactionConditionInput | null > | null,
  or?: Array< ModelMintTransactionConditionInput | null > | null,
  not?: ModelMintTransactionConditionInput | null,
};

export type MintTransaction = {
  __typename: "MintTransaction",
  id: string,
  transactionHash: string,
  from: string,
  userID: string,
  blockID: string,
  createdAt: string,
  updatedAt: string,
  block?: Block | null,
};

export type UpdateMintTransactionInput = {
  id: string,
  transactionHash?: string | null,
  from?: string | null,
  userID?: string | null,
  blockID?: string | null,
  createdAt?: string | null,
};

export type DeleteMintTransactionInput = {
  id: string,
};

export type ModelUserProfileFilterInput = {
  id?: ModelIDInput | null,
  firstName?: ModelStringInput | null,
  lastName?: ModelStringInput | null,
  email?: ModelStringInput | null,
  and?: Array< ModelUserProfileFilterInput | null > | null,
  or?: Array< ModelUserProfileFilterInput | null > | null,
  not?: ModelUserProfileFilterInput | null,
};

export type ModelUserProfileConnection = {
  __typename: "ModelUserProfileConnection",
  items:  Array<UserProfile | null >,
  nextToken?: string | null,
};

export type ModelWebsiteFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  config?: ModelStringInput | null,
  userID?: ModelIDInput | null,
  createdAt?: ModelStringInput | null,
  cloudfrontDistributionID?: ModelStringInput | null,
  cloudfrontDomainName?: ModelStringInput | null,
  menu?: ModelStringInput | null,
  footer?: ModelStringInput | null,
  pages?: ModelStringInput | null,
  and?: Array< ModelWebsiteFilterInput | null > | null,
  or?: Array< ModelWebsiteFilterInput | null > | null,
  not?: ModelWebsiteFilterInput | null,
};

export type ModelWebsiteConnection = {
  __typename: "ModelWebsiteConnection",
  items:  Array<Website | null >,
  nextToken?: string | null,
};

export type ModelStringKeyConditionInput = {
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
};

export enum ModelSortDirection {
  ASC = "ASC",
  DESC = "DESC",
}


export type ModelBuildRequestFilterInput = {
  id?: ModelIDInput | null,
  status?: ModelBuildStatusInput | null,
  websiteID?: ModelIDInput | null,
  createdAt?: ModelStringInput | null,
  userID?: ModelIDInput | null,
  cloudfrontInvalidationID?: ModelStringInput | null,
  and?: Array< ModelBuildRequestFilterInput | null > | null,
  or?: Array< ModelBuildRequestFilterInput | null > | null,
  not?: ModelBuildRequestFilterInput | null,
};

export type ModelBuildRequestConnection = {
  __typename: "ModelBuildRequestConnection",
  items:  Array<BuildRequest | null >,
  nextToken?: string | null,
};

export type ModelPageFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  path?: ModelStringInput | null,
  websiteID?: ModelIDInput | null,
  blocks?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  userID?: ModelIDInput | null,
  and?: Array< ModelPageFilterInput | null > | null,
  or?: Array< ModelPageFilterInput | null > | null,
  not?: ModelPageFilterInput | null,
};

export type ModelPageConnection = {
  __typename: "ModelPageConnection",
  items:  Array<Page | null >,
  nextToken?: string | null,
};

export type ModelBlockFilterInput = {
  id?: ModelIDInput | null,
  type?: ModelStringInput | null,
  props?: ModelStringInput | null,
  and?: Array< ModelBlockFilterInput | null > | null,
  or?: Array< ModelBlockFilterInput | null > | null,
  not?: ModelBlockFilterInput | null,
};

export type ModelBlockConnection = {
  __typename: "ModelBlockConnection",
  items:  Array<Block | null >,
  nextToken?: string | null,
};

export type ModelMintTransactionFilterInput = {
  id?: ModelIDInput | null,
  transactionHash?: ModelStringInput | null,
  from?: ModelStringInput | null,
  userID?: ModelIDInput | null,
  blockID?: ModelIDInput | null,
  createdAt?: ModelStringInput | null,
  and?: Array< ModelMintTransactionFilterInput | null > | null,
  or?: Array< ModelMintTransactionFilterInput | null > | null,
  not?: ModelMintTransactionFilterInput | null,
};

export type ModelMintTransactionConnection = {
  __typename: "ModelMintTransactionConnection",
  items:  Array<MintTransaction | null >,
  nextToken?: string | null,
};

export type CreateUserProfileMutationVariables = {
  input: CreateUserProfileInput,
  condition?: ModelUserProfileConditionInput | null,
};

export type CreateUserProfileMutation = {
  createUserProfile?:  {
    __typename: "UserProfile",
    id: string,
    firstName: string,
    lastName: string,
    email: string,
    profilePics?:  {
      __typename: "S3Object",
      bucket: string,
      region: string,
      key: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateUserProfileMutationVariables = {
  input: UpdateUserProfileInput,
  condition?: ModelUserProfileConditionInput | null,
};

export type UpdateUserProfileMutation = {
  updateUserProfile?:  {
    __typename: "UserProfile",
    id: string,
    firstName: string,
    lastName: string,
    email: string,
    profilePics?:  {
      __typename: "S3Object",
      bucket: string,
      region: string,
      key: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteUserProfileMutationVariables = {
  input: DeleteUserProfileInput,
  condition?: ModelUserProfileConditionInput | null,
};

export type DeleteUserProfileMutation = {
  deleteUserProfile?:  {
    __typename: "UserProfile",
    id: string,
    firstName: string,
    lastName: string,
    email: string,
    profilePics?:  {
      __typename: "S3Object",
      bucket: string,
      region: string,
      key: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateWebsiteMutationVariables = {
  input: CreateWebsiteInput,
  condition?: ModelWebsiteConditionInput | null,
};

export type CreateWebsiteMutation = {
  createWebsite?:  {
    __typename: "Website",
    id: string,
    name: string,
    config: string,
    userID: string,
    createdAt: string,
    cloudfrontDistributionID?: string | null,
    cloudfrontDomainName?: string | null,
    menu?: string | null,
    footer?: string | null,
    pages?: string | null,
    updatedAt: string,
  } | null,
};

export type UpdateWebsiteMutationVariables = {
  input: UpdateWebsiteInput,
  condition?: ModelWebsiteConditionInput | null,
};

export type UpdateWebsiteMutation = {
  updateWebsite?:  {
    __typename: "Website",
    id: string,
    name: string,
    config: string,
    userID: string,
    createdAt: string,
    cloudfrontDistributionID?: string | null,
    cloudfrontDomainName?: string | null,
    menu?: string | null,
    footer?: string | null,
    pages?: string | null,
    updatedAt: string,
  } | null,
};

export type DeleteWebsiteMutationVariables = {
  input: DeleteWebsiteInput,
  condition?: ModelWebsiteConditionInput | null,
};

export type DeleteWebsiteMutation = {
  deleteWebsite?:  {
    __typename: "Website",
    id: string,
    name: string,
    config: string,
    userID: string,
    createdAt: string,
    cloudfrontDistributionID?: string | null,
    cloudfrontDomainName?: string | null,
    menu?: string | null,
    footer?: string | null,
    pages?: string | null,
    updatedAt: string,
  } | null,
};

export type CreateBuildRequestMutationVariables = {
  input: CreateBuildRequestInput,
  condition?: ModelBuildRequestConditionInput | null,
};

export type CreateBuildRequestMutation = {
  createBuildRequest?:  {
    __typename: "BuildRequest",
    id: string,
    status: BuildStatus,
    websiteID: string,
    createdAt: string,
    userID: string,
    cloudfrontInvalidationID?: string | null,
    updatedAt: string,
  } | null,
};

export type UpdateBuildRequestMutationVariables = {
  input: UpdateBuildRequestInput,
  condition?: ModelBuildRequestConditionInput | null,
};

export type UpdateBuildRequestMutation = {
  updateBuildRequest?:  {
    __typename: "BuildRequest",
    id: string,
    status: BuildStatus,
    websiteID: string,
    createdAt: string,
    userID: string,
    cloudfrontInvalidationID?: string | null,
    updatedAt: string,
  } | null,
};

export type DeleteBuildRequestMutationVariables = {
  input: DeleteBuildRequestInput,
  condition?: ModelBuildRequestConditionInput | null,
};

export type DeleteBuildRequestMutation = {
  deleteBuildRequest?:  {
    __typename: "BuildRequest",
    id: string,
    status: BuildStatus,
    websiteID: string,
    createdAt: string,
    userID: string,
    cloudfrontInvalidationID?: string | null,
    updatedAt: string,
  } | null,
};

export type CreatePageMutationVariables = {
  input: CreatePageInput,
  condition?: ModelPageConditionInput | null,
};

export type CreatePageMutation = {
  createPage?:  {
    __typename: "Page",
    id: string,
    name: string,
    path: string,
    websiteID: string,
    blocks: string,
    createdAt: string,
    userID: string,
    updatedAt: string,
  } | null,
};

export type UpdatePageMutationVariables = {
  input: UpdatePageInput,
  condition?: ModelPageConditionInput | null,
};

export type UpdatePageMutation = {
  updatePage?:  {
    __typename: "Page",
    id: string,
    name: string,
    path: string,
    websiteID: string,
    blocks: string,
    createdAt: string,
    userID: string,
    updatedAt: string,
  } | null,
};

export type DeletePageMutationVariables = {
  input: DeletePageInput,
  condition?: ModelPageConditionInput | null,
};

export type DeletePageMutation = {
  deletePage?:  {
    __typename: "Page",
    id: string,
    name: string,
    path: string,
    websiteID: string,
    blocks: string,
    createdAt: string,
    userID: string,
    updatedAt: string,
  } | null,
};

export type CreateBlockMutationVariables = {
  input: CreateBlockInput,
  condition?: ModelBlockConditionInput | null,
};

export type CreateBlockMutation = {
  createBlock?:  {
    __typename: "Block",
    id: string,
    type: string,
    props: string,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type UpdateBlockMutationVariables = {
  input: UpdateBlockInput,
  condition?: ModelBlockConditionInput | null,
};

export type UpdateBlockMutation = {
  updateBlock?:  {
    __typename: "Block",
    id: string,
    type: string,
    props: string,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type DeleteBlockMutationVariables = {
  input: DeleteBlockInput,
  condition?: ModelBlockConditionInput | null,
};

export type DeleteBlockMutation = {
  deleteBlock?:  {
    __typename: "Block",
    id: string,
    type: string,
    props: string,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type CreateMintTransactionMutationVariables = {
  input: CreateMintTransactionInput,
  condition?: ModelMintTransactionConditionInput | null,
};

export type CreateMintTransactionMutation = {
  createMintTransaction?:  {
    __typename: "MintTransaction",
    id: string,
    transactionHash: string,
    from: string,
    userID: string,
    blockID: string,
    createdAt: string,
    updatedAt: string,
    block?:  {
      __typename: "Block",
      id: string,
      type: string,
      props: string,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null,
  } | null,
};

export type UpdateMintTransactionMutationVariables = {
  input: UpdateMintTransactionInput,
  condition?: ModelMintTransactionConditionInput | null,
};

export type UpdateMintTransactionMutation = {
  updateMintTransaction?:  {
    __typename: "MintTransaction",
    id: string,
    transactionHash: string,
    from: string,
    userID: string,
    blockID: string,
    createdAt: string,
    updatedAt: string,
    block?:  {
      __typename: "Block",
      id: string,
      type: string,
      props: string,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null,
  } | null,
};

export type DeleteMintTransactionMutationVariables = {
  input: DeleteMintTransactionInput,
  condition?: ModelMintTransactionConditionInput | null,
};

export type DeleteMintTransactionMutation = {
  deleteMintTransaction?:  {
    __typename: "MintTransaction",
    id: string,
    transactionHash: string,
    from: string,
    userID: string,
    blockID: string,
    createdAt: string,
    updatedAt: string,
    block?:  {
      __typename: "Block",
      id: string,
      type: string,
      props: string,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null,
  } | null,
};

export type GetUserProfileQueryVariables = {
  id: string,
};

export type GetUserProfileQuery = {
  getUserProfile?:  {
    __typename: "UserProfile",
    id: string,
    firstName: string,
    lastName: string,
    email: string,
    profilePics?:  {
      __typename: "S3Object",
      bucket: string,
      region: string,
      key: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListUserProfilesQueryVariables = {
  filter?: ModelUserProfileFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListUserProfilesQuery = {
  listUserProfiles?:  {
    __typename: "ModelUserProfileConnection",
    items:  Array< {
      __typename: "UserProfile",
      id: string,
      firstName: string,
      lastName: string,
      email: string,
      profilePics?:  {
        __typename: "S3Object",
        bucket: string,
        region: string,
        key: string,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetWebsiteQueryVariables = {
  id: string,
};

export type GetWebsiteQuery = {
  getWebsite?:  {
    __typename: "Website",
    id: string,
    name: string,
    config: string,
    userID: string,
    createdAt: string,
    cloudfrontDistributionID?: string | null,
    cloudfrontDomainName?: string | null,
    menu?: string | null,
    footer?: string | null,
    pages?: string | null,
    updatedAt: string,
  } | null,
};

export type ListWebsitesQueryVariables = {
  filter?: ModelWebsiteFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListWebsitesQuery = {
  listWebsites?:  {
    __typename: "ModelWebsiteConnection",
    items:  Array< {
      __typename: "Website",
      id: string,
      name: string,
      config: string,
      userID: string,
      createdAt: string,
      cloudfrontDistributionID?: string | null,
      cloudfrontDomainName?: string | null,
      menu?: string | null,
      footer?: string | null,
      pages?: string | null,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetWebsiteByUserIDQueryVariables = {
  userID?: string | null,
  createdAt?: ModelStringKeyConditionInput | null,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelWebsiteFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type GetWebsiteByUserIDQuery = {
  getWebsiteByUserID?:  {
    __typename: "ModelWebsiteConnection",
    items:  Array< {
      __typename: "Website",
      id: string,
      name: string,
      config: string,
      userID: string,
      createdAt: string,
      cloudfrontDistributionID?: string | null,
      cloudfrontDomainName?: string | null,
      menu?: string | null,
      footer?: string | null,
      pages?: string | null,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetBuildRequestQueryVariables = {
  id: string,
};

export type GetBuildRequestQuery = {
  getBuildRequest?:  {
    __typename: "BuildRequest",
    id: string,
    status: BuildStatus,
    websiteID: string,
    createdAt: string,
    userID: string,
    cloudfrontInvalidationID?: string | null,
    updatedAt: string,
  } | null,
};

export type ListBuildRequestsQueryVariables = {
  filter?: ModelBuildRequestFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListBuildRequestsQuery = {
  listBuildRequests?:  {
    __typename: "ModelBuildRequestConnection",
    items:  Array< {
      __typename: "BuildRequest",
      id: string,
      status: BuildStatus,
      websiteID: string,
      createdAt: string,
      userID: string,
      cloudfrontInvalidationID?: string | null,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetBuildRequestByWebsiteIDQueryVariables = {
  websiteID?: string | null,
  createdAt?: ModelStringKeyConditionInput | null,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelBuildRequestFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type GetBuildRequestByWebsiteIDQuery = {
  getBuildRequestByWebsiteID?:  {
    __typename: "ModelBuildRequestConnection",
    items:  Array< {
      __typename: "BuildRequest",
      id: string,
      status: BuildStatus,
      websiteID: string,
      createdAt: string,
      userID: string,
      cloudfrontInvalidationID?: string | null,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetPageQueryVariables = {
  id: string,
};

export type GetPageQuery = {
  getPage?:  {
    __typename: "Page",
    id: string,
    name: string,
    path: string,
    websiteID: string,
    blocks: string,
    createdAt: string,
    userID: string,
    updatedAt: string,
  } | null,
};

export type ListPagesQueryVariables = {
  filter?: ModelPageFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListPagesQuery = {
  listPages?:  {
    __typename: "ModelPageConnection",
    items:  Array< {
      __typename: "Page",
      id: string,
      name: string,
      path: string,
      websiteID: string,
      blocks: string,
      createdAt: string,
      userID: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetPageByWebsiteIDQueryVariables = {
  websiteID?: string | null,
  createdAt?: ModelStringKeyConditionInput | null,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelPageFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type GetPageByWebsiteIDQuery = {
  getPageByWebsiteID?:  {
    __typename: "ModelPageConnection",
    items:  Array< {
      __typename: "Page",
      id: string,
      name: string,
      path: string,
      websiteID: string,
      blocks: string,
      createdAt: string,
      userID: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetBlockQueryVariables = {
  id: string,
};

export type GetBlockQuery = {
  getBlock?:  {
    __typename: "Block",
    id: string,
    type: string,
    props: string,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type ListBlocksQueryVariables = {
  filter?: ModelBlockFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListBlocksQuery = {
  listBlocks?:  {
    __typename: "ModelBlockConnection",
    items:  Array< {
      __typename: "Block",
      id: string,
      type: string,
      props: string,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetMintTransactionQueryVariables = {
  id: string,
};

export type GetMintTransactionQuery = {
  getMintTransaction?:  {
    __typename: "MintTransaction",
    id: string,
    transactionHash: string,
    from: string,
    userID: string,
    blockID: string,
    createdAt: string,
    updatedAt: string,
    block?:  {
      __typename: "Block",
      id: string,
      type: string,
      props: string,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null,
  } | null,
};

export type ListMintTransactionsQueryVariables = {
  filter?: ModelMintTransactionFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListMintTransactionsQuery = {
  listMintTransactions?:  {
    __typename: "ModelMintTransactionConnection",
    items:  Array< {
      __typename: "MintTransaction",
      id: string,
      transactionHash: string,
      from: string,
      userID: string,
      blockID: string,
      createdAt: string,
      updatedAt: string,
      block?:  {
        __typename: "Block",
        id: string,
        type: string,
        props: string,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      } | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetMintTransactionByUserQueryVariables = {
  userID?: string | null,
  createdAt?: ModelStringKeyConditionInput | null,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelMintTransactionFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type GetMintTransactionByUserQuery = {
  getMintTransactionByUser?:  {
    __typename: "ModelMintTransactionConnection",
    items:  Array< {
      __typename: "MintTransaction",
      id: string,
      transactionHash: string,
      from: string,
      userID: string,
      blockID: string,
      createdAt: string,
      updatedAt: string,
      block?:  {
        __typename: "Block",
        id: string,
        type: string,
        props: string,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      } | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type OnCreateUserProfileSubscription = {
  onCreateUserProfile?:  {
    __typename: "UserProfile",
    id: string,
    firstName: string,
    lastName: string,
    email: string,
    profilePics?:  {
      __typename: "S3Object",
      bucket: string,
      region: string,
      key: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateUserProfileSubscription = {
  onUpdateUserProfile?:  {
    __typename: "UserProfile",
    id: string,
    firstName: string,
    lastName: string,
    email: string,
    profilePics?:  {
      __typename: "S3Object",
      bucket: string,
      region: string,
      key: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteUserProfileSubscription = {
  onDeleteUserProfile?:  {
    __typename: "UserProfile",
    id: string,
    firstName: string,
    lastName: string,
    email: string,
    profilePics?:  {
      __typename: "S3Object",
      bucket: string,
      region: string,
      key: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateWebsiteSubscriptionVariables = {
  userID?: string | null,
};

export type OnCreateWebsiteSubscription = {
  onCreateWebsite?:  {
    __typename: "Website",
    id: string,
    name: string,
    config: string,
    userID: string,
    createdAt: string,
    cloudfrontDistributionID?: string | null,
    cloudfrontDomainName?: string | null,
    menu?: string | null,
    footer?: string | null,
    pages?: string | null,
    updatedAt: string,
  } | null,
};

export type OnUpdateWebsiteSubscriptionVariables = {
  userID?: string | null,
};

export type OnUpdateWebsiteSubscription = {
  onUpdateWebsite?:  {
    __typename: "Website",
    id: string,
    name: string,
    config: string,
    userID: string,
    createdAt: string,
    cloudfrontDistributionID?: string | null,
    cloudfrontDomainName?: string | null,
    menu?: string | null,
    footer?: string | null,
    pages?: string | null,
    updatedAt: string,
  } | null,
};

export type OnDeleteWebsiteSubscriptionVariables = {
  userID?: string | null,
};

export type OnDeleteWebsiteSubscription = {
  onDeleteWebsite?:  {
    __typename: "Website",
    id: string,
    name: string,
    config: string,
    userID: string,
    createdAt: string,
    cloudfrontDistributionID?: string | null,
    cloudfrontDomainName?: string | null,
    menu?: string | null,
    footer?: string | null,
    pages?: string | null,
    updatedAt: string,
  } | null,
};

export type OnCreateBuildRequestSubscriptionVariables = {
  userID?: string | null,
};

export type OnCreateBuildRequestSubscription = {
  onCreateBuildRequest?:  {
    __typename: "BuildRequest",
    id: string,
    status: BuildStatus,
    websiteID: string,
    createdAt: string,
    userID: string,
    cloudfrontInvalidationID?: string | null,
    updatedAt: string,
  } | null,
};

export type OnUpdateBuildRequestSubscriptionVariables = {
  userID?: string | null,
};

export type OnUpdateBuildRequestSubscription = {
  onUpdateBuildRequest?:  {
    __typename: "BuildRequest",
    id: string,
    status: BuildStatus,
    websiteID: string,
    createdAt: string,
    userID: string,
    cloudfrontInvalidationID?: string | null,
    updatedAt: string,
  } | null,
};

export type OnDeleteBuildRequestSubscriptionVariables = {
  userID?: string | null,
};

export type OnDeleteBuildRequestSubscription = {
  onDeleteBuildRequest?:  {
    __typename: "BuildRequest",
    id: string,
    status: BuildStatus,
    websiteID: string,
    createdAt: string,
    userID: string,
    cloudfrontInvalidationID?: string | null,
    updatedAt: string,
  } | null,
};

export type OnCreatePageSubscriptionVariables = {
  userID?: string | null,
};

export type OnCreatePageSubscription = {
  onCreatePage?:  {
    __typename: "Page",
    id: string,
    name: string,
    path: string,
    websiteID: string,
    blocks: string,
    createdAt: string,
    userID: string,
    updatedAt: string,
  } | null,
};

export type OnUpdatePageSubscriptionVariables = {
  userID?: string | null,
};

export type OnUpdatePageSubscription = {
  onUpdatePage?:  {
    __typename: "Page",
    id: string,
    name: string,
    path: string,
    websiteID: string,
    blocks: string,
    createdAt: string,
    userID: string,
    updatedAt: string,
  } | null,
};

export type OnDeletePageSubscriptionVariables = {
  userID?: string | null,
};

export type OnDeletePageSubscription = {
  onDeletePage?:  {
    __typename: "Page",
    id: string,
    name: string,
    path: string,
    websiteID: string,
    blocks: string,
    createdAt: string,
    userID: string,
    updatedAt: string,
  } | null,
};

export type OnCreateBlockSubscription = {
  onCreateBlock?:  {
    __typename: "Block",
    id: string,
    type: string,
    props: string,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnUpdateBlockSubscription = {
  onUpdateBlock?:  {
    __typename: "Block",
    id: string,
    type: string,
    props: string,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnDeleteBlockSubscription = {
  onDeleteBlock?:  {
    __typename: "Block",
    id: string,
    type: string,
    props: string,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnCreateMintTransactionSubscriptionVariables = {
  userID?: string | null,
};

export type OnCreateMintTransactionSubscription = {
  onCreateMintTransaction?:  {
    __typename: "MintTransaction",
    id: string,
    transactionHash: string,
    from: string,
    userID: string,
    blockID: string,
    createdAt: string,
    updatedAt: string,
    block?:  {
      __typename: "Block",
      id: string,
      type: string,
      props: string,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null,
  } | null,
};

export type OnUpdateMintTransactionSubscriptionVariables = {
  userID?: string | null,
};

export type OnUpdateMintTransactionSubscription = {
  onUpdateMintTransaction?:  {
    __typename: "MintTransaction",
    id: string,
    transactionHash: string,
    from: string,
    userID: string,
    blockID: string,
    createdAt: string,
    updatedAt: string,
    block?:  {
      __typename: "Block",
      id: string,
      type: string,
      props: string,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null,
  } | null,
};

export type OnDeleteMintTransactionSubscriptionVariables = {
  userID?: string | null,
};

export type OnDeleteMintTransactionSubscription = {
  onDeleteMintTransaction?:  {
    __typename: "MintTransaction",
    id: string,
    transactionHash: string,
    from: string,
    userID: string,
    blockID: string,
    createdAt: string,
    updatedAt: string,
    block?:  {
      __typename: "Block",
      id: string,
      type: string,
      props: string,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null,
  } | null,
};
