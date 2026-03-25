// @extension-target: customer-account.order-status.block.render
import '@shopify/ui-extensions/preact';
import {render} from 'preact';
import {useState, useEffect} from 'preact/hooks';

export default async () => {
  render(<Extension />, document.body);
};

const API_VERSION = '2026-04';

function Extension() {
  const [orders, setOrders] = useState(null);

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
              orders(first: 5) {
                edges {
                  node {
                    name
                    totalPrice {
                      amount
                    }
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
        setOrders(
          customer.orders.edges.map(
            (edge) => edge.node,
          ),
        );
      })
      .catch(console.error);
  }, []);

  if (!orders) {
    return <s-text>Loading orders…</s-text>;
  }

  return (
    <s-box padding="base">
      <s-stack direction="block" gap="small-200">
        <s-text type="strong">
          Recent Orders
        </s-text>
        {orders.map((order) => (
          <s-stack
            key={order.name}
            direction="inline"
            gap="base"
          >
            <s-text type="strong">
              {order.name}
            </s-text>
            <s-text>
              ${order.totalPrice.amount}
            </s-text>
          </s-stack>
        ))}
      </s-stack>
    </s-box>
  );
}
