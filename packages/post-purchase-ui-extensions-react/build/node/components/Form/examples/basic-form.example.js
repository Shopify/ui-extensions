"use strict";

var _postPurchaseUiExtensionsReact = require("@shopify/post-purchase-ui-extensions-react");

var _jsxRuntime = require("react/jsx-runtime");

(0, _postPurchaseUiExtensionsReact.render)('Checkout::PostPurchase::Render', () => /*#__PURE__*/(0, _jsxRuntime.jsx)(App, {}));

function App() {
  return (
    /*#__PURE__*/
    // eslint-disable-next-line no-console
    (0, _jsxRuntime.jsx)(_postPurchaseUiExtensionsReact.Form, {
      onSubmit: () => console.log('Submitted!'),
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_postPurchaseUiExtensionsReact.Button, {
        submit: true,
        children: "Submit"
      })
    })
  );
}