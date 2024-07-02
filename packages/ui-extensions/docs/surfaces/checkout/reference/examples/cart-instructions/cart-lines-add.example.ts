import {
  extension,
  Banner,
  Button,
} from '@shopify/ui-extensions/checkout';

export default extension(
  'purchase.checkout.block.render',
  (root, api) => {
    if (
      api.instructions.current.lines
        .canAddCartLine
    ) {
      root.appendChild(
        root.createComponent(
          Button,
          {
            onPress: () =>
              api.applyCartLinesChange({
                type: 'addCartLine',
                merchandiseId:
                  'gid://shopify/product/1234',
                quantity: 1,
              }),
          },
          'Add a free gift to your order',
        ),
      );
    } else {
      root.appendChild(
        root.createComponent(
          Banner,
          {},
          'The products in your cart cannot be modified',
        ),
      );
    }
  },
);
