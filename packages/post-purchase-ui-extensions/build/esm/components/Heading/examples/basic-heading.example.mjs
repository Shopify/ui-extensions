import { extend, Heading } from '@shopify/post-purchase-ui-extensions';
extend('Checkout::PostPurchase::Render', function (root) {
  var heading = root.createComponent(Heading, undefined, 'Heading');
  root.appendChild(heading);
});