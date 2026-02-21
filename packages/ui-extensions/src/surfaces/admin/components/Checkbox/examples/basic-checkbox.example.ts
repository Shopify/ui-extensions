import {extension, Checkbox, Button, BlockStack} from '@shopify/ui-extensions/admin';

export default extension(
  'admin.product-details.action.render',
  (root, api) => {
    const {data, close} = api;
    const productId = data.selected[0]?.id;
    let syncEnabled = false;

    const stack = root.createComponent(BlockStack);

    const checkbox = root.createComponent(Checkbox, {
      label: 'Enable automatic inventory sync',
      checked: syncEnabled,
      onChange: (value) => {
        syncEnabled = value;
      },
    });

    const saveButton = root.createComponent(
      Button,
      {
        variant: 'primary',
        onPress: async () => {
          await fetch('/api/products/sync-settings', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({productId, syncEnabled}),
          });
          close();
        },
      },
      'Save settings',
    );

    stack.appendChild(checkbox);
    stack.appendChild(saveButton);
    root.appendChild(stack);
  },
);
