"use strict";

var _postPurchaseUiExtensionsReact = require("@shopify/post-purchase-ui-extensions-react");

var _jsxRuntime = require("react/jsx-runtime");

(0, _postPurchaseUiExtensionsReact.render)('Checkout::PostPurchase::Render', function () {
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(App, {});
});

function App() {
  var _useExtensionApi = (0, _postPurchaseUiExtensionsReact.useExtensionApi)(),
      extensionPoint = _useExtensionApi.extensionPoint;

  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_postPurchaseUiExtensionsReact.Button, {
    onPress: function onPress() {
      // eslint-disable-next-line no-console
      console.log("Extension point: ".concat(extensionPoint));
    },
    children: "Log extension point to console"
  });
}