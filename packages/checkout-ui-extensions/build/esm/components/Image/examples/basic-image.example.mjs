import { extend, Image } from '@shopify/checkout-ui-extensions';
extend('Checkout::Feature::Render', function (root) {
  var image = root.createComponent(Image, {
    source: 'http://placekitten.com/300/300'
  });
  root.appendChild(image);
});