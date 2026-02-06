import React, {useState} from 'react';
import {
  reactExtension,
  useApi,
  TextField,
  Button,
  BlockStack,
} from '@shopify/ui-extensions-react/admin';

const ConfigureLocationPriority = () => {
  const {applyMetafieldsChange} = useApi<'admin.settings.order-routing-rule.render'>();
  const [preferred, setPreferred] = useState('gid://shopify/Location/123456789');
  const [fallback, setFallback] = useState('gid://shopify/Location/987654321');

  const handleSave = () => {
    applyMetafieldsChange([
      {
        type: 'updateMetafield',
        namespace: 'routing',
        key: 'preferred_location',
        value: preferred,
        valueType: 'single_line_text_field',
      },
      {
        type: 'updateMetafield',
        namespace: 'routing',
        key: 'fallback_location',
        value: fallback,
        valueType: 'single_line_text_field',
      },
    ]);
  };

  return (
    <BlockStack>
      <TextField
        label="Preferred location ID"
        value={preferred}
        onChange={setPreferred}
      />
      <TextField
        label="Fallback location ID"
        value={fallback}
        onChange={setFallback}
      />
      <Button title="Save Location Priority" onPress={handleSave} />
    </BlockStack>
  );
};

export default reactExtension(
  'admin.settings.order-routing-rule.render',
  () => <ConfigureLocationPriority />,
);
