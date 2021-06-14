import {render, Button, ButtonGroup} from '@shopify/argo-post-purchase-react';

render('Checkout::PostPurchase::Render', () => <App />);

function App() {
  return (
    <ButtonGroup>
      <Button>Cancel</Button>
      <Button>Continue</Button>
    </ButtonGroup>
  );
}
