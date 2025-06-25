import {render} from 'preact';
import {useEffect, useState} from 'preact/hooks';

export default async () => {
  render(<Extension />, document.body);
}

function Extension() {
  const {query} = shopify;
  const [data, setData] = useState();

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
      .then(({data, errors}) => setData(data))
      .catch(console.error);
  }, [query]);

  return (
    <s-unordered-list>
      {data?.products?.nodes.map((node) => (
        <s-list-item id={node.id} key={node.id}>
          {node.title}
        </s-list-item>
      ))}
    </s-unordered-list>
  );
}
