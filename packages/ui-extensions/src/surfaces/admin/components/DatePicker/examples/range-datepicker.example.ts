import {extension, DatePicker, Button, BlockStack, Text} from '@shopify/ui-extensions/admin';

export default extension(
  'admin.product-details.action.render',
  (root, api) => {
    const {data, close} = api;
    const productId = data.selected[0]?.id;
    let dateRange = {start: '', end: ''};

    const stack = root.createComponent(BlockStack);

    const heading = root.createComponent(
      Text,
      {fontWeight: 'bold'},
      'Set sale period',
    );

    const picker = root.createComponent(DatePicker, {
      selected: dateRange,
      onChange: (value) => {
        dateRange = value;
      },
    });

    const saveButton = root.createComponent(
      Button,
      {
        variant: 'primary',
        onPress: async () => {
          await fetch('/api/products/sale-period', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({productId, ...dateRange}),
          });
          close();
        },
      },
      'Save sale period',
    );

    stack.appendChild(heading);
    stack.appendChild(picker);
    stack.appendChild(saveButton);
    root.appendChild(stack);
  },
);
