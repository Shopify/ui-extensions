import {
  extension,
  Link,
  Text,
  BlockStack,
} from '@shopify/ui-extensions/customer-account';

export default extension(
  'customer-account.order-status.block.render',
  (root, api) => {
    const shop = api.shop;

    if (!shop.storefrontUrl) return;

    const stack = root.createComponent(BlockStack, {});
    stack.appendChild(
      root.createComponent(
        Text,
        {},
        `Continue shopping at ${shop.name}:`,
      ),
    );
    stack.appendChild(
      root.createComponent(
        Link,
        {to: `${shop.storefrontUrl}/collections`},
        'Browse collections',
      ),
    );
    root.appendChild(stack);
  },
);
