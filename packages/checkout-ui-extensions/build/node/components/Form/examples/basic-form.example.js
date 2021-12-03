"use strict";

var _checkoutUiExtensions = require("@shopify/checkout-ui-extensions");

(0, _checkoutUiExtensions.extend)('Checkout::Feature::Render', root => {
  const form = root.createComponent(_checkoutUiExtensions.Form, {
    // eslint-disable-next-line no-console
    onSubmit: () => console.log('Submitted!')
  }, [root.createComponent(_checkoutUiExtensions.Button, {
    submit: true
  }, 'Submit')]);
  root.appendChild(form);
});