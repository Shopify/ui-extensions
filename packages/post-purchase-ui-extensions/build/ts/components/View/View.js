"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.View = void 0;
const core_1 = require("@remote-ui/core");
/**
 * A View is a generic container component. Its contents will always be their
 * “natural” size, so this component can be useful in layout components (like `Layout`, `Tiles`,
 * `BlockStack`, `InlineStack`) that would otherwise stretch their children to fit.
 */
exports.View = core_1.createRemoteComponent('View');
