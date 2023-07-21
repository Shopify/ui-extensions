import {extension} from '@shopify/ui-extensions/checkout';

export default extension(
  'Checkout::Dynamic::Render',
  (root, {shop}) => {
    root.appendChild(
      root.createText(`Shop name: ${shop.name}`),
    );
  },
);
