"use strict";

var _postPurchaseUiExtensionsReact = require("@shopify/post-purchase-ui-extensions-react");

var _jsxRuntime = require("react/jsx-runtime");

(0, _postPurchaseUiExtensionsReact.render)('Checkout::PostPurchase::Render', () => /*#__PURE__*/(0, _jsxRuntime.jsx)(App, {}));

function App() {
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)(_postPurchaseUiExtensionsReact.FormLayout, {
    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_postPurchaseUiExtensionsReact.TextField, {
      label: "Address",
      name: "address",
      id: "address"
    }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_postPurchaseUiExtensionsReact.FormLayoutGroup, {
      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_postPurchaseUiExtensionsReact.TextField, {
        label: "City",
        name: "city",
        id: "city"
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_postPurchaseUiExtensionsReact.TextField, {
        label: "Postal code",
        name: "postal",
        id: "postal"
      })]
    })]
  });
}