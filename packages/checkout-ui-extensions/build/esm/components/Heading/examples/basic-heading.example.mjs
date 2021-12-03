import { extend, Heading } from '@shopify/checkout-ui-extensions';
extend('Checkout::Feature::Render', function (root) {
  var heading = root.createComponent(Heading, undefined, 'Heading');
  root.appendChild(heading);
});