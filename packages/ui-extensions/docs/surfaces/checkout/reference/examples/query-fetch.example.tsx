import {useEffect, useState} from 'react';
import {
  useApi,
  reactExtension,
  List,
  ListItem,
} from '@shopify/ui-extensions-react/checkout';

export default reactExtension(
  'purchase.checkout.block.render',
  () => <Extension />,
);

function Extension() {
  const {shop} = useApi();
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
      .then(({data, errors}) => setData(data))
      .catch(console.error);
  }, [shop]);

  return (
    <List>
      {data?.products?.nodes.map((node) => (
        <ListItem key={node.id}>
          {node.title}
        </ListItem>
      ))}
    </List>
  );
}
