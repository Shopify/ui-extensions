import {extension} from '@shopify/ui-extensions/admin';

export default extension(
  'admin.product-details.action.render',
  (root, api) => {
    const {data, resourcePicker, close} = api;

    const currentProductId = data.selected[0]?.id;

    resourcePicker({
      type: 'product',
      multiple: 5,
      action: 'select',
    }).then((selectedProducts) => {
      if (selectedProducts) {
        fetch('/api/create-bundle', {
          method: 'POST',
          headers: {'Content-Type': 'application/json'},
          body: JSON.stringify({
            mainProduct: currentProductId,
            components: selectedProducts.map((p) => p.id),
          }),
        }).then(() => {
          close();
        });
      }
    });
  },
);
