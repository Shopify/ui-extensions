import {render} from 'preact';
import {useEffect, useState} from 'preact/hooks';

export default function extension() {
  render(<App />, document.body);
}

function App() {
  const [customerName, setCustomerName] =
    useState('');

  const getCustomerNameQuery = {
    query: `query {
      customer {
        firstName
      }
    }`,
  };

  useEffect(() => {
    fetch(
      'shopify://customer-account/api/unstable/graphql.json',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(
          getCustomerNameQuery,
        ),
      },
    )
      .then((response) => response.json())
      .then(
        ({
          data: {
            customer: {firstName},
          },
        }) => {
          setCustomerName(firstName);
        },
      )
      .catch(console.error);
  });

  return customerName ? (
    <s-banner>
      {shopify.i18n.translate('welcomeMsg', {
        name: customerName,
      })}
    </s-banner>
  ) : null;
}
