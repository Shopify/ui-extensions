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
  const [submitted, setSubmitted] = useState(false);

  async function handleSubmit() {
    if (authState !== 'fully_authenticated') {
      await requireLogin();
    }
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <Banner status="success">
        <Text>Warranty claim submitted.</Text>
      </Banner>
    );
  }

  return <Button onPress={handleSubmit}>Submit warranty claim</Button>;
}
