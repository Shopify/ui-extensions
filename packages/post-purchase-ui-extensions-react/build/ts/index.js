"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.render = exports.extend = void 0;
var post_purchase_ui_extensions_1 = require("@shopify/post-purchase-ui-extensions");
Object.defineProperty(exports, "extend", { enumerable: true, get: function () { return post_purchase_ui_extensions_1.extend; } });
__exportStar(require("./components"), exports);
__exportStar(require("./hooks"), exports);
var render_1 = require("./render");
Object.defineProperty(exports, "render", { enumerable: true, get: function () { return render_1.render; } });
