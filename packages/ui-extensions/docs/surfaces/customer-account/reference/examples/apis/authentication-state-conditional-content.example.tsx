import {
  reactExtension,
  useAuthenticationState,
} from '@shopify/ui-extensions-react/customer-account';
import {BlockStack, Text, Link} from '@shopify/ui-extensions/customer-account';

export default reactExtension(
  'customer-account.order-status.block.render',
  () => <Extension />,
);

function Extension() {
  const authState = useAuthenticationState();

  if (authState !== 'fully_authenticated') {
    return <Text appearance="subdued">Log in to see personalized recommendations.</Text>;
  }

  return (
    <BlockStack>
      <Text emphasis="bold">Recommended for you</Text>
      <Link to="https://example.com/recommendations">View recommendations</Link>
    </BlockStack>
  );
}
