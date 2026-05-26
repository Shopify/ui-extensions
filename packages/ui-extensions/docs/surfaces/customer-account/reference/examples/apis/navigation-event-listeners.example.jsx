import '@shopify/ui-extensions/preact';
import {render} from 'preact';
import {useState, useEffect} from 'preact/hooks';

export default async () => {
  render(<Extension />, document.body);
};

function Extension() {
  const [currentEntryUrl, setCurrentEntryUrl] =
    useState(navigation.currentEntry.url);

  useEffect(() => {
    function updateCurrentEntryUrl() {
      setCurrentEntryUrl(
        navigation.currentEntry.url,
      );
    }

    navigation.addEventListener(
      'currententrychange',
      updateCurrentEntryUrl,
    );
    return () =>
      navigation.removeEventListener(
        'currententrychange',
        updateCurrentEntryUrl,
      );
  }, []);

  if (currentEntryUrl === 'extension:/') {
    return <Wishlists />;
  } else if (
    currentEntryUrl.includes(
      'extension:/wishlist/',
    )
  ) {
    return <WishlistItemDetails />;
  } else {
    return <NotFound />;
  }
}

function Wishlists() {
  return (
    <s-page heading="Wishlist">
      <s-button
        slot="secondary-actions"
        href="extension:/wishlist/123"
      >
        Wishlist details
      </s-button>
      <s-text>Wishlist content</s-text>
    </s-page>
  );
}

function WishlistItemDetails() {
  return (
    <s-page heading="Wishlist item details">
      <s-button
        slot="breadcrumb-actions"
        accessibilityLabel="Back to wishlists"
        href="extension:/"
      ></s-button>
      <s-button
        slot="secondary-actions"
        href="extension:/"
      >
        Back to wishlists
      </s-button>
      <s-text>
        Wishlist item details content
      </s-text>
    </s-page>
  );
}

function NotFound() {
  return (
    <s-stack>
      <s-heading>Resource Not found</s-heading>
    </s-stack>
  );
}
