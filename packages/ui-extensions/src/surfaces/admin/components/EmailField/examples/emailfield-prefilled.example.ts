import {extension, EmailField, TextField, BlockStack, Text} from '@shopify/ui-extensions/admin';

export default extension(
  'admin.product-details.action.render',
  (root) => {

    const stack = root.createComponent(BlockStack);

    const heading = root.createComponent(
      Text,
      {fontWeight: 'bold'},
      'Fulfillment contact',
    );

    const nameField = root.createComponent(TextField, {
      label: 'Contact name',
      name: 'contactName',
    });

    const emailField = root.createComponent(EmailField, {
      label: 'Contact email',
      name: 'contactEmail',
      value: 'fulfillment@example.com',
      disabled: false,
    });

    const ccField = root.createComponent(EmailField, {
      label: 'CC email (optional)',
      name: 'ccEmail',
    });

    stack.appendChild(heading);
    stack.appendChild(nameField);
    stack.appendChild(emailField);
    stack.appendChild(ccField);
    root.appendChild(stack);
  },
);
