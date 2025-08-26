import {Button, extension} from '@shopify/ui-extensions/point-of-sale';

export default extension(
  'pos.cart.line-item-details.action.render',
  (root, api) => {
    const button = root.createComponent(Button, {
      onPress: () => {
        api.cart.addLineItemSellingPlan(api.cartLineItem.uuid);
      },
    });

    root.append(button);
  },
);
