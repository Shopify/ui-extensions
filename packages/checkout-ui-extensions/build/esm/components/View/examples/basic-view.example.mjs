import { extend, View } from '@shopify/checkout-ui-extensions';
extend('Checkout::Feature::Render', function (root) {
  var view = root.createComponent(View, undefined, 'View');
  root.appendChild(view);
});