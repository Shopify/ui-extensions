import { extend, Banner } from '@shopify/checkout-ui-extensions';
extend('Checkout::Feature::Render', function (root) {
  var banner = root.createComponent(Banner, {
    status: 'critical',
    title: 'This is an error message'
  });
  root.appendChild(banner);
});