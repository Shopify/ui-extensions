import React from 'react';
import { extend, render, InlineStack, StackItem, Text } from '@shopify/admin-ui-extensions-react';
import { jsx as _jsx } from "react/jsx-runtime";
import { jsxs as _jsxs } from "react/jsx-runtime";

function App() {
  return /*#__PURE__*/_jsxs(InlineStack, {
    children: [/*#__PURE__*/_jsx(StackItem, {
      fill: true,
      children: /*#__PURE__*/_jsx(Text, {
        children: "Fill the space"
      })
    }), /*#__PURE__*/_jsxs(StackItem, {
      children: [/*#__PURE__*/_jsx(Text, {
        children: "Other text"
      }), /*#__PURE__*/_jsx(Text, {
        children: "Even more text"
      })]
    })]
  });
}

extend('Playground', render(function () {
  return /*#__PURE__*/_jsx(App, {});
}));