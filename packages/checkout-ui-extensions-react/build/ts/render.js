"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.render = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("@remote-ui/react");
const checkout_ui_extensions_1 = require("@shopify/checkout-ui-extensions");
const context_1 = require("./context");
/**
 * Registers your React-based UI Extension to run for the selected extension point.
 * Additionally, this function will automatically provide the extension API as React
 * context, which you can access anywhere in your extension by using the `useExtensionApi()`
 * hook.
 *
 * @param extensionPoint The extension point you are registering for. This extension
 * point must be a `RenderExtensionPoint`; if you are trying to register for a non-
 * rendering extension point, like `Checkout::PostPurchase::ShouldRender`, use the
 * `extend()` function provided by this library instead.
 *
 * @param render The function that will be called when Checkout begins rendering
 * your extension. This function is called with the API checkout provided to your
 * extension, and must return a React element that will be rendered into the extension
 * point you specified.
 */
function render(extensionPoint, render) {
    // TypeScript can’t infer the type of the callback because it’s a big union
    // type. To get around it, we’ll just fake like we are rendering the
    // KitchenSink extension, since all render extensions have the same general
    // shape (`RenderExtension`).
    return checkout_ui_extensions_1.extend(extensionPoint, (root, api) => {
        react_1.render(jsx_runtime_1.jsx(context_1.ExtensionApiContext.Provider, Object.assign({ value: api }, { children: render(api) }), void 0), root, () => {
            root.mount();
        });
        return {};
    });
}
exports.render = render;
