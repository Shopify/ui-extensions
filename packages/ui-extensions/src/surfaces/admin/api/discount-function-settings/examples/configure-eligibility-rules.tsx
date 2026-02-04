import React, {useState} from 'react';
import {
  reactExtension,
  useApi,
  TextField,
  NumberField,
  Button,
  BlockStack,
} from '@shopify/ui-extensions-react/admin';

const ConfigureEligibilityRules = () => {
  const {applyMetafieldChange} = useApi<'admin.discount-details.function-settings.render'>();
  const [tags, setTags] = useState('vip, wholesale, premium');
  const [maxUses, setMaxUses] = useState('5');

  const handleSave = async () => {
    await applyMetafieldChange({
      type: 'updateMetafield',
      namespace: 'discount-config',
      key: 'eligible_customer_tags',
      value: JSON.stringify(tags.split(',').map((t) => t.trim())),
      valueType: 'json',
    });

    await applyMetafieldChange({
      type: 'updateMetafield',
      namespace: 'discount-config',
      key: 'max_uses_per_customer',
      value: maxUses,
      valueType: 'number_integer',
    });
  };

  return (
    <BlockStack>
      <TextField
        label="Eligible customer tags (comma-separated)"
        value={tags}
        onChange={setTags}
      />
      <NumberField
        label="Max uses per customer"
        value={maxUses}
        onChange={setMaxUses}
      />
      <Button title="Save Eligibility Rules" onPress={handleSave} />
    </BlockStack>
  );
};

export default reactExtension(
  'admin.discount-details.function-settings.render',
  () => <ConfigureEligibilityRules />,
);
