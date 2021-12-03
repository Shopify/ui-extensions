"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.render = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("@remote-ui/react");
const post_purchase_ui_extensions_1 = require("@shopify/post-purchase-ui-extensions");
const context_1 = require("./context");
function render(extensionPoint, render) {
    // TypeScript can’t infer the type of the callback because it’s a big union
    // type. To get around it, we’ll just fake like we are rendering the
    // KitchenSink extension, since all render extensions have the same general
    // shape (`RenderExtension`).
    return post_purchase_ui_extensions_1.extend(extensionPoint, (root, input) => {
        react_1.render(jsx_runtime_1.jsx(context_1.ExtensionInputContext.Provider, Object.assign({ value: input }, { children: render(input) }), void 0), root, () => {
            root.mount();
        });
        return {};
    });
}
exports.render = render;
