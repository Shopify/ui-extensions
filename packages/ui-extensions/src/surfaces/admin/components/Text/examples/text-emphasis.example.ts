import {extension, Text, BlockStack} from '@shopify/ui-extensions/admin';

export default extension(
  'admin.product-details.block.render',
  (root) => {

    const stack = root.createComponent(BlockStack);

    const status = root.createComponent(
      Text,
      {
        fontStyle: 'italic',
        accessibilityRole: 'emphasis',
      },
      'This product is currently in draft status and not visible to customers.',
    );

    const note = root.createComponent(
      Text,
      {
        fontWeight: 'bold',
        accessibilityRole: 'strong',
      },
      'Action required: Complete all required fields before publishing.',
    );

    stack.appendChild(status);
    stack.appendChild(note);
    root.appendChild(stack);
  },
);
