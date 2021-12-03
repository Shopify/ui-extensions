"use strict";

var _postPurchaseUiExtensionsReact = require("@shopify/post-purchase-ui-extensions-react");

var _jsxRuntime = require("react/jsx-runtime");

(0, _postPurchaseUiExtensionsReact.render)('Checkout::PostPurchase::Render', () => /*#__PURE__*/(0, _jsxRuntime.jsx)(App, {}));

function App() {
  const {
    extensionPoint
  } = (0, _postPurchaseUiExtensionsReact.useExtensionApi)();
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_postPurchaseUiExtensionsReact.Button, {
    onPress: () => {
      // eslint-disable-next-line no-console
      console.log(`Extension point: ${extensionPoint}`);
    },
    children: "Log extension point to console"
  });
}