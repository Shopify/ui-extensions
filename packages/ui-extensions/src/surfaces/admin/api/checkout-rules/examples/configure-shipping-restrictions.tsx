import React, {useState} from 'react';
import {
  reactExtension,
  useApi,
  TextField,
  Button,
  Text,
  BlockStack,
} from '@shopify/ui-extensions-react/admin';

const ConfigureShippingRestrictions = () => {
  const {data, applyMetafieldChange} = useApi<'admin.settings.validation.render'>();
  const [countries, setCountries] = useState('US, CA, GB');
  const [errorMsg, setErrorMsg] = useState('Shipping not available to your location');

  const handleSave = async () => {
    const blockedCountries = countries.split(',').map((c) => c.trim());

    await applyMetafieldChange({
      type: 'updateMetafield',
      namespace: 'validation',
      key: 'blocked_shipping_countries',
      value: JSON.stringify(blockedCountries),
      valueType: 'json',
    });

    await applyMetafieldChange({
      type: 'updateMetafield',
      namespace: 'validation',
      key: 'error_message',
      value: errorMsg,
      valueType: 'single_line_text_field',
    });
  };

  return (
    <BlockStack>
      <TextField
        label="Blocked countries (comma-separated)"
        value={countries}
        onChange={setCountries}
      />
      <TextField
        label="Error message"
        value={errorMsg}
        onChange={setErrorMsg}
      />
      <Button title="Save Restrictions" onPress={handleSave} />
      <Text>Validation ID: {data.validation?.id}</Text>
      <Text>Function ID: {data.shopifyFunction.id}</Text>
    </BlockStack>
  );
};

export default reactExtension(
  'admin.settings.validation.render',
  () => <ConfigureShippingRestrictions />,
);
