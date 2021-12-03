import { render, ChoiceList, Choice, BlockStack } from '@shopify/checkout-ui-extensions-react';
import { jsx as _jsx } from "react/jsx-runtime";
import { jsxs as _jsxs } from "react/jsx-runtime";
render('Checkout::Feature::Render', function () {
  return /*#__PURE__*/_jsx(App, {});
});

function App() {
  return /*#__PURE__*/_jsx(ChoiceList, {
    name: "Choice",
    value: "first" // eslint-disable-next-line no-console
    ,
    onChange: function onChange() {
      return console.log('onChange Triggered');
    },
    children: /*#__PURE__*/_jsxs(BlockStack, {
      children: [/*#__PURE__*/_jsx(Choice, {
        id: "first",
        children: "First choice"
      }), /*#__PURE__*/_jsx(Choice, {
        id: "second",
        children: "Second choice"
      })]
    })
  });
}