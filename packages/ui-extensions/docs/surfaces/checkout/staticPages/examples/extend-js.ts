import {
  extension,
  Banner,
} from '@shopify/ui-extensions/checkout';

export default extension(
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
