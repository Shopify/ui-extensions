import {extension, Paragraph, Text, Link, BlockStack} from '@shopify/ui-extensions/admin';

export default extension(
  'admin.product-details.block.render',
  (root) => {

    const stack = root.createComponent(BlockStack);

    const paragraph = root.createComponent(Paragraph);

    const intro = root.createComponent(
      Text,
      {},
      'This product requires special handling during fulfillment. Review the ',
    );

    const link = root.createComponent(
      Link,
      {
        href: 'https://help.shopify.com/manual/fulfillment',
        target: '_blank',
      },
      'fulfillment guidelines',
    );

    const suffix = root.createComponent(
      Text,
      {},
      ' for packaging requirements and carrier restrictions before processing orders.',
    );

    paragraph.appendChild(intro);
    paragraph.appendChild(link);
    paragraph.appendChild(suffix);

    stack.appendChild(paragraph);
    root.appendChild(stack);
  },
);
