import React from 'react';
import { extend, render, Text, useData } from '@shopify/admin-ui-extensions-react';
import { jsx as _jsx } from "react/jsx-runtime";

function App() {
  var _useData = useData(),
      productId = _useData.productId,
      variantId = _useData.variantId;

  return /*#__PURE__*/_jsx(Text, {
    children: "\n      Here is my product data:\n      - product id: ".concat(productId, "\n      - variant id: ").concat(variantId, "\n    ")
  });
}

extend('Admin::Product::SubscriptionPlan::Add', render(function () {
  return /*#__PURE__*/_jsx(App, {});
}));