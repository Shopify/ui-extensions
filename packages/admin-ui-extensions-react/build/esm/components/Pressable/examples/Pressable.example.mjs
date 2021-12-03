import React from 'react';
import { extend, render, Pressable } from '@shopify/admin-ui-extensions-react';
import { jsx as _jsx } from "react/jsx-runtime";

function App() {
  return /*#__PURE__*/_jsx(Pressable, {
    onPress: function onPress() {
      return console.log('I’ve been pressed!');
    },
    children: "I can be pressed"
  });
}

extend('Playground', render(function () {
  return /*#__PURE__*/_jsx(App, {});
}));