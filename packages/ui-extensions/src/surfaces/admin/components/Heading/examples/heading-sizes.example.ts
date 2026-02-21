import {extension, Heading, Text, BlockStack} from '@shopify/ui-extensions/admin';

export default extension(
  'admin.product-details.block.render',
  (root) => {

    const stack = root.createComponent(BlockStack);

    const primary = root.createComponent(
      Heading,
      {size: 2},
      'Warehouse integration',
    );

    const section = root.createComponent(
      Text,
      {},
      'Manage inventory sync and fulfillment settings for this product.',
    );

    const sub = root.createComponent(
      Heading,
      {size: 3},
      'Sync history',
    );

    const detail = root.createComponent(
      Text,
      {},
      'Last synced 15 minutes ago — 3 variants updated successfully.',
    );

    stack.appendChild(primary);
    stack.appendChild(section);
    stack.appendChild(sub);
    stack.appendChild(detail);
    root.appendChild(stack);
  },
);
