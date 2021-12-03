"use strict";

var _checkoutUiExtensionsReact = require("@shopify/checkout-ui-extensions-react");

var _jsxRuntime = require("react/jsx-runtime");

(0, _checkoutUiExtensionsReact.render)('Checkout::Feature::Render', function () {
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(App, {});
});

function App() {
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)(_checkoutUiExtensionsReact.Layout, {
    spacing: "base",
    sizes: [1, 0.2, 0.8, 1],
    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_checkoutUiExtensionsReact.View, {
      border: "base",
      padding: "base",
      children: "Header"
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_checkoutUiExtensionsReact.View, {
      border: "base",
      padding: "base",
      children: "Sidebar"
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_checkoutUiExtensionsReact.View, {
      border: "base",
      padding: "base",
      children: "Content"
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_checkoutUiExtensionsReact.View, {
      border: "base",
      padding: "base",
      children: "Footer"
    })]
  });
}