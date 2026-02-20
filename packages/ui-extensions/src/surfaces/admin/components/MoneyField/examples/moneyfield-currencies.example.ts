import {extension, MoneyField, BlockStack, Text} from '@shopify/ui-extensions/admin';

export default extension(
  'admin.product-details.block.render',
  (root) => {

    const stack = root.createComponent(BlockStack);

    const heading = root.createComponent(
      Text,
      {fontWeight: 'bold'},
      'Regional pricing',
    );

    const usdField = root.createComponent(MoneyField, {
      label: 'US price',
      name: 'priceUsd',
      currencyCode: 'USD',
      value: 49.99,
    });

    const eurField = root.createComponent(MoneyField, {
      label: 'EU price',
      name: 'priceEur',
      currencyCode: 'EUR',
      value: 44.99,
    });

    const gbpField = root.createComponent(MoneyField, {
      label: 'UK price',
      name: 'priceGbp',
      currencyCode: 'GBP',
      value: 39.99,
    });

    stack.appendChild(heading);
    stack.appendChild(usdField);
    stack.appendChild(eurField);
    stack.appendChild(gbpField);
    root.appendChild(stack);
  },
);
