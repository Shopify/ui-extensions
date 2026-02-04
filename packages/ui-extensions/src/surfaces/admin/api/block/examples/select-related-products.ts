import {extension, Button, Text} from '@shopify/ui-extensions/admin';

export default extension(
  'admin.product-details.block.render',
  (root, api) => {
    const {data, resourcePicker} = api;

    const currentProductId = data.selected[0]?.id;
    let relatedCount = 0;
    let countText;

    const button = root.createComponent(Button, {
      title: 'Select Related Products',
      onPress: async () => {
        const selectedProducts = await resourcePicker({
          type: 'product',
          multiple: true,
          filter: {
            hidden: false,
            draft: false,
          },
        });

        if (selectedProducts) {
          await fetch('/api/product-recommendations', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
              productId: currentProductId,
              relatedProducts: selectedProducts.map((p) => p.id),
            }),
          });

          relatedCount = selectedProducts.length;
          
          if (countText) {
            root.removeChild(countText);
          }
          
          countText = root.createComponent(
            Text,
            {},
            `Added ${relatedCount} related products`,
          );
          root.appendChild(countText);
        }
      },
    });

    root.appendChild(button);
  },
);
