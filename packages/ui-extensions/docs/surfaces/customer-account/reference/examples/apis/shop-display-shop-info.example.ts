import {
  extension,
  BlockStack,
  Text,
  Link,
} from '@shopify/ui-extensions/customer-account';

export default extension(
  'customer-account.order-status.block.render',
  (root, api) => {
    const shop = api.shop;

    const stack = root.createComponent(BlockStack, {});
    stack.appendChild(
      root.createComponent(Text, {emphasis: 'bold'}, shop.name),
    );
    if (shop.storefrontUrl) {
      stack.appendChild(
        root.createComponent(
          Link,
          {to: shop.storefrontUrl},
          'Visit storefront',
        ),
      );
    }
    root.appendChild(stack);
  },
);
