"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NodeInputType = exports.EnhancedNodeDefinition = exports.NodeExecutionContext = exports.CallbackNode = exports.PromiseNode = exports.getConfig = exports.createLogger = exports.saveTokenUsage = exports.getNodeCredentials = void 0;
/**
 * Shared platform dependencies for AWS S3 services
 */
const plugin_base_1 = require("@gravityai-dev/plugin-base");
// Get platform dependencies once
const deps = (0, plugin_base_1.getPlatformDependencies)();
exports.getNodeCredentials = deps.getNodeCredentials;
exports.saveTokenUsage = deps.saveTokenUsage;
exports.createLogger = deps.createLogger;
exports.getConfig = deps.getConfig;
exports.PromiseNode = deps.PromiseNode;
exports.CallbackNode = deps.CallbackNode;
exports.NodeExecutionContext = deps.NodeExecutionContext;
exports.EnhancedNodeDefinition = deps.EnhancedNodeDefinition;
exports.NodeInputType = deps.NodeInputType;
//# sourceMappingURL=platform.js.map