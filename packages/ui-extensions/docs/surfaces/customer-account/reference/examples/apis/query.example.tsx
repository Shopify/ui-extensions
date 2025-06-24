import {render} from 'preact';
import {useEffect, useState} from 'preact/hooks';

export default async () => {
  render(<App />, document.body);
}

function App() {
  const [data, setData] = useState({});

  useEffect(() => {
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
      .then(({data, errors}) => {
        setData(data);
      })
      .catch(console.error);
  }, [setData]);

  return (
    <s-unordered-list>
      {data?.products?.nodes.map((node) => {
        return (
          <s-list-item id={node.id} key={node.id}>
            {node.title}
          </s-list-item>
        );
      })}
    </s-unordered-list>
  );
}
