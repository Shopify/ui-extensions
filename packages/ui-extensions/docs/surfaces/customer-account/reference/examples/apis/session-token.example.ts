export default async () => {
  async function queryApi() {
    // Request a new (or cached) session token from Shopify
    const token =
      await shopify.sessionToken.get();
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

  const banner =
    document.createElement('s-banner');
  banner.textContent =
    'See console for API response';
  document.body.append(banner);
}
