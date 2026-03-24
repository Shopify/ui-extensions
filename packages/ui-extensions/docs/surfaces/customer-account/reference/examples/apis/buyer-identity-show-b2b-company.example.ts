import {extension, BlockStack, Text} from '@shopify/ui-extensions/customer-account';

export default extension(
  'customer-account.order-status.block.render',
  (root, api) => {
    const purchasingCompany = api.buyerIdentity?.purchasingCompany.current;
    if (!purchasingCompany) return;
    const stack = root.createComponent(BlockStack, {});
    stack.appendChild(root.createComponent(Text, {emphasis: 'bold'}, 'B2B order'));
    stack.appendChild(root.createComponent(Text, {}, `Company: ${purchasingCompany.company.name}`));
    if (purchasingCompany.location) {
      stack.appendChild(root.createComponent(Text, {}, `Location: ${purchasingCompany.location.name}`));
    }
    root.appendChild(stack);
  },
);
