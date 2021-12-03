"use strict";

var _checkoutUiExtensionsReact = require("@shopify/checkout-ui-extensions-react");

var _jsxRuntime = require("react/jsx-runtime");

(0, _checkoutUiExtensionsReact.render)('Checkout::Feature::Render', () => /*#__PURE__*/(0, _jsxRuntime.jsx)(App, {}));

function App() {
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)(_checkoutUiExtensionsReact.View, {
    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_checkoutUiExtensionsReact.Heading, {
      children: "Hi John Doe! (h1)"
    }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_checkoutUiExtensionsReact.HeadingGroup, {
      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_checkoutUiExtensionsReact.Heading, {
        children: "Your account (h2)"
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_checkoutUiExtensionsReact.HeadingGroup, {
        children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_checkoutUiExtensionsReact.Heading, {
          children: "Change Password (h3)"
        })
      })]
    })]
  });
}