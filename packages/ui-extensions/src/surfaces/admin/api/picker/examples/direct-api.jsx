import {render} from 'preact';

export default async () => {
  render(<Extension />, document.body);
};

function Extension() {
  const handlePick = async () => {
    const r = await fetch('shopify:admin/api/graphql.json', {
      method: 'POST',
      body: JSON.stringify({
        query: `query GetOrders($first: Int!) {
          orders(first: $first) {
            edges {
              node {
                id
                name
              }
            }
          }
        }`,
        variables: {first: 10},
      }),
    });
    
    const {data} = await r.json();
    
    await shopify.picker({
      heading: 'Select orders',
      items: data.orders.edges.map((edge) => ({
        id: edge.node.id,
        heading: edge.node.name,
      })),
    });
  };

  return (
    <s-admin-block heading="Picker with GraphQL Data">
      <s-button onClick={handlePick}>Open Order Picker</s-button>
    </s-admin-block>
  );
}
