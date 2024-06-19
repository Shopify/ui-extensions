import {ActionItem, extension} from '@shopify/ui-extensions/point-of-sale';

export default extension(
  'pos.product-details.action.menu-item.render',
  (root, api) => {
    const actionItem = root.createComponent(ActionItem, {
      onPress: () => api.action.presentModal(),
      enabled: true,
    });

    console.log(`Product ID: ${api.product.id}`);

    root.append(actionItem);
  },
);
