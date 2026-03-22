import '@shopify/ui-extensions/preact';
import {render} from 'preact';
import {useEffect, useState} from 'preact/hooks';

export default async () => {
  render(<Extension />, document.body);
};

const API_VERSION = '2025-10';

function Extension() {
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
      `shopify://customer-account/api/${API_VERSION}/graphql.json`,
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
      .then(({data: {customer}}) => {
        if (!customer) return;
        setCustomerName(customer.firstName);
      })
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
