import { extend, Link } from '@shopify/post-purchase-ui-extensions';
extend('Checkout::PostPurchase::Render', function (root) {
  var link = root.createComponent(Link, {
    to: 'https://shopify.com'
  }, 'Shopify');
  root.appendChild(link);
});