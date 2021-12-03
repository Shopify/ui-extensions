"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const config_1 = require("@sewing-kit/config");
const plugin_eslint_1 = require("@sewing-kit/plugin-eslint");
const plugin_typescript_1 = require("@sewing-kit/plugin-typescript");
const plugin_jest_1 = require("@sewing-kit/plugin-jest");
exports.default = config_1.createWorkspace((workspace) => {
    workspace.use(plugin_typescript_1.workspaceTypeScript(), plugin_jest_1.jest(), plugin_eslint_1.eslint());
});
