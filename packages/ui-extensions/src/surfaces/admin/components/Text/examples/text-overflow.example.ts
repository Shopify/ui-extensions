import {extension, Text, BlockStack} from '@shopify/ui-extensions/admin';

export default extension(
  'admin.product-details.block.render',
  (root) => {

    const stack = root.createComponent(BlockStack);

    const label = root.createComponent(
      Text,
      {fontWeight: 'bold'},
      'Product description',
    );

    const description = root.createComponent(
      Text,
      {textOverflow: 'ellipsis'},
      'This premium organic cotton t-shirt features a relaxed fit with reinforced stitching, available in twelve colors with custom embroidery options for wholesale orders.',
    );

    stack.appendChild(label);
    stack.appendChild(description);
    root.appendChild(stack);
  },
);
