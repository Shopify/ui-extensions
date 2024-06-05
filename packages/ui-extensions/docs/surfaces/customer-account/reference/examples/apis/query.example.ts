import {
  extension,
  List,
  ListItem,
} from '@shopify/ui-extensions/customer-account';

export default extension(
  'customer-account.order-status.block.render',
  (root, {query}) => {
    query<any>(
      `query ($first: Int!) {
      products(first: $first) {
        nodes {
          id
          title
        }
      }
    }`,
      {
        variables: {first: 5},
      },
    )
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
