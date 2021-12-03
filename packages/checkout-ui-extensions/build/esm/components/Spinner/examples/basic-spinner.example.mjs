import { extend, Spinner } from '@shopify/checkout-ui-extensions';
extend('Checkout::Feature::Render', function (root) {
  var spinner = root.createComponent(Spinner);
  root.appendChild(spinner);
});