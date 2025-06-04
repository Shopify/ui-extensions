export default async () => {
  const getCustomerNameQuery = {
    query: `query {
      customer {
        firstName
      }
    }`,
  };

  fetch(
    'shopify://customer-account/api/unstable/graphql.json',
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(getCustomerNameQuery),
    },
  )
    .then((response) => response.json())
    .then(
      ({
        data: {
          customer: {firstName},
        },
      }) => {
        if (firstName) {
          const banner =
            document.createElement('s-banner');
          banner.textContent =
            shopify.i18n.translate('welcomeMsg', {
              name: firstName,
            });
          document.body.append(banner);
        }
      },
    )
    .catch(console.error);
}
