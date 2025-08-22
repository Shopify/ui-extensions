import {Button, extension} from '@shopify/ui-extensions/point-of-sale';

export default extension(
  'pos.cart.line-item-details.action.render',
  (root, api) => {
    const button = root.createComponent(Button, {
      onPress: () => {
        api.cart.addLineItemSellingPlan({
          lineItemUuid: api.cartLineItem.uuid,
          sellingPlanId: 123,
          sellingPlanName: 'My Selling Plan',
        });
      },
    });

    root.append(button);
  },
);
