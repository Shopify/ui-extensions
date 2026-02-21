import {useState} from 'react';
import {reactExtension, useApi, Checkbox, Button, BlockStack, Text} from '@shopify/ui-extensions-react/admin';

function App() {
  const {close} = useApi('admin.product-details.action.render');
  const [agreed, setAgreed] = useState(false);
  const [error, setError] = useState(undefined);

  return (
    <BlockStack>
      <Text fontWeight="bold">Terms of service</Text>
      <Checkbox
        label="I agree to the fulfillment provider terms of service"
        checked={agreed}
        error={error}
        onChange={(value) => {
          setAgreed(value);
          setError(undefined);
        }}
      />
      <Button
        variant="primary"
        onPress={async () => {
          if (!agreed) {
            setError('You must agree to the terms before connecting');
            return;
          }
          await fetch('/api/fulfillment/connect', {method: 'POST'});
          close();
        }}
      >
        Connect provider
      </Button>
    </BlockStack>
  );
}

export default reactExtension(
  'admin.product-details.action.render',
  () => <App />,
);
