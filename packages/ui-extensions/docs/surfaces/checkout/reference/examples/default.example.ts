import {
  BlockStack,
  Text,
  extension,
} from '@shopify/ui-extensions/checkout';

extension(
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