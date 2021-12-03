"use strict";

var _checkoutUiExtensionsReact = require("@shopify/checkout-ui-extensions-react");

var _jsxRuntime = require("react/jsx-runtime");

(0, _checkoutUiExtensionsReact.render)('Checkout::Feature::Render', function () {
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(App, {});
});

function App() {
  var _useExtensionApi = (0, _checkoutUiExtensionsReact.useExtensionApi)(),
      extensionPoint = _useExtensionApi.extensionPoint;

  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_checkoutUiExtensionsReact.Button, {
    onPress: function onPress() {
      // eslint-disable-next-line no-console
      console.log("Extension point: ".concat(extensionPoint));
    },
    children: "Log extension point to console"
  });
}