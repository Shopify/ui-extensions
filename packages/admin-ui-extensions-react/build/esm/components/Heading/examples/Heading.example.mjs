import React from 'react';
import { extend, render, Heading } from '@shopify/admin-ui-extensions-react';
import { jsx as _jsx } from "react/jsx-runtime";

function App() {
  return /*#__PURE__*/_jsx(Heading, {
    id: "profile_heading",
    level: 3,
    children: "Heading"
  });
}

extend('Playground', render(function () {
  return /*#__PURE__*/_jsx(App, {});
}));