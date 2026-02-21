import {extension, Select, BlockStack, Text} from '@shopify/ui-extensions/admin';

export default extension(
  'admin.product-details.block.render',
  (root) => {

    const stack = root.createComponent(BlockStack);

    const heading = root.createComponent(
      Text,
      {fontWeight: 'bold'},
      'Product classification',
    );

    const field = root.createComponent(Select, {
      label: 'Product category',
      name: 'category',
      placeholder: 'Select a category…',
      options: [
        {label: 'Electronics', value: 'electronics'},
        {label: 'Apparel', value: 'apparel'},
        {label: 'Home & Garden', value: 'home-garden'},
        {label: 'Health & Beauty', value: 'health-beauty'},
        {label: 'Food & Beverage', value: 'food-beverage'},
      ],
    });

    stack.appendChild(heading);
    stack.appendChild(field);
    root.appendChild(stack);
  },
);
