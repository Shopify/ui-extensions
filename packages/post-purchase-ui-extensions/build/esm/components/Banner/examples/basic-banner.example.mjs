import { extend, Banner } from '@shopify/post-purchase-ui-extensions';
extend('Checkout::PostPurchase::Render', function (root) {
  var banner = root.createComponent(Banner, {
    status: 'critical',
    title: 'This is an error message'
  });
  root.appendChild(banner);
});