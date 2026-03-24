import {
  reactExtension,
  useAuthenticationState,
} from '@shopify/ui-extensions-react/customer-account';
import {Banner, Text} from '@shopify/ui-extensions/customer-account';

export default reactExtension(
  'customer-account.order-status.block.render',
  () => <Extension />,
);

function Extension() {
  const authState = useAuthenticationState();
  return (
    <Banner status={authState === 'fully_authenticated' ? 'success' : 'warning'}>
      <Text>
        {authState === 'fully_authenticated'
          ? 'You are fully logged in.'
          : 'You are viewing this page through a shared link.'}
      </Text>
    </Banner>
  );
}
