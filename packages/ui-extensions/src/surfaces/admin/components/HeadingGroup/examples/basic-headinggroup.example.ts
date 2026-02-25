import {extension, HeadingGroup, Heading, Text, BlockStack} from '@shopify/ui-extensions/admin';

export default extension(
  'admin.product-details.block.render',
  (root) => {

    const stack = root.createComponent(BlockStack);

    const h1 = root.createComponent(
      Heading,
      {},
      'Warehouse integration',
    );

    const group = root.createComponent(HeadingGroup);

    const h2 = root.createComponent(
      Heading,
      {},
      'Sync configuration',
    );

    const detail = root.createComponent(
      Text,
      {},
      'Configure how product data flows between Shopify and your warehouse management system.',
    );

    group.appendChild(h2);
    group.appendChild(detail);

    stack.appendChild(h1);
    stack.appendChild(group);
    root.appendChild(stack);
  },
);
