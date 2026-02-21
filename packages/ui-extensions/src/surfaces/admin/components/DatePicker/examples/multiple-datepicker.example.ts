import {extension, DatePicker, Button, BlockStack, Text} from '@shopify/ui-extensions/admin';

export default extension(
  'admin.product-details.action.render',
  (root, api) => {
    const {data, close} = api;
    const productId = data.selected[0]?.id;
    let blackoutDates = [];

    const stack = root.createComponent(BlockStack);

    const heading = root.createComponent(
      Text,
      {fontWeight: 'bold'},
      'Select shipping blackout dates',
    );

    const description = root.createComponent(
      Text,
      {},
      'Choose dates when this product cannot be shipped.',
    );

    const picker = root.createComponent(DatePicker, {
      selected: blackoutDates,
      onChange: (value) => {
        blackoutDates = value;
      },
    });

    const saveButton = root.createComponent(
      Button,
      {
        variant: 'primary',
        onPress: async () => {
          await fetch('/api/products/blackout-dates', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({productId, blackoutDates}),
          });
          close();
        },
      },
      'Save blackout dates',
    );

    stack.appendChild(heading);
    stack.appendChild(description);
    stack.appendChild(picker);
    stack.appendChild(saveButton);
    root.appendChild(stack);
  },
);
