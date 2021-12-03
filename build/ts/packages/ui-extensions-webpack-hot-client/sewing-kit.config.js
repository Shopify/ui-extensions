"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const config_1 = require("@sewing-kit/config");
const sewing_kit_1 = require("../../config/sewing-kit");
exports.default = config_1.createPackage((pkg) => {
    pkg.entry({ root: './src/index', runtime: config_1.Runtime.Node });
    pkg.entry({ name: 'worker', root: './src/worker', runtime: config_1.Runtime.WebWorker });
    pkg.use(sewing_kit_1.uiExtensionsPackage());
});
