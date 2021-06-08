import {render, Bookend, TextField, Button} from '@shopify/argo-checkout-react';

render('Checkout::Feature::Render', () => <App />);

function App() {
  return (
    <Bookend trailing>
      <TextField label="Discount" />
      <Button plain>Apply</Button>
    </Bookend>
  );
}
