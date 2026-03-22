import {extension, Banner, Text} from '@shopify/ui-extensions/customer-account';

const API_VERSION = '2025-07';

export default extension(
  'customer-account.order-status.block.render',
  (root, api) => {
    fetch(`shopify://customer-account/api/${API_VERSION}/graphql.json`, {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({query: `query { customer { firstName } }`}),
    })
      .then((res) => res.json())
      .then(({data}) => {
        if (!data.customer) return;
        if (data.customer.firstName) {
          const banner = root.createComponent(Banner, {});
          banner.appendChild(root.createComponent(Text, {}, `Welcome back, ${data.customer.firstName}!`));
          root.appendChild(banner);
        }
      })
      .catch(console.error);
  },
);
