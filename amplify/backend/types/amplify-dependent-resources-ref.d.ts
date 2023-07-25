export type AmplifyDependentResourcesAttributes = {
    "auth": {
        "pollywebapp72368b97": {
            "IdentityPoolId": "string",
            "IdentityPoolName": "string",
            "UserPoolId": "string",
            "UserPoolArn": "string",
            "UserPoolName": "string",
            "AppClientIDWeb": "string",
            "AppClientID": "string",
            "CreatedSNSRole": "string"
        }
    },
    "api": {
        "pollyapi": {
            "GraphQLAPIIdOutput": "string",
            "GraphQLAPIEndpointOutput": "string"
        }
    },
    "storage": {
        "pollybucket": {
            "BucketName": "string",
            "Region": "string"
        }
    },
    "hosting": {
        "S3AndCloudFront": {
            "Region": "string",
            "HostingBucketName": "string",
            "WebsiteURL": "string",
            "S3BucketSecureURL": "string",
            "CloudFrontDistributionID": "string",
            "CloudFrontDomainName": "string",
            "CloudFrontSecureURL": "string",
            "CloudFrontOriginAccessIdentity": "string"
        }
    },
    "custom": {
        "cloudfrontoai": {
            "ID": "string",
            "S3CanonicalUserId": "string"
        }
    },
    "function": {
        "pollywebapppollybundlerlib": {
            "Arn": "string"
        },
        "pollybundler": {
            "Name": "string",
            "Arn": "string",
            "Region": "string",
            "LambdaExecutionRole": "string"
        }
    }
}