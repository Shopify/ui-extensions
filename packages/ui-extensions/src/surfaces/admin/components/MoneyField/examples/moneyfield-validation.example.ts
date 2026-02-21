import {extension, MoneyField, Button, BlockStack} from '@shopify/ui-extensions/admin';

export default extension(
  'admin.product-details.action.render',
  (root, api) => {
    const {data, close} = api;
    const productId = data.selected[0]?.id;
    let wholesalePrice = 0;

    const stack = root.createComponent(BlockStack);

    const field = root.createComponent(MoneyField, {
      label: 'Wholesale price',
      name: 'wholesalePrice',
      currencyCode: 'USD',
      min: 0.01,
      required: true,
      onChange: (value) => {
        wholesalePrice = value;
        if (value <= 0) {
          field.updateProps({error: 'Wholesale price must be greater than zero'});
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
          if (wholesalePrice > 0) {
            await fetch('/api/products/wholesale-price', {
              method: 'POST',
              headers: {'Content-Type': 'application/json'},
              body: JSON.stringify({productId, wholesalePrice}),
            });
            close();
          }
        },
      },
      'Save wholesale price',
    );

    stack.appendChild(field);
    stack.appendChild(saveButton);
    root.appendChild(stack);
  },
);
