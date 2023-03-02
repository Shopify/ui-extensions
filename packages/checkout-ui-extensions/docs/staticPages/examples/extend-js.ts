import {
  extend,
  Banner,
} from '@shopify/checkout-ui-extensions';

extend(
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
