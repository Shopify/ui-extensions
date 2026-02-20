import {extension, FunctionSettings, TextField, NumberField, Section} from '@shopify/ui-extensions/admin';

export default extension(
  'admin.settings.validation.render',
  async (root, api) => {
    const initialSettings = api.data.validation
      ? await fetchSettings(api.data.validation.id)
      : {};

    const minField = root.createComponent(NumberField, {
      value: initialSettings.minQuantity || 1,
      label: 'Minimum order quantity',
      name: 'minQuantity',
      min: 1,
      onChange(value) {
        minField.updateProps({value});
        api.applyMetafieldsChange({
          type: 'updateMetafield',
          namespace: '$app:validation',
          key: 'min_quantity',
          value: String(value),
          valueType: 'number_integer',
        });
      },
    });

    const maxField = root.createComponent(NumberField, {
      value: initialSettings.maxQuantity || 100,
      label: 'Maximum order quantity',
      name: 'maxQuantity',
      min: 1,
      onChange(value) {
        maxField.updateProps({value});
        api.applyMetafieldsChange({
          type: 'updateMetafield',
          namespace: '$app:validation',
          key: 'max_quantity',
          value: String(value),
          valueType: 'number_integer',
        });
      },
    });

    const messageField = root.createComponent(TextField, {
      value: initialSettings.errorMessage || '',
      label: 'Error message shown to customers',
      name: 'errorMessage',
      onChange(value) {
        messageField.updateProps({value});
        api.applyMetafieldsChange({
          type: 'updateMetafield',
          namespace: '$app:validation',
          key: 'error_message',
          value,
          valueType: 'single_line_text_field',
        });
      },
    });

    const section = root.createComponent(Section, {
      heading: 'Quantity limits',
    });

    const settings = root.createComponent(FunctionSettings, {
      onError(errors) {
        const firstError = errors[0]?.message;
        minField.updateProps({error: firstError});
      },
    });

    section.appendChild(minField);
    section.appendChild(maxField);
    section.appendChild(messageField);
    settings.appendChild(section);
    root.appendChild(settings);
  },
);
