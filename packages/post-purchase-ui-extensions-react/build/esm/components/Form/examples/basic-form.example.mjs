import { render, Form, Button } from '@shopify/post-purchase-ui-extensions-react';
import { jsx as _jsx } from "react/jsx-runtime";
render('Checkout::PostPurchase::Render', function () {
  return /*#__PURE__*/_jsx(App, {});
});

function App() {
  return (
    /*#__PURE__*/
    // eslint-disable-next-line no-console
    _jsx(Form, {
      onSubmit: function onSubmit() {
        return console.log('Submitted!');
      },
      children: /*#__PURE__*/_jsx(Button, {
        submit: true,
        children: "Submit"
      })
    })
  );
}