import {extension, Button, Text} from '@shopify/ui-extensions/admin';

export default extension(
  'admin.product-variant-details.configuration.render',
  (root, api) => {
    const {data, resourcePicker} = api;

    let selectedCount = 0;
    let countText;

    const parentVariantId = data.selected[0]?.id;

    const selectButton = root.createComponent(Button, {
      title: 'Select Variant Components',
      onPress: async () => {
        const componentVariants = await resourcePicker({
          type: 'variant',
          multiple: 5,
          action: 'select',
          filter: {
            draft: false,
            archived: false,
          },
        });

        if (componentVariants) {
          selectedCount = componentVariants.length;

          await fetch('/api/bundles/configure-variant', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
              bundleVariantId: parentVariantId,
              componentVariants: componentVariants.map((v) => ({
                variantId: v.id,
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
            `${selectedCount} variant components selected`,
          );
          root.appendChild(countText);
        }
      },
    });

    root.appendChild(selectButton);
  },
);
