import { type EnhancedNodeDefinition } from "@gravityai-dev/plugin-base";
import { S3FilesExecutor } from "./executor";
export declare const NODE_TYPE = "S3Files";
declare function createNodeDefinition(): EnhancedNodeDefinition;
export declare const S3FilesNode: {
    definition: any;
    executor: typeof S3FilesExecutor;
};
export { createNodeDefinition };
//# sourceMappingURL=index.d.ts.map