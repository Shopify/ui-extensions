import React from 'react';
import { extend, render, Select } from '@shopify/admin-ui-extensions-react';
import { jsx as _jsx } from "react/jsx-runtime";
var options = [{
  label: 'Cool option',
  value: 'cool-option'
}, {
  label: 'Cooler option',
  value: 'cooler-option'
}, {
  label: 'Coolest option',
  value: 'coolest-option'
}];

function App() {
  return /*#__PURE__*/_jsx(Select, {
    label: "Select an option",
    options: options,
    labelInline: true,
    onChange: function onChange(value) {
      return console.log(value, 'was selected');
    },
    value: "cooler-option"
  });
}

extend('Playground', render(function () {
  return /*#__PURE__*/_jsx(App, {});
}));