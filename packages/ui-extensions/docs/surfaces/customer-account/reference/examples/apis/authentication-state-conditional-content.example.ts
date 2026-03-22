import {extension, BlockStack, Text, Link} from '@shopify/ui-extensions/customer-account';

export default extension(
  'customer-account.order-status.block.render',
  (root, api) => {
    const authState = api.authenticationState.current;

    if (authState !== 'fully_authenticated') {
      root.appendChild(
        root.createComponent(Text, {appearance: 'subdued'}, 'Log in to see personalized recommendations.'),
      );
      return;
    }

    const stack = root.createComponent(BlockStack, {});
    stack.appendChild(root.createComponent(Text, {emphasis: 'bold'}, 'Recommended for you'));
    stack.appendChild(root.createComponent(Link, {to: 'https://example.com/recommendations'}, 'View recommendations'));
    root.appendChild(stack);
  },
);
