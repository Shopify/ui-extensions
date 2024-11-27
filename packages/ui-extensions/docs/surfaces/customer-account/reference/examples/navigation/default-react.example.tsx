import {
  reactExtension,
  useApi,
  Button,
} from '@shopify/ui-extensions-react/customer-account';

export default reactExtension(
  'customer-account.page.render',
  () => <App />,
);

function App() {
  const {navigation} = useApi();

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
