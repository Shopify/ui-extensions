import {extension, MoneyField, BlockStack, Text} from '@shopify/ui-extensions/admin';

export default extension(
  'admin.product-details.action.render',
  (root) => {

    const stack = root.createComponent(BlockStack);

    const heading = root.createComponent(
      Text,
      {fontWeight: 'bold'},
      'Product pricing',
    );

    const retailField = root.createComponent(MoneyField, {
      label: 'Retail price',
      name: 'retailPrice',
    });

    const compareField = root.createComponent(MoneyField, {
      label: 'Compare-at price',
      name: 'compareAtPrice',
    });

    const costField = root.createComponent(MoneyField, {
      label: 'Cost per item',
      name: 'costPerItem',
    });

    stack.appendChild(heading);
    stack.appendChild(retailField);
    stack.appendChild(compareField);
    stack.appendChild(costField);
    root.appendChild(stack);
  },
);
