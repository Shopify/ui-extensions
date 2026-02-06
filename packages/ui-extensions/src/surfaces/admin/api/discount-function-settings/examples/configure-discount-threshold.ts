import {extension, TextField, Button, Banner} from '@shopify/ui-extensions/admin';

export default extension(
  'admin.discount-details.function-settings.render',
  (root, api) => {
    const {applyMetafieldChange} = api;

    let threshold = '50.00';
    let savedBanner;

    const textField = root.createComponent(TextField, {
      label: 'Minimum purchase amount',
      value: threshold,
      onChange: (value) => {
        threshold = value;
      },
    });

    const saveButton = root.createComponent(Button, {
      title: 'Save Threshold',
      onPress: async () => {
        const result = await applyMetafieldChange({
          type: 'updateMetafield',
          namespace: 'discount-config',
          key: 'minimum_purchase',
          value: threshold,
          valueType: 'number_decimal',
        });

        if (result.type === 'success') {
          if (savedBanner) {
            root.removeChild(savedBanner);
          }
          savedBanner = root.createComponent(
            Banner,
            {status: 'success'},
            'Threshold configured!',
          );
          root.appendChild(savedBanner);
        } else {
          console.error('Configuration failed:', result.message);
        }
      },
    });

    root.appendChild(textField);
    root.appendChild(saveButton);
  },
);
