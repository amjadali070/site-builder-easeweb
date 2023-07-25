import AWS from 'aws-sdk'
import mime from 'mime-types'

const s3 = new AWS.S3({ apiVersion: '2006-03-01' })

export function upload(key: string, body: AWS.S3.Body) {
  const params: AWS.S3.PutObjectRequest = {
    Bucket: process.env.STORAGE_POLLYBUCKET_BUCKETNAME,
    Key: key,
    Body: body,
    ContentType: mime.lookup(key) || undefined
  }

  return new Promise((resolve, reject) => 
    s3.upload(params, (error, data) => error? reject(error): resolve(data))
  )
}
