import {
  render,
  Bookend,
  TextField,
  Button,
} from '@shopify/checkout-ui-extensions-react';

render('Checkout::Dynamic::Render', () => <App />);

function App() {
  return (
    <Bookend trailing>
      <TextField label="Discount" />
      <Button plain>Apply</Button>
    </Bookend>
  );
}
