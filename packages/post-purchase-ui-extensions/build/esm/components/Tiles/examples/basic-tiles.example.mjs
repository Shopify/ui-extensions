import { extend, View, Tiles } from '@shopify/post-purchase-ui-extensions';
extend('Checkout::PostPurchase::Render', function (root) {
  var tiles = root.createComponent(Tiles, undefined, [root.createComponent(View, {
    border: 'base',
    padding: 'base'
  }, 'View'), root.createComponent(View, {
    border: 'base',
    padding: 'base'
  }, 'View'), root.createComponent(View, {
    border: 'base',
    padding: 'base'
  }, 'View')]);
  root.appendChild(tiles);
});