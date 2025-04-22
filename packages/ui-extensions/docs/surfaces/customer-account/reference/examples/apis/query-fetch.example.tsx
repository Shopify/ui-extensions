import {render} from 'preact';
import {useEffect, useState} from 'preact/hooks';

export default function extension() {
  render(<App />, document.body);
}

function App() {
  const [data, setData] = useState();

  useEffect(() => {
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

    const apiVersion = 'unstable';

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
      .then(({data, errors}) => setData(data))
      .catch(console.error);
  }, []);

  return (
    <s-unordered-list>
      {data?.products?.nodes.map((node) => (
        <s-list-item key={node.id}>
          {node.title}
        </s-list-item>
      ))}
    </s-unordered-list>
  );
}
