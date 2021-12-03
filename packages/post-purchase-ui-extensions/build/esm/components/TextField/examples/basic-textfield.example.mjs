import { extend, TextField } from '@shopify/post-purchase-ui-extensions';
extend('Checkout::PostPurchase::Render', function (root) {
  var textfield = root.createComponent(TextField, {
    label: 'TextField'
  });
  root.appendChild(textfield);
});