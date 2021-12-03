"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.render = render;

var _react = require("@remote-ui/react");

var _postPurchaseUiExtensions = require("@shopify/post-purchase-ui-extensions");

var _context = require("./context");

var _jsxRuntime = require("react/jsx-runtime");

function render(extensionPoint, render) {
  // TypeScript can’t infer the type of the callback because it’s a big union
  // type. To get around it, we’ll just fake like we are rendering the
  // KitchenSink extension, since all render extensions have the same general
  // shape (`RenderExtension`).
  return (0, _postPurchaseUiExtensions.extend)(extensionPoint, (root, input) => {
    (0, _react.render)( /*#__PURE__*/(0, _jsxRuntime.jsx)(_context.ExtensionInputContext.Provider, {
      value: input,
      children: render(input)
    }), root, () => {
      root.mount();
    });
    return {};
  });
}