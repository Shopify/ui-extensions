import {
  extension,
  Banner,
} from '@shopify/checkout-ui-extensions';

extension(
  'Checkout::Dynamic::Render',
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
