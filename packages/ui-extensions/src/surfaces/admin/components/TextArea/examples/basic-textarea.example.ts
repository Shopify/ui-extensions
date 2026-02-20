import {extension, TextArea, Button, BlockStack} from '@shopify/ui-extensions/admin';

export default extension(
  'admin.product-details.action.render',
  (root, api) => {
    const {data, close} = api;
    const productId = data.selected[0]?.id;
    let notes = '';

    const stack = root.createComponent(BlockStack);

    const field = root.createComponent(TextArea, {
      label: 'Internal notes',
      name: 'internalNotes',
      rows: 4,
      onChange: (value) => {
        notes = value;
      },
    });

    const saveButton = root.createComponent(
      Button,
      {
        variant: 'primary',
        onPress: async () => {
          await fetch('/api/products/notes', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({productId, notes}),
          });
          close();
        },
      },
      'Save notes',
    );

    stack.appendChild(field);
    stack.appendChild(saveButton);
    root.appendChild(stack);
  },
);
