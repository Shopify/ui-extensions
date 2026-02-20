import {extension, TextField, BlockStack, Text} from '@shopify/ui-extensions/admin';

export default extension(
  'admin.product-details.block.render',
  (root) => {

    const stack = root.createComponent(BlockStack);

    const heading = root.createComponent(
      Text,
      {fontWeight: 'bold'},
      'Shipping configuration',
    );

    const weightField = root.createComponent(TextField, {
      label: 'Package weight (kg)',
      name: 'weight',
      placeholder: 'e.g. 2.5',
    });

    const handleField = root.createComponent(TextField, {
      label: 'Store handle',
      name: 'handle',
      value: 'premium-widget',
      readOnly: true,
    });

    stack.appendChild(heading);
    stack.appendChild(weightField);
    stack.appendChild(handleField);
    root.appendChild(stack);
  },
);
