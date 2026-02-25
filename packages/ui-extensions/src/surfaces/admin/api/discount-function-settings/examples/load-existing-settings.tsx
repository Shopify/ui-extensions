import React, {useState, useEffect} from 'react';
import {
  reactExtension,
  useApi,
  Text,
} from '@shopify/ui-extensions-react/admin';

const LoadExistingSettings = () => {
  const {data, applyMetafieldChange} = useApi<'admin.discount-details.function-settings.render'>();
  const [settings, setSettings] = useState<Record<string, string>>({});

  useEffect(() => {
    const initializeSettings = async () => {
      const existingSettings = data.metafields.reduce((acc, field) => {
        acc[field.key] = field.value;
        return acc;
      }, {});

      setSettings(existingSettings);

      if (!existingSettings.eligible_tags) {
        await applyMetafieldChange({
          type: 'updateMetafield',
          namespace: 'discount-config',
          key: 'eligible_tags',
          value: JSON.stringify(['vip', 'wholesale']),
          valueType: 'json',
        });
      }
    };

    initializeSettings();
  }, [data, applyMetafieldChange]);

  return (
    <>
      <Text>Current settings:</Text>
      {Object.entries(settings).map(([key, value]) => (
        <Text key={key}>
          {key}: {String(value)}
        </Text>
      ))}
    </>
  );
};

export default reactExtension(
  'admin.discount-details.function-settings.render',
  () => <LoadExistingSettings />,
);
