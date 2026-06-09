import {render} from 'preact';
import {useState, useEffect} from 'preact/hooks';

export default async () => {
  render(<Extension />, document.body);
};

function Extension() {
  const {data} = shopify;
  const [orders, setOrders] = useState([]);
  const [printUrl, setPrintUrl] = useState(null);

  useEffect(() => {
    const fetchOrders = async () => {
      const orderIds = data.selected.map((item) => item.id);

      const {data: ordersData} = await shopify.query(
        `query GetOrders($ids: [ID!]!) {
          nodes(ids: $ids) {
            ... on Order {
              id
              name
              shippingAddress {
                address1
                city
                country
              }
            }
          }
        }`,
        {variables: {ids: orderIds}},
      );

      setOrders(ordersData.nodes);

      const response = await fetch('/api/generate-shipping-manifest', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({orders: ordersData.nodes}),
      });

      const {printUrl: url} = await response.json();
      setPrintUrl(url);
    };

    fetchOrders();
  }, [data]);

  return (
    <s-admin-print-action src={printUrl}>
      <s-text>Shipping manifest for {orders.length} orders</s-text>
      {orders.map((order) => (
        <s-text key={order.id}>{order.name}</s-text>
      ))}
    </s-admin-print-action>
  );
}
