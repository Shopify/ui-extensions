import {render, Button, ButtonGroup} from '@shopify/post-purchase-ui-extensions-react';

render('Checkout::PostPurchase::Render', () => <App />);

function App() {
  return (
    <ButtonGroup>
      <Button>Cancel</Button>
      <Button>Continue</Button>
    </ButtonGroup>
  );
}
