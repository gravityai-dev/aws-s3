import { type NodeExecutionContext } from "@gravityai-dev/plugin-base";
import { S3FileContentConfig, S3FileContentExecutorOutput } from "../util/types";
declare const PromiseNode: any;
export default class S3FileContentExecutor extends PromiseNode<S3FileContentConfig> {
    constructor();
    protected executeNode(inputs: Record<string, any>, config: S3FileContentConfig, context: NodeExecutionContext): Promise<S3FileContentExecutorOutput>;
    /**
     * Build credential context from execution context
     */
    private buildCredentialContext;
}
export {};
//# sourceMappingURL=executor.d.ts.map