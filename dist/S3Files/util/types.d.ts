/**
 * Type definitions for S3Files node
 */
export interface S3FilesConfig {
    bucket: string;
    prefix?: string;
    maxFiles?: number;
    extensions?: string;
    randomSelection?: boolean;
}
export interface S3FileObject {
    key: string;
    size: number;
    lastModified: string;
    etag?: string;
    bucket: string;
    universalId: string;
}
export interface S3FilesOutput {
    __outputs: {
        files: S3FileObject[];
        count: number;
    };
}
export interface S3FilesExecutorOutput {
    __outputs: {
        files: S3FileObject[];
        count: number;
    };
}
//# sourceMappingURL=types.d.ts.map