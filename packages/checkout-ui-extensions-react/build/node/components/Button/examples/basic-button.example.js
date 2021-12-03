"use strict";

var _checkoutUiExtensionsReact = require("@shopify/checkout-ui-extensions-react");

var _jsxRuntime = require("react/jsx-runtime");

(0, _checkoutUiExtensionsReact.render)('Checkout::Feature::Render', () => /*#__PURE__*/(0, _jsxRuntime.jsx)(App, {}));

function App() {
  const {
    extensionPoint
  } = (0, _checkoutUiExtensionsReact.useExtensionApi)();
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_checkoutUiExtensionsReact.Button, {
    onPress: () => {
      // eslint-disable-next-line no-console
      console.log(`Extension point: ${extensionPoint}`);
    },
    children: "Log extension point to console"
  });
}