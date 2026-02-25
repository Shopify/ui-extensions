import {extension, NumberField, BlockStack, Text} from '@shopify/ui-extensions/admin';

export default extension(
  'admin.product-details.action.render',
  (root) => {

    const stack = root.createComponent(BlockStack);

    const heading = root.createComponent(
      Text,
      {fontWeight: 'bold'},
      'Cost pricing',
    );

    const costField = root.createComponent(NumberField, {
      label: 'Cost per item',
      name: 'costPerItem',
      inputMode: 'decimal',
      min: 0,
      step: 0.01,
      suffix: 'USD',
    });

    const marginField = root.createComponent(NumberField, {
      label: 'Profit margin',
      name: 'margin',
      inputMode: 'decimal',
      min: 0,
      max: 100,
      step: 0.5,
      suffix: '%',
    });

    stack.appendChild(heading);
    stack.appendChild(costField);
    stack.appendChild(marginField);
    root.appendChild(stack);
  },
);
