import {
  extension,
  Banner,
  Button,
} from '@shopify/ui-extensions/checkout';

export default extension(
  'purchase.checkout.block.render',
  (root, api) => {
    if (
      api.instructions.current.discounts
        .canUpdateDiscountCodes
    ) {
      root.appendChild(
        root.createComponent(
          Button,
          {
            onPress: () =>
              api.applyDiscountCodeChange({
                type: 'addDiscountCode',
                code: 'FREE_SHIPPING',
              }),
          },
          'Apply your loyalty discount',
        ),
      );
    } else {
      root.appendChild(
        root.createComponent(
          Banner,
          {},
          'Loyalty discounts are unavailable',
        ),
      );
    }
  },
);
