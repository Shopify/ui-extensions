import {extension, TextField, NumberField, Button, BlockStack} from '@shopify/ui-extensions/admin';

export default extension(
  'admin.discount-details.function-settings.render',
  (root, api) => {
    const {applyMetafieldChange} = api;

    let tags = 'vip, wholesale, premium';
    let maxUses = '5';

    const stack = root.createComponent(BlockStack);

    const tagsField = root.createComponent(TextField, {
      label: 'Eligible customer tags (comma-separated)',
      value: tags,
      onChange: (value) => {
        tags = value;
      },
    });

    const maxUsesField = root.createComponent(NumberField, {
      label: 'Max uses per customer',
      value: maxUses,
      onChange: (value) => {
        maxUses = value;
      },
    });

    const saveButton = root.createComponent(Button, {
      title: 'Save Eligibility Rules',
      onPress: async () => {
        await applyMetafieldChange({
          type: 'updateMetafield',
          namespace: 'discount-config',
          key: 'eligible_customer_tags',
          value: JSON.stringify(tags.split(',').map((t) => t.trim())),
          valueType: 'json',
        });

        await applyMetafieldChange({
          type: 'updateMetafield',
          namespace: 'discount-config',
          key: 'max_uses_per_customer',
          value: maxUses,
          valueType: 'number_integer',
        });
      },
    });

    stack.appendChild(tagsField);
    stack.appendChild(maxUsesField);
    stack.appendChild(saveButton);

    root.appendChild(stack);
  },
);
