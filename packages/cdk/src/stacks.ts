import * as cdk from "@aws-cdk/core";
import * as s3 from "@aws-cdk/aws-s3";
import * as cloudfront from "@aws-cdk/aws-cloudfront";

export class CloudFront extends cdk.Stack {
  constructor(parent: cdk.App, id: string, props?: cdk.StackProps) {
    super(parent, id, props);

    const bucket = new s3.Bucket(this, "Bucket", {
      removalPolicy: cdk.RemovalPolicy.DESTROY,
    });
    const originAccessIdentity = new cloudfront.OriginAccessIdentity(
      this,
      "OriginAccessIdentity"
    );
    bucket.grantRead(originAccessIdentity);

    new cloudfront.CloudFrontWebDistribution(
      this,
      "CloudFrontWebDistribution",
      {
        viewerProtocolPolicy: cloudfront.ViewerProtocolPolicy.REDIRECT_TO_HTTPS,
        httpVersion: cloudfront.HttpVersion.HTTP2,
        originConfigs: [
          {
            s3OriginSource: {
              s3BucketSource: bucket,
              originAccessIdentity,
            },
            behaviors: [
              {
                pathPattern: "index.html",
                minTtl: cdk.Duration.seconds(0),
                maxTtl: cdk.Duration.seconds(5),
                defaultTtl: cdk.Duration.seconds(5),
                forwardedValues: { queryString: false },
              },
              {
                isDefaultBehavior: true,
                minTtl: cdk.Duration.seconds(0),
                maxTtl: cdk.Duration.days(365),
                defaultTtl: cdk.Duration.days(1),
                forwardedValues: { queryString: false },
              },
            ],
          },
        ],
      }
    );
  }
}
