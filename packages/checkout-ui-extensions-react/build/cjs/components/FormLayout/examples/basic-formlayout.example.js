"use strict";

var _checkoutUiExtensionsReact = require("@shopify/checkout-ui-extensions-react");

var _jsxRuntime = require("react/jsx-runtime");

(0, _checkoutUiExtensionsReact.render)('Checkout::Feature::Render', function () {
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(App, {});
});

function App() {
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)(_checkoutUiExtensionsReact.FormLayout, {
    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_checkoutUiExtensionsReact.TextField, {
      label: "Address",
      name: "address",
      id: "address"
    }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_checkoutUiExtensionsReact.FormLayoutGroup, {
      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_checkoutUiExtensionsReact.TextField, {
        label: "City",
        name: "city",
        id: "city"
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_checkoutUiExtensionsReact.TextField, {
        label: "Postal code",
        name: "postal",
        id: "postal"
      })]
    })]
  });
}