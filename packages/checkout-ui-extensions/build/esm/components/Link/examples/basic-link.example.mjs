import { extend, Link } from '@shopify/checkout-ui-extensions';
extend('Checkout::Feature::Render', function (root) {
  var link = root.createComponent(Link, {
    to: 'https://shopify.com'
  }, 'Shopify');
  root.appendChild(link);
});