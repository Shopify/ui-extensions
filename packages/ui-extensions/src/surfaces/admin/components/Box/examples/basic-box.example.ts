import {extension, Box, Text, BlockStack} from '@shopify/ui-extensions/admin';

export default extension(
  'admin.product-details.block.render',
  (root) => {

    const stack = root.createComponent(BlockStack, {gap: true});

    const heading = root.createComponent(Text, {fontWeight: 'bold'}, 'Warehouse slot');

    const card = root.createComponent(Box, {
      padding: 'base',
    });

    const slot = root.createComponent(Text, {fontWeight: 'bold'}, 'Slot A-42');
    const location = root.createComponent(Text, {}, 'Aisle A, Rack 4, Shelf 2');
    const status = root.createComponent(Text, {}, '24 units stored');

    card.appendChild(slot);
    card.appendChild(location);
    card.appendChild(status);

    stack.appendChild(heading);
    stack.appendChild(card);
    root.appendChild(stack);
  },
);
