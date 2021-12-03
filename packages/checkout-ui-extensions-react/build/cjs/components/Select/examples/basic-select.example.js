"use strict";

var _checkoutUiExtensionsReact = require("@shopify/checkout-ui-extensions-react");

var _jsxRuntime = require("react/jsx-runtime");

(0, _checkoutUiExtensionsReact.render)('Checkout::Feature::Render', function () {
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(App, {});
});

function App() {
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_checkoutUiExtensionsReact.Select, {
    label: "Select",
    value: "1",
    options: [{
      value: '1',
      label: 'Option 1'
    }, {
      value: '2',
      label: 'Option 2'
    }, {
      value: '3',
      label: 'Option 3'
    }]
  });
}