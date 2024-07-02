import {
  extension,
  Banner,
  Button,
} from '@shopify/ui-extensions/checkout';

export default extension(
  'purchase.checkout.block.render',
  (root, api) => {
    if (
      api.instructions.current.attributes
        .canUpdateAttributes
    ) {
      root.appendChild(
        root.createComponent(
          Button,
          {
            onPress: () =>
              api.applyAttributeChange({
                type: 'updateAttribute',
                key: 'loyaltyPoints',
                value: '100',
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
