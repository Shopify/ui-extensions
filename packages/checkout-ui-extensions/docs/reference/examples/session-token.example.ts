import {
  extend,
  Banner,
  BlockStack,
} from '@shopify/checkout-ui-extensions';

extend(
  'Checkout::Dynamic::Render',
  (root, {sessionToken}) => {
    async function queryApi() {
      // Request a new (or cached) session token from Shopify
      const token = await sessionToken.get();
      console.log(token);

      const apiResponse = await fetchWithToken(
        token,
      );

      // Use your response
      console.log(apiResponse);
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

    root.appendChild(
      root.createComponent(Banner, {
        title: 'Session Token Extension',
      }),
    );
  },
);
