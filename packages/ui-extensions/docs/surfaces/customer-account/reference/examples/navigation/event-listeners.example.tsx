import React, {
  useEffect,
  useState,
  useCallback,
} from 'react';
import {
  reactExtension,
  useApi,
  BlockStack,
  Heading,
  Image,
  ResourceItem,
  Text,
} from '@shopify/ui-extensions-react/customer-account';
import type {NavigationCurrentEntryChangeEvent} from '@shopify/ui-extensions/customer-account';

export default reactExtension(
  'customer-account.page.render',
  () => <App />,
);

function App() {
  const {navigation} = useApi();

  const [currentEntryState, setCurrentEntry] =
    useState<NavigationCurrentEntryChangeEvent>();

  const updateCurrentEntryState = useCallback(
    (
      event: NavigationCurrentEntryChangeEvent,
    ) => {
      setCurrentEntry(event);
    },
    [],
  );
  useEffect(() => {
    navigation.addEventListener(
      'currententrychange',
      updateCurrentEntryState,
    );

    return () => {
      navigation.removeEventListener(
        'currententrychange',
        updateCurrentEntryState,
      );
    };
  }, [updateCurrentEntryState, navigation]);

  function getWishlistId(_url: string): string {
    throw new Error('Function not implemented.');
  }

  const wishlistIdPattern =
    /^extension:\/wishlists\/(\d+)$/;
  const wishlistDetailsMatch =
    navigation.currentEntry.url.match(
      wishlistIdPattern,
    );

  if (
    navigation.currentEntry.url === 'extension:/'
  ) {
    return <Wishlists />;
  } else if (wishlistDetailsMatch) {
    return (
      <WishlistDetails
        id={getWishlistId(
          wishlistDetailsMatch[1],
        )}
      />
    );
  } else {
    return <NotFound />;
  }
}

interface WishlistDetailsProps {
  id: string;
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
  const [wishlists, setWishlists] =
    useState<Wishlist[]>();

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
    <BlockStack>
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

function WishlistDetails({
  id,
}: WishlistDetailsProps) {
  const [wishlist, setWishlist] =
    useState<Wishlist>();

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
    <BlockStack>
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
