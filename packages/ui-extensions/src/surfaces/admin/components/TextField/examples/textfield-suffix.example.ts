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
      label: 'Package weight',
      name: 'weight',
      suffix: 'kg',
    });

    const handleField = root.createComponent(TextField, {
      label: 'Shopify handle',
      name: 'handle',
      suffix: '.myshopify.com',
      readOnly: true,
    });

    stack.appendChild(heading);
    stack.appendChild(weightField);
    stack.appendChild(handleField);
    root.appendChild(stack);
  },
);
