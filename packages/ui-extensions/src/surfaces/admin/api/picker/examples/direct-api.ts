import {extension, Button} from '@shopify/ui-extensions/admin';

export default extension(
  'admin.product-details.block.render',
  (root, api) => {
    const {picker} = api;

    const openButton = root.createComponent(Button, {
      title: 'Open Order Picker',
      onPress: async () => {
        const response = await fetch('shopify:admin/api/graphql.json', {
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

        const {data} = await response.json();

        await picker({
          heading: 'Select orders',
          items: data.orders.edges.map((edge) => ({
            id: edge.node.id,
            heading: edge.node.name,
          })),
        });
      },
    });

    root.appendChild(openButton);
  },
);
