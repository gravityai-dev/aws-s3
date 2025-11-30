"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.S3FilesNode = exports.NODE_TYPE = void 0;
exports.createNodeDefinition = createNodeDefinition;
const plugin_base_1 = require("@gravityai-dev/plugin-base");
const executor_1 = __importDefault(require("./executor"));
exports.NODE_TYPE = "S3Files";
function createNodeDefinition() {
    const { NodeInputType } = (0, plugin_base_1.getPlatformDependencies)();
    return {
        packageVersion: "1.0.19",
        type: exports.NODE_TYPE,
        name: "S3 Files",
        description: "List files from an S3 bucket with optional filtering",
        category: "storage",
        logoUrl: "https://res.cloudinary.com/sonik/image/upload/v1749916163/gravity/icons/Amazon-S3-Logo.svg.png",
        color: "#FF9900",
        inputs: [
            {
                name: "trigger",
                type: NodeInputType.BOOLEAN,
                description: "Trigger to start listing files",
            },
        ],
        outputs: [
            {
                name: "count",
                type: NodeInputType.NUMBER,
                description: "Total number of files",
            },
            {
                name: "files",
                type: NodeInputType.ARRAY,
                description: "Array of file objects",
            },
        ],
        configSchema: {
            type: "object",
            required: ["bucket"],
            properties: {
                bucket: {
                    type: "string",
                    title: "S3 Bucket Name",
                    description: "Name of the S3 bucket to list files from",
                },
                prefix: {
                    type: "string",
                    title: "Prefix Filter",
                    description: "Optional prefix to filter files (e.g., 'uploads/')",
                    default: "",
                },
                extensions: {
                    type: "string",
                    title: "File Extensions",
                    description: "Comma-separated list of file extensions to filter (e.g., 'pdf,docx,txt')",
                    default: "txt,pdf,docx,doc",
                },
                maxFiles: {
                    type: "number",
                    title: "Maximum Files",
                    description: "Maximum number of files to return",
                    default: 100,
                    minimum: 1,
                    maximum: 1000,
                },
                randomSelection: {
                    type: "boolean",
                    title: "Random Selection",
                    description: "Randomly select files instead of taking the first N files",
                    default: false,
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
exports.S3FilesNode = {
    definition,
    executor: executor_1.default,
};
//# sourceMappingURL=index.js.map