import {useEffect} from 'react';
import {
  reactExtension,
  Banner,
  useApi,
} from '@shopify/ui-extensions-react/customer-account';

export default reactExtension(
  'customer-account.order-status.block.render',
  () => <Extension />,
);

function Extension() {
  const {sessionToken} = useApi();

  useEffect(() => {
    async function queryApi() {
      // Request a new (or cached) session token from Shopify
      const token = await sessionToken.get();
      console.log('sessionToken.get()', token);

      const apiResponse =
        await fetchWithToken(token);
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
