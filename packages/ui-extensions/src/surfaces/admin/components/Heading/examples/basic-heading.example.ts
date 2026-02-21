import {extension, Heading, Text, BlockStack} from '@shopify/ui-extensions/admin';

export default extension(
  'admin.product-details.block.render',
  (root) => {
    const stack = root.createComponent(BlockStack);

    const heading = root.createComponent(
      Heading,
      {},
      'Product analytics',
    );

    const detail = root.createComponent(
      Text,
      {},
      'View real-time performance metrics synced from your analytics provider.',
    );

    stack.appendChild(heading);
    stack.appendChild(detail);
    root.appendChild(stack);
  },
);
