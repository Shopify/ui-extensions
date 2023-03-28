import {extend} from '@shopify/checkout-ui-extensions';

extend(
  'Checkout::Dynamic::Render',
  (root, {shop}) => {
    root.appendChild(
      root.createText(`Shop name: ${shop.name}`),
    );
  },
);
