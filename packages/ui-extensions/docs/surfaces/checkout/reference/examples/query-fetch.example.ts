import {
  extension,
  List,
  ListItem,
} from '@shopify/ui-extensions/checkout';

export default extension(
  'purchase.checkout.block.render',
  (root, {shop}) => {
    const apiVersion = 'unstable';
    const getProductsQuery = {
      query: `query ($first: Int!) {
      products(first: $first) {
        nodes {
          id
          title
        }
      }
    }`,
      variables: {first: 5},
    };

    fetch(
      `${shop.storefrontUrl}api/${apiVersion}/graphql.json`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(getProductsQuery),
      },
    )
      .then((response) => response.json())
      .then(({data}) => {
        const listItems =
          data?.products?.nodes.map((node) =>
            root.createComponent(
              ListItem,
              undefined,
              node.title,
            ),
          );

        root.appendChild(
          root.createComponent(
            List,
            undefined,
            listItems,
          ),
        );
      })
      .catch(console.error);
  },
);
