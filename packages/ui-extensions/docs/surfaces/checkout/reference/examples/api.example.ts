import {extend} from '@shopify/ui-extensions/checkout';

extend(
  'Checkout::Dynamic::Render',
  (root, {shop}) => {
    root.appendChild(
      root.createText(`Shop name: ${shop.name}`),
    );
  },
);
