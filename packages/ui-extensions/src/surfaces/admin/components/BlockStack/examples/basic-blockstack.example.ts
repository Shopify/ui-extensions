import {extension, BlockStack, Text, Button} from '@shopify/ui-extensions/admin';

export default extension(
  'admin.product-details.block.render',
  (root) => {

    const stack = root.createComponent(BlockStack, {gap: true});

    const title = root.createComponent(Text, {fontWeight: 'bold'}, 'Warehouse sync');
    const status = root.createComponent(Text, {}, 'Last synced 10 minutes ago');
    const detail = root.createComponent(Text, {}, '12 variants, 3 locations updated');
    const action = root.createComponent(
      Button,
      {variant: 'secondary', onPress: () => console.log('Viewing sync log')},
      'View sync log',
    );

    stack.appendChild(title);
    stack.appendChild(status);
    stack.appendChild(detail);
    stack.appendChild(action);
    root.appendChild(stack);
  },
);
