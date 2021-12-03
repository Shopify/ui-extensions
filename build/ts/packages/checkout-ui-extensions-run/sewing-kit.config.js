"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const config_1 = require("@sewing-kit/config");
const sewing_kit_1 = require("../../config/sewing-kit");
exports.default = config_1.createPackage((pkg) => {
    pkg.binary({ name: 'checkout-ui-extensions-run', root: './src/index' });
    pkg.use(sewing_kit_1.checkouUiExtensionsBinary());
});
