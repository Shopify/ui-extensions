import {extension, TextArea, Button, BlockStack, Text} from '@shopify/ui-extensions/admin';

export default extension(
  'admin.product-details.action.render',
  (root, api) => {
    const {data, close} = api;
    const productId = data.selected[0]?.id;
    let description = '';

    const stack = root.createComponent(BlockStack);

    const charCount = root.createComponent(Text, {}, '0 / 500 characters');

    const field = root.createComponent(TextArea, {
      label: 'Product description for external catalog',
      name: 'catalogDescription',
      rows: 5,
      maxLength: 500,
      onChange: (value) => {
        description = value;
        charCount.replaceChildren(`${value.length} / 500 characters`);
        if (value.length > 500) {
          field.updateProps({error: 'Description cannot exceed 500 characters'});
        } else {
          field.updateProps({error: undefined});
        }
      },
    });

    const saveButton = root.createComponent(
      Button,
      {
        variant: 'primary',
        onPress: async () => {
          if (description.length <= 500) {
            await fetch('/api/products/catalog-description', {
              method: 'POST',
              headers: {'Content-Type': 'application/json'},
              body: JSON.stringify({productId, description}),
            });
            close();
          }
        },
      },
      'Save description',
    );

    stack.appendChild(field);
    stack.appendChild(charCount);
    stack.appendChild(saveButton);
    root.appendChild(stack);
  },
);
