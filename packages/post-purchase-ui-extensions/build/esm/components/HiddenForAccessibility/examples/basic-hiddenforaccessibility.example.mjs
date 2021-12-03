import { extend, HiddenForAccessibility } from '@shopify/post-purchase-ui-extensions';
extend('Checkout::PostPurchase::Render', function (root) {
  var hiddenForA11y = root.createComponent(HiddenForAccessibility, undefined, 'Purely decorative content');
  root.appendChild(hiddenForA11y);
});