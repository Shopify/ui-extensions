import React from 'react';
import { extend, render, useLocale, Text } from '@shopify/admin-ui-extensions-react';
import { jsx as _jsx } from "react/jsx-runtime";

function App() {
  var locale = useLocale();
  return /*#__PURE__*/_jsx(Text, {
    children: "My current locale is: ".concat(locale)
  });
}

extend('Admin::Product::SubscriptionPlan::Add', render(function () {
  return /*#__PURE__*/_jsx(App, {});
}));