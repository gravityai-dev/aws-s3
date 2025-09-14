"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.S3FileContentNode = exports.NODE_TYPE = void 0;
exports.createNodeDefinition = createNodeDefinition;
const plugin_base_1 = require("@gravityai-dev/plugin-base");
const executor_1 = __importDefault(require("./executor"));
exports.NODE_TYPE = "S3FileContent";
function createNodeDefinition() {
    const { NodeInputType } = (0, plugin_base_1.getPlatformDependencies)();
    return {
        packageVersion: "1.0.9",
        type: exports.NODE_TYPE,
        name: "S3 File Content",
        description: "Fetch content of a single S3 file",
        category: "storage",
        logoUrl: "https://res.cloudinary.com/sonik/image/upload/v1749916163/gravity/icons/Amazon-S3-Logo.svg.png",
        color: "#FF9900",
        inputs: [
            {
                name: "file",
                type: NodeInputType.OBJECT,
                description: "File to fetch",
            },
        ],
        outputs: [
            {
                name: "fileContent",
                type: NodeInputType.OBJECT,
                description: "File object with content and download URL",
            },
        ],
        configSchema: {
            type: "object",
            properties: {
                file: {
                    type: "object",
                    title: "File Object",
                    description: "File object with key and bucket properties",
                    default: "",
                },
            },
        },
        credentials: [
            {
                name: "awsCredential",
                required: true,
                displayName: "AWS",
                description: "AWS credentials for S3 access",
            },
        ],
    };
}
const definition = createNodeDefinition();
exports.S3FileContentNode = {
    definition,
    executor: executor_1.default,
};
//# sourceMappingURL=index.js.map