import React, {useState} from 'react';
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
  const {requireLogin} = useApi<'customer-account.order-status.block.render'>();
  const [loading, setLoading] = useState(false);

  if (authState === 'fully_authenticated') {
    return <Button onPress={() => {}}>Manage subscription</Button>;
  }

  return (
    <Banner status="warning">
      <Text>Log in to manage your subscription.</Text>
      <Button
        disabled={loading}
        onPress={async () => {
          setLoading(true);
          await requireLogin();
          setLoading(false);
        }}
      >
        Log in
      </Button>
    </Banner>
  );
}
