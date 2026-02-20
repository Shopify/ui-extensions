import {extension, PasswordField, Button, BlockStack, Text} from '@shopify/ui-extensions/admin';

export default extension(
  'admin.product-details.action.render',
  (root, api) => {
    const {data, close} = api;
    let apiKey = '';

    const stack = root.createComponent(BlockStack);

    const heading = root.createComponent(
      Text,
      {fontWeight: 'bold'},
      'Connect warehouse API',
    );

    const field = root.createComponent(PasswordField, {
      label: 'API key',
      name: 'apiKey',
      onChange: (value) => {
        apiKey = value;
      },
    });

    const saveButton = root.createComponent(
      Button,
      {
        variant: 'primary',
        onPress: async () => {
          await fetch('/api/integrations/warehouse', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({apiKey}),
          });
          close();
        },
      },
      'Save credentials',
    );

    stack.appendChild(heading);
    stack.appendChild(field);
    stack.appendChild(saveButton);
    root.appendChild(stack);
  },
);
