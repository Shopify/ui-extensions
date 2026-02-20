import {extension, EmailField, Button, BlockStack, Text} from '@shopify/ui-extensions/admin';

export default extension(
  'admin.product-details.action.render',
  (root, api) => {
    const {data, close} = api;
    const productId = data.selected[0]?.id;
    let email = '';

    const stack = root.createComponent(BlockStack);

    const heading = root.createComponent(
      Text,
      {fontWeight: 'bold'},
      'Notification settings',
    );

    const field = root.createComponent(EmailField, {
      label: 'Low stock notification email',
      name: 'notificationEmail',
      onChange: (value) => {
        email = value;
      },
    });

    const saveButton = root.createComponent(
      Button,
      {
        variant: 'primary',
        onPress: async () => {
          await fetch('/api/notifications/email', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({productId, email}),
          });
          close();
        },
      },
      'Save notification email',
    );

    stack.appendChild(heading);
    stack.appendChild(field);
    stack.appendChild(saveButton);
    root.appendChild(stack);
  },
);
