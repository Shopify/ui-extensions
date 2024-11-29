import {extension} from '@shopify/ui-extensions/admin';

export default extension(
  'admin.settings.validation.render',
  async (root, api) => {
    // Use Direct API access to fetch initial
    // metafields from the server if we are
    // rendering against a pre-existing `Validation`
    const initialSettings = api.data.validation
      ? await fetchSettings(api.data.validation.id)
      : {};

    const textField = document.createElement('shopify-text-field');
    textField.value = initialSettings.name;
    textField.label = 'Name';
    textField.name = 'name';
    textField.onchange = (value) => {
      textField.updateProps({value, error: undefined});
      api.applyMetafieldsChange({
        type: 'updateMetafield',
        namespace: '$app:my_namespace',
        key: 'name',
        value,
        valueType: 'single_line_text_field',
      });
    };

    const section = document.createElement('shopify-section');
    section.heading = 'Settings';
    section.append(textField);

    const settings = document.createElement('shopify-function-settings');
    settings.onerror = (errors) => {
      textField.error = errors[0]?.message;
    };
    settings.append(section);
    root.append(settings);
  },
);
