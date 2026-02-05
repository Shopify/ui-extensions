import React, {useState, useEffect} from 'react';
import {
  reactExtension,
  useApi,
  Text,
  ProgressIndicator,
} from '@shopify/ui-extensions-react/admin';

const LoadValidationConfig = () => {
  const {data, applyMetafieldChange} = useApi<'admin.settings.validation.render'>();
  const [mode, setMode] = useState<'loading' | 'edit' | 'created'>('loading');
  const [settings, setSettings] = useState<Record<string, string>>({});

  useEffect(() => {
    const initializeSettings = async () => {
      if (data.validation) {
        // Edit mode - load existing metafields
        const config = data.validation.metafields.reduce((acc, field) => {
          acc[field.key] = field.value;
          return acc;
        }, {});

        setSettings(config);
        setMode('edit');
      } else {
        // Create mode - set defaults
        await applyMetafieldChange({
          type: 'updateMetafield',
          namespace: 'validation',
          key: 'default_rule',
          value: 'require_minimum_cart_total',
          valueType: 'single_line_text_field',
        });

        setMode('created');
      }
    };

    initializeSettings();
  }, [data, applyMetafieldChange]);

  return (
    <>
      {mode === 'loading' && <ProgressIndicator />}
      {mode === 'edit' && (
        <>
          <Text>Editing existing validation</Text>
          {Object.entries(settings).map(([key, value]) => (
            <Text key={key}>
              {key}: {value}
            </Text>
          ))}
        </>
      )}
      {mode === 'created' && <Text>Created new validation configuration</Text>}
    </>
  );
};

export default reactExtension(
  'admin.settings.validation.render',
  () => <LoadValidationConfig />,
);
