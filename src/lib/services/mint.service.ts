import { Auth } from 'aws-amplify'
import {
  CreateBlockInput,
  CreateBlockMutation,
  CreateMintTransactionInput,
  CreateMintTransactionMutation,
  GetBlockQuery,
  GetBlockQueryVariables,
  GetMintTransactionByUserQuery,
  GetMintTransactionByUserQueryVariables,
  ModelSortDirection
} from 'src/API'
import { createBlock, createMintTransaction } from 'src/graphql/mutations'
import { getBlock, getMintTransactionByUser } from 'src/graphql/queries'
import { graphqlQuery } from '../queries'

/**
 * create transaction log
 */
export const createMintLog = async (transaction: Omit<CreateMintTransactionInput, 'userID'>) => {
  try {
    const { attributes } = await Auth.currentAuthenticatedUser()
    const { data } = await graphqlQuery<CreateMintTransactionMutation>({
      query: createMintTransaction,
      variables: {
        input: {
          ...transaction,
          userID: attributes.sub
        } as CreateMintTransactionInput
      }
    })

    return data?.createMintTransaction
  } catch (error) {
    console.error('@mint.service::createMintTransaction::error', error)
    throw error
  }
}

export const getMintLog = async () => {
  try {
    const { attributes } = await Auth.currentAuthenticatedUser()
    const { data } = await graphqlQuery<GetMintTransactionByUserQuery>({
      query: getMintTransactionByUser,
      variables: {
        userID: attributes.sub,
        sortDirection: ModelSortDirection.DESC
      } as GetMintTransactionByUserQueryVariables
    })

    return data?.getMintTransactionByUser?.items || []
  } catch (error) {
    console.error('@mint.service::getMintLog::error', error)
    throw error
  }
}

export const createNewBlock = async (block: CreateBlockInput) => {
  try {
    const { data } = await graphqlQuery<CreateBlockMutation>({
      query: createBlock,
      variables: {
        input: block
      }
    })

    return data?.createBlock
  } catch (error) {
    console.error('@mint.service::createBlock::error', error)
    throw error
  }
}

export const getBlockById = async (blockId: string) => {
  try {
    const { data } = await graphqlQuery<GetBlockQuery>({
      query: getBlock,
      variables: {
        id: blockId
      } as GetBlockQueryVariables
    })

    const block = data?.getBlock
    return block ? { ...block, props: JSON.parse(block.props) } : null
  } catch (error) {
    console.error('@mint.service::getBlock::error', error)
    throw error
  }
}
