import {extension, TextField, Button, BlockStack} from '@shopify/ui-extensions/admin';

export default extension(
  'admin.settings.order-routing-rule.render',
  (root, api) => {
    const {applyMetafieldsChange} = api;

    let preferred = 'gid://shopify/Location/123456789';
    let fallback = 'gid://shopify/Location/987654321';

    const stack = root.createComponent(BlockStack);

    const preferredField = root.createComponent(TextField, {
      label: 'Preferred location ID',
      value: preferred,
      onChange: (value) => {
        preferred = value;
      },
    });

    const fallbackField = root.createComponent(TextField, {
      label: 'Fallback location ID',
      value: fallback,
      onChange: (value) => {
        fallback = value;
      },
    });

    const saveButton = root.createComponent(Button, {
      title: 'Save Location Priority',
      onPress: () => {
        applyMetafieldsChange([
          {
            type: 'updateMetafield',
            namespace: 'routing',
            key: 'preferred_location',
            value: preferred,
            valueType: 'single_line_text_field',
          },
          {
            type: 'updateMetafield',
            namespace: 'routing',
            key: 'fallback_location',
            value: fallback,
            valueType: 'single_line_text_field',
          },
        ]);
      },
    });

    stack.appendChild(preferredField);
    stack.appendChild(fallbackField);
    stack.appendChild(saveButton);

    root.appendChild(stack);
  },
);
