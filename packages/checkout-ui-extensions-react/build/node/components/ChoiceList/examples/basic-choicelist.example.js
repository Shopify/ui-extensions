"use strict";

var _checkoutUiExtensionsReact = require("@shopify/checkout-ui-extensions-react");

var _jsxRuntime = require("react/jsx-runtime");

(0, _checkoutUiExtensionsReact.render)('Checkout::Feature::Render', () => /*#__PURE__*/(0, _jsxRuntime.jsx)(App, {}));

function App() {
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_checkoutUiExtensionsReact.ChoiceList, {
    name: "Choice",
    value: "first" // eslint-disable-next-line no-console
    ,
    onChange: () => console.log('onChange Triggered'),
    children: /*#__PURE__*/(0, _jsxRuntime.jsxs)(_checkoutUiExtensionsReact.BlockStack, {
      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_checkoutUiExtensionsReact.Choice, {
        id: "first",
        children: "First choice"
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_checkoutUiExtensionsReact.Choice, {
        id: "second",
        children: "Second choice"
      })]
    })
  });
}