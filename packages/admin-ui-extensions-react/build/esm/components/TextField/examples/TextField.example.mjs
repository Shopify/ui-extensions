import React from 'react';
import { extend, render, TextField } from '@shopify/admin-ui-extensions-react';
import { jsx as _jsx } from "react/jsx-runtime";

function App() {
  return /*#__PURE__*/_jsx(TextField, {
    label: "Super text field",
    type: "text",
    value: "I can fly!",
    placeholder: "Type a thing",
    multiline: 3,
    prefix: "I typed:",
    suffix: "into this text field",
    error: "I hate to break this to you, but you cannot fly",
    onChange: function onChange(value) {
      return console.log(value, ' was typed');
    },
    onInput: function onInput(value) {
      return console.log(value, ' was typed');
    },
    onFocus: function onFocus() {
      return console.log('Welcome to the super field!');
    },
    onBlur: function onBlur() {
      return console.log('Left to do something else');
    },
    clearButton: true,
    onClearButtonPress: function onClearButtonPress() {
      return console.log('Clear that silly statement');
    }
  });
}

extend('Playground', render(function () {
  return /*#__PURE__*/_jsx(App, {});
}));