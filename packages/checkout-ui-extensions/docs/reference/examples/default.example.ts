import {
  BlockStack,
  Text,
  extend,
} from '@shopify/checkout-ui-extensions';

extend(
  'Checkout::Dynamic::Render',
  (root, {shop, cost}) => {
    root.appendChild(
      root.createComponent(
        BlockStack,
        undefined,
        [
          root.createComponent(
            Text,
            undefined,
            `Shop name: ${shop.name}`,
          ),
          root.createComponent(
            Text,
            undefined,
            `Cost: ${cost.totalAmount}`,
          ),
        ],
      ),
    );
  },
);
