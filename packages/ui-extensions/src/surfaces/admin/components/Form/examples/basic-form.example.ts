import {extension, Form, TextField, Button, BlockStack} from '@shopify/ui-extensions/admin';

export default extension(
  'admin.product-details.action.render',
  (root, api) => {
    const {data, close} = api;
    const productId = data.selected[0]?.id;

    const form = root.createComponent(Form, {
      onSubmit: async () => {
        await fetch('/api/products/metadata', {
          method: 'POST',
          headers: {'Content-Type': 'application/json'},
          body: JSON.stringify({productId}),
        });
        close();
      },
      onReset: () => {
        close();
      },
    });

    const stack = root.createComponent(BlockStack, {gap: true});

    const skuField = root.createComponent(TextField, {
      label: 'Warehouse SKU',
      name: 'warehouseSku',
      required: true,
    });

    const locationField = root.createComponent(TextField, {
      label: 'Storage location',
      name: 'location',
    });

    const submitButton = root.createComponent(
      Button,
      {variant: 'primary'},
      'Save product metadata',
    );

    stack.appendChild(skuField);
    stack.appendChild(locationField);
    stack.appendChild(submitButton);
    form.appendChild(stack);
    root.appendChild(form);
  },
);
