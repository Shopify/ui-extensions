import {
  reactExtension,
  useAuthenticationState,
  useApi,
} from '@shopify/ui-extensions-react/customer-account';
import {Banner, Button, Text} from '@shopify/ui-extensions/customer-account';

export default reactExtension(
  'customer-account.order-status.block.render',
  () => <Extension />,
);

function Extension() {
  const authState = useAuthenticationState();
  const {requireLogin, navigation} = useApi<'customer-account.order-status.block.render'>();

  if (authState === 'fully_authenticated') {
    return <Button onPress={() => navigation.navigate('extension:loyalty/')}>View loyalty points</Button>;
  }

  return (
    <Banner status="info">
      <Text>Log in to view your loyalty points.</Text>
      <Button onPress={() => requireLogin()}>Log in</Button>
    </Banner>
  );
}
