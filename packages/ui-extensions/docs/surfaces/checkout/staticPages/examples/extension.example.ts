import {
  extension,
  Banner,
} from '@shopify/ui-extensions/checkout';

export default extension(
  'purchase.checkout.block.render',
  (root, api) => {
    root.appendChild(
      root.createComponent(
        Banner,
        {},
        `Extension version: ${api.extension.version}`,
      ),
    );
  },
);
