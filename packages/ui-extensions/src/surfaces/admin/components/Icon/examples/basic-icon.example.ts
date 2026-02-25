import {extension, Icon, Text, InlineStack, BlockStack} from '@shopify/ui-extensions/admin';

export default extension(
  'admin.product-details.block.render',
  (root) => {

    const stack = root.createComponent(BlockStack);

    const syncRow = root.createComponent(InlineStack);
    const syncIcon = root.createComponent(Icon, {
      name: 'CircleTickMajor',
      accessibilityLabel: 'Synced',
    });
    const syncText = root.createComponent(Text, {}, 'Inventory synced');
    syncRow.appendChild(syncIcon);
    syncRow.appendChild(syncText);

    const alertRow = root.createComponent(InlineStack);
    const alertIcon = root.createComponent(Icon, {
      name: 'CircleAlertMajor',
      accessibilityLabel: 'Error',
    });
    const alertText = root.createComponent(Text, {}, 'Pricing error detected');
    alertRow.appendChild(alertIcon);
    alertRow.appendChild(alertText);

    stack.appendChild(syncRow);
    stack.appendChild(alertRow);
    root.appendChild(stack);
  },
);
