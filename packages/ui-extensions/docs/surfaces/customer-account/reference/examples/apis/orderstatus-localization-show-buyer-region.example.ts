import {
  extension,
  BlockStack,
  Text,
} from '@shopify/ui-extensions/customer-account';

export default extension(
  'customer-account.order-status.block.render',
  (root, api) => {
    const country = api.localization.country.current;
    const language = api.localization.language.current;

    const stack = root.createComponent(BlockStack, {});
    stack.appendChild(
      root.createComponent(Text, {emphasis: 'bold'}, 'Your region'),
    );
    if (country) {
      stack.appendChild(
        root.createComponent(Text, {}, `Country: ${country.isoCode}`),
      );
    }
    stack.appendChild(
      root.createComponent(Text, {}, `Language: ${language.isoCode}`),
    );
    root.appendChild(stack);
  },
);
