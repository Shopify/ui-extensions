import {
  extension,
  Banner,
} from '@shopify/ui-extensions/checkout';

export default extension(
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
