import { render, Button, ButtonGroup } from '@shopify/post-purchase-ui-extensions-react';
import { jsx as _jsx } from "react/jsx-runtime";
import { jsxs as _jsxs } from "react/jsx-runtime";
render('Checkout::PostPurchase::Render', function () {
  return /*#__PURE__*/_jsx(App, {});
});

function App() {
  return /*#__PURE__*/_jsxs(ButtonGroup, {
    children: [/*#__PURE__*/_jsx(Button, {
      children: "Cancel"
    }), /*#__PURE__*/_jsx(Button, {
      children: "Continue"
    })]
  });
}