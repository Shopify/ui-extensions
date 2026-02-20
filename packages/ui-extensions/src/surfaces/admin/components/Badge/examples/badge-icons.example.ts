import {extension, Badge, BlockStack, Text} from '@shopify/ui-extensions/admin';

export default extension(
  'admin.product-details.block.render',
  (root) => {

    const stack = root.createComponent(BlockStack);

    const heading = root.createComponent(
      Text,
      {fontWeight: 'bold'},
      'Inventory alerts',
    );

    const inStock = root.createComponent(
      Badge,
      {tone: 'success', icon: 'CircleTickMajor'},
      'In stock',
    );

    const lowStock = root.createComponent(
      Badge,
      {tone: 'warning', icon: 'DiamondAlertMajor'},
      'Low stock',
    );

    const outOfStock = root.createComponent(
      Badge,
      {tone: 'critical', icon: 'DiamondAlertMajor'},
      'Out of stock',
    );

    stack.appendChild(heading);
    stack.appendChild(inStock);
    stack.appendChild(lowStock);
    stack.appendChild(outOfStock);
    root.appendChild(stack);
  },
);
