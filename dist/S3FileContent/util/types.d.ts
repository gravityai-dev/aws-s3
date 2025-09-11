/**
 * Type definitions for S3FileContent node
 */
export interface S3FileContentConfig {
    bucket?: string;
    file?: {
        key: string;
        bucket?: string;
        size?: number;
        lastModified?: string;
        etag?: string;
        universalId?: string;
    };
}
export interface S3FileContentInput {
    file: {
        key: string;
        bucket?: string;
        size?: number;
        lastModified?: string;
        etag?: string;
        universalId?: string;
    };
}
export interface S3FileContentServiceOutput {
    key: string;
    content?: string;
    size: number;
    bucket: string;
    lastModified?: string;
    etag?: string;
    universalId?: string;
    downloadUrl?: string;
}
export interface S3FileContentOutput {
    __outputs: {
        fileContent: S3FileContentServiceOutput;
    };
}
export interface S3FileContentExecutorOutput {
    __outputs: {
        fileContent: S3FileContentServiceOutput;
    };
}
//# sourceMappingURL=types.d.ts.map