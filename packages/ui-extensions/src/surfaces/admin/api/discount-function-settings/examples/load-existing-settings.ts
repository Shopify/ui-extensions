import {extension, Text} from '@shopify/ui-extensions/admin';

export default extension(
  'admin.discount-details.function-settings.render',
  (root, api) => {
    const {data, applyMetafieldChange} = api;

    const initializeSettings = async () => {
      const existingSettings = data.metafields.reduce((acc, field) => {
        acc[field.key] = field.value;
        return acc;
      }, {});

      const headerText = root.createComponent(Text, {}, 'Current settings:');
      root.appendChild(headerText);

      Object.entries(existingSettings).forEach(([key, value]) => {
        const settingText = root.createComponent(Text, {}, `${key}: ${String(value)}`);
        root.appendChild(settingText);
      });

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
  },
);
