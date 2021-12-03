import { render, CalloutBanner, Text } from '@shopify/post-purchase-ui-extensions-react';
import { jsx as _jsx } from "react/jsx-runtime";
render('Checkout::PostPurchase::Render', function () {
  return /*#__PURE__*/_jsx(App, {});
});

function App() {
  return /*#__PURE__*/_jsx(CalloutBanner, {
    title: "Special offer today only",
    children: /*#__PURE__*/_jsx(Text, {
      children: "Add the Dinghy Skeleton Cruiser to your order and save 15%"
    })
  });
}