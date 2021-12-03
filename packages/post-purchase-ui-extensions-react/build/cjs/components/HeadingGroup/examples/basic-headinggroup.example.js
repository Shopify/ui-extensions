"use strict";

var _postPurchaseUiExtensionsReact = require("@shopify/post-purchase-ui-extensions-react");

var _jsxRuntime = require("react/jsx-runtime");

(0, _postPurchaseUiExtensionsReact.render)('Checkout::PostPurchase::Render', function () {
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(App, {});
});

function App() {
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)(_postPurchaseUiExtensionsReact.View, {
    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_postPurchaseUiExtensionsReact.Heading, {
      children: "Hi John Doe! (h1)"
    }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_postPurchaseUiExtensionsReact.HeadingGroup, {
      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_postPurchaseUiExtensionsReact.Heading, {
        children: "Your account (h2)"
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_postPurchaseUiExtensionsReact.HeadingGroup, {
        children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_postPurchaseUiExtensionsReact.Heading, {
          children: "Change Password (h3)"
        })
      })]
    })]
  });
}