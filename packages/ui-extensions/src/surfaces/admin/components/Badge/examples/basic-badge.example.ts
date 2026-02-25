import {extension, Badge, BlockStack, Text} from '@shopify/ui-extensions/admin';

export default extension(
  'admin.product-details.block.render',
  (root) => {

    const stack = root.createComponent(BlockStack);

    const label = root.createComponent(
      Text,
      {fontWeight: 'bold'},
      'Order status:',
    );

    const fulfilled = root.createComponent(
      Badge,
      {tone: 'success'},
      'Fulfilled',
    );

    const partial = root.createComponent(
      Badge,
      {tone: 'warning'},
      'Partially fulfilled',
    );

    const unfulfilled = root.createComponent(
      Badge,
      {tone: 'critical'},
      'Unfulfilled',
    );

    stack.appendChild(label);
    stack.appendChild(fulfilled);
    stack.appendChild(partial);
    stack.appendChild(unfulfilled);
    root.appendChild(stack);
  },
);
