import {
  extension,
  BlockStack,
  Text,
} from '@shopify/ui-extensions/customer-account';

export default extension(
  'customer-account.order-status.block.render',
  (root, api) => {
    const address = api.shippingAddress?.current;

    if (!address) {
      root.appendChild(
        root.createComponent(Text, {}, 'No shipping address available.'),
      );
      return;
    }

    const stack = root.createComponent(BlockStack, {});
    stack.appendChild(
      root.createComponent(Text, {emphasis: 'bold'}, 'Shipping address'),
    );
    if (address.name) {
      stack.appendChild(root.createComponent(Text, {}, address.name));
    }
    if (address.address1) {
      stack.appendChild(root.createComponent(Text, {}, address.address1));
    }
    const cityLine = [address.city, address.zoneCode, address.zip]
      .filter(Boolean)
      .join(', ');
    stack.appendChild(root.createComponent(Text, {}, cityLine));
    root.appendChild(stack);
  },
);
