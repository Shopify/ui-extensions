import {
  extension,
  BlockStack,
  Text,
} from '@shopify/ui-extensions/customer-account';

export default extension(
  'customer-account.order-status.block.render',
  (root, api) => {
    const formattedPrice = api.i18n.formatCurrency(42.5, {
      currency: 'USD',
    });
    const formattedDate = api.i18n.formatDate(new Date());
    const formattedNumber = api.i18n.formatNumber(1234.56);

    const stack = root.createComponent(BlockStack, {});
    stack.appendChild(
      root.createComponent(Text, {}, `Price: ${formattedPrice}`),
    );
    stack.appendChild(
      root.createComponent(Text, {}, `Date: ${formattedDate}`),
    );
    stack.appendChild(
      root.createComponent(Text, {}, `Number: ${formattedNumber}`),
    );
    root.appendChild(stack);
  },
);
