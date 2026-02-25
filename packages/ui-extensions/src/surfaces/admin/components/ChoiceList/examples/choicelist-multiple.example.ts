import {extension, ChoiceList, Button, BlockStack, Text} from '@shopify/ui-extensions/admin';

export default extension(
  'admin.product-details.action.render',
  (root, api) => {
    const {data, close} = api;
    const productId = data.selected[0]?.id;
    let tags = [];

    const stack = root.createComponent(BlockStack);

    const heading = root.createComponent(
      Text,
      {fontWeight: 'bold'},
      'Apply product tags',
    );

    const choiceList = root.createComponent(ChoiceList, {
      name: 'productTags',
      multiple: true,
      value: tags,
      choices: [
        {label: 'Seasonal', id: 'seasonal'},
        {label: 'Clearance', id: 'clearance'},
        {label: 'New arrival', id: 'new-arrival'},
        {label: 'Best seller', id: 'best-seller'},
        {label: 'Limited edition', id: 'limited-edition'},
      ],
      onChange: (value) => {
        tags = value;
      },
    });

    const saveButton = root.createComponent(
      Button,
      {
        variant: 'primary',
        onPress: async () => {
          await fetch('/api/products/tags', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({productId, tags}),
          });
          close();
        },
      },
      'Apply tags',
    );

    stack.appendChild(heading);
    stack.appendChild(choiceList);
    stack.appendChild(saveButton);
    root.appendChild(stack);
  },
);
