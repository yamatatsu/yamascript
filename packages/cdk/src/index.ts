import "source-map-support/register";
import * as cdk from "@aws-cdk/core";
import { CloudFront } from "./stacks";

const app = new cdk.App();
new CloudFront(app, "yamascript-CloudFront");
