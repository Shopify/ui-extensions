import {extension, Button, Text} from '@shopify/ui-extensions/admin';

export default extension(
  'admin.product-details.action.render',
  (root, api) => {
    const {data, resourcePicker, close} = api;

    const currentProductId = data.selected[0]?.id;
    let selectedCount = 0;

    const mainText = root.createComponent(
      Text,
      {},
      `Main product: ${currentProductId}`,
    );

    const button = root.createComponent(Button, {
      title: 'Select Component Products',
      onPress: async () => {
        const selectedProducts = await resourcePicker({
          type: 'product',
          multiple: 5,
          action: 'select',
        });

        if (selectedProducts) {
          selectedCount = selectedProducts.length;

          await fetch('/api/create-bundle', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
              mainProduct: currentProductId,
              components: selectedProducts.map((p) => p.id),
            }),
          });

          const countText = root.createComponent(
            Text,
            {},
            `Selected ${selectedCount} products`,
          );
          root.appendChild(countText);
          
          close();
        }
      },
    });

    root.appendChild(mainText);
    root.appendChild(button);
  },
);
