import {
  extension,
  Banner,
  Button,
} from '@shopify/ui-extensions/checkout';

export default extension(
  'purchase.checkout.block.render',
  (root, api) => {
    if (
      api.instructions.current.delivery
        .canSelectCustomAddress
    ) {
      root.appendChild(
        root.createComponent(
          Button,
          {
            onPress: () =>
              api.applyShippingAddressChange({
                type: 'updateShippingAddress',
                address: {
                  zip: '90201',
                },
              }),
          },
          'Change your postal code',
        ),
      );
    } else {
      root.appendChild(
        root.createComponent(
          Banner,
          {},
          'Shipping address cannot be modified',
        ),
      );
    }
  },
);
