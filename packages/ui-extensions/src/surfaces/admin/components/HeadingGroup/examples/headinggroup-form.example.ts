import {extension, HeadingGroup, Heading, TextField, BlockStack} from '@shopify/ui-extensions/admin';

export default extension(
  'admin.product-details.action.render',
  (root) => {

    const stack = root.createComponent(BlockStack);

    const title = root.createComponent(Heading, {}, 'Custom shipping rules');

    const formGroup = root.createComponent(HeadingGroup);

    const formTitle = root.createComponent(Heading, {}, 'Domestic shipping');

    const weightField = root.createComponent(TextField, {
      label: 'Max package weight (kg)',
      name: 'maxWeight',
    });

    const handlingField = root.createComponent(TextField, {
      label: 'Handling instructions',
      name: 'handling',
    });

    formGroup.appendChild(formTitle);
    formGroup.appendChild(weightField);
    formGroup.appendChild(handlingField);

    stack.appendChild(title);
    stack.appendChild(formGroup);
    root.appendChild(stack);
  },
);
