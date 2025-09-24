import React, {useState, useEffect} from 'react';

import {
  Text,
  useApi,
  reactExtension,
} from '@shopify/ui-extensions-react/point-of-sale';

// [START in-store-cash-info.component]
// 2. Implement the `InStoreCashInfo` component
const InStoreCashInfo = () => {
  // [END in-store-cash-info.component]

  // [START in-store-cash-info.api]
  // 3. Setup the api
  const api = useApi<'pos.cash-session-details.block.render'>();
  const {locationId} = api.session.currentSession;
  // [END in-store-cash-info.api]

  // [START in-store-cash-info.fetch-drawer-amount]
  // 4. Fetch the total amount of cash on hand at the location
  const [totalDrawerAmount, setTotalDrawerAmount] = useState<number | null>(
    null,
  );
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const fetchTotalDrawerAmount = async (locationId: number) => {
    const result = await fetch('shopify:admin/api/graphql.json', {
      method: 'POST',
      body: JSON.stringify({
        query: `
          TBD
        `,
        variables: {
          locationId: `gid://shopify/Location/${locationId}`,
        },
      }),
    });

    const json = await result.json();

    if (json.errors) {
      console.error('GraphQL Errors:', json.errors);
      json.errors.forEach((error: any) => {
        console.error('GraphQL Error Details:', error);
      });
      return null;
    }

    if (!result.ok) {
      console.error('Network Error:', result.statusText);
      return null;
    }

    return json.data;
  };

  useEffect(() => {
    const loadData = async () => {
      try {
        const amount = await fetchTotalDrawerAmount(locationId);
        setTotalDrawerAmount(amount);
      } catch (err) {
        console.error('Error fetching drawer amount:', err);
        setError('Unable to fetch cash drawer information');
      }
      setLoading(false);
    };

    loadData();
  }, []);
  // [END in-store-cash-info.fetch-drawer-amount]

  // [START in-store-cash-info.loading-error]
  // 5. Handle loading and error states
  if (loading) {
    return <Text>Loading...</Text>;
  }

  if (error) {
    return <Text color="TextWarning">{error}</Text>;
  }
  // [END in-store-cash-info.loading-error]

  // [START in-store-cash-info.render-implementation]
  // 6. Display the total amount of cash on hand at the location
  return (
    <Text>
      {totalDrawerAmount !== null
        ? `$${totalDrawerAmount.toFixed(2)}`
        : 'No data available'}
    </Text>
  );
  // [END in-store-cash-info.render-implementation]
};

// [START in-store-cash-info.render-extension]
// 1. Render the InStoreCashInfo component at the `pos.cash-session-details.block.render` target
export default reactExtension('pos.cash-session-details.block.render', () => (
  <InStoreCashInfo />
));
// [END in-store-cash-info.render-extension]
