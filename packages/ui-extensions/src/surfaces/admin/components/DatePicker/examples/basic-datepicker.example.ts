import {extension, DatePicker, Button, BlockStack, Text} from '@shopify/ui-extensions/admin';

export default extension(
  'admin.product-details.action.render',
  (root, api) => {
    const {data, close} = api;
    const productId = data.selected[0]?.id;
    let selectedDate = '';

    const stack = root.createComponent(BlockStack);

    const heading = root.createComponent(
      Text,
      {fontWeight: 'bold'},
      'Schedule promotion start',
    );

    const picker = root.createComponent(DatePicker, {
      selected: selectedDate,
      onChange: (value) => {
        selectedDate = value;
      },
    });

    const saveButton = root.createComponent(
      Button,
      {
        variant: 'primary',
        onPress: async () => {
          await fetch('/api/products/promotion', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({productId, startDate: selectedDate}),
          });
          close();
        },
      },
      'Schedule promotion',
    );

    stack.appendChild(heading);
    stack.appendChild(picker);
    stack.appendChild(saveButton);
    root.appendChild(stack);
  },
);
