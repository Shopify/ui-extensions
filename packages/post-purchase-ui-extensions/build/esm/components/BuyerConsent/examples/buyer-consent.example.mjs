import { extend, BuyerConsent } from '@shopify/post-purchase-ui-extensions';
extend('Checkout::PostPurchase::Render', function (root) {
  var button = root.createComponent(BuyerConsent, {
    // eslint-disable-next-line no-console
    onChange: function onChange(value) {
      return console.log(value);
    },
    policy: 'subscriptions',
    checked: false
  });
  root.appendChild(button);
});