import {extension, InlineStack, Button, Text, BlockStack} from '@shopify/ui-extensions/admin';

export default extension(
  'admin.product-details.action.render',
  (root, api) => {
    const {data, close} = api;
    const productId = data.selected[0]?.id;

    const stack = root.createComponent(BlockStack, {gap: true});

    const heading = root.createComponent(Text, {fontWeight: 'bold'}, 'Confirm action');
    const message = root.createComponent(Text, {}, `Sync product ${productId} to all warehouse locations?`);

    const actions = root.createComponent(InlineStack, {
      gap: true,
      inlineAlignment: 'end',
    });

    const cancelButton = root.createComponent(
      Button,
      {variant: 'tertiary', onPress: () => close()},
      'Cancel',
    );
    const confirmButton = root.createComponent(
      Button,
      {
        variant: 'primary',
        onPress: async () => {
          await fetch('/api/products/sync-all', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({productId}),
          });
          close();
        },
      },
      'Sync now',
    );

    actions.appendChild(cancelButton);
    actions.appendChild(confirmButton);

    stack.appendChild(heading);
    stack.appendChild(message);
    stack.appendChild(actions);
    root.appendChild(stack);
  },
);
