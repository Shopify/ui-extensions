// @extension-target: customer-account.order-status.block.render
import '@shopify/ui-extensions/preact';
import {render} from 'preact';
import {useState, useEffect} from 'preact/hooks';

export default async () => {
  render(<Extension />, document.body);
};

const API_VERSION = '2026-04';

function Extension() {
  const [name, setName] = useState(null);

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
              firstName
              lastName
            }
          }`,
        }),
      },
    )
      .then((response) => response.json())
      .then(({data: {customer}}) => {
        if (!customer) return;
        setName(customer);
      })
      .catch(console.error);
  }, []);

  if (!name) {
    return <s-text>Loading…</s-text>;
  }

  return (
    <s-box padding="base">
      <s-text type="strong">
        Hello, {name.firstName} {name.lastName}!
      </s-text>
    </s-box>
  );
}
