import {extension, TextField, Button, Text, BlockStack} from '@shopify/ui-extensions/admin';

export default extension(
  'admin.settings.validation.render',
  (root, api) => {
    const {data, applyMetafieldChange} = api;

    let countries = 'US, CA, GB';
    let errorMsg = 'Shipping not available to your location';

    const stack = root.createComponent(BlockStack);

    const countriesField = root.createComponent(TextField, {
      label: 'Blocked countries (comma-separated)',
      value: countries,
      onChange: (value) => {
        countries = value;
      },
    });

    const errorField = root.createComponent(TextField, {
      label: 'Error message',
      value: errorMsg,
      onChange: (value) => {
        errorMsg = value;
      },
    });

    const saveButton = root.createComponent(Button, {
      title: 'Save Restrictions',
      onPress: async () => {
        const blockedCountries = countries.split(',').map((c) => c.trim());

        await applyMetafieldChange({
          type: 'updateMetafield',
          namespace: 'validation',
          key: 'blocked_shipping_countries',
          value: JSON.stringify(blockedCountries),
          valueType: 'json',
        });

        await applyMetafieldChange({
          type: 'updateMetafield',
          namespace: 'validation',
          key: 'error_message',
          value: errorMsg,
          valueType: 'single_line_text_field',
        });
      },
    });

    const validationIdText = root.createComponent(
      Text,
      {},
      `Validation ID: ${data.validation?.id}`,
    );

    const functionIdText = root.createComponent(
      Text,
      {},
      `Function ID: ${data.shopifyFunction.id}`,
    );

    stack.appendChild(countriesField);
    stack.appendChild(errorField);
    stack.appendChild(saveButton);
    stack.appendChild(validationIdText);
    stack.appendChild(functionIdText);

    root.appendChild(stack);
  },
);
