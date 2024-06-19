import {ActionItem, extension} from '@shopify/ui-extensions/point-of-sale';

export default extension(
  'pos.customer-details.action.menu-item.render',
  (root, api) => {
    const actionItem = root.createComponent(ActionItem, {
      onPress: () => api.action.presentModal(),
      enabled: true,
    });

    console.log(`Customer ID: ${api.customer.id}`);

    root.append(actionItem);
  },
);
