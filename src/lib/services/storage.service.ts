import { Storage } from 'aws-amplify'
import { AWS_S3_URL } from 'src/util/constants'

export async function uploadAsset(key: string, object: File) {
  await Storage.put('assets/' + key, object, { contentType: object.type })
  return `${AWS_S3_URL}/public/assets/${key}`
}
