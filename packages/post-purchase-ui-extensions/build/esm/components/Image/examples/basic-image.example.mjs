import { extend, Image } from '@shopify/post-purchase-ui-extensions';
extend('Checkout::PostPurchase::Render', function (root) {
  var image = root.createComponent(Image, {
    source: 'http://placekitten.com/300/300'
  });
  root.appendChild(image);
});