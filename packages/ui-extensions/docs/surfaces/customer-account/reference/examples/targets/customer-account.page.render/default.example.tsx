import {
  reactExtension,
  Text,
  BlockStack,
  ResourceItem,
  Image,
  Heading,
  Page,
  Grid,
  GridItem,
} from '@shopify/ui-extensions-react/customer-account';
import React from 'react';
import { useEffect, useState } from 'react';

export default reactExtension(
  'customer-account.page.render',
  () => <Wishlists />,
);

interface Wishlist {
  id: string;
  items: {
    productId: string;
    productLink: string;
    productImage: string;
    label: string;
  }[];
}

function Wishlists() {
  const [wishlists, setWishlists] = useState<
    Wishlist[]
  >();

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchWishlists() {
      setLoading(true);
      const response = await fetch(
        `https://your-backend.com/api/wishlists`,
      );
      const wishlists = await response.json();
      setLoading(false);
      setWishlists(wishlists);
    }

    void fetchWishlists();
  }, []);

  if (loading) {
    return <Text>Loading...</Text>;
  }

  if (!wishlists) {
    return <NotFound />;
  }

  return (
    <Page title='Wishlists'>
      <Grid columns={250} rows="auto" spacing="base" blockAlignment="center">
        {wishlists.map((item) => {
          return (
            <GridItem columnSpan={1}>
              <ResourceItem
                to={`/wishlist/${item.id}`}
                key={item.id}
              >
                <BlockStack>
                  <Image
                    source={
                      item.items[0].productImage
                    }
                  />
                  <Text>{item.items[0].label}</Text>
                </BlockStack>
              </ResourceItem>
            </GridItem>
          );
        })}
      </Grid>
    </Page>
  );
}

function NotFound() {
  return (
    <BlockStack>
      <Heading>Resource Not found</Heading>
    </BlockStack>
  );
}
