import {extension} from '@shopify/ui-extensions/admin';

export default extension(
  'admin.product-details.print-action.render',
  async (root, api) => {
    const {data, resourcePicker} = api;

    const initialProducts = data.selected;
    const additionalProducts = await resourcePicker({type: 'product'});

    const allProducts = additionalProducts 
      ? [...initialProducts, ...additionalProducts]
      : initialProducts;

    const response = await fetch('/api/generate-labels', {
      method: 'POST',
      body: JSON.stringify({productIds: allProducts.map((p) => p.id)}),
    });

    const result = await response.json();
    return result.labelUrl;
  },
);
