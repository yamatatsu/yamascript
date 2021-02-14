import { SynthUtils } from "@aws-cdk/assert";
import * as cdk from "@aws-cdk/core";
import { CloudFront } from "./stacks";

test("FetchRemoApi Stack", () => {
  const app = new cdk.App();

  const target = new CloudFront(app, "Target");

  expect(SynthUtils.toCloudFormation(target)).toMatchSnapshot();
});
