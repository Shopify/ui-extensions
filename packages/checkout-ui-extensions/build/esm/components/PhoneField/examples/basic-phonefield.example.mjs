import { extend, PhoneField } from '@shopify/checkout-ui-extensions';
extend('Checkout::Feature::Render', function (root) {
  var textfield = root.createComponent(PhoneField, {
    label: 'Phone'
  });
  root.appendChild(textfield);
});