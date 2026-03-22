import {extension, Text} from '@shopify/ui-extensions/customer-account';

export default extension(
  'customer-account.order-status.block.render',
  (root, api) => {
    const customer = api.authenticatedAccount.customer.current;
    if (!customer) {
      root.appendChild(root.createComponent(Text, {appearance: 'subdued'}, 'Not authenticated'));
      return;
    }
    root.appendChild(root.createComponent(Text, {}, `Customer ID: ${customer.id}`));
  },
);
