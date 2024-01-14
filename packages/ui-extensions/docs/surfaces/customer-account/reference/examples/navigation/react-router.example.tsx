import React, {useEffect, useState} from 'react';
import {
  render,
  BlockStack,
  Heading,
  Image,
  ResourceItem,
  Text,
} from '@shopify/ui-extensions-react/customer-account';
import {BrowserRouter, Routes, Route, useParams} from 'react-router-dom'

render('customer-account.page.render', (api) => (
  <App api={api} />
));

function App({api}) {
  return (
    <BrowserRouter window={self}>
      <Routes>
        <Route path="/" element={<Wishlists />} />
        <Route path="/wishlists/:id" element={<WishlistDetails />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  )
}

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
  >([]);

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
    <BlockStack spacing="base">
      {wishlists.map((item) => {
        return (
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
        );
      })}
    </BlockStack>
  );
}

function WishlistDetails() {
  const [wishlist, setWishlist] =
    useState<Wishlist>();

  const {id} = useParams();

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchWishlist() {
      setLoading(true);
      const response = await fetch(
        `https://your-backend.com/api/wishlists/${id}`,
      );
      const wishlist = await response.json();
      setLoading(false);
      setWishlist(wishlist);
    }

    void fetchWishlist();
  }, [id]);

  if (loading) {
    return <Text>Loading...</Text>;
  }

  if (!wishlist) {
    return <NotFound />;
  }

  return (
    <BlockStack spacing="base">
      {wishlist.items.map((item) => {
        return (
          <ResourceItem
            to={`/wishlist/${id}/${item.productId}`}
            key={item.productId}
          >
            <BlockStack>
              <Image source={item.productImage} />
              <Text>{item.label}</Text>
            </BlockStack>
          </ResourceItem>
        );
      })}
    </BlockStack>
  );
}

function NotFound() {
  return (
    <BlockStack>
      <Heading>Resource Not found</Heading>
    </BlockStack>
  );
}
