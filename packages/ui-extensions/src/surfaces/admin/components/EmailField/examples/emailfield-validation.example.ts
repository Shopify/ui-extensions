import {extension, EmailField, Button, BlockStack} from '@shopify/ui-extensions/admin';

export default extension(
  'admin.product-details.action.render',
  (root, api) => {
    const {data, close} = api;
    const productId = data.selected[0]?.id;
    let supplierEmail = '';

    const stack = root.createComponent(BlockStack);

    const field = root.createComponent(EmailField, {
      label: 'Supplier contact email',
      name: 'supplierEmail',
      required: true,
      onChange: (value) => {
        supplierEmail = value;
        if (value && !value.includes('@')) {
          field.updateProps({error: 'Enter a valid email address'});
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
          if (supplierEmail.includes('@')) {
            await fetch('/api/suppliers/contact', {
              method: 'POST',
              headers: {'Content-Type': 'application/json'},
              body: JSON.stringify({productId, email: supplierEmail}),
            });
            close();
          }
        },
      },
      'Save supplier contact',
    );

    stack.appendChild(field);
    stack.appendChild(saveButton);
    root.appendChild(stack);
  },
);
