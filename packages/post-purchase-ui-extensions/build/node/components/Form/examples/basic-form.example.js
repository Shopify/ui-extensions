"use strict";

var _postPurchaseUiExtensions = require("@shopify/post-purchase-ui-extensions");

(0, _postPurchaseUiExtensions.extend)('Checkout::PostPurchase::Render', root => {
  const form = root.createComponent(_postPurchaseUiExtensions.Form, {
    // eslint-disable-next-line no-console
    onSubmit: () => console.log('Submitted!')
  }, [root.createComponent(_postPurchaseUiExtensions.Button, {
    submit: true
  }, 'Submit')]);
  root.appendChild(form);
});