import {extension, Box, Text, BlockStack} from '@shopify/ui-extensions/admin';

export default extension(
  'admin.product-details.block.render',
  (root) => {

    const stack = root.createComponent(BlockStack, {gap: true});

    const heading = root.createComponent(Text, {fontWeight: 'bold'}, 'Compliance status');

    const visibleBox = root.createComponent(Box, {
      display: 'auto',
      padding: 'base',
    });
    const visibleText = root.createComponent(Text, {}, 'This product has been reviewed and approved for sale.');
    visibleBox.appendChild(visibleText);

    const hiddenBox = root.createComponent(Box, {
      display: 'none',
      accessibilityRole: 'status',
    });
    const hiddenText = root.createComponent(
      Text,
      {},
      'Compliance check passed — accessible to screen readers only.',
    );
    hiddenBox.appendChild(hiddenText);

    stack.appendChild(heading);
    stack.appendChild(visibleBox);
    stack.appendChild(hiddenBox);
    root.appendChild(stack);
  },
);
