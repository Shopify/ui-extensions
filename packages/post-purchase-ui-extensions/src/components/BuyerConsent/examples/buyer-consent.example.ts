import {extend, BuyerConsent} from '@shopify/post-purchase-ui-extensions';

extend('Checkout::PostPurchase::Render', (root) => {
  const button = root.createComponent(
    BuyerConsent,
    {
      // eslint-disable-next-line no-console
      onChange: (value) => console.log(value),
      policy: 'subscriptions',
      checked: false,
    },
  );

  root.appendChild(button);
});
