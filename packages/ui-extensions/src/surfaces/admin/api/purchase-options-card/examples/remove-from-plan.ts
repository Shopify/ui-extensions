import {extension} from '@shopify/ui-extensions/admin';

export default extension(
  'admin.product-purchase-option.action.render',
  (root, api) => {
    const {data, close} = api;

    const item = data.selected[0];

    if (confirm('Remove this product from the selling plan?')) {
      fetch(`/api/selling-plans/${item.sellingPlanId}/remove-product`, {
        method: 'POST',
        body: JSON.stringify({productId: item.id}),
      }).then(() => {
        close();
      });
    }
  },
);
