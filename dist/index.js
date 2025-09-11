"use strict";
/**
 * AWS S3 Package for Gravity Workflow System
 *
 * Provides S3 storage nodes for file operations
 */
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.AWSCredential = exports.S3FileContentNode = exports.S3FilesNode = void 0;
const plugin_base_1 = require("@gravityai-dev/plugin-base");
const plugin = (0, plugin_base_1.createPlugin)({
    name: "@gravityai-dev/aws-s3",
    version: "1.0.0",
    description: "AWS S3 storage nodes for Gravity workflow system",
    async setup(api) {
        // Initialize platform dependencies
        const { initializePlatformFromAPI } = await Promise.resolve().then(() => __importStar(require("@gravityai-dev/plugin-base")));
        initializePlatformFromAPI(api);
        // Import and register S3Files node
        const { S3FilesNode } = await Promise.resolve().then(() => __importStar(require("./S3Files/node")));
        api.registerNode(S3FilesNode);
        // Import and register S3FileContent node
        const { S3FileContentNode } = await Promise.resolve().then(() => __importStar(require("./S3FileContent/node")));
        api.registerNode(S3FileContentNode);
        // Import and register credentials (will use existing if already registered)
        const { AWSCredential } = await Promise.resolve().then(() => __importStar(require("./credentials")));
        api.registerCredential(AWSCredential);
    },
});
exports.default = plugin;
// Export nodes for direct usage if needed
var node_1 = require("./S3Files/node");
Object.defineProperty(exports, "S3FilesNode", { enumerable: true, get: function () { return node_1.S3FilesNode; } });
var node_2 = require("./S3FileContent/node");
Object.defineProperty(exports, "S3FileContentNode", { enumerable: true, get: function () { return node_2.S3FileContentNode; } });
var credentials_1 = require("./credentials");
Object.defineProperty(exports, "AWSCredential", { enumerable: true, get: function () { return credentials_1.AWSCredential; } });
//# sourceMappingURL=index.js.map