import { render, Checkbox } from '@shopify/post-purchase-ui-extensions-react';
import { jsx as _jsx } from "react/jsx-runtime";
render('Checkout::PostPurchase::Render', function () {
  return /*#__PURE__*/_jsx(App, {});
});

function App() {
  return /*#__PURE__*/_jsx(Checkbox, {
    id: "checkbox",
    name: "checkbox",
    children: "Save this information for next time"
  });
}