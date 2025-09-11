import { type NodeExecutionContext } from "@gravityai-dev/plugin-base";
import { S3FilesConfig, S3FilesExecutorOutput } from "../util/types";
import { PromiseNode } from "../../shared/platform";
export declare class S3FilesExecutor extends PromiseNode<S3FilesConfig> {
    constructor();
    protected executeNode(inputs: Record<string, any>, config: S3FilesConfig, context: NodeExecutionContext): Promise<S3FilesExecutorOutput>;
    /**
     * Build credential context from execution context
     */
    private buildCredentialContext;
}
//# sourceMappingURL=executor.d.ts.map