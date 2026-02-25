import {extension, Text, Button} from '@shopify/ui-extensions/admin';

export default extension(
  'admin.product-details.print-action.render',
  async (root, api) => {
    const {data, resourcePicker} = api;

    let additionalCount = 0;
    let additionalText;

    const countText = root.createComponent(
      Text,
      {},
      `${data.selected.length} products selected`,
    );

    const addButton = root.createComponent(Button, {
      title: 'Add More Products',
      onPress: async () => {
        const additionalProducts = await resourcePicker({
          type: 'product',
          multiple: 10,
          action: 'add',
        });

        if (additionalProducts) {
          additionalCount = additionalProducts.length;
          
          if (additionalText) {
            root.removeChild(additionalText);
          }
          
          additionalText = root.createComponent(
            Text,
            {},
            `+${additionalCount} additional`,
          );
          root.appendChild(additionalText);
        }
      },
    });

    root.appendChild(countText);
    root.appendChild(addButton);

    // Return print URL
    const productIds = data.selected.map((item) => item.id);

    const response = await fetch('/api/generate-labels', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({productIds}),
    });

    const {printUrl} = await response.json();
    return printUrl;
  },
);
