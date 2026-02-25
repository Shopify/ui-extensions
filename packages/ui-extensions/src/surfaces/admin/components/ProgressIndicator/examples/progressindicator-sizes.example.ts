import {extension, ProgressIndicator, Text, Button, BlockStack, InlineStack} from '@shopify/ui-extensions/admin';

export default extension(
  'admin.product-details.action.render',
  (root, api) => {
    const {data, close} = api;

    const stack = root.createComponent(BlockStack);

    const message = root.createComponent(
      Text,
      {},
      'Syncing product data to your warehouse system...',
    );

    const spinnerRow = root.createComponent(InlineStack);
    const spinner = root.createComponent(ProgressIndicator, {
      size: 'base',
      accessibilityLabel: 'Syncing in progress',
    });
    spinnerRow.appendChild(spinner);

    const cancelButton = root.createComponent(
      Button,
      {
        variant: 'tertiary',
        onPress: () => close(),
      },
      'Cancel',
    );

    stack.appendChild(message);
    stack.appendChild(spinnerRow);
    stack.appendChild(cancelButton);
    root.appendChild(stack);
  },
);
