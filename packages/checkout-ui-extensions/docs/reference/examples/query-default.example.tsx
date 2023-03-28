import React, {useEffect, useState} from 'react';
import {
  useExtensionApi,
  render,
  List,
  ListItem,
} from '@shopify/checkout-ui-extensions-react';

render('Checkout::Dynamic::Render', () => (
  <Extension />
));

function Extension() {
  const [data, setData] = useState();
  const {query} = useExtensionApi();

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
