import React, {useEffect, useState} from 'react';
import {reactExtension} from '@shopify/ui-extensions-react/customer-account';
import {BlockStack, Text} from '@shopify/ui-extensions/customer-account';

const API_VERSION = '2025-07';

export default reactExtension(
  'customer-account.order-status.block.render',
  () => <Extension />,
);

function Extension() {
  const [addresses, setAddresses] = useState<{city?: string; zoneCode?: string; territoryCode?: string}[]>([]);

  useEffect(() => {
    fetch(`shopify://customer-account/api/${API_VERSION}/graphql.json`, {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        query: `query {
          customer {
            addresses(first: 3) {
              nodes { city zoneCode territoryCode }
            }
          }
        }`,
      }),
    })
      .then((res) => res.json())
      .then(({data}) => {
        if (!data.customer) return;
        setAddresses(data.customer.addresses.nodes);
      })
      .catch(console.error);
  }, []);

  if (addresses.length === 0) return null;
  return (
    <BlockStack>
      <Text emphasis="bold">Saved addresses</Text>
      {addresses.map((addr, i) => (
        <Text key={i}>
          {[addr.city, addr.zoneCode, addr.territoryCode].filter(Boolean).join(', ')}
        </Text>
      ))}
    </BlockStack>
  );
}
