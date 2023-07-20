import {
  extension,
  Banner,
} from '@shopify/ui-extensions/checkout';

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
