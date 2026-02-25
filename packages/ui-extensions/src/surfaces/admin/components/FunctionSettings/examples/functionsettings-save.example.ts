import {extension, FunctionSettings, TextField, ChoiceList, Section, BlockStack} from '@shopify/ui-extensions/admin';

export default extension(
  'admin.settings.validation.render',
  async (root, api) => {
    const initialSettings = api.data.validation
      ? await fetchSettings(api.data.validation.id)
      : {};

    const titleField = root.createComponent(TextField, {
      value: initialSettings.title || '',
      label: 'Discount title',
      name: 'title',
      required: true,
      onChange(value) {
        titleField.updateProps({value, error: undefined});
        api.applyMetafieldsChange({
          type: 'updateMetafield',
          namespace: '$app:discount',
          key: 'title',
          value,
          valueType: 'single_line_text_field',
        });
      },
    });

    const typeChoice = root.createComponent(ChoiceList, {
      name: 'discountType',
      value: initialSettings.type || 'percentage',
      choices: [
        {label: 'Percentage discount', id: 'percentage'},
        {label: 'Fixed amount discount', id: 'fixed'},
      ],
      onChange(value) {
        api.applyMetafieldsChange({
          type: 'updateMetafield',
          namespace: '$app:discount',
          key: 'type',
          value,
          valueType: 'single_line_text_field',
        });
      },
    });

    const section = root.createComponent(Section, {
      heading: 'Discount configuration',
    });

    const settings = root.createComponent(FunctionSettings, {
      onSave: async () => {
        await fetch('/api/functions/validate-config', {method: 'POST'});
      },
      onError(errors) {
        titleField.updateProps({error: errors[0]?.message});
      },
    });

    const content = root.createComponent(BlockStack, {gap: true});
    content.appendChild(titleField);
    content.appendChild(typeChoice);
    section.appendChild(content);
    settings.appendChild(section);
    root.appendChild(settings);
  },
);
