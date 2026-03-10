import {
  reactExtension,
  Button,
} from '@shopify/ui-extensions-react/customer-account';

export default reactExtension(
  'customer-account.page.render',
  () => <Extension />,
);

function Extension() {
  return (
    <Button
      onPress={() => {
        console.log('onPress event');
      }}
    >
      Pay now
    </Button>
  );
}
