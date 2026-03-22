import {extension, BlockStack, Text} from '@shopify/ui-extensions/customer-account';

export default extension(
  'customer-account.order-status.block.render',
  (root, api) => {
    const settings = api.checkoutSettings.current;
    const terms = settings.paymentTermsTemplate;
    if (!terms) return;
    const stack = root.createComponent(BlockStack, {});
    stack.appendChild(root.createComponent(Text, {emphasis: 'bold'}, 'Payment terms'));
    stack.appendChild(root.createComponent(Text, {}, terms.name));
    if (terms.dueInDays !== undefined) {
      stack.appendChild(root.createComponent(Text, {appearance: 'subdued'}, `Payment due in ${terms.dueInDays} days`));
    }
    root.appendChild(stack);
  },
);
