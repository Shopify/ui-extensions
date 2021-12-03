import React from 'react';
import { extend, render, Card, CardSection } from '@shopify/admin-ui-extensions-react';
import { jsx as _jsx } from "react/jsx-runtime";
import { jsxs as _jsxs } from "react/jsx-runtime";

function App() {
  return /*#__PURE__*/_jsxs(Card, {
    children: [/*#__PURE__*/_jsx(CardSection, {
      title: "Sectional",
      children: "This is the best section."
    }), /*#__PURE__*/_jsx(CardSection, {
      title: "Loveseat",
      children: "No, this is the best section."
    })]
  });
}

extend('Playground', render(function () {
  return /*#__PURE__*/_jsx(App, {});
}));