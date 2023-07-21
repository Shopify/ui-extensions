import {
  reactExtension,
  Button,
} from '@shopify/ui-extensions-react/checkout';

export default reactExtension(
  'Checkout::Dynamic::Render',
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
