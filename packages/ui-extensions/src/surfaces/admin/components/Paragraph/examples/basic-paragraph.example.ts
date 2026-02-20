import {extension, Paragraph, Text, BlockStack} from '@shopify/ui-extensions/admin';

export default extension(
  'admin.product-details.block.render',
  (root) => {

    const stack = root.createComponent(BlockStack);

    const paragraph = root.createComponent(Paragraph);

    const intro = root.createComponent(
      Text,
      {},
      'Last sync completed at ',
    );
    const time = root.createComponent(
      Text,
      {fontWeight: 'bold'},
      '2:45 PM EST',
    );
    const detail = root.createComponent(
      Text,
      {},
      '. All product tags and metafields were successfully pushed to the warehouse management system. ',
    );
    const count = root.createComponent(
      Text,
      {fontWeight: 'bold'},
      '24 fields',
    );
    const suffix = root.createComponent(
      Text,
      {},
      ' updated across 3 variants.',
    );

    paragraph.appendChild(intro);
    paragraph.appendChild(time);
    paragraph.appendChild(detail);
    paragraph.appendChild(count);
    paragraph.appendChild(suffix);

    stack.appendChild(paragraph);
    root.appendChild(stack);
  },
);
