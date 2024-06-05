import {
  render,
  Page,
  Button,
} from '@shopify/customer-account-ui-extensions-react';

render('customer-account.page.render', (api) => (
  <App api={api} />
));

function App({api: {navigation}}) {
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
