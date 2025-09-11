import { type NodeExecutionContext, type ValidationResult } from "@gravityai-dev/plugin-base";
import { S3FilesConfig, S3FilesExecutorOutput } from "../util/types";
declare const PromiseNode: any;
export default class S3FilesExecutor extends PromiseNode<S3FilesConfig> {
    constructor();
    protected validateConfig(config: S3FilesConfig): Promise<ValidationResult>;
    protected executeNode(inputs: Record<string, any>, config: S3FilesConfig, context: NodeExecutionContext): Promise<S3FilesExecutorOutput>;
    /**
     * Build credential context from execution context
     */
    private buildCredentialContext;
}
export {};
//# sourceMappingURL=executor.d.ts.map