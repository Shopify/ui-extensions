import {extension, Button, Text} from '@shopify/ui-extensions/admin';

export default extension(
  'admin.product-details.configuration.render',
  (root, api) => {
    const {data, resourcePicker} = api;

    let selectedCount = 0;
    let countText;

    const parentProductId = data.selected[0]?.id;

    const selectButton = root.createComponent(Button, {
      title: 'Select Components',
      onPress: async () => {
        const componentProducts = await resourcePicker({
          type: 'product',
          multiple: 5,
          action: 'select',
          filter: {
            draft: false,
            archived: false,
          },
        });

        if (componentProducts) {
          selectedCount = componentProducts.length;

          await fetch('/api/bundles/configure', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
              bundleProductId: parentProductId,
              components: componentProducts.map((p) => ({
                productId: p.id,
                quantity: 1,
              })),
            }),
          });

          if (countText) {
            root.removeChild(countText);
          }

          countText = root.createComponent(
            Text,
            {},
            `${selectedCount} components selected`,
          );
          root.appendChild(countText);
        }
      },
    });

    root.appendChild(selectButton);
  },
);
