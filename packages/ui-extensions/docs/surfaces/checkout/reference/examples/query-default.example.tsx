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
  const [data, setData] = useState();
  const {query} = useApi();

  useEffect(() => {
    query(
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
    <List>
      {data?.products?.nodes.map((node) => (
        <ListItem key={node.id}>
          {node.title}
        </ListItem>
      ))}
    </List>
  );
}
