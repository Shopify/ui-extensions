import { render, VisuallyHidden } from '@shopify/post-purchase-ui-extensions-react';
import { jsx as _jsx } from "react/jsx-runtime";
render('Checkout::PostPurchase::Render', function () {
  return /*#__PURE__*/_jsx(App, {});
});

function App() {
  return /*#__PURE__*/_jsx(VisuallyHidden, {
    children: "Visually hidden content although available to assistive technology"
  });
}