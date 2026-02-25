import {extension, Form, TextField, Button, InlineStack, BlockStack} from '@shopify/ui-extensions/admin';

export default extension(
  'admin.product-details.action.render',
  (root, api) => {
    const {data, close} = api;
    const productId = data.selected[0]?.id;

    const form = root.createComponent(Form, {
      onSubmit: async () => {
        await fetch('/api/products/shipping', {
          method: 'POST',
          headers: {'Content-Type': 'application/json'},
          body: JSON.stringify({productId}),
        });
        close();
      },
      onReset: () => {
        close();
      },
    });

    const stack = root.createComponent(BlockStack, {gap: true});

    const weightField = root.createComponent(TextField, {
      label: 'Package weight (kg)',
      name: 'weight',
    });

    const dimensionsField = root.createComponent(TextField, {
      label: 'Dimensions (L×W×H cm)',
      name: 'dimensions',
    });

    const actions = root.createComponent(InlineStack, {gap: true, inlineAlignment: 'end'});
    const resetButton = root.createComponent(
      Button,
      {variant: 'tertiary', accessibilityRole: 'reset'},
      'Cancel',
    );
    const submitButton = root.createComponent(
      Button,
      {variant: 'primary', accessibilityRole: 'submit'},
      'Save shipping info',
    );
    actions.appendChild(resetButton);
    actions.appendChild(submitButton);

    stack.appendChild(weightField);
    stack.appendChild(dimensionsField);
    stack.appendChild(actions);
    form.appendChild(stack);
    root.appendChild(form);
  },
);
