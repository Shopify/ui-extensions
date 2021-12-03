import React from 'react';
import { extend, render, Spinner } from '@shopify/admin-ui-extensions-react';
import { jsx as _jsx } from "react/jsx-runtime";

function App() {
  return /*#__PURE__*/_jsx(Spinner, {});
}

extend('Playground', render(function () {
  return /*#__PURE__*/_jsx(App, {});
}));