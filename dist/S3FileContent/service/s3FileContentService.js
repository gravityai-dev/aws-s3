"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getS3FileContent = getS3FileContent;
const platform_1 = require("../../shared/platform");
const client_s3_1 = require("@aws-sdk/client-s3");
const s3_request_presigner_1 = require("@aws-sdk/s3-request-presigner");
/**
 * Get S3 object content and generate presigned URL
 */
async function getS3FileContent(bucket, key, context, file) {
    const logger = (0, platform_1.createLogger)("S3FileContentService");
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
        // Get object from S3
        const getCommand = new client_s3_1.GetObjectCommand({
            Bucket: bucket,
            Key: key,
        });
        const response = await client.send(getCommand);
        // Convert to buffer
        const buffer = Buffer.from(await response.Body.transformToByteArray());
        // Generate presigned download URL (valid for 7 days)
        const downloadUrl = await (0, s3_request_presigner_1.getSignedUrl)(client, getCommand, { expiresIn: 604800 });
        logger.info("S3 file content retrieved", {
            bucket,
            key,
            size: buffer.length,
            downloadUrlGenerated: true,
        });
        // Return file content without base64 to prevent subscription issues
        return {
            key,
            size: buffer.length,
            bucket,
            lastModified: file?.lastModified,
            etag: file?.etag,
            universalId: file?.universalId,
            downloadUrl,
        };
    }
    catch (error) {
        logger.error(`Failed to get S3 file content`, {
            error: error.message,
            bucket,
            key,
        });
        throw error;
    }
}
//# sourceMappingURL=s3FileContentService.js.map