import {extension, Banner, BlockStack, Text} from '@shopify/ui-extensions/customer-account';

export default extension(
  'customer-account.order-status.block.render',
  (root, api) => {
    const customer = api.authenticatedAccount.customer.current;
    const company = api.authenticatedAccount.purchasingCompany.current;
    if (!customer) return;
    if (!company) {
      root.appendChild(root.createComponent(Text, {}, `Customer: ${customer.id}`));
      return;
    }
    const banner = root.createComponent(Banner, {status: 'info'});
    const stack = root.createComponent(BlockStack, {});
    stack.appendChild(root.createComponent(Text, {emphasis: 'bold'}, company.company.id));
    if (company.location) {
      stack.appendChild(root.createComponent(Text, {}, `Location: ${company.location.id}`));
    }
    banner.appendChild(stack);
    root.appendChild(banner);
  },
);
