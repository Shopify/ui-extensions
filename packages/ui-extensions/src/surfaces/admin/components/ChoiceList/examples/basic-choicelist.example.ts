import {extension, ChoiceList, Button, BlockStack} from '@shopify/ui-extensions/admin';

export default extension(
  'admin.product-details.action.render',
  (root, api) => {
    const {data, close} = api;
    const productId = data.selected[0]?.id;
    let shippingMethod = 'standard';

    const stack = root.createComponent(BlockStack);

    const choiceList = root.createComponent(ChoiceList, {
      name: 'shippingMethod',
      value: shippingMethod,
      choices: [
        {label: 'Standard shipping (5-7 business days)', id: 'standard'},
        {label: 'Express shipping (2-3 business days)', id: 'express'},
        {label: 'Overnight delivery', id: 'overnight'},
      ],
      onChange: (value) => {
        shippingMethod = value;
      },
    });

    const saveButton = root.createComponent(
      Button,
      {
        variant: 'primary',
        onPress: async () => {
          await fetch('/api/products/shipping-method', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({productId, shippingMethod}),
          });
          close();
        },
      },
      'Save shipping method',
    );

    stack.appendChild(choiceList);
    stack.appendChild(saveButton);
    root.appendChild(stack);
  },
);
