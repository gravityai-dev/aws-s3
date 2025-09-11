/**
 * AWS S3 Package for Gravity Workflow System
 *
 * Provides S3 storage nodes for file operations
 */
declare const plugin: import("@gravityai-dev/plugin-base").GravityPlugin;
export default plugin;
export { S3FilesNode } from "./S3Files/node";
export { S3FileContentNode } from "./S3FileContent/node";
export { AWSCredential } from "./credentials";
//# sourceMappingURL=index.d.ts.map