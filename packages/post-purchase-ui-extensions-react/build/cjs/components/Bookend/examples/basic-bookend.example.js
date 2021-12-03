"use strict";

var _postPurchaseUiExtensionsReact = require("@shopify/post-purchase-ui-extensions-react");

var _jsxRuntime = require("react/jsx-runtime");

(0, _postPurchaseUiExtensionsReact.render)('Checkout::PostPurchase::Render', function () {
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(App, {});
});

function App() {
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)(_postPurchaseUiExtensionsReact.Bookend, {
    trailing: true,
    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_postPurchaseUiExtensionsReact.TextField, {
      label: "Discount"
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_postPurchaseUiExtensionsReact.Button, {
      plain: true,
      children: "Apply"
    })]
  });
}