import React, {useEffect, useState} from 'react';
import {reactExtension} from '@shopify/ui-extensions-react/customer-account';
import {Banner, Text} from '@shopify/ui-extensions/customer-account';

const API_VERSION = '2025-07';

export default reactExtension(
  'customer-account.order-status.block.render',
  () => <Extension />,
);

function Extension() {
  const [customerName, setCustomerName] = useState('');

  useEffect(() => {
    fetch(`shopify://customer-account/api/${API_VERSION}/graphql.json`, {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({query: `query { customer { firstName } }`}),
    })
      .then((res) => res.json())
      .then(({data}) => {
        if (!data.customer) return;
        setCustomerName(data.customer.firstName);
      })
      .catch(console.error);
  }, []);

  if (!customerName) return null;
  return (
    <Banner><Text>Welcome back, {customerName}!</Text></Banner>
  );
}
