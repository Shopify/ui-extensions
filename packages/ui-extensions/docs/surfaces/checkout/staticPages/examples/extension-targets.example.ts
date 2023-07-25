import {
  extension,
  Banner,
} from '@shopify/ui-extensions/checkout';

export default extension(
  'purchase.checkout.block.render',
  (root, api) => {
    const banner = root.createComponent(
      Banner,
      {},
      'Your extension',
    );
    root.appendChild(banner);
  },
);
