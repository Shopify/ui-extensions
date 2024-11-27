import {
  reactExtension,
  useApi,
  Page,
  Button,
} from '@shopify/customer-account-ui-extensions-react';

export default reactExtension(
  'customer-account.page.render',
  () => <App />,
);

function App() {
  const { navigation } = useApi();

  return (
    <Page
      title="Wishlist"
      secondaryAction={
        <Button
          onPress={navigation.navigate(
            'shopify:customer-account/orders',
          )}
        >
          Back to orders index
        </Button>
      }
    >
      <p>Wishlist content</p>
    </Page>
  );
}
