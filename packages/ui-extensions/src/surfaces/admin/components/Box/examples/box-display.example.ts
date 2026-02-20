import {extension, Box, Text, BlockStack} from '@shopify/ui-extensions/admin';

export default extension(
  'admin.product-details.block.render',
  (root) => {

    const stack = root.createComponent(BlockStack, {gap: true});

    const heading = root.createComponent(Text, {fontWeight: 'bold'}, 'Compliance status');

    const statusBox = root.createComponent(Box, {
      padding: 'base',
      accessibilityRole: 'status',
    });
    const statusText = root.createComponent(
      Text,
      {},
      'This product has been reviewed and approved for sale.',
    );
    statusBox.appendChild(statusText);

    const shippingBox = root.createComponent(Box, {
      padding: 'base',
      accessibilityRole: 'section',
    });
    const origin = root.createComponent(Text, {}, 'Shipping origin: United States');
    const hsCode = root.createComponent(Text, {}, 'HS code: 6110.20');
    shippingBox.appendChild(origin);
    shippingBox.appendChild(hsCode);

    stack.appendChild(heading);
    stack.appendChild(statusBox);
    stack.appendChild(shippingBox);
    root.appendChild(stack);
  },
);
