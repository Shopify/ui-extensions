import {extension, DateField, BlockStack, Text} from '@shopify/ui-extensions/admin';

export default extension(
  'admin.product-details.block.render',
  (root) => {

    const stack = root.createComponent(BlockStack);

    const heading = root.createComponent(
      Text,
      {fontWeight: 'bold'},
      'Important dates',
    );

    const createdField = root.createComponent(DateField, {
      label: 'Date created',
      name: 'dateCreated',
      value: '2024-01-15',
      readOnly: true,
    });

    const lastSyncField = root.createComponent(DateField, {
      label: 'Last warehouse sync',
      name: 'lastSync',
      value: '2024-03-20',
      readOnly: true,
    });

    stack.appendChild(heading);
    stack.appendChild(createdField);
    stack.appendChild(lastSyncField);
    root.appendChild(stack);
  },
);
