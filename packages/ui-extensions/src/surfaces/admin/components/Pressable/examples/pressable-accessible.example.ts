import {extension, Pressable, Text, Badge, InlineStack, BlockStack} from '@shopify/ui-extensions/admin';

export default extension(
  'admin.product-details.block.render',
  (root) => {

    const stack = root.createComponent(BlockStack, {gap: true});

    const heading = root.createComponent(Text, {fontWeight: 'bold'}, 'Warehouse locations');

    const location1 = root.createComponent(Pressable, {
      padding: 'base',
      accessibilityLabel: 'View New York warehouse details — 142 units in stock',
      onPress: () => console.log('Card pressed'),
    });
    const row1 = root.createComponent(InlineStack, {gap: true, blockAlignment: 'center'});
    const name1 = root.createComponent(Text, {}, 'New York');
    const badge1 = root.createComponent(Badge, {tone: 'success'}, '142 units');
    row1.appendChild(name1);
    row1.appendChild(badge1);
    location1.appendChild(row1);

    const location2 = root.createComponent(Pressable, {
      padding: 'base',
      accessibilityLabel: 'View Los Angeles warehouse details — 3 units in stock, low stock',
      onPress: () => console.log('Card pressed'),
    });
    const row2 = root.createComponent(InlineStack, {gap: true, blockAlignment: 'center'});
    const name2 = root.createComponent(Text, {}, 'Los Angeles');
    const badge2 = root.createComponent(Badge, {tone: 'warning'}, '3 units');
    row2.appendChild(name2);
    row2.appendChild(badge2);
    location2.appendChild(row2);

    stack.appendChild(heading);
    stack.appendChild(location1);
    stack.appendChild(location2);
    root.appendChild(stack);
  },
);
