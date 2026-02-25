import {extension, FunctionSettings, TextField, Section} from '@shopify/ui-extensions/admin';

export default extension(
  'admin.settings.validation.render',
  async (root, api) => {
    const initialSettings = api.data.validation
      ? await fetchSettings(api.data.validation.id)
      : {};

    const nameField = root.createComponent(TextField, {
      value: initialSettings.name || '',
      label: 'Rule name',
      name: 'name',
      onChange(value) {
        nameField.updateProps({value, error: undefined});
        api.applyMetafieldsChange({
          type: 'updateMetafield',
          namespace: '$app:validation',
          key: 'name',
          value,
          valueType: 'single_line_text_field',
        });
      },
    });

    const section = root.createComponent(Section, {
      heading: 'Validation settings',
    });

    const settings = root.createComponent(FunctionSettings, {
      onError(errors) {
        nameField.updateProps({error: errors[0]?.message});
      },
    });

    section.appendChild(nameField);
    settings.appendChild(section);
    root.appendChild(settings);
  },
);
