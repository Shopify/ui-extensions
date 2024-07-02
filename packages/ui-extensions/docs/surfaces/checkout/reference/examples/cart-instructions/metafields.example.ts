import {
  extension,
  Banner,
  Button,
} from '@shopify/ui-extensions/checkout';

export default extension(
  'purchase.checkout.block.render',
  (root, api) => {
    if (
      api.instructions.current.metafields
        .canSetCartMetafields
    ) {
      root.appendChild(
        root.createComponent(
          Button,
          {
            onPress: () =>
              api.applyMetafieldChange({
                type: 'updateCartMetafield',
                metafield: {
                  namespace: 'loyalty',
                  key: 'loyaltyPoints',
                  value: '100',
                  type: 'string',
                },
              }),
          },
          'Apply 100 loyalty points',
        ),
      );
    } else {
      root.appendChild(
        root.createComponent(
          Banner,
          {},
          'Loyalty points are unavailable',
        ),
      );
    }
  },
);
