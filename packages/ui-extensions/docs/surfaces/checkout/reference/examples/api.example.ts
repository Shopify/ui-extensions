import {extension} from '@shopify/ui-extensions/checkout';

export default extension(
  'purchase.checkout.block.render',
  (root, {shop}) => {
    root.appendChild(
      root.createText(`Shop name: ${shop.name}`),
    );
  },
);
