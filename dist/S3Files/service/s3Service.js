"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.listS3Files = listS3Files;
const platform_1 = require("../../shared/platform");
const client_s3_1 = require("@aws-sdk/client-s3");
/**
 * List files from S3 bucket with optional filtering
 */
async function listS3Files(config, context) {
    const logger = (0, platform_1.createLogger)("S3Service");
    const credentials = await (0, platform_1.getNodeCredentials)(context, "awsCredential");
    if (!credentials?.accessKeyId || !credentials?.secretAccessKey) {
        throw new Error("AWS credentials not found or incomplete");
    }
    const client = new client_s3_1.S3Client({
        region: credentials.region || "us-east-1",
        credentials: {
            accessKeyId: credentials.accessKeyId,
            secretAccessKey: credentials.secretAccessKey,
        },
    });
    try {
        // List objects in bucket
        const listCommand = new client_s3_1.ListObjectsV2Command({
            Bucket: config.bucket,
            Prefix: config.prefix || "",
            MaxKeys: config.maxKeys || 1000,
        });
        const response = await client.send(listCommand);
        const s3Files = response.Contents || [];
        // Filter out directories (objects ending with '/' or with size 0)
        let filteredFiles = s3Files.filter((file) => {
            // Skip if no key
            if (!file.Key)
                return false;
            // Skip directories (ending with '/')
            if (file.Key.endsWith('/'))
                return false;
            // Skip empty files that might be directory markers
            if (file.Size === 0 && file.Key.includes('/'))
                return false;
            return true;
        });
        // Further filter by extensions if specified
        if (config.fileExtensions && config.fileExtensions.length > 0) {
            const extensions = config.fileExtensions.map((ext) => ext.toLowerCase());
            filteredFiles = filteredFiles.filter((file) => {
                const ext = file.Key?.split(".").pop()?.toLowerCase();
                return ext && extensions.includes(ext);
            });
        }
        // Transform to our output format
        const files = filteredFiles.map((file) => ({
            key: file.Key,
            size: file.Size || 0,
            lastModified: file.LastModified?.toISOString() || new Date().toISOString(),
            etag: file.ETag,
            bucket: config.bucket,
            universalId: "", // Will be set by executor
        }));
        logger.info("S3 files listed", {
            bucket: config.bucket,
            totalObjects: s3Files.length,
            directoriesFiltered: s3Files.length - filteredFiles.length,
            finalFileCount: files.length,
        });
        return files;
    }
    catch (error) {
        logger.error(`Failed to list S3 files`, {
            error: error.message,
            bucket: config.bucket,
            prefix: config.prefix,
        });
        throw error;
    }
}
//# sourceMappingURL=s3Service.js.map