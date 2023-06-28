import {render, Button} from '@shopify/checkout-ui-extensions-react';

render('Checkout::Dynamic::Render', () => <Extension />);

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
