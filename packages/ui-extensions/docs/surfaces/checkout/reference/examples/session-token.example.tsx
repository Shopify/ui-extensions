import '@shopify/ui-extensions/preact';
import {render} from 'preact';
import {useEffect} from 'preact/hooks';

export default function extension() {
  render(<Extension />, document.body);
}

function Extension() {
  const {sessionToken} = shopify;

  useEffect(() => {
    async function queryApi() {
      // Request a new (or cached) session token from Shopify
      const token =
        await shopify.sessionToken.get();
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
    <s-banner>
      See console for API response
    </s-banner>
  );
}
