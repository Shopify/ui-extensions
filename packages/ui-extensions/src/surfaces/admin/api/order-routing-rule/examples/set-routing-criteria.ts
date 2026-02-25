import {extension, NumberField, Checkbox, Button, BlockStack} from '@shopify/ui-extensions/admin';

export default extension(
  'admin.settings.order-routing-rule.render',
  (root, api) => {
    const {applyMetafieldsChange} = api;

    let distance = '50';
    let enableInventory = true;

    const stack = root.createComponent(BlockStack);

    const distanceField = root.createComponent(NumberField, {
      label: 'Maximum distance (km)',
      value: distance,
      onChange: (value) => {
        distance = value;
      },
    });

    const inventoryCheckbox = root.createComponent(Checkbox, {
      checked: enableInventory,
      onChange: (checked) => {
        enableInventory = checked;
      },
    });
    const checkboxLabel = root.createText('Enable inventory check');

    const saveButton = root.createComponent(Button, {
      title: 'Save Routing Criteria',
      onPress: () => {
        applyMetafieldsChange([
          {
            type: 'updateMetafield',
            namespace: 'routing',
            key: 'max_distance_km',
            value: distance,
            valueType: 'number_integer',
          },
          {
            type: 'updateMetafield',
            namespace: 'routing',
            key: 'enable_inventory_check',
            value: String(enableInventory),
            valueType: 'boolean',
          },
          {
            type: 'updateMetafield',
            namespace: 'routing',
            key: 'excluded_zip_codes',
            value: JSON.stringify(['10001', '90210']),
            valueType: 'json',
          },
        ]);
      },
    });

    stack.appendChild(distanceField);
    stack.appendChild(inventoryCheckbox);
    stack.appendChild(saveButton);

    root.appendChild(stack);
  },
);
