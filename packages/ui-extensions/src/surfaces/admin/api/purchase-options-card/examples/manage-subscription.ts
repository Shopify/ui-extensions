import {extension} from '@shopify/ui-extensions/admin';

export default extension(
  'admin.product-purchase-option.action.render',
  (root, api) => {
    const {data, close} = api;

    const item = data.selected[0];

    if (item.sellingPlanId) {
      fetch('/api/update-subscription', {
        method: 'POST',
        body: JSON.stringify({
          productId: item.id,
          sellingPlanId: item.sellingPlanId,
        }),
      }).then(() => {
        close();
      });
    }
  },
);
