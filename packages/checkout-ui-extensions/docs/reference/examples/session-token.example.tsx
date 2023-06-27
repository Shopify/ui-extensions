import React, {useEffect} from 'react';
import {
  render,
  Banner,
  useExtensionApi,
} from '@shopify/checkout-ui-extensions-react';

render('Checkout::Dynamic::Render', () => (
  <Extension />
));

function Extension() {
  const {sessionToken} = useExtensionApi();

  useEffect(() => {
    async function queryApi() {
      // Request a new (or cached) session token from Shopify
      const token = await sessionToken.get();
      console.log('sessionToken.get()', token);

      const apiResponse = await fetchWithToken(
        token,
      );
      // Use your response
      console.log('API response', apiResponse);
    }

    function fetchWithToken(token) {
      const result = fetch(
        'https://myapp.com/api/session-token',
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      );
      return result;
    }

    queryApi();
  }, [sessionToken]);

  return (
    <Banner>See console for API response</Banner>
  );
}
