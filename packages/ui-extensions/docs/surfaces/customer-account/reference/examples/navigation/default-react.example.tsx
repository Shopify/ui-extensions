import {
  render,
  Button,
} from '@shopify/customer-account-ui-extensions-react';

render(
  'customer-account.page.render',
  (api) => <App api={api} />,
);

function App({api: {navigation}}) {
  return (
    <Button
      onPress={() => {
        navigation.navigate('extension://orders');
      }}
    >
      Navigate to orders path
    </Button>
  );
}
