import {
  extension,
  Banner,
} from '@shopify/checkout-ui-extensions';

extension(
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
