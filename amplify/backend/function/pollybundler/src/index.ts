/* Amplify Params - DO NOT EDIT
	ENV
	REGION
	STORAGE_POLLYBUCKET_BUCKETNAME
Amplify Params - DO NOT EDIT */
import fs from 'fs'
import AWS from 'aws-sdk'
import { DynamoDBStreamHandler } from 'aws-lambda'
import { codegen, build } from '@polly/bundler'
import { PollyComponentPath } from '@polly/components/component.path'
import * as s3 from './lib/s3'
import * as cloudfront from './lib/cloudfront'
import * as appsync from './lib/appsync'

export const handler: DynamoDBStreamHandler = async event => {
  //eslint-disable-line
  console.log(JSON.stringify(event, null, 2));

  const promises = Promise.all(event.Records.map(async record => {
    if (record.eventName === "INSERT") {
      const buildRequest = AWS.DynamoDB.Converter.unmarshall(record.dynamodb.NewImage);

      /** Won't retries on build error */
      try {
        const website = (await appsync.getWebsite(buildRequest.websiteID)).data?.data?.getWebsite
        console.log(JSON.stringify(website, null, 2))

        const pages = (await appsync.getPagesByWebsiteID(buildRequest.websiteID)).data?.data?.getPageByWebsiteID?.items || []
        console.log(JSON.stringify(pages, null, 2))
        pages.forEach(x => x.blocks = JSON.parse(x.blocks))

        const tmpdir = '/tmp/' + buildRequest.id
        await fs.promises.mkdir(tmpdir, { recursive: true })

        console.log("Starting codegen to", tmpdir)

        await codegen({
          pages,
          website: {
            ...website,
            menu: JSON.parse(website.menu),
            footer: JSON.parse(website.footer),
          },
          outdir: tmpdir,
          compiler: {
            paths: {
              "react-router-dom": ["/opt/nodejs/node_modules/react-router-dom"],
              "@polly/components/*": ["/opt/nodejs/node_modules/@polly/components/*"]
            }
          },
          componentMap: PollyComponentPath
        })

        console.log("Starting building...")

        const s3Prefix = "websites/" + buildRequest.id
        const outputs = await build({
          sourcedir: tmpdir,
          outdir: s3Prefix
        })

        console.log("Uploading file to S3...")

        await Promise.all(
          outputs.map(x => s3.upload(x.path, x.data))
        )

        if (!website.cloudfrontDistributionID) {
          console.log("Creating CloudFront distribution")
          const distribution = (await cloudfront.create(buildRequest.id, website.id)).Distribution

          console.log(distribution?.DomainName)
          console.log(JSON.stringify(distribution, null, 2))

          const updateWebsite = await appsync.updateWebsite(website.id, {
            cloudfrontDistributionID: distribution.Id,
            cloudfrontDomainName: distribution.DomainName
          })
          console.log(JSON.stringify(updateWebsite.data.data, null, 2))

          const updateBuild = await appsync.updateBuildRequest(buildRequest.id, {
            status: 'SUCCESS'
          })

          console.log(JSON.stringify(updateBuild.data.data, null, 2))
        }
        else {
          console.log("Updating CloudFront distribution")
          const result = await cloudfront.update(buildRequest.id, website.cloudfrontDistributionID)
          console.log(JSON.stringify(result.Distribution, null, 2))

          const createInvalidation = await cloudfront.invalidate(buildRequest.id, website.cloudfrontDistributionID)
          const invalidationID = createInvalidation.Invalidation.Id

          const updateBuild = await appsync.updateBuildRequest(buildRequest.id, {
            status: 'SUCCESS',
            cloudfrontInvalidationID: invalidationID
          })

          console.log(JSON.stringify(updateBuild.data.data, null, 2))
        }
      }
      catch (e) {
        console.error(e)

        try {
          const updateBuild = await appsync.updateBuildRequest(buildRequest.id, {
            status: 'FAILED'
          })
          console.log(JSON.stringify(updateBuild.data.data, null, 2))
        }
        catch (e) {
          console.error(e)
        }
      }
    }
  }));

  await promises
};
