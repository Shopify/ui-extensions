import React, {useState} from 'react';
import {
  reactExtension,
  useApi,
  NumberField,
  Checkbox,
  Button,
  BlockStack,
} from '@shopify/ui-extensions-react/admin';

const SetRoutingCriteria = () => {
  const {applyMetafieldsChange} = useApi<'admin.settings.order-routing-rule.render'>();
  const [distance, setDistance] = useState('50');
  const [enableInventory, setEnableInventory] = useState(true);

  const handleSave = () => {
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
  };

  return (
    <BlockStack>
      <NumberField
        label="Maximum distance (km)"
        value={distance}
        onChange={setDistance}
      />
      <Checkbox checked={enableInventory} onChange={setEnableInventory}>
        Enable inventory check
      </Checkbox>
      <Button title="Save Routing Criteria" onPress={handleSave} />
    </BlockStack>
  );
};

export default reactExtension(
  'admin.settings.order-routing-rule.render',
  () => <SetRoutingCriteria />,
);
