import {
  extend,
  Banner,
} from '@shopify/checkout-ui-extensions';

extend(
  'Checkout::Dynamic::Render',
  (root, api) => {
    const banner = root.createComponent(
      Banner,
      {},
      'Your extension',
    );
    root.appendChild(banner);
  },
);
