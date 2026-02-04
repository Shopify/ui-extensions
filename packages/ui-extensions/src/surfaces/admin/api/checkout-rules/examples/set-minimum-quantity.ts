import {extension, NumberField, Button, Banner} from '@shopify/ui-extensions/admin';

export default extension(
  'admin.settings.validation.render',
  (root, api) => {
    const {applyMetafieldChange} = api;

    let quantity = '3';
    let resultBanner;

    const numberField = root.createComponent(NumberField, {
      label: 'Minimum quantity',
      value: quantity,
      onChange: (value) => {
        quantity = value;
      },
    });

    const saveButton = root.createComponent(Button, {
      title: 'Save Validation',
      onPress: async () => {
        const result = await applyMetafieldChange({
          type: 'updateMetafield',
          namespace: 'validation',
          key: 'minimum_quantity',
          value: quantity,
          valueType: 'number_integer',
        });

        if (resultBanner) {
          root.removeChild(resultBanner);
        }

        if (result.type === 'success') {
          resultBanner = root.createComponent(
            Banner,
            {status: 'success'},
            'Minimum quantity configured',
          );
        } else {
          resultBanner = root.createComponent(
            Banner,
            {status: 'critical'},
            result.message,
          );
        }

        root.appendChild(resultBanner);
      },
    });

    root.appendChild(numberField);
    root.appendChild(saveButton);
  },
);
