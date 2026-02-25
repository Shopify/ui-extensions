import {extension, Heading, Section, Text, BlockStack} from '@shopify/ui-extensions/admin';

export default extension(
  'admin.product-details.block.render',
  (root) => {

    const stack = root.createComponent(BlockStack);

    const section = root.createComponent(
      Section,
      {heading: 'Custom fields'},
    );

    const heading = root.createComponent(
      Heading,
      {id: 'metafields-heading'},
      'Metafield values',
    );

    const description = root.createComponent(
      Text,
      {},
      'These custom fields are synced with your external product information management system.',
    );

    section.appendChild(heading);
    section.appendChild(description);

    stack.appendChild(section);
    root.appendChild(stack);
  },
);
