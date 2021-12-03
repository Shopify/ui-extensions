import { extend, Divider } from '@shopify/checkout-ui-extensions';
extend('Checkout::Feature::Render', function (root) {
  var divider = root.createComponent(Divider);
  root.appendChild(divider);
});