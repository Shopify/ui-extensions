import React from 'react';
import { extend, render, useLayout, Text } from '@shopify/admin-ui-extensions-react';
import { jsx as _jsx } from "react/jsx-runtime";

function App() {
  var layout = useLayout();
  return /*#__PURE__*/_jsx(Text, {
    children: "The current layout is: ".concat(layout.horizontal)
  });
}

extend('Admin::Product::SubscriptionPlan::Add', render(function () {
  return /*#__PURE__*/_jsx(App, {});
}));