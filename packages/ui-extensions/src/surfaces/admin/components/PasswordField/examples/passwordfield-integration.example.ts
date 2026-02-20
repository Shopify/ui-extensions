import {extension, PasswordField, TextField, EmailField, Button, BlockStack, Heading} from '@shopify/ui-extensions/admin';

export default extension(
  'admin.product-details.action.render',
  (root, api) => {
    const {close} = api;

    const stack = root.createComponent(BlockStack);

    const heading = root.createComponent(
      Heading,
      {},
      'Connect fulfillment service',
    );

    const endpointField = root.createComponent(TextField, {
      label: 'API endpoint',
      name: 'endpoint',
    });

    const emailField = root.createComponent(EmailField, {
      label: 'Account email',
      name: 'accountEmail',
    });

    const tokenField = root.createComponent(PasswordField, {
      label: 'API token',
      name: 'apiToken',
    });

    const connectButton = root.createComponent(
      Button,
      {
        variant: 'primary',
        onPress: async () => {
          await fetch('/api/fulfillment/connect', {method: 'POST'});
          close();
        },
      },
      'Connect service',
    );

    stack.appendChild(heading);
    stack.appendChild(endpointField);
    stack.appendChild(emailField);
    stack.appendChild(tokenField);
    stack.appendChild(connectButton);
    root.appendChild(stack);
  },
);
