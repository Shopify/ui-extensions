import {extension, Button, Text, ProgressIndicator} from '@shopify/ui-extensions/admin';

export default extension(
  'admin.product-details.block.render',
  (root, api) => {
    const {data, navigation} = api;

    const productId = data.selected[0]?.id;

    if (!productId) {
      return;
    }

    const spinner = root.createComponent(ProgressIndicator);
    root.appendChild(spinner);

    fetch(`/api/products/${productId}/check-eligibility`, {
      method: 'GET',
      headers: {'Content-Type': 'application/json'},
    })
      .then((response) => response.json())
      .then(({eligible}) => {
        root.removeChild(spinner);

        if (eligible) {
          const button = root.createComponent(Button, {
            title: 'Launch Advanced Workflow',
            onPress: () => {
              navigation.navigate('extension://my-product-action-extension-handle');
            },
          });
          root.appendChild(button);
        } else {
          const text = root.createComponent(
            Text,
            {},
            'Product not eligible for advanced actions',
          );
          root.appendChild(text);
        }
      });
  },
);
