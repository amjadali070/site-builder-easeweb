import { getPageByWebsiteID, getWebsite, getWebsiteByUserID, getPage } from '../../graphql/queries'
import {
  createPage,
  createWebsite,
  deletePage,
  deleteWebsite,
  updatePage,
  updateWebsite,
} from '../../graphql/mutations'
import {
  CreateWebsiteMutation,
  GetWebsiteByUserIDQuery,
  CreatePageMutation,
  CreatePageInput,
  CreateWebsiteInput,
  GetWebsiteQuery,
  GetWebsiteQueryVariables,
  GetPageByWebsiteIDQuery,
  GetPageByWebsiteIDQueryVariables,
  GetPageQueryVariables,
  UpdatePageMutation,
  UpdatePageMutationVariables,
  UpdatePageInput,
  UpdateWebsiteInput,
  UpdateWebsiteMutation,
  UpdateWebsiteMutationVariables,
  DeleteWebsiteMutation,
  GetPageQuery,
  DeletePageMutation,
} from '../../API'
import { graphqlQuery } from '../queries'
import { Auth } from 'aws-amplify'

/**
 * create website
 */
export const createWebsiteRecord = async (website: Omit<CreateWebsiteInput, 'userID'>) => {
  try {
    const { attributes } = await Auth.currentAuthenticatedUser()
    const { data } = await graphqlQuery<CreateWebsiteMutation>({
      query: createWebsite,
      variables: {
        input: {
          ...website,
          userID: attributes.sub,
        } as CreateWebsiteInput,
      },
    })

    return data?.createWebsite
  } catch (error) {
    console.error('@website.service::createWebsite::error', error)
    throw error
  }
}

/**
 * delete website
 */
export const deleteWebsiteRecord = async (id: string) => {
  try {
    const { data } = await graphqlQuery<DeleteWebsiteMutation>({
      query: deleteWebsite,
      variables: {
        input: { id },
      },
    })

    return data?.deleteWebsite
  } catch (error) {
    console.error('@website.service::deleteWebsite::error', error)
    throw error
  }
}

export const getWebsiteByID = async (id: string) => {
  try {
    const { data } = await graphqlQuery<GetWebsiteQuery>({
      query: getWebsite,
      variables: { id } as GetWebsiteQueryVariables,
    })

    return data?.getWebsite
  } catch (error) {
    console.error('@website.service::getWebsiteByID::error', error)
    throw error
  }
}

/**
 * get website by user ID
 */
export const getWebsitesByUserID = async () => {
  try {
    const { attributes } = await Auth.currentAuthenticatedUser()
    const { data } = await graphqlQuery<GetWebsiteByUserIDQuery>({
      query: getWebsiteByUserID,
      variables: {
        userID: attributes.sub,
        sortDirection: 'DESC',
      },
    })

    return data?.getWebsiteByUserID
  } catch (error) {
    console.error('@website.service::getWebsitesByUser::error', error)
    throw error
  }
}

export const saveWebsite = async (updates: UpdateWebsiteInput) => {
  try {
    const { data } = await graphqlQuery<UpdateWebsiteMutation>({
      query: updateWebsite,
      variables: { input: updates } as UpdateWebsiteMutationVariables,
    })

    return data?.updateWebsite
  } catch (error) {
    console.error('@website.service::updateWebsite::error', error)
    throw error
  }
}

export const createPageRecord = async (page: Omit<CreatePageInput, 'userID'>) => {
  try {
    const { attributes } = await Auth.currentAuthenticatedUser()
    const { data } = await graphqlQuery<CreatePageMutation>({
      query: createPage,
      variables: {
        input: {
          ...page,
          userID: attributes.sub,
        } as CreatePageInput,
      },
    })

    return data?.createPage
  } catch (error) {
    console.error('@website.service::createPage::error', error)
    throw error
  }
}

export const deletePageRecord = async (id: string) => {
  try {
    const { data } = await graphqlQuery<DeletePageMutation>({
      query: deletePage,
      variables: {
        input: {
          id,
        },
      },
    })

    return data?.deletePage
  } catch (error) {
    console.error('@website.service::deletePageRecord::error', error)
    throw error
  }
}

export const getPagesByWebsite = async (websiteID: string) => {
  try {
    const { data } = await graphqlQuery<GetPageByWebsiteIDQuery>({
      query: getPageByWebsiteID,
      variables: { websiteID } as GetPageByWebsiteIDQueryVariables,
    })

    return data?.getPageByWebsiteID?.items || []
  } catch (error) {
    console.error('@website.service::getPagesByWebsite::error', error)
    throw error
  }
}

export const getPageByID = async (pageID: string) => {
  try {
    const { data } = await graphqlQuery<GetPageQuery>({
      query: getPage,
      variables: { id: pageID } as GetPageQueryVariables,
    })

    return data?.getPage
  } catch (error) {
    console.error('@website.service::getPageByID::error', error)
    throw error
  }
}

export const savePage = async (updates: UpdatePageInput) => {
  try {
    const { data } = await graphqlQuery<UpdatePageMutation>({
      query: updatePage,
      variables: { input: updates } as UpdatePageMutationVariables,
    })

    return data?.updatePage
  } catch (error) {
    console.error('@website.service::updatePage::error', error)
    throw error
  }
}
