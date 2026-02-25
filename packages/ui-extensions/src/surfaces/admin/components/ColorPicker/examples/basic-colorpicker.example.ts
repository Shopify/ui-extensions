import {extension, ColorPicker, Button, BlockStack, Text} from '@shopify/ui-extensions/admin';

export default extension(
  'admin.product-details.action.render',
  (root, api) => {
    const {data, close} = api;
    const productId = data.selected[0]?.id;
    let color = '#000000';

    const stack = root.createComponent(BlockStack);

    const heading = root.createComponent(
      Text,
      {fontWeight: 'bold'},
      'Product accent color',
    );

    const picker = root.createComponent(ColorPicker, {
      value: color,
      onChange: (value) => {
        color = value;
      },
    });

    const saveButton = root.createComponent(
      Button,
      {
        variant: 'primary',
        onPress: async () => {
          await fetch('/api/products/accent-color', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({productId, color}),
          });
          close();
        },
      },
      'Save color',
    );

    stack.appendChild(heading);
    stack.appendChild(picker);
    stack.appendChild(saveButton);
    root.appendChild(stack);
  },
);
