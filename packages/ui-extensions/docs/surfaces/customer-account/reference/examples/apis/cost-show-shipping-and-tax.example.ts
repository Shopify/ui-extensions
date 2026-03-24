import {
  extension,
  BlockStack,
  Text,
} from '@shopify/ui-extensions/customer-account';

export default extension(
  'customer-account.order-status.block.render',
  (root, api) => {
    const shipping = api.cost.totalShippingAmount.current;
    const tax = api.cost.totalTaxAmount.current;

    const stack = root.createComponent(BlockStack, {});
    stack.appendChild(
      root.createComponent(
        Text,
        {},
        `Shipping: ${shipping ? `${shipping.amount} ${shipping.currencyCode}` : 'Not calculated'}`,
      ),
    );
    stack.appendChild(
      root.createComponent(
        Text,
        {},
        `Tax: ${tax ? `${tax.amount} ${tax.currencyCode}` : 'Not calculated'}`,
      ),
    );
    root.appendChild(stack);
  },
);
