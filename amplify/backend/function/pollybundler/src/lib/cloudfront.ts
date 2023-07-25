import AWS from 'aws-sdk'

const cloudfront = new AWS.CloudFront({ apiVersion: '2020-05-31' })

/**
 * AWS managed policies.
 * Reference: https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/using-managed-cache-policies.html
 */
enum CachePolicy {
  CachingOptimized = "658327ea-f89d-4fab-a63d-7e88639e58f6",
  CachingOptimizedForUncompressedObjects = "b2884449-e4de-46a7-ac36-70bc7f1ddd6d"
}

function createOrigin(buildID: string): AWS.CloudFront.Origin {
  return {
    Id: 'Default',
    DomainName: `${process.env.STORAGE_POLLYBUCKET_BUCKETNAME}.s3.${process.env.REGION}.amazonaws.com`,
    OriginPath: "/websites/" + buildID,
    S3OriginConfig: {
      OriginAccessIdentity: 'origin-access-identity/cloudfront/' + process.env.CLOUDFRONT_ORIGIN_ACCESS_IDENTITY_ID
    },
    CustomHeaders: {
      Quantity: 0
    }
  }
}

export function get(distributionID: string): Promise<AWS.CloudFront.GetDistributionResult> {
  return new Promise((resolve, reject) => {
    cloudfront.getDistribution({ Id: distributionID }, (error, data) => error? reject(error): resolve(data))
  })
}

export function create(buildID: string, websiteID: string): Promise<AWS.CloudFront.CreateDistributionResult> {
  return new Promise((resolve, reject) => {
    const params: AWS.CloudFront.CreateDistributionRequest = {
      DistributionConfig: {
        CallerReference: websiteID,
        Comment: 'Polly deployment',
        Enabled: true,
        DefaultCacheBehavior: {
          TargetOriginId: 'Default',
          ViewerProtocolPolicy: 'redirect-to-https',
          AllowedMethods: {
            Quantity: 2,
            Items: ['GET', 'HEAD']
          },
          CachePolicyId: CachePolicy.CachingOptimized
        },
        DefaultRootObject: 'index.html',
        Origins: {
          Quantity: 1,
          Items: [
            createOrigin(buildID)
          ]
        },
        /* Single page, so we must need this */
        CustomErrorResponses: {
          Quantity: 1,
          Items: [
            {
              ErrorCachingMinTTL: 300,
              ErrorCode: 403,
              ResponseCode: "200",
              ResponsePagePath: "/"
            }
          ]
        }
      }
    }

    console.log('Params:', JSON.stringify(params, null, 2))
    cloudfront.createDistribution(params, (error, data) => error? reject(error): resolve(data))
  })
}

export async function update(buildID: string, distributionID: string): Promise<AWS.CloudFront.UpdateDistributionResult> {
  const getDistribution = await get(distributionID)
  const eTag = getDistribution.ETag
  const distribution = getDistribution.Distribution

  return new Promise((resolve, reject) => {
    const params: AWS.CloudFront.UpdateDistributionRequest = {
      Id: distributionID,
      DistributionConfig: {
        // keep the same
        ...distribution.DistributionConfig,

        Origins: {
          Quantity: 1,
          Items: [
            createOrigin(buildID)
          ]
        },

        /* Make backward compatible with existing created CloudFront distribution */
        CustomErrorResponses: {
          Quantity: 1,
          Items: [
            {
              ErrorCachingMinTTL: 300,
              ErrorCode: 403,
              ResponseCode: "200",
              ResponsePagePath: "/"
            }
          ]
        }
      },
      IfMatch: eTag
    }

    console.log('Params:', JSON.stringify(params, null, 2))
    cloudfront.updateDistribution(params, (error, data) => error? reject(error): resolve(data))
  })
}

export function invalidate(buildID: string, distributionID: string): Promise<AWS.CloudFront.CreateInvalidationResult> {
  return new Promise((resolve, reject) => {
    const params: AWS.CloudFront.CreateInvalidationRequest = {
      DistributionId: distributionID,
      InvalidationBatch: {
        CallerReference: buildID,
        Paths: {
          Quantity: 1,
          Items: ["/*"]
        }
      }
    }

    cloudfront.createInvalidation(params, (error, data) => error? reject(error): resolve(data))
  })
}
