import {extension, BlockStack, Text} from '@shopify/ui-extensions/customer-account';

export default extension(
  'customer-account.order-status.block.render',
  (root, api) => {
    const customer = api.buyerIdentity?.customer.current;
    if (!customer) {
      root.appendChild(root.createComponent(Text, {}, 'Guest checkout'));
      return;
    }
    const stack = root.createComponent(BlockStack, {});
    stack.appendChild(root.createComponent(Text, {emphasis: 'bold'}, 'Customer'));
    if (customer.fullName) stack.appendChild(root.createComponent(Text, {}, customer.fullName));
    if (customer.email) stack.appendChild(root.createComponent(Text, {appearance: 'subdued'}, customer.email));
    root.appendChild(stack);
  },
);
