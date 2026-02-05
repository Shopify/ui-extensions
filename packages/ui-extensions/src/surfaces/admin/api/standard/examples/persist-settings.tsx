import React, {useState, useEffect} from 'react';
import {
  reactExtension,
  useApi,
  Button,
  Text,
  BlockStack,
} from '@shopify/ui-extensions-react/admin';

const PersistSettings = () => {
  const {storage} = useApi<'admin.product-details.block.render'>();
  const [preferences, setPreferences] = useState<any>(null);

  useEffect(() => {
    const loadPreferences = async () => {
      const prefs = await storage.get('userPreferences');
      setPreferences(prefs);
    };

    loadPreferences();
  }, [storage]);

  const handleSave = async () => {
    await storage.set('userPreferences', {
      theme: 'dark',
      notifications: true,
      defaultView: 'grid',
    });

    const updated = await storage.get('userPreferences');
    setPreferences(updated);
  };

  return (
    <BlockStack>
      <Button title="Save Preferences" onPress={handleSave} />
      {preferences && (
        <BlockStack>
          <Text>Theme: {preferences.theme}</Text>
          <Text>Notifications: {String(preferences.notifications)}</Text>
          <Text>View: {preferences.defaultView}</Text>
        </BlockStack>
      )}
    </BlockStack>
  );
};

export default reactExtension(
  'admin.product-details.block.render',
  () => <PersistSettings />,
);
