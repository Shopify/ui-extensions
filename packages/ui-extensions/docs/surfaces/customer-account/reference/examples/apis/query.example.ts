export default function extension() {
  shopify
    .query(
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
      const list = document.createElement(
        's-unordered-list',
      );

      data?.products?.nodes.forEach((node) => {
        const listItem = document.createElement(
          's-list-item',
        );
        listItem.id = node.id;
        listItem.textContent = node.title;
        list.append(listItem);
      });

      document.body.append(list);
    })
    .catch(console.error);
}
