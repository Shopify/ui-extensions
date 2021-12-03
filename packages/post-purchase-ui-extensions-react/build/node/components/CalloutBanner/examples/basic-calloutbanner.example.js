"use strict";

var _postPurchaseUiExtensionsReact = require("@shopify/post-purchase-ui-extensions-react");

var _jsxRuntime = require("react/jsx-runtime");

(0, _postPurchaseUiExtensionsReact.render)('Checkout::PostPurchase::Render', () => /*#__PURE__*/(0, _jsxRuntime.jsx)(App, {}));

function App() {
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_postPurchaseUiExtensionsReact.CalloutBanner, {
    title: "Special offer today only",
    children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_postPurchaseUiExtensionsReact.Text, {
      children: "Add the Dinghy Skeleton Cruiser to your order and save 15%"
    })
  });
}