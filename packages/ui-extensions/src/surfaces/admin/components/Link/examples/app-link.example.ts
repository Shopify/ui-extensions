import {extension, Link, Text, BlockStack} from '@shopify/ui-extensions/admin';

export default extension(
  'admin.product-details.block.render',
  (root) => {

    const stack = root.createComponent(BlockStack, {gap: true});

    const heading = root.createComponent(Text, {fontWeight: 'bold'}, 'Manage this product');

    const settingsLink = root.createComponent(
      Link,
      {href: 'extension://settings'},
      'Extension settings',
    );

    const dashboardLink = root.createComponent(
      Link,
      {href: 'extension://dashboard'},
      'Sync dashboard',
    );

    stack.appendChild(heading);
    stack.appendChild(settingsLink);
    stack.appendChild(dashboardLink);
    root.appendChild(stack);
  },
);
