import {extension, Select, Button, BlockStack} from '@shopify/ui-extensions/admin';

export default extension(
  'admin.product-details.action.render',
  (root, api) => {
    const {data, close} = api;
    const productId = data.selected[0]?.id;
    let shippingClass = '';

    const stack = root.createComponent(BlockStack);

    const field = root.createComponent(Select, {
      label: 'Shipping class',
      name: 'shippingClass',
      required: true,
      options: [
        {label: 'Standard (5-7 days)', value: 'standard'},
        {label: 'Express (2-3 days)', value: 'express'},
        {label: 'Overnight', value: 'overnight'},
        {label: 'Freight', value: 'freight'},
      ],
      onChange: (value) => {
        shippingClass = value;
        field.updateProps({error: undefined});
      },
    });

    const saveButton = root.createComponent(
      Button,
      {
        variant: 'primary',
        onPress: async () => {
          if (!shippingClass) {
            field.updateProps({error: 'Please select a shipping class'});
            return;
          }
          await fetch('/api/products/shipping-class', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({productId, shippingClass}),
          });
          close();
        },
      },
      'Save shipping class',
    );

    stack.appendChild(field);
    stack.appendChild(saveButton);
    root.appendChild(stack);
  },
);
