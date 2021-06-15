import {render, Bookend, TextField, Button} from '@shopify/post-purchase-ui-extensions-react';

render('Checkout::PostPurchase::Render', () => <App />);

function App() {
  return (
    <Bookend trailing>
      <TextField label="Discount" />
      <Button plain>Apply</Button>
    </Bookend>
  );
}
