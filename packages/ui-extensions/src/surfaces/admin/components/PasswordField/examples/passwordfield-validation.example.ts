import {extension, PasswordField, Button, BlockStack} from '@shopify/ui-extensions/admin';

export default extension(
  'admin.product-details.action.render',
  (root, api) => {
    const {close} = api;
    let secret = '';

    const stack = root.createComponent(BlockStack);

    const field = root.createComponent(PasswordField, {
      label: 'Webhook secret',
      name: 'webhookSecret',
      required: true,
      onChange: (value) => {
        secret = value;
        if (value.length > 0 && value.length < 16) {
          field.updateProps({error: 'Secret must be at least 16 characters'});
        } else {
          field.updateProps({error: undefined});
        }
      },
    });

    const saveButton = root.createComponent(
      Button,
      {
        variant: 'primary',
        onPress: async () => {
          if (secret.length >= 16) {
            await fetch('/api/webhooks/secret', {
              method: 'POST',
              headers: {'Content-Type': 'application/json'},
              body: JSON.stringify({secret}),
            });
            close();
          }
        },
      },
      'Save webhook secret',
    );

    stack.appendChild(field);
    stack.appendChild(saveButton);
    root.appendChild(stack);
  },
);
