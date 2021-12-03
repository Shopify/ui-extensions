import { render, Bookend, TextField, Button } from '@shopify/post-purchase-ui-extensions-react';
import { jsx as _jsx } from "react/jsx-runtime";
import { jsxs as _jsxs } from "react/jsx-runtime";
render('Checkout::PostPurchase::Render', function () {
  return /*#__PURE__*/_jsx(App, {});
});

function App() {
  return /*#__PURE__*/_jsxs(Bookend, {
    trailing: true,
    children: [/*#__PURE__*/_jsx(TextField, {
      label: "Discount"
    }), /*#__PURE__*/_jsx(Button, {
      plain: true,
      children: "Apply"
    })]
  });
}