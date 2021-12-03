"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const config_1 = require("@sewing-kit/config");
const sewing_kit_1 = require("../../config/sewing-kit");
exports.default = config_1.createPackage((pkg) => {
    pkg.entry({ root: './src/index' });
    pkg.entry({ name: 'extension-points', root: './src/extension-points' });
    pkg.entry({ name: 'extension-api', root: './src/extension-api' });
    pkg.use(sewing_kit_1.uiExtensionsPackage());
});
