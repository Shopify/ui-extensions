// @extension-target: customer-account.order-status.block.render
import '@shopify/ui-extensions/preact';
import {render} from 'preact';
import {useState, useEffect} from 'preact/hooks';

export default async () => {
  render(<Extension />, document.body);
};

const API_VERSION = '2026-01';

function Extension() {
  const [addresses, setAddresses] =
    useState(null);

  useEffect(() => {
    fetch(
      `shopify://customer-account/api/${API_VERSION}/graphql.json`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          query: `query {
            customer {
              addresses(first: 5) {
                edges {
                  node {
                    address1
                    city
                    zoneCode
                  }
                }
              }
            }
          }`,
        }),
      },
    )
      .then((response) => response.json())
      .then(({data: {customer}}) => {
        if (!customer) return;
        setAddresses(
          customer.addresses.edges.map(
            (edge) => edge.node,
          ),
        );
      })
      .catch(console.error);
  }, []);

  if (!addresses) {
    return <s-text>Loading addresses…</s-text>;
  }

  if (addresses.length === 0) {
    return (
      <s-text color="subdued">
        No saved addresses found.
      </s-text>
    );
  }

  return (
    <s-box padding="base">
      <s-stack direction="block" gap="base">
        <s-text type="strong">
          Saved Addresses
        </s-text>
        {addresses.map((address, index) => (
          <s-box key={index} padding="small-200">
            <s-stack
              direction="block"
              gap="small-200"
            >
              <s-text>{address.address1}</s-text>
              <s-text>
                {address.city},{' '}
                {address.zoneCode}
              </s-text>
            </s-stack>
          </s-box>
        ))}
      </s-stack>
    </s-box>
  );
}
