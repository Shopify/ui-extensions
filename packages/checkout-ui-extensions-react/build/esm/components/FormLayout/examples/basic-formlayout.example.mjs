import { render, FormLayout, FormLayoutGroup, TextField } from '@shopify/checkout-ui-extensions-react';
import { jsx as _jsx } from "react/jsx-runtime";
import { jsxs as _jsxs } from "react/jsx-runtime";
render('Checkout::Feature::Render', function () {
  return /*#__PURE__*/_jsx(App, {});
});

function App() {
  return /*#__PURE__*/_jsxs(FormLayout, {
    children: [/*#__PURE__*/_jsx(TextField, {
      label: "Address",
      name: "address",
      id: "address"
    }), /*#__PURE__*/_jsxs(FormLayoutGroup, {
      children: [/*#__PURE__*/_jsx(TextField, {
        label: "City",
        name: "city",
        id: "city"
      }), /*#__PURE__*/_jsx(TextField, {
        label: "Postal code",
        name: "postal",
        id: "postal"
      })]
    })]
  });
}