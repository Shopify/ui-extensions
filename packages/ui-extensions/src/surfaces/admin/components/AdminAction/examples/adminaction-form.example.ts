import {extension, AdminAction, Button, TextField, Select, BlockStack} from '@shopify/ui-extensions/admin';

export default extension(
  'admin.product-details.action.render',
  (root, api) => {
    const {data, close} = api;
    const productId = data.selected[0]?.id;

    const content = root.createComponent(BlockStack, {gap: true});

    const skuField = root.createComponent(TextField, {
      label: 'Warehouse SKU',
      name: 'warehouseSku',
      required: true,
    });

    const warehouseSelect = root.createComponent(Select, {
      label: 'Target warehouse',
      name: 'warehouse',
      options: [
        {label: 'East Coast — New York', value: 'nyc'},
        {label: 'West Coast — Los Angeles', value: 'lax'},
        {label: 'Central — Chicago', value: 'chi'},
      ],
    });

    content.appendChild(skuField);
    content.appendChild(warehouseSelect);

    const primaryAction = root.createComponent(
      Button,
      {
        onPress: async () => {
          await fetch('/api/products/assign-warehouse', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({productId}),
          });
          close();
        },
      },
      'Assign to warehouse',
    );

    const secondaryAction = root.createComponent(
      Button,
      {onPress: () => close()},
      'Cancel',
    );

    const action = root.createComponent(AdminAction, {
      title: 'Assign warehouse location',
      primaryAction,
      secondaryAction,
    });

    action.appendChild(content);
    root.appendChild(action);
  },
);
