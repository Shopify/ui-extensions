import React from 'react';
import { extend, render, InlineStack, Text } from '@shopify/admin-ui-extensions-react';
import { jsx as _jsx } from "react/jsx-runtime";
import { jsxs as _jsxs } from "react/jsx-runtime";

function App() {
  return /*#__PURE__*/_jsxs(InlineStack, {
    inlineAlignment: "center",
    spacing: "loose",
    children: [/*#__PURE__*/_jsx(Text, {
      children: "Items to stack"
    }), /*#__PURE__*/_jsx(Text, {
      children: "Items to stack"
    }), /*#__PURE__*/_jsx(Text, {
      children: "Items to stack"
    })]
  });
}

extend('Playground', render(function () {
  return /*#__PURE__*/_jsx(App, {});
}));