import {extension, URLField, Button, BlockStack} from '@shopify/ui-extensions/admin';

export default extension(
  'admin.product-details.action.render',
  (root, api) => {
    const {close} = api;
    let endpoint = '';

    const stack = root.createComponent(BlockStack);

    const field = root.createComponent(URLField, {
      label: 'Webhook endpoint URL',
      name: 'webhookEndpoint',
      required: true,
      onChange: (value) => {
        endpoint = value;
        if (value && !value.startsWith('https://')) {
          field.updateProps({error: 'Webhook endpoints must use HTTPS'});
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
          if (endpoint.startsWith('https://')) {
            await fetch('/api/webhooks/register', {
              method: 'POST',
              headers: {'Content-Type': 'application/json'},
              body: JSON.stringify({endpoint}),
            });
            close();
          }
        },
      },
      'Register webhook',
    );

    stack.appendChild(field);
    stack.appendChild(saveButton);
    root.appendChild(stack);
  },
);
