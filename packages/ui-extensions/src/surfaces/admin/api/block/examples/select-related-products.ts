import {extension} from '@shopify/ui-extensions/admin';

export default extension(
  'admin.product-details.block.render',
  (root, api) => {
    const {resourcePicker} = api;

    resourcePicker({
      type: 'product',
      multiple: true,
    }).then((selectedProducts) => {
      if (selectedProducts) {
        fetch('/api/save-related-products', {
          method: 'POST',
          headers: {'Content-Type': 'application/json'},
          body: JSON.stringify({
            productIds: selectedProducts.map((p) => p.id),
          }),
        });
      }
    });
  },
);
