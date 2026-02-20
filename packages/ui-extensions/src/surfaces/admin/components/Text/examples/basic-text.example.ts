import {extension, Text, BlockStack} from '@shopify/ui-extensions/admin';

export default extension(
  'admin.product-details.block.render',
  (root) => {
    const stack = root.createComponent(BlockStack);

    const label = root.createComponent(
      Text,
      {},
      'Current price: ',
    );

    const price = root.createComponent(
      Text,
      {fontWeight: 'bold'},
      '$49.99',
    );

    const compare = root.createComponent(
      Text,
      {fontWeight: 'bold', fontStyle: 'italic'},
      'Compare at: $64.99',
    );

    stack.appendChild(label);
    stack.appendChild(price);
    stack.appendChild(compare);
    root.appendChild(stack);
  },
);
