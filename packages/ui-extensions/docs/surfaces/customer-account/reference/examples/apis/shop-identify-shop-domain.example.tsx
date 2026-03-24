import React, {useState} from 'react';
import {
  reactExtension,
  useShop,
} from '@shopify/ui-extensions-react/customer-account';
import {
  Banner,
  Button,
  Text,
} from '@shopify/ui-extensions/customer-account';

export default reactExtension(
  'customer-account.order-status.block.render',
  () => <Extension />,
);

function Extension() {
  const shop = useShop();
  const [synced, setSynced] = useState(false);

  async function syncWithBackend() {
    await fetch('https://my-app.example.com/api/sync', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        shopId: shop.id,
        domain: shop.myshopifyDomain,
      }),
    });
    setSynced(true);
  }

  if (synced) {
    return (
      <Banner status="success">
        <Text>Synced with {shop.myshopifyDomain}</Text>
      </Banner>
    );
  }

  return (
    <Button onPress={syncWithBackend}>
      Sync shop data
    </Button>
  );
}
