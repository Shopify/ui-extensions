import {extension, Text, ProgressIndicator} from '@shopify/ui-extensions/admin';

export default extension(
  'admin.settings.validation.render',
  (root, api) => {
    const {data, applyMetafieldChange} = api;

    const spinner = root.createComponent(ProgressIndicator);
    root.appendChild(spinner);

    const initializeSettings = async () => {
      root.removeChild(spinner);

      if (data.validation) {
        // Edit mode - load existing metafields
        const config = data.validation.metafields.reduce((acc, field) => {
          acc[field.key] = field.value;
          return acc;
        }, {});

        const editText = root.createComponent(Text, {}, 'Editing existing validation');
        root.appendChild(editText);

        Object.entries(config).forEach(([key, value]) => {
          const fieldText = root.createComponent(Text, {}, `${key}: ${value}`);
          root.appendChild(fieldText);
        });
      } else {
        // Create mode - set defaults
        await applyMetafieldChange({
          type: 'updateMetafield',
          namespace: 'validation',
          key: 'default_rule',
          value: 'require_minimum_cart_total',
          valueType: 'single_line_text_field',
        });

        const createdText = root.createComponent(
          Text,
          {},
          'Created new validation configuration',
        );
        root.appendChild(createdText);
      }
    };

    initializeSettings();
  },
);
