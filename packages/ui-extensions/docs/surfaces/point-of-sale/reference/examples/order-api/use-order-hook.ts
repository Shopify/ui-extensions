import {extension, Text, Stack} from '@shopify/ui-extensions/point-of-sale';

export default extension('pos.order-details.block.render', (root, api) => {
  // Access order data directly from the API
  const order = api.order;

  const stack = root.createComponent(Stack, {});

  stack.createComponent(Text, {}, `Order #${order.name}`);
  stack.createComponent(Text, {}, `ID: ${order.id}`);

  if (order.customerId) {
    stack.createComponent(Text, {}, `Customer ID: ${order.customerId}`);
  }

  root.mount();
});
