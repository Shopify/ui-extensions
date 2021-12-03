import { extend, TextField } from '@shopify/checkout-ui-extensions';
extend('Checkout::Feature::Render', function (root) {
  var textfield = root.createComponent(TextField, {
    label: 'TextField'
  });
  root.appendChild(textfield);
});