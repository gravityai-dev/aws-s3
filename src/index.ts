/**
 * AWS S3 Package for Gravity Workflow System
 * 
 * Provides S3 storage nodes for file operations
 */

import { createPlugin } from "@gravityai-dev/plugin-base";

const plugin = createPlugin({
  name: "@gravityai-dev/aws-s3",
  version: "1.0.0",
  description: "AWS S3 storage nodes for Gravity workflow system",
  
  async setup(api) {
    // Initialize platform dependencies
    const { initializePlatformFromAPI } = await import("@gravityai-dev/plugin-base");
    initializePlatformFromAPI(api);

    // Import and register S3Files node
    const { S3FilesNode } = await import("./S3Files/node");
    api.registerNode(S3FilesNode);

    // Import and register S3FileContent node
    const { S3FileContentNode } = await import("./S3FileContent/node");
    api.registerNode(S3FileContentNode);

    // Import and register credentials (will use existing if already registered)
    const { AWSCredential } = await import("./credentials");
    api.registerCredential(AWSCredential);
  },
});

export default plugin;

// Export nodes for direct usage if needed
export { S3FilesNode } from "./S3Files/node";
export { S3FileContentNode } from "./S3FileContent/node";
export { AWSCredential } from "./credentials";
