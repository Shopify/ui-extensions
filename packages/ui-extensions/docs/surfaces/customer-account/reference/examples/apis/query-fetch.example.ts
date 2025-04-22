export default function extension() {
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
    `shopify://storefront/api/${apiVersion}/graphql.json`,
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
