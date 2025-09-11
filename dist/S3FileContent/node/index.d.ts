import { type EnhancedNodeDefinition } from "@gravityai-dev/plugin-base";
import { S3FileContentExecutor } from "./executor";
export declare const NODE_TYPE = "S3FileContent";
declare function createNodeDefinition(): EnhancedNodeDefinition;
export declare const S3FileContentNode: {
    definition: any;
    executor: typeof S3FileContentExecutor;
};
export { createNodeDefinition };
//# sourceMappingURL=index.d.ts.map