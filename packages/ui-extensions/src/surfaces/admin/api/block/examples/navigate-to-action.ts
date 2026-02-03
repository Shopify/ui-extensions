import {extension} from '@shopify/ui-extensions/admin';

export default extension(
  'admin.product-details.block.render',
  (root, api) => {
    const {data, navigation} = api;

    const productId = data.selected[0]?.id;

    fetch(`/api/products/${productId}/check-eligibility`)
      .then((response) => response.json())
      .then((result) => {
        if (result.eligible) {
          navigation.navigate('extension://my-admin-action-extension-handle');
        }
      });
  },
);
