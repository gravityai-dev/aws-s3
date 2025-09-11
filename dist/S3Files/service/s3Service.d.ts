import { S3FileObject } from "../util/types";
export interface S3Config {
    bucket: string;
    prefix?: string;
    maxKeys?: number;
    fileExtensions?: string[];
}
/**
 * List files from S3 bucket with optional filtering
 */
export declare function listS3Files(config: S3Config, context: any): Promise<S3FileObject[]>;
//# sourceMappingURL=s3Service.d.ts.map