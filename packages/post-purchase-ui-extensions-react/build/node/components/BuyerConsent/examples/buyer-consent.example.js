"use strict";

var _postPurchaseUiExtensionsReact = require("@shopify/post-purchase-ui-extensions-react");

var _react = require("react");

var _jsxRuntime = require("react/jsx-runtime");

(0, _postPurchaseUiExtensionsReact.render)('Checkout::PostPurchase::Render', () => /*#__PURE__*/(0, _jsxRuntime.jsx)(App, {}));

function App() {
  const [consent, setConsent] = (0, _react.useState)(false);
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_postPurchaseUiExtensionsReact.BuyerConsent, {
    policy: "subscriptions",
    checked: consent,
    onChange: setConsent
  });
}