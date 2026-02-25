import {extension, URLField, Button, BlockStack, Text} from '@shopify/ui-extensions/admin';

export default extension(
  'admin.product-details.action.render',
  (root, api) => {
    const {data, close} = api;
    const productId = data.selected[0]?.id;
    let sourceUrl = '';

    const stack = root.createComponent(BlockStack);

    const heading = root.createComponent(
      Text,
      {fontWeight: 'bold'},
      'External product source',
    );

    const field = root.createComponent(URLField, {
      label: 'Source URL',
      name: 'sourceUrl',
      onChange: (value) => {
        sourceUrl = value;
      },
    });

    const saveButton = root.createComponent(
      Button,
      {
        variant: 'primary',
        onPress: async () => {
          await fetch('/api/products/source', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({productId, sourceUrl}),
          });
          close();
        },
      },
      'Save source URL',
    );

    stack.appendChild(heading);
    stack.appendChild(field);
    stack.appendChild(saveButton);
    root.appendChild(stack);
  },
);
