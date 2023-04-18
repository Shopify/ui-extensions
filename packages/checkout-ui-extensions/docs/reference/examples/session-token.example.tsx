import React from 'react';
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

  async function queryApi() {
    // Request a new (or cached) session token from Shopify
    const token = await sessionToken.get();
    console.log(token);

    if (token) {
      const apiResponse = await fetchWithToken(
        token,
      );
      // Use your response
      console.log(apiResponse);
    }
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

  return (
    <Banner title="Session token Extension" />
  );
}
