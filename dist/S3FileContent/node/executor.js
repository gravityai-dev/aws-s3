"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.S3FileContentExecutor = void 0;
const platform_1 = require("../../shared/platform");
const s3FileContentService_1 = require("../service/s3FileContentService");
const NODE_TYPE = "S3FileContent";
class S3FileContentExecutor extends platform_1.PromiseNode {
    constructor() {
        super(NODE_TYPE);
    }
    async executeNode(inputs, config, context) {
        const logger = (0, platform_1.createLogger)("S3FileContent");
        // Build credential context for service
        const credentialContext = this.buildCredentialContext(context);
        // Get file from config - ALL data comes through config (template-resolved)
        const file = config.file;
        logger.info(`S3FileContent config.file resolved to:`, {
            fileKey: file?.key,
            universalId: file?.universalId,
            bucket: file?.bucket,
        });
        if (!file || typeof file !== "object") {
            throw new Error("No file input received. Connect this node to a Loop node or provide a file object.");
        }
        // Determine bucket - from config override or file metadata
        const bucket = config.bucket || file.bucket;
        if (!bucket) {
            throw new Error(`No bucket specified for file ${file.key}. Set bucket in node config or ensure upstream node provides it.`);
        }
        logger.info("Fetching S3 file content", {
            bucket,
            key: file.key,
            size: file.size,
        });
        try {
            // Fetch file content using service
            const fileContent = await (0, s3FileContentService_1.getS3FileContent)(bucket, file.key, credentialContext, file);
            logger.info("S3 file content fetched successfully", {
                key: file.key,
                size: fileContent.size,
                downloadUrlGenerated: !!fileContent.downloadUrl,
            });
            return {
                __outputs: {
                    fileContent,
                },
            };
        }
        catch (error) {
            logger.error(`Failed to fetch S3 file content for ${file.key}`, {
                error,
                bucket,
                key: file.key,
            });
            throw new Error(`Failed to fetch S3 file content for ${file.key}: ${error instanceof Error ? error.message : "Unknown error"}`);
        }
    }
    /**
     * Build credential context from execution context
     */
    buildCredentialContext(context) {
        return {
            credentials: context.credentials || {},
            nodeType: NODE_TYPE,
            workflowId: context.workflow?.id || "",
            executionId: context.executionId || "",
            nodeId: context.nodeId || "",
        };
    }
}
exports.S3FileContentExecutor = S3FileContentExecutor;
//# sourceMappingURL=executor.js.map