import {extension, BlockStack, Text} from '@shopify/ui-extensions/customer-account';

const API_VERSION = '2025-07';

export default extension(
  'customer-account.order-status.block.render',
  (root, api) => {
    fetch(`shopify://customer-account/api/${API_VERSION}/graphql.json`, {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        query: `query {
          customer {
            addresses(first: 3) {
              nodes { city zoneCode territoryCode }
            }
          }
        }`,
      }),
    })
      .then((res) => res.json())
      .then(({data}) => {
        if (!data.customer) return;
        const addrs = data.customer.addresses.nodes;
        if (addrs.length === 0) return;
        const stack = root.createComponent(BlockStack, {});
        stack.appendChild(root.createComponent(Text, {emphasis: 'bold'}, 'Saved addresses'));
        for (const addr of addrs) {
          stack.appendChild(
            root.createComponent(Text, {}, [addr.city, addr.zoneCode, addr.territoryCode].filter(Boolean).join(', ')),
          );
        }
        root.appendChild(stack);
      })
      .catch(console.error);
  },
);
