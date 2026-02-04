import React, {useState} from 'react';
import {
  reactExtension,
  useApi,
  Text,
  Button,
  Banner,
  BlockStack,
} from '@shopify/ui-extensions-react/admin';

const RemoveDeprecatedSettings = () => {
  const {data, applyMetafieldsChange} = useApi<'admin.settings.order-routing-rule.render'>();
  const [removed, setRemoved] = useState(false);

  const handleRemove = () => {
    const deprecatedKeys = ['old_setting', 'legacy_config'];

    const changes = deprecatedKeys.map((key) => ({
      type: 'removeMetafield',
      namespace: 'routing',
      key,
    }));

    applyMetafieldsChange(changes);
    setRemoved(true);
  };

  return (
    <BlockStack>
      <Text>Rule priority: {data.rule.priority}</Text>
      <Text>Current settings: {data.rule.metafields.length}</Text>
      <Button title="Remove Deprecated Settings" onPress={handleRemove} />
      {removed && <Banner status="success">Deprecated settings removed</Banner>}
    </BlockStack>
  );
};

export default reactExtension(
  'admin.settings.order-routing-rule.render',
  () => <RemoveDeprecatedSettings />,
);
