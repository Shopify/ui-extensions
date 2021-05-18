import {render, Bookend, TextField, Button} from '@shopify/argo-checkout-react';

render('Checkout::Feature::Render', () => <App />);

function App() {
  return (
    <Bookend>
      <TextField label="Discount" />
      <Button>Submit</Button>
    </Bookend>
  );
}
