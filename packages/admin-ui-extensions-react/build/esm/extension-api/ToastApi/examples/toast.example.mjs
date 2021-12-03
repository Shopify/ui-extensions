import { extend, render, useToast, Button } from '@shopify/admin-ui-extensions-react';
import { jsx as _jsx } from "react/jsx-runtime";
import { Fragment as _Fragment } from "react/jsx-runtime";
import { jsxs as _jsxs } from "react/jsx-runtime";

function App() {
  var _useToast = useToast(),
      showToast = _useToast.show;

  return /*#__PURE__*/_jsxs(_Fragment, {
    children: [/*#__PURE__*/_jsx(Button, {
      onPress: function onPress() {
        return showToast('Toast popped!');
      },
      label: "Pop toast"
    }), /*#__PURE__*/_jsx(Button, {
      onPress: function onPress() {
        return showToast('That didn’t work.', {
          error: true
        });
      },
      label: "Do something"
    })]
  });
}

extend('Admin::Product::SubscriptionPlan::Add', render(function () {
  return /*#__PURE__*/_jsx(App, {});
}));